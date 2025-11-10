import { observer} from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { filterStore } from 'store/root.ts';

const MIN = 0;
const MAX = 1;
const STEP = 0.05;

const AccessibilityValue = observer(() => {
  const { accessibilityValue, setAccessibilityValue } = filterStore;
  
  const handleChange = (_: Event, newValue: number) => {
    setAccessibilityValue(newValue);
  };
  
  const tipStyle = {
    cursor: 'pointer',
    pl: 1,
    pr: 1,
    color: 'text.secondary',
    userSelect: 'none',
  };
  
  return (
    <Box sx={{ width: 300, ml: '10px', pb: '2px' }}>
      <Slider
        min={MIN}
        max={MAX}
        marks={true}
        step={STEP}
        value={accessibilityValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '-10px' }}>
        <Typography
          variant="body2"
          onClick={() => setAccessibilityValue(MIN)}
          sx={{ ...tipStyle, ml: -1 }}
        >
          {MIN} – easy
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setAccessibilityValue(MAX)}
          sx={{ ...tipStyle, mr: -1 }}
        >
          hard – {MAX}
        </Typography>
      </Box>
    </Box>
  );
});

export default AccessibilityValue;
