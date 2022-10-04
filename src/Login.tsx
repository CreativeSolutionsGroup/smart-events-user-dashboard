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
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <CardMedia
          component='img'
          image='/src/assets/yellow-jacket-logo.png'
          alt='Yellow Jacket Logo'
          sx={{
            width: 100,
            height: 100,
          }}
        />
      <Typography variant='h5' sx={{m: 1}}>
        Dashboard Login
      </Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
        <TextField variant='outlined' label='Student ID'/>
        <Button sx={{m: 1}}>Login</Button>
      </Box>
    </Card>
  )
}

export default Login
