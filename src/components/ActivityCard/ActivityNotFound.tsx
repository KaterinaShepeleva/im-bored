import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import SearchOff from '@mui/icons-material/SearchOff';

const ActivityNotFound = () => (
  <Box sx={{ mt: 3, mb: 2 }}>
    <Card
      elevation={1}
      sx={{
        p: 2.5,
        borderRadius: 3,
        width: '70%',
        m: '0 auto',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.4 }}>
        No activities match your filters
      </Typography>
      
      <Typography variant="body2" color="text.secondary">
        <SearchOff fontSize="small" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
        <span>Try adjusting your filters and search again</span>
      </Typography>
    </Card>
  </Box>
);

export default ActivityNotFound;
