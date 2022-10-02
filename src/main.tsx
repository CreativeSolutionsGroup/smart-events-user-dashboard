import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import Login from './Login'
import Dashboard from './Dashboard'
import { 
  createTheme,
  StyledEngineProvider,
  useTheme,
 } from '@mui/material/styles';
import './main.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/*
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Dashboard />
    </StyledEngineProvider>
  </React.StrictMode>
)
