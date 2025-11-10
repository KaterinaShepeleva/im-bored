import { ChallengeLabel } from 'constants/challenge.ts';

type ChallengeLabelKeys = keyof typeof ChallengeLabel;
type ChallengeLabelValues = typeof ChallengeLabel[ChallengeLabelKeys]

export const getChallengeLabel = (challenge: number): ChallengeLabelValues => {
  if (challenge == null || challenge < 0 || challenge > 1) {
    return ChallengeLabel.any;
  }
  
  if (challenge >= 0 && challenge <= 0.3) {
    return ChallengeLabel.easy;
  }
  
  if (challenge >= 0.4 && challenge <= 0.6) {
    return ChallengeLabel.medium;
  }
  
  if (challenge >= 0.7 && challenge <= 0.8) {
    return ChallengeLabel.challenging;
  }
  
  if (challenge >= 0.9 && challenge <= 1) {
    return ChallengeLabel.hard;
  }
  
  return ChallengeLabel.any;
};
