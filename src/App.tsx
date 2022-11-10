import { useState } from 'react'
import { Typography } from '@mui/material'
import Login from './components/Login'
import CheckInTable from './components/CheckInTable'
import { ProgressBar } from './components/ProgressBar'
import RewardCard from './components/RewardCard'
import RegisterUser from './components/RegisterUser'
import { Box } from '@mui/system'
import { Layout } from './components/Layout'

const App = () => {
  const [checkins, set_checkins] = useState([])
  const [redeem, set_redeem] = useState<Boolean>(false);

  const handleClick = () => {
    alert("You have redeemed your reward!");
    set_redeem(true);
  };

  return (
    <Layout>
      <Box minWidth={350} width="50%" display="flex" flexDirection="column" mx="auto">
        <Box mb={3}>
          <Login />
        </Box>
        <RegisterUser />
        <CheckInTable checkins={checkins} />
        <ProgressBar percent={25}>Hello world!</ProgressBar>
        <Typography align="center" variant="h4">Rewards</Typography>

        <RewardCard label="15% OFF Rinnova" is_redeemable={true} on_redeem={handleClick} />
        <RewardCard label="Free Book" is_redeemable={false} on_redeem={handleClick} />
        <RewardCard label="Free 16oz Coffee" is_redeemable={false} on_redeem={handleClick} />
        <RewardCard label="Free 16oz Coffee" is_redeemable={false} on_redeem={handleClick} />
      </Box>
    </Layout>
  )
}

export default App
