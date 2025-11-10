import { observer } from 'mobx-react-lite';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import SpeedIcon from '@mui/icons-material/Speed';

import { activityStore } from 'store/root.ts';
import { TYPE_OPTIONS } from 'constants/activityType.ts';
import { getChallengeLabel } from 'src/utils.ts';

const ActivityContent = observer(() => {
  const {
    activity,
    type,
    participants,
    accessibility,
  } = activityStore;
  const challengeDescription = `${accessibility} (${getChallengeLabel(accessibility)})`;
  const getTypeLabel = (apiType: string) => {
    const result = TYPE_OPTIONS.find((item) => item.value === apiType);
    return result && result.name.length > 0 ? result.name : '—';
  };
  
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: 2, color: 'primary.main', lineHeight: 1.4 }}
      >
        {activity}
      </Typography>
      
      <Stack direction="row" spacing={1} alignItems="center">
        <CategoryIcon color="secondary" sx={{ fontSize: 18 }}/>
        <Typography variant="body1" color="text.secondary">
          Type: {getTypeLabel(type)}
        </Typography>
      </Stack>
      
      <Stack direction="row" spacing={1} alignItems="center">
        <GroupIcon color="secondary" sx={{ fontSize: 18 }}/>
        <Typography variant="body1" color="text.secondary">
          For {participants} {participants === 1 ? 'person' : 'people'}
        </Typography>
      </Stack>
      
      <Stack direction="row" spacing={1} alignItems="center">
        <SpeedIcon color="secondary" sx={{ fontSize: 18 }}/>
        <Typography variant="body1" color="text.secondary">
          Challenge level: {challengeDescription}
        </Typography>
      </Stack>
    </>
  );
});

export default ActivityContent;
