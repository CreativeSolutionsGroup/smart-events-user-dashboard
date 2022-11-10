import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { check_login } from "../services/User";

const LoginButton = () => { 
  
  const [is_logged_in, set_is_logged_in] = useState(false);

  useEffect(() => {
    set_is_logged_in(sessionStorage.getItem("credential") != null);
  }, [])

  if (!is_logged_in) {
    return (
      <GoogleLogin
        onSuccess={async credentialResponse => {
          sessionStorage.setItem("credential", credentialResponse.credential!);
          axios.defaults.headers.common = { "Authorization": `Bearer ${sessionStorage.getItem("credential")}` };
          const navigate = useNavigate();
          try {
            const log = await check_login();
            if (log.status === 200) {
              navigate('/dashboard')
            }
          } catch (e) {
            navigate("/register");
          }
          set_is_logged_in(true)
        }}
        onError={() => {
          alert("Login Failed");
        }}
        hosted_domain="cedarville.edu"
      />
    );
  }
  else {
    return (
      <div>
        Already logged in.
      </div>
    );
  }
}

export default LoginButton;