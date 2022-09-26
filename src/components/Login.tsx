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
import { 
  flexbox,
  spacing,
} from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { CheckIn } from '../models/checkin';
import { get_all_checkins_for_student } from '../services/CheckIn';

function Login({set_student_checkins}: React.PropsWithChildren<{set_student_checkins: Function}>) {
  const [stu_id, set_stu_id] = useState("");
  
  const match_events_to_student = async () => {
    const matchEvents = await get_all_checkins_for_student(stu_id);
    set_student_checkins(matchEvents);
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
        <TextField variant='outlined' label='Student ID' onInput={ (evt:any) => set_stu_id(evt.target.value)}/>
        <Button sx={{m: 1}} onClick={() => match_events_to_student()}>Login</Button>
      </Box>
    </Card>
  )
}

export default Login

