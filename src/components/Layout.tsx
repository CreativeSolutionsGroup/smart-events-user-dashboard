import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { check_login } from "../services/User";
import { BottomBar } from "./BottomBar";
import AppBar from '@mui/material/AppBar'
import LogoutButton from './LogoutButton'
import { TopBar } from "./TopBar";
import { Box } from "@mui/material";

export const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [is_logged_in, set_is_logged_in] = useState(true);

  const do_login_check = async () => {
    const login_check_passed = await check_login();
    set_is_logged_in(login_check_passed)

    if (login_check_passed) {
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  };

  useEffect(() => { do_login_check() }, []);

  return (
    <div>
      <TopBar show_logout={is_logged_in} />

      <Box display="flex" flexDirection="column" minHeight="83vh" paddingY={2}>
        {children}
      </Box>

      <BottomBar />
    </div>
  );
}