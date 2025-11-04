import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const MIN = 0.1;
const MAX = 1;
const marks = [...Array(MAX * 10).keys()].map(item => ({
  value: (item + 1) / 10,
  label: '',
}));

const AccessibilityValue = () => {
  const [accessibility, setAccessibility] = useState<number>(MIN);
  
  const handleChange = (_: Event, newValue: number) => {
    setAccessibility(newValue);
  };
  
  return (
    <Box sx={{ width: 250, ml: '10px' }}>
      <Slider
        min={MIN}
        max={MAX}
        marks={marks}
        step={0.1}
        value={accessibility}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '-10px' }}>
        <Typography
          variant="body2"
          onClick={() => setAccessibility(MIN)}
          sx={{ cursor: 'pointer' }}
        >
          {MIN} min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setAccessibility(MAX)}
          sx={{ cursor: 'pointer' }}
        >
          {MAX} max
        </Typography>
      </Box>
    </Box>
  );
};

export default AccessibilityValue;
