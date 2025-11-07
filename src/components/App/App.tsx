import Button from '@mui/material/Button';

import './App.css';
import { filterStore } from 'store/root.ts';
import ActivityCard from 'components/ActivityCard/ActivityCard.tsx';
import FilterByType from 'components/FilterByType/FilterByType.tsx';
import FilterByParticipants from 'components/FilterByParticipants/FilterByParticipants.tsx';
import FilterByAccessibility from 'components/FilterByAccessibility/FilterByAccessibility.tsx';

function App() {
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>
        If I'm Bored
      </h1>
      
      <FilterByType/>
      <br/>
      
      <FilterByParticipants/>
      <br/>
      
      <FilterByAccessibility/>
      
      <Button
        variant="outlined"
        color="primary"
        onClick={filterStore.resetFilters}
        sx={{ m: '20px 0 10px' }}
      >
        Reset all filters
      </Button>
      
      <ActivityCard/>
    </>
  );
}

export default App;
