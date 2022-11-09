import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GoogleOAuthProvider } from '@react-oauth/google'
import axios from 'axios'

const clientId = '8990298927-tftcl4kcfe52ikmu3quthlo7v3qvognu.apps.googleusercontent.com';

axios.defaults.headers.common = { "Authorization": `Bearer ${sessionStorage.getItem("credential")}` };
axios.defaults.baseURL = import.meta.env.VITE_BACKEND ?? "http://localhost:3001/api";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider 
        router={createBrowserRouter([
          {
            path: "/",
            element: <App />,
          },
        ])}
      />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
