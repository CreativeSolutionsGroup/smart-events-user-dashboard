import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  LinearProgress,
  Typography
} from '@mui/material'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Dashboard() {

  return (
    <div className="Dashboard">
      <Box className='center'>
        <Card className='staus'>
          <Box className='status_display'>
            <Typography>Gold</Typography>
            <Typography>Reward Status</Typography>
          </Box>
          <Box className='status_progress'>
            <Typography>3</Typography>
            <Typography>Events Attended</Typography>
            <Typography>Next Status In: 2 Events</Typography>
            <LinearProgress variant='determinate' color='primary' value={60}></LinearProgress>
          </Box>
        </Card>
        <Card className='rewards'>
          <Typography>Rewards</Typography>
          <Card className='constant_reward'>
            <Typography>15% OFF Rinnova</Typography>
            <Typography>Gold Status Reward</Typography>
          </Card>
          <Card className='one_time_reward'>
            <Typography>Free 16oz Coffee</Typography>
            <Button variant='contained'>Redeem</Button>
          </Card>
          <Card className='one_time_reward'>
            <Typography>Free 16oz Coffee</Typography>
            <Button variant='contained'>Redeem</Button>
          </Card>
          <Box className='reward_progress'>
            <Typography>6 Events</Typography>
            <Typography>Until Next Reward</Typography>
            <LinearProgress variant='determinate' color='primary' value={33}></LinearProgress>
          </Box>
        </Card>
      </Box>
    </div>
  )
}

export default Dashboard
