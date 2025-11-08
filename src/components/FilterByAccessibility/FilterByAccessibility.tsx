import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { filterStore } from 'store/root.ts';
import AccessibilityGroups from './AccessibilityGroups.tsx';
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
    <Box>
      <Typography variant="body1">
        Accessibility
      </Typography>
      
      <Typography variant="caption" sx={{ mb: 1.5, display: 'block', color: 'text.secondary', lineHeight: 1.5 }}>
        Accessibility shows how easy this activity is to do.
        {isPrecise && accessibilityDescrEnd}
      </Typography>
      
      {
        isPrecise
          ? <AccessibilityValue/>
          : <AccessibilityGroups/>
      }
      
      <Box>
        <FormControlLabel
          control={checkbox}
          label="Precise adjustment"
        />
      </Box>
    </Box>
  );
});

export default FilterByAccessibility;
