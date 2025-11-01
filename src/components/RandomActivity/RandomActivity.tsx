import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { API_URL } from 'src/constants.ts';

const RandomActivity = () => {
  const [activity, setActivity] = useState('');
  
  const getRandomActivity = useCallback(async (): Promise<void> => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    
    setActivity(response.data?.activity ?? '-');
  }, []);
  
  useEffect(() => {
    getRandomActivity().catch(console.error);
  }, [getRandomActivity]);
  
  return (
    <>
      <div style={{ border: '1px solid red', padding: '10px' }}>
        {activity}
      </div>
      <button
        type="button"
        style={{ margin: '10px 0' }}
        onClick={getRandomActivity}
      >
        Get another idea
      </button>
    </>
  );
};

export default RandomActivity;
