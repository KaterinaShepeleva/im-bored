export type ParticipantGroup = {
  id: string;
  label: string;
  value: number[];
};

export const PARTICIPANT_GROUPS: ParticipantGroup[] = [
  {
    id: 'any',
    label: 'Any',
    value: [],
  },
  {
    id: 'solo',
    label: '1',
    value: [1],
  },
  {
    id: 'pair',
    label: '2',
    value: [2],
  },
  {
    id: 'small',
    label: '3–4',
    value: [3, 4],
  },
  {
    id: 'large',
    label: '5+',
    // No activities for 6 or 7 participants
    value: [5, 8],
  },
];
