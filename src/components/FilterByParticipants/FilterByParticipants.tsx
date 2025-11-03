import { useState } from 'react';
import axios from 'axios';

import { API_URL } from 'src/constants.ts';

const FilterByParticipants = () => {
  const [activity, setActivity] = useState<string>('???');
  const [participantsNumber, setParticipantsNumber] = useState<number>(1);
  
  const getActivityByParticipants = async (): Promise<void> => {
    const response = await axios.get(`${API_URL}?participants=${participantsNumber}`);
    let activity = '???';
    
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
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="range"
            id="participants"
            min="1"
            max="8"
            value={participantsNumber}
            onChange={(e) => setParticipantsNumber(Number(e.target.value))}
          />
          <label
            htmlFor="participants"
            style={{ marginLeft: '8px' }}
          >
            {participantsNumber}
          </label>
        </div>
        
        {activity?.length > 0 && (
          <div style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
            {activity}
          </div>
        )}
        
        <button
          type="button"
          style={{ marginBottom: '10px' }}
          onClick={getActivityByParticipants}
        >
          Get Activity By Participants
        </button>
      </fieldset>
    </div>
  );
};

export default FilterByParticipants;
