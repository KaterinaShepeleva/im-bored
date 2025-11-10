import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import {
  type ChallengeGroup,
  CHALLENGE_GROUPS,
} from 'constants/challenge.ts';
import { filterStore } from 'store/root.ts';

const ChallengeGroups = observer(() => {
  const { challengeGroup, setChallengeGroup } = filterStore;
  
  const handleClick = (newGroup: ChallengeGroup) => {
    // prevent Chip from deselecting
    if (newGroup.id == challengeGroup.id) {
      return;
    }
    
    setChallengeGroup(newGroup);
  };
  
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      pt: 1,
      pb: 1,
    }}>
      {CHALLENGE_GROUPS.map((group) => (
        <Chip
          key={group.id}
          color="primary"
          variant={group.id === challengeGroup.id ? 'filled' : 'outlined'}
          label={group.label}
          onClick={() => handleClick(group)}
          sx={{ minWidth: '60px' }}
        />
      ))}
    </Box>
  );
});

export default ChallengeGroups;
