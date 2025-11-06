import { makeAutoObservable, reaction } from 'mobx';

import { ActivityStore } from './ActivityStore';
import {
  ActivityType,
  type ApiParams,
} from 'src/constants.ts';

export class FilterStore {
  // utility
  private activityStore: ActivityStore;
  
  // UI filters
  type: ActivityType = ActivityType.Any;
  participants: number[] | null = null;
  accessibilityGroup: number[] | null = null;
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
        if (this.shouldSkipFetch()) {
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
    };
    
    return params;
  }
  
  shouldSkipFetch(): boolean {
    if (
      // check filters reset
      this.type === ActivityType.Any
    ) {
      return true;
    }
    
    return false;
  }
  
  setType(newType: ActivityType) {
    this.type = newType;
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
