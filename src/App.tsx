import { useState } from 'react'
import './App.css'
import { Typography } from '@mui/material'
import Login from './components/Login'
import CheckInTable from './components/CheckInTable'
import {ProgressBar} from './components/ProgressBar'
import RewardCard from './components/RewardCard'

const App = () => {
  const [checkins, set_checkins] = useState([])

  return (
    <div>
      <Login set_checkins={set_checkins} />

      <Typography sx={{mt: 5}} align="center">Check In</Typography>
      <CheckInTable checkins={checkins} />
      <ProgressBar percent={25}>Hello world!</ProgressBar>
      <Typography align="center" variant="h4">Rewards</Typography>
      <RewardCard label="15% OFF Rinnova" status="Gold Status Reward" reward={true} />
      <RewardCard label="Free 16oz coffee" status="" reward={false} />
      <RewardCard label="Free 16oz coffee" status="" reward={false} />
    </div>
  )
}

export default App
