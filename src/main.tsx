import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import Login from './components/Login'
import CheckIn from './components/CheckInTable'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
