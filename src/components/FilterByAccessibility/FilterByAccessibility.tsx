import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { filterStore } from 'store/root.ts';
import AccessibilityRange from './AccessibilityRange.tsx';
import AccessibilityValue from './AccessibilityValue.tsx';

const FilterByAccessibility = observer(() => {
  const { isPrecise, setIsPrecise } = filterStore;
  const accessibilityDescrEnd = <> <b>0</b> means very simple, <b>1</b> means more challenging.</>
  
  const checkbox = (
    <Checkbox
      checked={isPrecise}
      onChange={(_, checked) => setIsPrecise(checked)}
    />
  );
  
  return (
    <Box sx={{ m: '20px 0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1">
          Accessibility
        </Typography>
        
        <FormControlLabel
          control={checkbox}
          label="Precise adjustment"
        />
      </Box>
      
      {
        isPrecise
          ? <AccessibilityValue/>
          : <AccessibilityRange/>
      }
      
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
          Accessibility shows how easy this activity is to do.
          {isPrecise && accessibilityDescrEnd}
        </Typography>
      </Box>
    </Box>
  );
});

export default FilterByAccessibility;
