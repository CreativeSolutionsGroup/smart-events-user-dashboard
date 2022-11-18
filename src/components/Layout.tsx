import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { check_login } from "../services/User";
import { BottomBar } from "./BottomBar";

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
      { children }
      <BottomBar />
    </div>
  );
}