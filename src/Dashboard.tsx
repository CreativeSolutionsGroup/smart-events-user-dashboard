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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Box className='background'  sx={{
        width: '100vw',
        //alignItems: 'center'              // TODO: only used for flexboxes, tried to use as a substitute for margin: auto. Which is preferred?
      }}>
        <Box className='content' sx={{      // TODO: is content a reserved keyword? can i use that className?
          width: 2/3,
          m: '2rem',
          mx: 'auto',                       // TODO: see line 22 comment
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-evenly',   // TODO: not working
          alignContent: 'center'
        }}>
          <Box className='status ' sx={{
            height: 600,                    // TODO: fix so height is not static
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'lightgoldenrodyellow',
            borderRadius: 10,
            mb: '2rem',
          }}>
            <AspectRatio ratio="1/1" sx={{
              width: '50vw',
              mb: '2rem'
            }}>
              <Avatar className='status_display' sx={{
                //width: 1,
                //height: 1,
                bgcolor: 'gold',
                color: 'black',
                border: 1,
                borderColor: 'orange',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
              }}>
                <Typography sx={{
                  //textTransform: 'uppercase',     // TODO: testing tailwind
                  //fontWeight: 'bold'
                }} >Gold</Typography>
                <Typography sx={{
                  //mt: 'auto'
                }} >Reward Status</Typography>
              </Avatar>
            </AspectRatio>
            <Box className='status_progress'>
              <Typography>3 Events Attended</Typography>
              <Typography>Next Status In: 2 Events</Typography>
              <LinearProgress variant='determinate' color='primary' value={60}></LinearProgress>
            </Box>
          </Box>
          <Box className='rewards' sx={{
            height: 600,
            border: 1,
            borderRadius: 10,
            borderColor: 'blue',
            bgcolor: 'lightblue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <Typography sx={{
              textTransform: 'uppercase',
              fontWeight: 'Bold'
            }}>Rewards</Typography>
            <Card className='constant_reward' sx={{
              width: 3/4,
              height: '4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Typography>15% OFF Rinnova</Typography>
              <Typography>Gold Status Reward</Typography>
            </Card>
            <Card className='one_time_reward' sx={{
              width: 3/4,                                // TODO: turn this into a variant, or even a separate react module
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Typography>Free 16oz Coffee</Typography>
              <Button variant='contained' sx={{
                width: 'fit-content'
              }}>Redeem</Button>
            </Card>
            <Card className='one_time_reward' sx={{
              width: 3/4,
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Typography>Free 16oz Coffee</Typography>
              <Button variant='contained' sx={{
                width: 'fit-content'
              }}>Redeem</Button>
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
