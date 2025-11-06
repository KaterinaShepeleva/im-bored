import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import {
  type GroupValue,
  UiParticipantGroups,
} from 'src/constants.ts';
import { filterStore } from 'store/root.ts';

const FilterByParticipants = () => {
  const [groupIndex, setGroupIndex] = useState<number>(UiParticipantGroups[0].id);
  
  const handleClick = (newGroup: GroupValue, newIndex: number) => {
    // prevent Chip from deselecting
    if (newIndex == null) {
      return;
    }
    
    setGroupIndex(newIndex);
    filterStore.setParticipants(newGroup);
  };
  
  return (
    <div>
      <Typography variant="body2" sx={{ margin: '10px 0' }}>Group size</Typography>
      
      <Box sx={{ display: 'flex', gap: 1 }}>
        {UiParticipantGroups.map((group, index) => (
          <Chip
            key={group.id}
            color={groupIndex === index ? 'primary' : 'default'}
            variant={groupIndex === index ? 'filled' : 'outlined'}
            label={group.label}
            onClick={() => handleClick(group.value, index)}
            sx={{ minWidth: '60px' }}
          />
        ))}
      </Box>
    </div>
  );
};

export default FilterByParticipants;
