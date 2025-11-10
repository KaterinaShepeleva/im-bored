import { makeAutoObservable, reaction } from 'mobx';
import { debounce } from '@mui/material/utils';

import { ActivityStore } from './ActivityStore';
import { type ApiParams } from 'constants/common.ts';
import { ActivityType } from 'constants/activityType.ts';
import {
  type ParticipantGroup,
  PARTICIPANT_GROUPS,
} from 'constants/participants.ts';
import {
  type ChallengeGroup,
  CHALLENGE_GROUPS,
} from 'constants/challenge.ts';

type ChallengeLevelMode = 'group' | 'precise';
type ChallengeLevelParam =
  { minaccessibility: number, maxaccessibility: number }
  | { accessibility: number };

export class FilterStore {
  // utility
  private activityStore: ActivityStore;
  private challengeLevelMode: ChallengeLevelMode = 'group';
  
  // UI filters
  type: ActivityType = ActivityType.Any;
  participants: ParticipantGroup = PARTICIPANT_GROUPS[0];
  challengeGroup: ChallengeGroup = CHALLENGE_GROUPS[0];
  challengeValue: number = 0;
  isPrecise: boolean = false;
  
  constructor(activityStore: ActivityStore) {
    this.activityStore = activityStore;
    const debouncedFetch = debounce(this.fetchActivity.bind(this), 300);
    
    makeAutoObservable(this, {}, { autoBind: true });
    
    reaction(
      () => ({ challengeValue: this.challengeValue }),
      debouncedFetch,
    );
    
    reaction(
      () => ({
        type: this.type,
        participants: this.participants,
        isPrecise: this.isPrecise,
        challengeGroup: this.challengeGroup,
      }),
      () => {
        this.fetchActivity();
      },
    );
  }
  
  buildParams() {
    let accessibilityParam: ChallengeLevelParam;
    
    if (this.challengeLevelMode === 'group') {
      accessibilityParam = {
        minaccessibility: this.challengeGroup.value[0] ?? 0,
        maxaccessibility: this.challengeGroup.value[1] ?? 1,
      };
    } else {
      accessibilityParam = {
        accessibility: this.challengeValue,
      };
    }
    
    const params: ApiParams = {
      ...accessibilityParam,
      type: this.type === ActivityType.Any ? null : this.type,
      participants: this.participants.value.length > 0 ? this.participants.value : null,
    };
    
    return params;
  }
  
  setType(newType: ActivityType) {
    this.type = newType;
  }
  
  setParticipants(group: ParticipantGroup) {
    this.participants = group;
  }
  
  setIsPrecise(isPrecise: boolean) {
    this.challengeLevelMode = isPrecise ? 'precise' : 'group';
    this.isPrecise = isPrecise;
  }
  
  setChallengeGroup(group: ChallengeGroup) {
    this.challengeGroup = group;
  }
  
  setChallengeValue(value: number) {
    this.challengeValue = value;
  }
  
  fetchActivity() {
    void this.activityStore.fetchActivity(this.buildParams());
  }
  
  resetFilters() {
    this.type = ActivityType.Any;
    this.participants = PARTICIPANT_GROUPS[0];
    this.challengeGroup = CHALLENGE_GROUPS[0];
    this.challengeValue = 0;
    this.isPrecise = false;
  }
}
