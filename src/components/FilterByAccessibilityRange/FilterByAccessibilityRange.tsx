import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { API_URL } from 'src/constants.ts';
import Slider from '@mui/material/Slider';

const initial = '—';

const MIN = 0.1;
const MAX = 1;
const marks = [...Array(MAX * 10).keys()].map(item => ({
  value: (item + 1) / 10,
  label: '',
}));

const FilterByAccessibilityRange = () => {
  const [activity, setActivity] = useState<string>(initial);
  const [accessibility, setAccessibility] = useState<number[]>([MIN, MAX]);
  
  const handleChange = (_: Event, newValue: number[]) => {
    setAccessibility(newValue);
  };
  
  const getActivityByAccessibilityRange = async (): Promise<void> => {
    // TODO: add inner validation (max value must not be less than min value)
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
  
  return (
    <fieldset>
      <legend>Filter By Accessibility Range</legend>
      
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
            sx={{ cursor: 'default' }}
          >
            {MIN} min
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: 'default' }}
          >
            {MAX} max
          </Typography>
        </Box>
      </Box>
      
      {/*
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="range"
          id="accessibility-min"
          min="0.1"
          max="1"
          step="0.1"
          value={accessibilityMin}
          onChange={(e) => setAccessibilityMin(Number(e.target.value))}
        />
        <label
          htmlFor="accessibility-max"
          style={{ marginLeft: '8px' }}
        >
          {accessibilityMin}
        </label>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="range"
          id="accessibility-max"
          min="0.1"
          max="1"
          step="0.1"
          value={accessibilityMax}
          onChange={(e) => setAccessibilityMax(Number(e.target.value))}
        />
        <label
          htmlFor="accessibility-max"
          style={{ marginLeft: '8px' }}
        >
          {accessibilityMax}
        </label>
      </div>
      */}
      
      <Box sx={{ m: '10px 0' }}>
        <Paper
          square={true}
          elevation={2}
          sx={{ p: '15px' }}
        >
          <Typography variant="body2">
            {activity}
          </Typography>
        </Paper>
      </Box>
      
      <Button
        variant="outlined"
        onClick={getActivityByAccessibilityRange}
      >
        Get Activity By Accessibility Range
      </Button>
    </fieldset>
  );
};

export default FilterByAccessibilityRange;
