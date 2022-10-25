import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  LinearProgress,
  Typography
} from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio';
import RewardsGraphic from './RewardsGraphic'
import '@fontsource/roboto/300.css'; // Used by MUI?
import '@fontsource/roboto/400.css'; // "           "
import '@fontsource/roboto/500.css'; // "           "
import '@fontsource/roboto/700.css'; // "           "
import CheckInTable from './components/CheckInTable';
import { ProgressBar } from './components/ProgressBar';
import RewardCard from './components/RewardCard';

const Dashboard = () => {
  const [redeem, set_redeem] = useState<Boolean>(false);

  const handleClick = () => {
    set_redeem(true);
  };
  return (
    <div className='Dashboard'>
      <Box className='w-full'>
        <Box className='m-8 mx-auto flex flex-col flex-nowrap justify-evenly'>
          <RewardsGraphic />
          <Box className='h-96 border-2 rounded-3xl border-blue-700 bg-blue-200 flex flex-col justify-around items-center'>
            <Typography align="center" variant="h4">Rewards</Typography>
            <ProgressBar percent={25}>Hello world!</ProgressBar>
            <RewardCard label="15% OFF Rinnova" sub_label="Gold Status Reward" is_redeemable={true} on_redeem={handleClick} />
            <RewardCard label="Free 16oz coffee" sub_label="" is_redeemable={false} on_redeem={handleClick} is_claimed={redeem} />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Dashboard
