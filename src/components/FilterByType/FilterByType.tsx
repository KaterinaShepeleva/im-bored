import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

import {
  API_URL,
  type UiFilterActivityItem,
  UiFilterActivityItems,
} from 'src/constants.ts';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const initial = '—';

const FilterByType = () => {
  const [activity, setActivity] = useState<string>(initial);
  const [selectedType, setSelectedType] = useState<string>('');
  
  const menuItems = UiFilterActivityItems.map((item: UiFilterActivityItem) => (
    <MenuItem
      key={item.id}
      value={item.value}
    >
      {item.name}
    </MenuItem>
  ));
  
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
  };
  
  const getActivityByType = async (): Promise<void> => {
    if (!selectedType) {
      setActivity(initial);
      return;
    }
    
    const response = await axios.get(`${API_URL}?type=${selectedType}`);
    
    setActivity(response.data?.activity ?? initial);
  }
  
  return (
    <div>
      <fieldset>
        <legend>Filter By Type</legend>
        
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
              <i>None</i>
            </MenuItem>
            {menuItems}
          </Select>
        </FormControl>
        
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
          variant="outlined"
          onClick={getActivityByType}
        >
          Get Activity By Type
        </Button>
      </fieldset>
    </div>
  );
};

export default FilterByType;