import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import {
  type AccessibilityGroup,
  ACCESSIBILITY_GROUPS,
} from 'constants/accessibilityValues.ts';
import { filterStore } from 'store/root.ts';

const AccessibilityRange = observer(() => {
  const { accessibilityGroup, setAccessibilityGroup } = filterStore;
  
  const handleClick = (newGroup: AccessibilityGroup) => {
    // prevent Chip from deselecting
    if (newGroup.id == accessibilityGroup.id) {
      return;
    }
    
    setAccessibilityGroup(newGroup);
  };
  
  return (
    <Box sx={{ display: 'flex', gap: 1, m: '10px 0' }}>
      {ACCESSIBILITY_GROUPS.map((group) => (
        <Chip
          key={group.id}
          color={group.id === accessibilityGroup.id ? 'primary' : 'default'}
          variant={group.id === accessibilityGroup.id ? 'filled' : 'outlined'}
          label={group.label}
          onClick={() => handleClick(group)}
          sx={{ minWidth: '60px' }}
        />
      ))}
    </Box>
  );
});

export default AccessibilityRange;
