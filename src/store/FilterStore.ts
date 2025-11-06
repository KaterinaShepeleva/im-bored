import { makeAutoObservable, reaction } from 'mobx';

import { ActivityStore } from './ActivityStore';
import {
  ActivityType,
  type ApiParams,
  type GroupValue,
} from 'src/constants.ts';

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
  participants: GroupValue = null;
  accessibilityGroup: GroupValue = null;
  accessibilityValue: number = 0;
  isPrecise: boolean = false;
  
  constructor(activityStore: ActivityStore) {
    this.activityStore = activityStore;
    
    makeAutoObservable(this, {}, { autoBind: true });
    
    reaction(
      () => ({
        type: this.type,
        participants: this.participants,
        isPrecise: this.isPrecise,
        accessibilityGroup: this.accessibilityGroup,
        accessibilityValue: this.accessibilityValue,
      }),
      () => {
        if (this.shouldSkipFetch) {
          this.shouldSkipFetch = false;
          return;
        }
        
        // TODO: add debounce for API calls
        void this.activityStore.fetchActivity(this.buildParams());
      },
    );
  }
  
  buildParams() {
    let accessParam: AccessibilityParam;
    
    if (this.accessibilityMode === 'group') {
      accessParam = {
        minaccessibility: this.accessibilityGroup?.[0] ?? 0,
        maxaccessibility: this.accessibilityGroup?.[1] ?? 1,
      };
    } else {
      accessParam = {
        accessibility: this.accessibilityValue,
      };
    }
    
    const params: ApiParams = {
      ...accessParam,
      type: this.type === ActivityType.Any ? null : this.type,
      participants: this.participants,
    };
    
    return params;
  }
  
  setType(newType: ActivityType) {
    if (newType === ActivityType.Any) {
      this.shouldSkipFetch = true;
    }
    
    this.type = newType;
  }
  
  setParticipants(group: GroupValue) {
    if (group === null) {
      this.shouldSkipFetch = true;
    }
    
    this.participants = group;
  }
  
  setIsPrecise(isPrecise: boolean) {
    this.accessibilityMode = isPrecise ? 'precise' : 'group';
    this.isPrecise = isPrecise;
  }
  
  setAccessibilityGroup(group: GroupValue) {
    if (group === null) {
      this.shouldSkipFetch = true;
    }
    
    this.accessibilityGroup = group;
  }
  
  setAccessibilityValue(value: number) {
    this.accessibilityValue = value;
  }
  
  resetFilters() {
    this.type = ActivityType.Any;
    this.participants = null;
    this.accessibilityGroup = null;
    this.accessibilityValue = 0;
    this.isPrecise = false;
  }
}
