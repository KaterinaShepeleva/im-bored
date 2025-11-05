import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

import {
  type UiFilterActivityItem,
  UiFilterActivityItems,
} from 'src/constants.ts';

const FilterByType = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
  };
  
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
          {UiFilterActivityItems.map((item: UiFilterActivityItem) => (
            <MenuItem
              key={item.id}
              value={item.value}
            >
              {item.value.length === 0 && <i>None</i>}
              {item.value.length > 0 && item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterByType;