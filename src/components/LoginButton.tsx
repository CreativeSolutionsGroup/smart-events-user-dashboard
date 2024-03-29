import { Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { check_login } from "../services/User";

const LoginButton = () => {

  const [is_logged_in, set_is_logged_in] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    set_is_logged_in(sessionStorage.getItem("credential") != null);
  }, [])

  if (!is_logged_in) {
    return (
      <GoogleLogin
        onSuccess={async credentialResponse => {
          sessionStorage.setItem("credential", credentialResponse.credential!);
          axios.defaults.headers.common = { "Authorization": `Bearer ${sessionStorage.getItem("credential")}` };
          try {
            const check_login_passed = await check_login();
            if (check_login_passed) {
              navigate("/dashboard")
            } else {
              navigate("/register")
            }
          } catch (e) {
            navigate("/register")
          }


        }}
        onError={() => {
          alert("Login Failed");
        }}
        hosted_domain="cedarville.edu"
      />
    );
  }
  else {
    setTimeout(() => navigate("/dashboard"), 1500)

    return (
      <div>
        <Typography textAlign={"center"}>Already logged in.</Typography>
        <Typography textAlign={"center"}>Redirecting...</Typography>
      </div>
    );
  }
}

export default LoginButton;