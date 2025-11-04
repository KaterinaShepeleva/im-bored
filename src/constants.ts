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

export enum ActivityType {
  Any = '',
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

// TODO: generate UiFilterActivityItems, not hardcode
export const UiFilterActivityItems: UiFilterActivityItem[] = [
  {
    id: 0,
    name: '',
    value: ActivityType.Any,
  },
  {
    id: 1,
    name: 'Education',
    value: ActivityType.Education,
  },
  {
    id: 2,
    name: 'Recreational',
    value: ActivityType.Recreational,
  },
  {
    id: 3,
    name: 'Social',
    value: ActivityType.Social,
  },
  {
    id: 4,
    name: 'Hobby & Craft',
    value: ActivityType.Diy,
  },
  {
    id: 5,
    name: 'Charity',
    value: ActivityType.Charity,
  },
  {
    id: 6,
    name: 'Cooking',
    value: ActivityType.Cooking,
  },
  {
    id: 7,
    name: 'Relaxation',
    value: ActivityType.Relaxation,
  },
  {
    id: 8,
    name: 'Music',
    value: ActivityType.Music,
  },
  {
    id: 9,
    name: 'Busywork',
    value: ActivityType.Busywork,
  },
];

export type UiChipGroup = {
  id: number,
  label: string,
  url: string,
}

export const UiParticipantGroups: UiChipGroup[] = [
  {
    id: 0,
    label: 'Any',
    url: '',
  },
  {
    id: 1,
    label: '1',
    url: 'participants=1',
  },
  {
    id: 2,
    label: '2',
    url: 'participants=2',
  },
  {
    id: 3,
    label: '3–4',
    url: 'participants=3&participants=4',
  },
  {
    id: 4,
    label: '5+',
    // No activities for 6 or 7 participants
    url: 'participants=5&participants=8',
  },
];

export const AccessibilityLabel = {
  any: 'Any',
  easy: 'Easy',
  medium: 'Medium',
  challenging: 'Challenging',
  hard: 'Hard',
}

export const UiAccessibilityGroups: UiChipGroup[] = [
  {
    id: 0,
    label: AccessibilityLabel.any,
    url: '',
  },
  {
    id: 1,
    label: AccessibilityLabel.easy,
    url: 'minaccessibility=0&maxaccessibility=0.3',
  },
  {
    id: 2,
    label: AccessibilityLabel.medium,
    url: 'minaccessibility=0.4&maxaccessibility=0.6',
  },
  {
    id: 3,
    label: AccessibilityLabel.challenging,
    url: 'minaccessibility=0.7&maxaccessibility=0.8',
  },
  {
    id: 4,
    label: AccessibilityLabel.hard,
    url: 'minaccessibility=0.9&maxaccessibility=1',
  },
]
