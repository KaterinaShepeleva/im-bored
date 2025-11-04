import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { API_URL } from 'src/constants.ts';

const initial = '—';

const MAX = 8;
const MIN = 1;
const marks = [...Array(MAX).keys()].map(item => ({
  value: item + 1,
  label: '',
}));

const FilterByParticipants = () => {
  const [activity, setActivity] = useState<string>(initial);
  const [participantsNumber, setParticipantsNumber] = useState<number>(MIN);
  
  const handleChange = (_: Event, newValue: number) => {
    setParticipantsNumber(newValue);
  };
  
  const getActivityByParticipants = async (): Promise<void> => {
    const response = await axios.get(`${API_URL}?participants=${participantsNumber}`);
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
    <div>
      <fieldset>
        <legend>Filter By Participants</legend>
        
        <Box sx={{ width: 250, ml: '10px' }}>
          <Slider
            min={MIN}
            max={MAX}
            marks={marks}
            step={1}
            value={participantsNumber}
            valueLabelDisplay="auto"
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '-10px' }}>
            <Typography
              variant="body2"
              onClick={() => setParticipantsNumber(MIN)}
              sx={{ cursor: 'pointer' }}
            >
              {MIN} min
            </Typography>
            <Typography
              variant="body2"
              onClick={() => setParticipantsNumber(MAX)}
              sx={{ cursor: 'pointer' }}
            >
              {MAX} max
            </Typography>
          </Box>
        </Box>
        
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
          onClick={getActivityByParticipants}
        >
          Get Activity By Participants
        </Button>
      </fieldset>
    </div>
  );
};

export default FilterByParticipants;
