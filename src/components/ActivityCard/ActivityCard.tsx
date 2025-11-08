import { observer } from 'mobx-react-lite';

import ActivityCardContent from './ActivityCardContent.tsx';

const ActivityCard = observer(() => {
  
  
  // TODO: add skeleton on loading
  return (
    <div>
      <ActivityCardContent/>
    </div>
  );
});

export default ActivityCard;
