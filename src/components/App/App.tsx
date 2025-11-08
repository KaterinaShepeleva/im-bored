import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './App.css';
import { filterStore } from 'store/root.ts';
import ActivityCard from 'components/ActivityCard/ActivityCard.tsx';
import FilterByType from 'components/FilterByType/FilterByType.tsx';
import FilterByParticipants from 'components/FilterByParticipants/FilterByParticipants.tsx';
import FilterByAccessibility from 'components/FilterByAccessibility/FilterByAccessibility.tsx';

function App() {
  return (
    <Box sx={{ backgroundColor: 'background.default', height: '100%' }}>
      <h1 style={{ fontSize: '32px' }}>
        If I'm Bored
      </h1>
      
      <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
        <FilterByType/>
        
        <FilterByParticipants/>
      </Stack>
      
      <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
        <FilterByAccessibility/>
        
        <Stack direction="column" spacing={1.5} flexShrink={0} sx={{ pt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => false}
          >
            Apply filters
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            onClick={filterStore.resetFilters}
          >
            Reset all filters
          </Button>
        </Stack>
      </Stack>
      
      <ActivityCard/>
    </Box>
  );
}

export default App;
