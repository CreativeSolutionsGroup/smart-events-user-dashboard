import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import HomeIcon from "@mui/icons-material/Home"
import BarChartIcon from "@mui/icons-material/BarChart"
import { Link, Paper } from "@mui/material";

export const BottomBar = () => {
  return (
      <BottomNavigation component={Paper} sx={{ position: "fixed", bottom: 0, minWidth: "100%" }} elevation={3} showLabels>
          <BottomNavigationAction LinkComponent={Link} value="dashboard" href="/dashboard" label="Dashboard" icon={<HomeIcon />} />
          <BottomNavigationAction LinkComponent={Link} value="stats" href="/stats" label="Stats" icon={<BarChartIcon />} />
      </BottomNavigation>
  )
}