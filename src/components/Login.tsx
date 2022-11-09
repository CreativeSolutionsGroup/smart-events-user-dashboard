import * as React from 'react';
import {
  Box,
  Avatar,
  TextField,
  Button,
  Card,
  CardMedia,
  Typography,
} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import { get_all_checkins_by_id } from '../services/CheckIn';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Login = () => {
  return (
    <Card
      sx={{
        p: 5,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        flexwrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoginButton />
        <LogoutButton />
      </Box>
    </Card>
  )
}

export default Login

