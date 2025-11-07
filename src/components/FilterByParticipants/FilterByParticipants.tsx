import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import {
  type ParticipantGroup,
  PARTICIPANT_GROUPS,
} from 'constants/participants.ts';
import { filterStore } from 'store/root.ts';

const FilterByParticipants = observer(() => {
  const { participants, setParticipants } = filterStore;
  
  const handleClick = (newGroup: ParticipantGroup) => {
    // prevent Chip from deselecting
    if (newGroup.id == participants.id) {
      return;
    }
    
    setParticipants(newGroup);
  };
  
  return (
    <div>
      <Typography variant="body2" sx={{ margin: '10px 0' }}>Group size</Typography>
      
      <Box sx={{ display: 'flex', gap: 1 }}>
        {PARTICIPANT_GROUPS.map((group) => (
          <Chip
            key={group.id}
            color={group.id === participants.id ? 'primary' : 'default'}
            variant={group.id === participants.id ? 'filled' : 'outlined'}
            label={group.label}
            onClick={() => handleClick(group)}
            sx={{ minWidth: '60px' }}
          />
        ))}
      </Box>
    </div>
  );
});

export default FilterByParticipants;
