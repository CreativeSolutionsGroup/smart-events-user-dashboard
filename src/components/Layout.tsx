import { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { check_login } from "../services/User";

export const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const do_login_check = async () => {
    try {
      const log = await check_login();
      navigate('/dashboard')
    } catch (e) {
      navigate("/login");
    }
  };

  useEffect(() => { do_login_check() }, []);

  return (
    <div>
      { children }
    </div>
  );
}