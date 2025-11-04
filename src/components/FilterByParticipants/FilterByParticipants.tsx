import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import {
  API_URL,
  UiParticipantGroups,
} from 'src/constants.ts';

const initial = '—';

const FilterByParticipants = () => {
  const [activity, setActivity] = useState<string>(initial);
  const [activityParticipants, setActivityParticipants] = useState<number>(1);
  const [groupIndex, setGroupIndex] = useState<number>(UiParticipantGroups[0].id);
  
  const handleClick = (newIndex: number) => {
    if (newIndex == null) {
      return;
    }
    
    setGroupIndex(newIndex);
  };
  
  const getActivityByParticipants = async (): Promise<void> => {
    const response = await axios.get(`${API_URL}?${UiParticipantGroups[groupIndex].url}`);
    const participants = 1;
    let activity = initial;
    
    // TODO: save data.error as content error (in separate variable) and change its displayed style
    if (response.data?.activity) {
      activity = response.data.activity;
    } else if (response.data?.error) {
      activity = response.data.error;
    }
    
    setActivity(activity);
    setActivityParticipants(response.data?.participants ?? participants);
  };
  
  return (
    <div>
      <fieldset>
        <legend>Filter By Participants</legend>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          {UiParticipantGroups.map((group, index) => (
            <Chip
              color={groupIndex === group.id ? 'primary' : 'default'}
              variant={groupIndex === index ? 'filled' : 'outlined'}
              label={group.label}
              onClick={() => handleClick(index)}
              sx={{ minWidth: '60px' }}
            />
          ))}
        </Box>
        
        <Box sx={{ m: '10px 0' }}>
          <Paper
            square={true}
            elevation={2}
            sx={{ p: '15px' }}
          >
            <Typography variant="body2">{activity}</Typography>
            <Typography variant="body2">Participants: {activityParticipants}</Typography>
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
