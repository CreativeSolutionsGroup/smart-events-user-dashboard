import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { NotFound } from "../views/NotFound";

/**
 * A nice hacky element for redirecting people from `:path/` to `:path`
 * OR giving you the 404 page.
 * See usage in main.tsx
 */
export const Redirector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [is_redirecting, set_is_redirecting] = useState(true);

  useEffect(() => {
    if (location.pathname.endsWith("/")) {
      navigate(location.pathname.slice(0, -1));
    }
    set_is_redirecting(false);
  }, [])

  if (is_redirecting) {
    return <Typography variant="h1">Redirecting...</Typography>
  }

  return <NotFound />
}