import { makeAutoObservable, reaction } from 'mobx';
import { debounce } from '@mui/material/utils';

import { ActivityStore } from './ActivityStore';
import { type ApiParams } from 'src/constants.ts';
import { ActivityType } from 'constants/activityType.ts';
import {
  type ParticipantGroup,
  PARTICIPANT_GROUPS,
} from 'constants/participants.ts';
import {
  type AccessibilityGroup,
  ACCESSIBILITY_GROUPS,
} from 'constants/accessibilityValues.ts';

type AccessibilityMode = 'group' | 'precise';
type AccessibilityParam =
  { minaccessibility: number, maxaccessibility: number }
  | { accessibility: number };

export class FilterStore {
  // utility
  private activityStore: ActivityStore;
  private accessibilityMode: AccessibilityMode = 'group';
  shouldSkipFetch = false;
  
  // UI filters
  type: ActivityType = ActivityType.Any;
  participants: ParticipantGroup = PARTICIPANT_GROUPS[0];
  accessibilityGroup: AccessibilityGroup = ACCESSIBILITY_GROUPS[0];
  accessibilityValue: number = 0;
  isPrecise: boolean = false;
  
  constructor(activityStore: ActivityStore) {
    this.activityStore = activityStore;
    const debouncedFetch = debounce(this.fetchActivity.bind(this), 300);
    
    makeAutoObservable(this, {}, { autoBind: true });
    
    reaction(
      () => ({ accessibilityValue: this.accessibilityValue }),
      debouncedFetch,
    );
    
    reaction(
      () => ({
        type: this.type,
        participants: this.participants,
        isPrecise: this.isPrecise,
        accessibilityGroup: this.accessibilityGroup,
      }),
      () => {
        if (this.shouldSkipFetch) {
          this.shouldSkipFetch = false;
          return;
        }
        
        this.fetchActivity();
      },
    );
  }
  
  buildParams() {
    let accessParam: AccessibilityParam;
    
    if (this.accessibilityMode === 'group') {
      accessParam = {
        minaccessibility: this.accessibilityGroup.value[0] ?? 0,
        maxaccessibility: this.accessibilityGroup.value[1] ?? 1,
      };
    } else {
      accessParam = {
        accessibility: this.accessibilityValue,
      };
    }
    
    const params: ApiParams = {
      ...accessParam,
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
    this.accessibilityMode = isPrecise ? 'precise' : 'group';
    this.isPrecise = isPrecise;
  }
  
  setAccessibilityGroup(group: AccessibilityGroup) {
    this.accessibilityGroup = group;
  }
  
  setAccessibilityValue(value: number) {
    this.accessibilityValue = value;
  }
  
  fetchActivity() {
    void this.activityStore.fetchActivity(this.buildParams());
  }
  
  resetFilters() {
    this.type = ActivityType.Any;
    this.participants = PARTICIPANT_GROUPS[0];
    this.accessibilityGroup = ACCESSIBILITY_GROUPS[0];
    this.accessibilityValue = 0;
    this.isPrecise = false;
  }
}
