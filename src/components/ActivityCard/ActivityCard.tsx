import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import { activityStore } from 'store/root.ts';
import ActivityContent from './ActivityContent.tsx';
import ActivityLoading from './ActivityLoading.tsx';
import ActivityNotFound from './ActivityNotFound.tsx';

const ActivityCard = observer(() => {
  const { isLoading, activityError } = activityStore;
  let content;
  
  if (isLoading) {
    content = <ActivityLoading/>;
  } else if (activityError) {
    content = <ActivityNotFound/>;
  } else {
    content = <ActivityContent/>;
  }
  
  return (
    <Grid
      container
      sx={{ mt: { xs: 4, sm: 3 }, mb: 2 }}
    >
      <Grid size={{ xs: 12, sm: 8 }} offset={{ xs: 0, sm: 2 }}>
        <Card
          elevation={1}
          sx={{ p: 2.5, borderRadius: 3 }}
        >
          {content}
        </Card>
      </Grid>
    </Grid>
  );
});

export default ActivityCard;
