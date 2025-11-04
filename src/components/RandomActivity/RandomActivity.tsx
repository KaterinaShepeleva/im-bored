import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

import { API_URL } from 'src/constants.ts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const RandomActivity = () => {
  const [activity, setActivity] = useState('');
  
  const getRandomActivity = useCallback(async (): Promise<void> => {
    const response = await axios.get(API_URL);
    
    setActivity(response.data?.activity ?? '-');
  }, []);
  
  useEffect(() => {
    getRandomActivity().catch(console.error);
  }, [getRandomActivity]);
  
  return (
    <fieldset>
      <legend>Random Activity</legend>
      
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
        variant="contained"
        onClick={getRandomActivity}
      >
        Get another idea
      </Button>
    </fieldset>
  );
};

export default RandomActivity;
