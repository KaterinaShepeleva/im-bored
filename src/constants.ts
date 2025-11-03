export const API_URL = 'https://apis.scrimba.com/bored/api/activity';

/**
 * Interface of the activity
 */
export type ActivityItem = {
  /**
   * A unique numeric id.
   * [1000000, 9999999]
   */
  key: string,
  /**
   * Description of the queried activity
   */
  activity: string,
  /**
   * Type of the activity
   */
  type: string,
  /**
   * The number of people that this activity could involve.
   * [0, n]
   */
  participants: number,
  /**
   * A factor describing how possible an event is to do with zero being the most accessible.
   * [0.0, 1.0]
   */
  accessibility: number,
}

export enum ActivityType {
  Education = 'education',
  Recreational = 'recreational',
  Social = 'social',
  Diy = 'diy',
  Charity = 'charity',
  Cooking = 'cooking',
  Relaxation = 'relaxation',
  Music = 'music',
  Busywork = 'busywork',
}

export type UiFilterActivityItem = {
  id: number,
  name: string,
  value: ActivityType,
}

export const UiFilterActivityItems: UiFilterActivityItem[] = [
  {
    id: 0,
    name: 'Education',
    value: ActivityType.Education,
  },
  {
    id: 1,
    name: 'Recreational',
    value: ActivityType.Recreational,
  },
  {
    id: 2,
    name: 'Social',
    value: ActivityType.Social,
  },
  {
    id: 3,
    name: 'Hobby & Craft',
    value: ActivityType.Diy,
  },
  {
    id: 4,
    name: 'Charity',
    value: ActivityType.Charity,
  },
  {
    id: 5,
    name: 'Cooking',
    value: ActivityType.Cooking,
  },
  {
    id: 6,
    name: 'Relaxation',
    value: ActivityType.Relaxation,
  },
  {
    id: 7,
    name: 'Music',
    value: ActivityType.Music,
  },
  {
    id: 8,
    name: 'Busywork',
    value: ActivityType.Busywork,
  },
];
