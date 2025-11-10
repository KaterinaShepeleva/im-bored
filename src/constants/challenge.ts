export const ChallengeLabel = {
  any: 'Any',
  easy: 'Easy',
  medium: 'Medium',
  challenging: 'Challenging',
  hard: 'Hard',
}

export type ChallengeGroup = {
  id: string;
  label: string;
  value: number[];
};

export const CHALLENGE_GROUPS: ChallengeGroup[] = [
  {
    id: 'any',
    label: ChallengeLabel.any,
    value: [],
  },
  {
    id: 'easy',
    label: ChallengeLabel.easy,
    value: [0, 0.3],
  },
  {
    id: 'medium',
    label: ChallengeLabel.medium,
    value: [0.4, 0.6],
  },
  {
    id: 'challenge',
    label: ChallengeLabel.challenging,
    value: [0.7, 0.8],
  },
  {
    id: 'hard',
    label: ChallengeLabel.hard,
    value: [0.9, 1],
  },
]
