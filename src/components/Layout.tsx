import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { check_login } from "../services/User";
import { BottomBar } from "./BottomBar";
import AppBar from '@mui/material/AppBar'
import LogoutButton from './LogoutButton'

export const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const do_login_check = async () => {
    if (sessionStorage.getItem("credential") == null) {
      navigate("/login");
    }
    try {
      const log = await check_login();
      if (log.status === 200) {
        navigate('/dashboard')
      }
    } catch (e) {
      navigate("/login");
    }
  };

  useEffect(() => { do_login_check() }, []);

  return (
    <div>
      <AppBar sx={{width: 1, display: "flex", position: "sticky", bgcolor: "white"}}>
        <LogoutButton></LogoutButton>
      </AppBar>
      { children }
      <BottomBar />
    </div>
  );
}