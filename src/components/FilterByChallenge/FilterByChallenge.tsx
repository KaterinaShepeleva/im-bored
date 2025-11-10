import { observer } from 'mobx-react-lite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

import { filterStore } from 'store/root.ts';
import ChallengeGroups from './ChallengeGroups.tsx';
import ChallengeValue from './ChallengeValue.tsx';

const FilterByChallenge = observer(() => {
  const { isPrecise, setIsPrecise } = filterStore;
  const tooltip = 'Higher value means this activity requires more effort or focus';
  const tooltipSlotProps = {
    tooltip: {
      sx: {
        maxWidth: {
          xs: 242,
          sm: 186,
        },
      },
    },
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -8],
          },
        },
      ],
    },
  };
  
  const checkbox = (
    <Checkbox
      checked={isPrecise}
      onChange={(_, checked) => setIsPrecise(checked)}
    />
  );
  
  return (
    <Box>
      <Stack direction="row" spacing={0}>
        <Typography variant="body1">Challenge level</Typography>
        
        <Tooltip
          title={tooltip}
          placement="top"
          enterDelay={200}
          enterTouchDelay={0}
          leaveTouchDelay={3000}
          slotProps={tooltipSlotProps}
        >
          <Box component="span">
            <InfoOutlineIcon
              sx={{
                fontSize: 'inherit',
                verticalAlign: 'middle',
                color: 'text.secondary',
                cursor: 'pointer',
                p: '2px 8px 4px',
                boxSizing: 'content-box',
              }}
            />
          </Box>
        </Tooltip>
      </Stack>
      
      {
        isPrecise
          ? <ChallengeValue/>
          : <ChallengeGroups/>
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

export default FilterByChallenge;
