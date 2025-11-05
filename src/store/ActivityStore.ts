import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

import {
  API_URL,
  type ActivityItem,
  ActivityType,
} from 'src/constants.ts';

// type ActivityResponseError = {
//   error: string,
// }

// type ActivityResponse = ActivityItem | ActivityResponseError;

class ActivityStore {
  key: string = '1000000';
  activity: string = '';
  type: ActivityType = ActivityType.Any;
  participants: number = 0;
  accessibility: number = 0;
  isLoading: boolean = false;
  activityError: string | null = null;
  
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    void this.fetchActivity();
  }
  
  async fetchActivity(): Promise<void> {
    this.isLoading = true;
    
    try {
      const response = await axios.get<ActivityItem>(API_URL);
      
      // TODO: response validation
      const data: ActivityItem = response.data;
      console.log('response data', response.data);
      
      runInAction(() => {
        this.key = data.key;
        this.activity = data.activity;
        this.type = data.type as ActivityType;
        this.participants = data.participants;
        this.accessibility = data.accessibility;
      });
      
      // if (response.error) {
      //   this.activityError = response.error;
      // }
    } catch (error) {
      console.error('Failed to fetch activity:', error);
    } finally {
      this.isLoading = false;
    }
  }
}

export const activityStore = new ActivityStore();
