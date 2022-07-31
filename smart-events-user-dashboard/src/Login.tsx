import * as React from 'react';
import {
  Container, 
  Avatar, 
  TextField, 
  Button 
} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Login() {

  return (
    <div className="Login">
      <Container>
        <Avatar 
          alt="Yellow Jacket Logo"
          src="/src/assets/yellow-jacket-logo.png"
          variant="square"
          sx={{
            width: 200,
            height: 200,
          }}
          />
        <h1>Enter ID to continue</h1>
        <TextField />
        <Button>click me</Button>
      </Container>
    </div>
  )
}

export default Login
