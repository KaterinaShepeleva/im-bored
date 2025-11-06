import { makeAutoObservable, reaction } from 'mobx';

import { ActivityStore } from './ActivityStore';
import {
  ActivityType,
  type ApiParams,
  type UiGroupValue,
} from 'src/constants.ts';

export class FilterStore {
  // utility
  private activityStore: ActivityStore;
  shouldSkipFetch = false;
  
  // UI filters
  type: ActivityType = ActivityType.Any;
  participants: UiGroupValue = null;
  accessibilityGroup: UiGroupValue = null;
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
    const params: ApiParams = {
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
  
  setParticipants(group: UiGroupValue) {
    if (group === null) {
      this.shouldSkipFetch = true;
    }
    
    this.participants = group;
  }
  
  // TODO: add UI btn for filters reset
  resetFilters() {
    this.type = ActivityType.Any;
    this.participants = null;
    this.accessibilityGroup = null;
    this.accessibilityValue = 0;
    this.isPrecise = false;
  }
}
