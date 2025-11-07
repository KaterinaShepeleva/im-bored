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

export type ActivityTypeOption = {
  id: string,
  name: string,
  value: ActivityType,
}

export const TYPE_OPTIONS: ActivityTypeOption[] = [
  {
    id: 'any',
    name: '',
    value: ActivityType.Any,
  },
  {
    id: 'education',
    name: 'Education',
    value: ActivityType.Education,
  },
  {
    id: 'recreational',
    name: 'Recreational',
    value: ActivityType.Recreational,
  },
  {
    id: 'social',
    name: 'Social',
    value: ActivityType.Social,
  },
  {
    id: 'diy',
    name: 'Hobby & Craft',
    value: ActivityType.Diy,
  },
  {
    id: 'charity',
    name: 'Charity',
    value: ActivityType.Charity,
  },
  {
    id: 'cooking',
    name: 'Cooking',
    value: ActivityType.Cooking,
  },
  {
    id: 'relax',
    name: 'Relaxation',
    value: ActivityType.Relaxation,
  },
  {
    id: 'music',
    name: 'Music',
    value: ActivityType.Music,
  },
  {
    id: 'busywork',
    name: 'Busywork',
    value: ActivityType.Busywork,
  },
];
