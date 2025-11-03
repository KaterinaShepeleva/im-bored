import { useState } from 'react';
import axios from 'axios';

import { API_URL } from 'src/constants.ts';

const FilterByAccessibilityRange = () => {
  const [activity, setActivity] = useState<string>('???');
  const [accessibilityMin, setAccessibilityMin] = useState<number>(0.1);
  const [accessibilityMax, setAccessibilityMax] = useState<number>(1);
  
  const getActivityByAccessibilityRange = async (): Promise<void> => {
    // TODO: add inner validation (max value must not be less than min value)
    const response = await axios.get(
      `${API_URL}?minaccessibility=${accessibilityMin}&maxaccessibility=${accessibilityMax}`
    );
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
      <legend>Filter By Accessibility Range</legend>
      
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
      
      {activity?.length > 0 && (
        <div style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
          {activity}
        </div>
      )}
      
      <button
        type="button"
        style={{ marginBottom: '10px' }}
        onClick={getActivityByAccessibilityRange}
      >
        Get Activity By Accessibility Range
      </button>
    </fieldset>
  );
};

export default FilterByAccessibilityRange;
