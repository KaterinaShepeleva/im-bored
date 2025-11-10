import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

import {
  API_URL,
  type Activity,
  type ApiParams,
} from 'constants/common.ts';
import { ActivityType } from 'constants/activityType.ts';

type ActivityError = { error: string };
type ActivityResponse = Activity | ActivityError;

export class ActivityStore {
  // activity properties
  key: string = '1000000';
  activity: string = '';
  type: ActivityType = ActivityType.Any;
  participants: number = 0;
  accessibility: number = 0;
  
  // UI data
  isLoading: boolean = false;
  activityError: boolean = false;
  
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    void this.fetchActivity();
  }
  
  async fetchActivity(params: ApiParams = {}): Promise<void> {
    this.isLoading = true;
    
    try {
      const response = await axios.get<ActivityResponse>(API_URL, { params });
      const { data } = response;
      console.log('response data', data);
      
      if ('error' in data) {
        runInAction(() => {
          this.activityError = true;
        });
      } else {
        runInAction(() => {
          this.key = data.key;
          this.activity = data.activity;
          this.type = data.type as ActivityType;
          this.participants = data.participants;
          this.accessibility = data.accessibility;
          this.activityError = false;
        });
      }
    } catch (error) {
      console.error('Failed to fetch activity:', error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
