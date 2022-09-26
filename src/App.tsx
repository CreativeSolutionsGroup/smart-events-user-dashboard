import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Typography } from '@mui/material'
import Login from './components/Login'
import CheckInTable from './components/CheckInTable'

function App() {
  const [all_checkins, set_all_checkins] = useState([])

  return (
    <div className="App">
      <Login set_student_checkins={set_all_checkins}/>
        <Typography>
          Check In
        </Typography>
      <CheckInTable all_checkins={all_checkins}/>
    </div>
  )
}

export default App
