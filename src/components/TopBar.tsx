import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { PropsWithChildren } from "react"
import LogoutButton from "./LogoutButton"

export const TopBar = ({ show_logout }: PropsWithChildren<{ show_logout: boolean }>) => {
  return (
    <AppBar color="secondary" sx={{ width: 1, display: "flex", position: "sticky" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">Smart Events</Typography>
        {show_logout && <LogoutButton />}
      </Toolbar>
    </AppBar>
  )
}