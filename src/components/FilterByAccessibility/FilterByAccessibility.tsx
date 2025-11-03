import { useState } from 'react';
import axios from 'axios';
import { API_URL } from 'src/constants.ts';

const FilterByAccessibility = () => {
  const [activity, setActivity] = useState<string>('???');
  const [accessibility, setAccessibility] = useState<number>(0.1);
  
  const getActivityByAccessibilityValue = async (): Promise<void> => {
    const response = await axios.get(`${API_URL}?accessibility=${accessibility}`);
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
    <fieldset>
      <legend>Filter By Accessibility Value</legend>
      
      <div>
        <input
          type="range"
          id="accessibility-value"
          min="0.1"
          max="1"
          step="0.1"
          value={accessibility}
          onChange={(e) => setAccessibility(Number(e.target.value))}
        />
        <label
          htmlFor="accessibility-value"
          style={{ marginLeft: '8px' }}
        >
          {accessibility}
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
        onClick={getActivityByAccessibilityValue}
      >
        Get Activity By Accessibility Value
      </button>
    </fieldset>
  );
};

export default FilterByAccessibility;
