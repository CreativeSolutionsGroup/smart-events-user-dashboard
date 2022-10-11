import { useState } from 'react'
import './App.css'
import { Typography } from '@mui/material'
import Login from './components/Login'
import CheckInTable from './components/CheckInTable'
import {ProgressBar} from './components/ProgressBar'

const App = () => {
  const [checkins, set_checkins] = useState([])

  return (
    <div className="App">
      <Login set_checkins={set_checkins} />

      <Typography sx={{mt: 5}} align="center">Check In</Typography>
      <CheckInTable checkins={checkins} />
      <ProgressBar percent={25}>Hello world!</ProgressBar>
    </div>
  )
}

export default App
