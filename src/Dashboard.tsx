import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  LinearProgress,
  Typography
} from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio';
import '@fontsource/roboto/300.css'; // Used by MUI?
import '@fontsource/roboto/400.css'; // "           "
import '@fontsource/roboto/500.css'; // "           "
import '@fontsource/roboto/700.css'; // "           "

// TODO: for some reason margins only work half the time
// TODO: fix reward box height, figure out how to make it big but not static
function Dashboard() {
  return (
    <div className='Dashboard'>
      <Box className='w-full'>
        <Box className='w-2/3 m-8 mx-auto flex flex-col flex-nowrap justify-evenly'>
          <Box className='h-auto p-12 flex flex-col flex-nowrap justify-center items-center bg-yellow-200 rounded-3xl mb-8'>
            <AspectRatio ratio='1/1' className='w-11/12 mb-8'>
              <Box className='bg-amber-400 text-zinc-900 border-2 border-yellow-600 rounded-full flex flex-col justify-center'>
                <Typography>Gold</Typography>
                <Typography>Reward Status</Typography>
              </Box>
            </AspectRatio>
            <Box className='mt-8'>
              <Typography>3 Events Attended</Typography>
              <Typography>Next Status In: 2 Events</Typography>
              <LinearProgress variant='determinate' color='primary' value={60}></LinearProgress>
            </Box>
          </Box>
          <Box className='h-96 border-2 rounded-3xl border-blue-700 bg-blue-200 flex flex-col justify-around items-center'>
            <Typography className='font-black'>REWARDS</Typography>
            <Card className='w-3/4 h-16 flex flex-col justify-center items-center'>
              <Typography>15% OFF Rinnova</Typography>
              <Typography>Gold Status Reward</Typography>
            </Card>
            <Card className='w-3/4 h-20 flex flex-col justify-center items-center'>
              <Typography>Free 16oz Coffee</Typography>
              <Button variant='contained' className='w-fit'>Redeem</Button>
            </Card>
            <Card className='w-3/4 h-20 flex flex-col justify-center items-center'>
              <Typography>Free 16oz Coffee</Typography>
              <Button variant='contained' className='w-fit'>Redeem</Button>
            </Card>
            <Box className='reward_progress'>
              <Typography>6 Events</Typography>
              <Typography>Until Next Reward</Typography>
              <LinearProgress variant='determinate' color='primary' value={33}></LinearProgress>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Dashboard
