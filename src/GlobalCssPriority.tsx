import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';

// Overrides MUI styles with ailwind styles
export default function GlobalCssPriority() {
    return (
        <StyledEngineProvider injectFirst>
            {App()},
            {Login()},
            {Dashboard()},
        </StyledEngineProvider>
    )
}