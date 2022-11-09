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
        <RewardCard label="15% OFF Rinnova" sub_label="Gold Status Reward" is_redeemable={true} on_redeem={() => { }} />
        <RewardCard label="Free 16oz coffee" sub_label="" is_redeemable={false} on_redeem={() => { }} is_claimed={false} />
      </Box>
    </Layout>
  )
}

export default App
