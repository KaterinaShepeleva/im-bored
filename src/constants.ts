export const API_URL = 'https://apis.scrimba.com/bored/api/activity';

export interface ActivityItem {
  key: string;
  activity: string;
  type: string;
  participants: number;
  price: number;
  accessibility: number;
}
