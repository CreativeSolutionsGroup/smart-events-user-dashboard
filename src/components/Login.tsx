import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import LoginButton from './LoginButton';

const Login = () => {
  return (
    <Card
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        flexwrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CardContent>
        <Typography mb={2.5} variant="h5">Login with Google</Typography>
        <LoginButton />
      </CardContent>
    </Card>
  )
}

export default Login

