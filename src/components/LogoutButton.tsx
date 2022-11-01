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
    <Button onClick={handleClick}> 
        Logout
    </Button>
  );
}

export default LogoutButton;