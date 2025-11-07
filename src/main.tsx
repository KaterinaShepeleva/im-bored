import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { burgundyTheme } from 'src/theme.ts';

import './index.css';
import App from './components/App/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={burgundyTheme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </StrictMode>,
);
