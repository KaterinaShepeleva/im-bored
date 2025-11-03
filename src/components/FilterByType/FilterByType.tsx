import { useState } from 'react';

import { API_URL, type UiFilterActivityItem, UiFilterActivityItems } from 'src/constants.ts';
import axios from 'axios';

const FilterByType = () => {
  const [activity, setActivity] = useState<string>('???');
  const [selectedType, setSelectedType] = useState<string>('');
  
  const radioItems = UiFilterActivityItems.map((item: UiFilterActivityItem) => (
    <div key={item.id}>
      <input
        type="radio"
        id={`item-${item.value}`}
        name="type"
        value={item.value}
        checked={selectedType === item.value}
        onChange={(e) => { setSelectedType(e.target.value) }}
      />
      <label htmlFor={`item-${item.value}`}>{item.name}</label>
    </div>
  ));
  
  const getActivityByType = async (): Promise<void> => {
    const response = await axios.get(`${API_URL}?type=${selectedType}`);
    
    setActivity(response.data?.activity ?? '???');
  }
  
  return (
    <div>
      <fieldset>
        <legend>Filter By Type</legend>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '10px' }}>
          {radioItems}
        </div>
        
        {activity?.length > 0 && (
          <div style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
            {activity}
          </div>
        )}
        
        <button
          type="button"
          style={{ marginBottom: '10px' }}
          onClick={getActivityByType}
        >
          Get Activity By Type
        </button>
      </fieldset>
    </div>
  );
};

export default FilterByType;