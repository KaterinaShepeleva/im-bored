import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const ActivityLoading = () => (
  <>
    <Typography variant="h6" sx={{ width: 250, mb: 2, lineHeight: 1.4 }}>
      <Skeleton/>
    </Typography>
    
    <Typography variant="body1" sx={{ width: 180 }}>
      <Skeleton/>
    </Typography>
    
    <Typography variant="body1" sx={{ width: 180 }}>
      <Skeleton/>
    </Typography>
    
    <Typography variant="body1" sx={{ width: 180 }}>
      <Skeleton/>
    </Typography>
  </>
);

export default ActivityLoading;
