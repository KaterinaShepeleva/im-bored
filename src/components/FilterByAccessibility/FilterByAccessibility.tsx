import { observer} from 'mobx-react-lite';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import AccessibilityRange from './AccessibilityRange.tsx';
import AccessibilityValue from './AccessibilityValue.tsx';
import Typography from '@mui/material/Typography';

import { filterStore } from 'store/root.ts';

const FilterByAccessibility = observer(() => {
  const { isPrecise, setIsPrecise } = filterStore;
  
  const checkbox = (
    <Checkbox
      checked={isPrecise}
      onChange={(_, checked) => setIsPrecise(checked)}
    />
  );
  
  return (
    <div>
      <Typography variant="body2" sx={{ margin: '10px 0' }}>Accessibility</Typography>
      
      {
        isPrecise
          ? <AccessibilityValue/>
          : <AccessibilityRange/>
      }
      
      <FormControlLabel
        control={checkbox}
        label="Precise adjustment"
      
      />
    </div>
  );
});

export default FilterByAccessibility;
