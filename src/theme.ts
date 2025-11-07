import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

const BURGUNDY = '#800000';
const SOFT_AMBER = '#E5B25D';
const LIGHT_BEIGE = '#F8F6F2';
const TEXT_PRIMARY = '#2E2E2E';
const TEXT_SECONDARY = '#5C5C5C';

export const burgundyTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: BURGUNDY,
      contrastText: LIGHT_BEIGE,
    },
    secondary: {
      main: SOFT_AMBER,
      contrastText: BURGUNDY,
    },
    background: {
      default: LIGHT_BEIGE,
      paper: '#FFFFFF',
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },
  },
  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:focus': {
            outline: `3px solid ${alpha(BURGUNDY, 0.5)}`,
            outlineOffset: '2px',
          },
          '&:focus-visible': {
            outline: `3px solid ${alpha(BURGUNDY, 0.5)}`,
            outlineOffset: '2px',
          },
        },
        
        contained: {
          '&:hover': {
            backgroundColor: alpha(BURGUNDY, 0.6),
            boxShadow: 'none',
          },
          '&:active': {
            backgroundColor: alpha(BURGUNDY, 0.8),
          },
        },
        
        outlined: {
          '&:hover': {
            backgroundColor: alpha(BURGUNDY, 0.1),
          },
          '&:active': {
            backgroundColor: alpha(BURGUNDY, 0.2),
          },
        },
      },
    },
    
    MuiChip: {
      styleOverrides: {
        filled: {
          '&:hover': {
            backgroundColor: alpha(BURGUNDY, 0.6),
          },
        }
      },
    },
    
    MuiSlider: {
      styleOverrides: {
        thumb: {
          '&:hover': {
            backgroundColor: "#983130",
          },
        }
      },
    },
  },
});
