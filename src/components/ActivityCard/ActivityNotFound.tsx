import Typography from '@mui/material/Typography';
import SearchOff from '@mui/icons-material/SearchOff';

const ActivityNotFound = () => (
  <>
    <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.4 }}>
      No activities match your filters
    </Typography>
    
    <Typography variant="body2" color="text.secondary">
      <SearchOff fontSize="small" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
      <span>Try adjusting your filters and search again</span>
    </Typography>
  </>
);

export default ActivityNotFound;
