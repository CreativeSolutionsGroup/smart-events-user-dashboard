import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { check_login, get_all_reward_tiers } from "../services/User";
import { BottomBar } from "./BottomBar";
import AppBar from '@mui/material/AppBar'
import LogoutButton from './LogoutButton'
import { TopBar } from "./TopBar";
import { Box } from "@mui/material";
import { IRewardTier } from "../models/User";

export const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [is_logged_in, set_is_logged_in] = useState(true);
  const [tiers, set_tiers] = useState<Array<IRewardTier>>([]);

  const do_login_check = async () => {
    const login_check_passed = await check_login();
    set_is_logged_in(login_check_passed)

    if (!login_check_passed) {
      navigate("/login")
    } 
  };

  const get_reward_tiers = async () => {
    set_tiers(await get_all_reward_tiers());
  }

  useEffect(() => { do_login_check(); get_reward_tiers() }, []);

  return (
    <div>
      <TopBar show_logout={is_logged_in} />

      <Box display="flex" flexDirection="column" minHeight="83vh" paddingY={2}>
        {children}
      </Box>

      {/*<BottomBar />*/}
    </div>
  );
}