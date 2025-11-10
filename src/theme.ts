import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

const BURGUNDY = '#800000';
const SOFT_AMBER = '#E5B25D';
const LIGHT_BEIGE = '#F6F6F2';
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
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
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
            backgroundColor: alpha(SOFT_AMBER, 0.2),
          },
          '&:active': {
            backgroundColor: alpha(SOFT_AMBER, 0.3),
          },
        },
      },
    },
    
    MuiChip: {
      styleOverrides: {
        filled: {
          '&.MuiChip-clickable.Mui-focusVisible': {
            backgroundColor: alpha(BURGUNDY, 0.6),
          },
          '&:hover': {
            backgroundColor: alpha(BURGUNDY, 0.6),
          },
        },
        outlined: {
          '&.MuiChip-colorPrimary.MuiChip-clickable:hover': {
            backgroundColor: alpha(SOFT_AMBER, 0.2),
          },
          '&.MuiChip-clickable.Mui-focusVisible': {
            backgroundColor: alpha(SOFT_AMBER, 0.2),
          },
        },
      },
    },
    
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(SOFT_AMBER, 0.2),
          },
          '&:active': {
            backgroundColor: alpha(SOFT_AMBER, 0.3),
          },
          '& .MuiTouchRipple-root': {
            color: SOFT_AMBER,
          },
        },
      },
    },
    
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: `${alpha(SOFT_AMBER, 0.3)} !important`,
            '&:hover': {
              backgroundColor: `${alpha(SOFT_AMBER, 0.2)} !important`,
            },
          },
          '&:hover': {
            backgroundColor: alpha(SOFT_AMBER, 0.1),
          },
        },
      },
    },
    
    MuiSlider: {
      styleOverrides: {
        thumb: {
          '&:hover': {
            backgroundColor: '#983130',
          },
        },
        valueLabel: {
          backgroundColor: alpha(SOFT_AMBER, 0.95),
        },
      },
    },
    
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(SOFT_AMBER, 0.15),
        },
      },
    },
    
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(SOFT_AMBER, 0.95),
        },
      },
    },
  },
});
