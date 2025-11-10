import { ActivityType } from 'constants/activityType.ts';

export const API_URL = 'https://apis.scrimba.com/bored/api/activity';

/**
 * Interface for the activity
 */
export type Activity = {
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
  type: ActivityType,
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

type ApiParamValue = string | number | number[] | null;
export type ApiParams = Record<string, ApiParamValue>;
