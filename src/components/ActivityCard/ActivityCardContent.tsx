import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { activityStore } from 'store/root.ts';
import { TYPE_OPTIONS } from 'constants/activityType.ts';
import { getAccessibilityLabel } from 'src/utils.ts';

const getTypeLabel = (apiType: string) => {
  const result = TYPE_OPTIONS.find((item) => item.value === apiType);
  return result && result.name.length > 0 ? result.name : '—';
};

const ActivityCardContent = observer(() => {
  const {
    activity,
    type,
    participants,
    accessibility,
  } = activityStore;
  const accessibilityDescr = `${accessibility} (${getAccessibilityLabel(accessibility)})`;
  
  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <Card
        elevation={1}
        sx={{
          p: 2.5,
          borderRadius: 3,
          width: '75%',
          m: '0 auto',
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
          {activity}
        </Typography>
        
        <Stack direction="row" spacing={1} alignItems="center">
          <CategoryIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          <Typography variant="body1" color="text.secondary">
            Type: {getTypeLabel(type)}
          </Typography>
        </Stack>
        
        <Stack direction="row" spacing={1} alignItems="center">
          <GroupIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          <Typography variant="body1" color="text.secondary">
            For {participants} {participants === 1 ? 'person' : 'people'}
          </Typography>
        </Stack>
        
        <Stack direction="row" spacing={1} alignItems="center">
          <SpeedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          <Typography variant="body1" color="text.secondary">
            Accessibility: {accessibilityDescr}
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
});

export default ActivityCardContent;
