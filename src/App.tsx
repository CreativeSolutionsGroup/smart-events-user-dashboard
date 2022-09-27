import { useState } from 'react'
import './App.css'
import { Typography } from '@mui/material'
import Login from './components/Login'
import CheckInTable from './components/CheckInTable'

function App() {
  const [checkins, set_checkins] = useState([])

  return (
    <div className="App">
      <Login set_checkins={set_checkins} />

      <Typography>
        Check In
      </Typography>
      <CheckInTable checkins={checkins} />
    </div>
  )
}

export default App
