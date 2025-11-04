import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { type ActivityItem, UiFilterActivityItems } from 'src/constants.ts';
import { getAccessibilityLabel } from 'src/utils.ts';

const getTypeLabel = (apiType: string) => {
  const result = UiFilterActivityItems.find((item) => item.value === apiType);
  return result ? result.name : apiType;
}

interface ActivityCardProps {
  data: ActivityItem;
}

const ActivityCard = (props: ActivityCardProps) => {
  const {
    activity,
    type,
    participants,
    accessibility,
  } = props.data;
  const accessibilityDesc = `Accessibility: ${accessibility} (${getAccessibilityLabel(accessibility)})`;
  
  return (
    <Box sx={{ m: '10px 0' }}>
      <Paper
        square={true}
        elevation={2}
        sx={{ p: '15px' }}
      >
        <Typography variant="body2">
          <strong>{activity}</strong>
        </Typography>
        
        <Typography variant="body2">
          Type: {getTypeLabel(type)} | For {participants} people | {accessibilityDesc}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ActivityCard;
