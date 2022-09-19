import * as React from 'react';
import './App.css'
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
import { 
  flexbox,
  spacing,
} from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { CheckIn } from './models/checkin';

function Login() {
  const [stuID, setStuID] = useState("");
  
  const matchEvents = async () => {
    let allCheckIns:Array<CheckIn> = (await axios.get("http://localhost:3001/v1/checkin")).data;
    console.log(allCheckIns);
    const matchEvents = allCheckIns.filter((checkIn) => {
        return stuID === checkIn.student_id;
    })
    console.log(matchEvents);  
  }

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
        <TextField variant='outlined' label='Student ID' onInput={ (evt:any) => setStuID(evt.target.value)}/>
        <Button sx={{m: 1}} onClick={() => matchEvents()}>Login</Button>
      </Box>
    </Card>
  )
}

export default Login

