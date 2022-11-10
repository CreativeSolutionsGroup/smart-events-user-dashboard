import {
  Box,
  Card,
} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginButton from './LoginButton';

const Login = () => {
  return (
    <Card
      sx={{
        py: 3,
        display: 'flex',
        flexDirection: 'column',
        flexwrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LoginButton />
      </Box>
    </Card>
  )
}

export default Login

