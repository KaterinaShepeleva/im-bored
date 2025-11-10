import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './App.css';
import { filterStore } from 'store/root.ts';
import ActivityCard from 'components/ActivityCard/ActivityCard.tsx';
import FilterByType from 'components/FilterByType/FilterByType.tsx';
import FilterByParticipants from 'components/FilterByParticipants/FilterByParticipants.tsx';
import FilterByChallenge from 'components/FilterByChallenge/FilterByChallenge.tsx';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function App() {
  const { fetchActivity, resetFilters } = filterStore;
  
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'background.default', height: '100%', pt: 2, pb: 2 }}>
      <h1 style={{ fontSize: '36px', margin: 0, padding: '32px 0' }}>
        <AutoAwesomeIcon fontSize="inherit" color="secondary" sx={{ verticalAlign: 'top', mr: 1.5 }}/>
        <span>If I'm Bored</span>
      </h1>
      
      <Grid
        container
        rowSpacing={2}
        columnSpacing={3}
        sx={{ alignItems: 'center' }}
      >
        <Grid size={{ xs: 12, sm: 5 }}>
          <FilterByType/>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 7 }}>
          <FilterByParticipants/>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 8 }}>
          <FilterByChallenge/>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 4 }}>
          <Stack
            direction={{ xs: 'row', sm: 'column' }}
            spacing={{ xs: 2, sm: 1.5 }}
            justifyContent={{ xs: 'start', sm: 'center' }}
            flexShrink={0}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={fetchActivity}
            >
              Get another idea
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              onClick={resetFilters}
            >
              Reset all filters
            </Button>
          </Stack>
        </Grid>
      </Grid>
      
      <ActivityCard/>
    </Container>
  );
}

export default App;
