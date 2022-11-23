import { AppBar } from "@mui/material"
import LogoutButton from "./LogoutButton"

export const TopBar = () => {
  return (
    <AppBar sx={{ width: 1, display: "flex", position: "sticky", bgcolor: "white" }}>
      <LogoutButton />
    </AppBar>
  )
}