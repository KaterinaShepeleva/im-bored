import { observer } from 'mobx-react-lite';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { activityStore } from 'store/root.ts';
import { TYPE_OPTIONS } from 'constants/activityType.ts';
import { getAccessibilityLabel } from 'src/utils.ts';

const getTypeLabel = (apiType: string) => {
  const result = TYPE_OPTIONS.find((item) => item.value === apiType);
  return result && result.name.length > 0 ? result.name : '—';
};

const ActivityCard = observer(() => {
  const {
    activity,
    type,
    participants,
    accessibility,
  } = activityStore;
  const accessibilityDesc = `Accessibility: ${accessibility} (${getAccessibilityLabel(accessibility)})`;
  
  // TODO: add skeleton on loading
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
});

export default ActivityCard;
