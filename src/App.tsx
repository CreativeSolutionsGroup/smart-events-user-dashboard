import { useState } from 'react'
import './App.css'
import { Typography } from '@mui/material'
import Login from './components/Login'
import CheckInTable from './components/CheckInTable'
import {ProgressBar} from './components/ProgressBar'
import RewardCard from './components/RewardCard'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { BottomBar } from './components/BottomBar'
//import RegisterUser from './components/RegisterUser'

const App = () => {
  const [checkins, set_checkins] = useState([])
  const [redeem, set_redeem] = useState<Boolean>(false);

  const handleClick = () => {
      set_redeem(true);
  };

  return (
    <div>
      <Login set_checkins={set_checkins} />
      <LoginButton />  
      <LogoutButton />
      <Typography sx={{mt: 5}} align="center">Check In</Typography>
      <CheckInTable checkins={checkins} />
      <ProgressBar percent={25}>Hello world!</ProgressBar>
      <Typography align="center" variant="h4">Rewards</Typography>
      <RewardCard label="15% OFF Rinnova" sub_label="Gold Status Reward" is_redeemable={true} on_redeem={handleClick} />
      <RewardCard label="Free 16oz coffee" sub_label="" is_redeemable={false} on_redeem={handleClick} is_claimed={redeem} />
      <BottomBar></BottomBar>
    </div>
  )
}

export default App
