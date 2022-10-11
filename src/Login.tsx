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
import '@fontsource/roboto/300.css'; // Used by MUI?
import '@fontsource/roboto/400.css'; // "           "
import '@fontsource/roboto/500.css'; // "           "
import '@fontsource/roboto/700.css'; // "           "
import { 
  flexbox,
  spacing,
} from '@mui/system';

function Login() {
  return (
    <Card className="p-2 h-80 flex flex-col flex-nowrap justify-between items-center">
      <Box className="flex flex-col items-center">
        <Box
          className="h-24"
          component='img'
          src='/src/assets/yellow-jacket-logo.png'
          alt='Yellow Jacket Logo'
        />
      <Typography variant='h5'>
        Dashboard Login
      </Typography>
      </Box>
      <Box className="flex flex-col items-end">
        <TextField variant='outlined' label='Student ID'/>
        <Button className="my-3">Login</Button>
      </Box>
    </Card>
  )
}

export default Login
