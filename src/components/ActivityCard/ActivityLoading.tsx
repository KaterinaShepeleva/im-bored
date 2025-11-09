import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const ActivityLoading = () => {
  return (
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
          <Skeleton/>
        </Typography>
        
        <Typography variant="body1" sx={{ width: 250 }}>
          <Skeleton/>
        </Typography>
        
        <Typography variant="body1" sx={{ width: 250 }}>
          <Skeleton/>
        </Typography>
        
        <Typography variant="body1" sx={{ width: 250 }}>
          <Skeleton/>
        </Typography>
      </Card>
    </Box>
  );
};

export default ActivityLoading;
