import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './Dashboard'
import { Typography } from '@mui/material'
import CheckInTable from './components/CheckInTable'
import { ProgressBar } from './components/ProgressBar'
import RewardCard from './components/RewardCard'

const App = () => {
  const [checkins, set_checkins] = useState([])
  return (
    <div className="w-2/3 xl:w-1/3 mx-auto flex justify-center flex-col">
      <Dashboard />

      <Login set_checkins={set_checkins} />
      <CheckInTable checkins={checkins} />
    </div>
  )
}

export default App
