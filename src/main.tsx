import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "./theme";
import { ThemeProvider } from '@emotion/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

import Dashboard from './views/Dashboard';
import { LoginPage } from './views/LoginPage';
import { RegisterPage } from './views/RegisterPage';
import { StatsPage } from './views/StatsPage';

import { Redirector } from './components/Redirector';

const clientId = import.meta.env.VITE_CLIENT_ID ?? '8990298927-tftcl4kcfe52ikmu3quthlo7v3qvognu.apps.googleusercontent.com';

axios.defaults.headers.common = { "Authorization": `Bearer ${sessionStorage.getItem("credential")}` };
axios.defaults.baseURL = import.meta.env.VITE_BACKEND ?? "http://localhost:3001/api";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Redirector />
  },
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/stats",
    element: <StatsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider
          router={router}
        />
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
