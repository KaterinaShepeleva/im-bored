import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

import {
  type UiFilterActivityItem,
  UiFilterActivityItems,
} from 'src/constants.ts';

// const initial = '—';

const FilterByType = () => {
  // const [activity, setActivity] = useState<string>(initial);
  const [selectedType, setSelectedType] = useState<string>('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
  };
  
  /*
  const getActivityByType = async (): Promise<void> => {
    if (!selectedType) {
      setActivity(initial);
      return;
    }
    
    const response = await axios.get(`${API_URL}?type=${selectedType}`);
    
    setActivity(response.data?.activity ?? initial);
  }
   */
  
  return (
    <div>
      <FormControl
        fullWidth={true}
        variant="filled"
      >
        <InputLabel id="activity-type-select-label">Activity type</InputLabel>
        <Select
          labelId="activity-type-select-label"
          id="activity-type-select"
          label="Activity type"
          value={selectedType}
          onChange={handleChange}
        >
          <MenuItem value="">
            <i>Activity Type</i>
          </MenuItem>
          
          {UiFilterActivityItems.map((item: UiFilterActivityItem) => (
            <MenuItem
              key={item.id}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterByType;