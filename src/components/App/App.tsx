// import { useCallback, useEffect, useState } from 'react';
// import axios from 'axios';
import Button from '@mui/material/Button';

import './App.css';
import { activityStore } from 'store/ActivityStore.ts';
import ActivityCard from 'components/ActivityCard/ActivityCard.tsx';
import FilterByType from 'components/FilterByType/FilterByType.tsx';
import FilterByParticipants from 'components/FilterByParticipants/FilterByParticipants.tsx';
import FilterByAccessibility from 'components/FilterByAccessibility/FilterByAccessibility.tsx';

/*
const initialState: ActivityItem = {
  key: '1000000',
  activity: '—',
  type: ActivityType.Any,
  participants: 1,
  accessibility: 0.1,
}
 */

function App() {
  // const [activity, setActivity] = useState<ActivityItem>(initialState);
  const { fetchActivity } = activityStore;
  
  /*
  const getRandomActivity = useCallback(async (): Promise<void> => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    
    setActivity(response.data ?? { ...initialState });
  }, []);
  
  useEffect(() => {
    getRandomActivity().catch(console.error);
  }, [getRandomActivity]);
   */
  
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>
        If I'm Bored
      </h1>
      
      <FilterByType/>
      <br/>
      
      <FilterByParticipants/>
      <br/>
      
      <FilterByAccessibility/>
      
      <Button
        variant="contained"
        onClick={fetchActivity}
        sx={{ m: '20px 0 10px' }}
      >
        Get another idea
      </Button>
      
      <ActivityCard/>
    </>
  );
}

export default App;
