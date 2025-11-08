import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

import {
  ActivityType,
  type ActivityTypeOption,
  TYPE_OPTIONS,
} from 'constants/activityType.ts';
import { filterStore } from 'store/root.ts';

const FilterByType = observer(() => {
  const { type, setType } = filterStore;
  
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as ActivityType);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormControl
        fullWidth={true}
        variant="outlined"
      >
        <InputLabel id="activity-type-select-label">Activity type</InputLabel>
        <Select
          labelId="activity-type-select-label"
          id="activity-type-select"
          label="Activity type"
          value={type}
          onChange={handleChange}
        >
          {TYPE_OPTIONS.map((item: ActivityTypeOption) => (
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
    </Box>
  );
});

export default FilterByType;
