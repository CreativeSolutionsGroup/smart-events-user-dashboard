import { GoogleLogin } from 'react-google-login';

const LoginButton = (props: any) => {

  const clientId = '8990298927-tftcl4kcfe52ikmu3quthlo7v3qvognu.apps.googleusercontent.com';

  const onSuccess = (res: any) => {
    console.log('Login suceeded: res:', res);
    //alert("Suceeded to login.");
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
    //alert("Failed to login.");
  };

  return (
     <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        hostedDomain="cedarville.edu"
        isSignedIn={true}
        prompt="consent"
        fetchBasicProfile={false}
      />
  );
}

export default LoginButton;