import { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { UiAccessibilityGroups } from 'src/constants.ts';

const AccessibilityRange = () => {
  const [groupIndex, setGroupIndex] = useState(UiAccessibilityGroups[0].id);
  
  const handleClick = (newIndex: number) => {
    if (newIndex == null) {
      return;
    }
    
    setGroupIndex(newIndex);
  };
  
  return (
    <Box sx={{ display: 'flex', gap: 1, m: '10px 0' }}>
      {UiAccessibilityGroups.map((group, index) => (
        <Chip
          key={group.id}
          color={groupIndex === index ? 'primary' : 'default'}
          variant={groupIndex === index ? 'filled' : 'outlined'}
          label={group.label}
          onClick={() => handleClick(index)}
          sx={{ minWidth: '60px' }}
        />
      ))}
    </Box>
  );
};

export default AccessibilityRange;
