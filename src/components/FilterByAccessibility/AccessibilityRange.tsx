import { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { UiAccessibilityGroups } from 'src/constants.ts';

// const initial = '—';

/*
const MIN = 0.1;
const MAX = 1;
const marks = [...Array(MAX * 10).keys()].map(item => ({
  value: (item + 1) / 10,
  label: '',
}));
 */

const AccessibilityRange = () => {
  // const [activity, setActivity] = useState<string>(initial);
  // const [accessibility, setAccessibility] = useState<number[]>([MIN, MAX]);
  const [groupIndex, setGroupIndex] = useState(UiAccessibilityGroups[0].id);
  
  const handleClick = (newIndex: number) => {
    if (newIndex == null) {
      return;
    }
    
    setGroupIndex(newIndex);
  };
  
  /*
  const getActivityByAccessibilityRange = async (): Promise<void> => {
    const response = await axios.get(
      `${API_URL}?minaccessibility=${accessibility[0]}&maxaccessibility=${accessibility[1]}`
    );
    let activity = initial;
    
    // TODO: save data.error as content error (in separate variable) and change its displayed style
    if (response.data?.activity) {
      activity = response.data.activity;
    } else if (response.data?.error) {
      activity = response.data.error;
    }
    
    setActivity(activity);
  };
   */
  
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
