import { ActivityStore } from "./ActivityStore";
import { FilterStore } from "./FilterStore";

export const activityStore = new ActivityStore();

// connect these stores to use activityStore inside filterStore
export const filterStore = new FilterStore(activityStore);

export const rootStore = {
  activityStore,
  filterStore,
};
