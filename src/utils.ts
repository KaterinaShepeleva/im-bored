import { AccessibilityLabel } from 'constants/accessibilityValues.ts';

type AccessibilityKeys = keyof typeof AccessibilityLabel;
type AccessibilityValues = typeof AccessibilityLabel[AccessibilityKeys]

export const getAccessibilityLabel = (accessibility: number): AccessibilityValues => {
  if (accessibility == null || accessibility < 0 || accessibility > 1) {
    return AccessibilityLabel.any;
  }
  
  if (accessibility >= 0 && accessibility <= 0.3) {
    return AccessibilityLabel.easy;
  }
  
  if (accessibility >= 0.4 && accessibility <= 0.6) {
    return AccessibilityLabel.medium;
  }
  
  if (accessibility >= 0.7 && accessibility <= 0.8) {
    return AccessibilityLabel.challenging;
  }
  
  if (accessibility >= 0.9 && accessibility <= 1) {
    return AccessibilityLabel.hard;
  }
  
  return AccessibilityLabel.any;
};
