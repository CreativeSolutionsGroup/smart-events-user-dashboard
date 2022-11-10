import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';

const LoginButton = () => { 
  
  const [is_logged_in, set_is_logged_in] = useState(false);

  useEffect(() => {
    set_is_logged_in(sessionStorage.getItem("credential") != null);
  }, [])

  if (!is_logged_in) {
    return (
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          sessionStorage.setItem("credential", credentialResponse.credential!);
          axios.defaults.headers.common = { "Authorization": `Bearer ${sessionStorage.getItem("credential")}` };
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