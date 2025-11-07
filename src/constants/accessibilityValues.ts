export const AccessibilityLabel = {
  any: 'Any',
  easy: 'Easy',
  medium: 'Medium',
  challenging: 'Challenging',
  hard: 'Hard',
}

export type AccessibilityGroup = {
  id: string;
  label: string;
  value: number[];
};

export const ACCESSIBILITY_GROUPS: AccessibilityGroup[] = [
  {
    id: 'any',
    label: AccessibilityLabel.any,
    value: [],
  },
  {
    id: 'easy',
    label: AccessibilityLabel.easy,
    value: [0, 0.3],
  },
  {
    id: 'medium',
    label: AccessibilityLabel.medium,
    value: [0.4, 0.6],
  },
  {
    id: 'challenge',
    label: AccessibilityLabel.challenging,
    value: [0.7, 0.8],
  },
  {
    id: 'hard',
    label: AccessibilityLabel.hard,
    value: [0.9, 1],
  },
]
