import { Button } from '@mui/material';
import { googleLogout } from '@react-oauth/google';

const LogoutButton = () => {

  const handleClick = () => {
    googleLogout();
    sessionStorage.removeItem("credential");
    alert("Logged out.");
    window.location.reload();
  };

  return (
    <Button onClick={handleClick} variant="outlined" sx={{m: 1, width: 1/6}}> 
        Logout
    </Button>
  );
}

export default LogoutButton;