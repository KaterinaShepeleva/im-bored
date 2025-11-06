import { useState } from 'react';
import { observer} from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import {
  type GroupValue,
  UiAccessibilityGroups,
} from 'src/constants.ts';
import { filterStore } from 'store/root.ts';

const AccessibilityRange = observer(() => {
  const [groupIndex, setGroupIndex] = useState<number>(UiAccessibilityGroups[0].id);
  
  const handleClick = (newGroup: GroupValue, newIndex: number) => {
    // prevent Chip from deselecting
    if (newIndex == null) {
      return;
    }
    
    setGroupIndex(newIndex);
    filterStore.setAccessibilityGroup(newGroup);
  };
  
  return (
    <Box sx={{ display: 'flex', gap: 1, m: '10px 0' }}>
      {UiAccessibilityGroups.map((group, index) => (
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
  );
});

export default AccessibilityRange;
