import './App.css';
import FilterByType from 'components/FilterByType/FilterByType.tsx';
import FilterByParticipants from 'components/FilterByParticipants/FilterByParticipants.tsx';
import FilterByAccessibility from 'components/FilterByAccessibility/FilterByAccessibility.tsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
        variant="contained"
        onClick={() => false}
        sx={{ m: '20px 0 10px' }}
      >
        Get another idea
      </Button>
      
      <Box sx={{ m: '10px 0' }}>
        <Paper
          square={true}
          elevation={2}
          sx={{ p: '15px' }}
        >
          <Typography variant="body2">
            {'activity'}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default App;
