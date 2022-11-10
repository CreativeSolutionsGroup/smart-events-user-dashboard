import {
  Box,
  LinearProgress,
  Typography,
} from '@mui/material'
import { AspectRatio } from '@mui/joy'
import { PropsWithChildren } from 'react'
const RewardsGraphic = ({ reward_status, color }: PropsWithChildren<{ reward_status: string, color: string }>) => {
  return (
    <div className='RewardsGraphic'>
      <Box className='h-auto flex flex-col flex-nowrap justify-center items-center rounded-3xl'>
        <AspectRatio ratio='1/1' className='w-11/12 mb-8'>
          <Box sx={{ backgroundColor: color }} className='border-2 rounded-full flex flex-col justify-center'>
            <Typography className='text-9xl font-bold font-poppins'>{reward_status}</Typography>
            <Typography className='text-2xl font-bold font-poppins'>Reward Status</Typography>
          </Box>
        </AspectRatio>
      </Box>
    </div>
  )
}

export default RewardsGraphic