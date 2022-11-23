import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import HomeIcon from "@mui/icons-material/Home"
import BarChartIcon from "@mui/icons-material/BarChart"
import { Paper, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

export const BottomBar = () => {
  const location = useLocation();

  return (
      <BottomNavigation value={location.pathname} component={Paper} sx={{ position: "fixed", bottom: 0, minWidth: "100%" }} elevation={3} showLabels>
          <BottomNavigationAction label="Dashboard" value="/dashboard" icon={<HomeIcon />} href="/dashboard" LinkComponent={Link} />
          <BottomNavigationAction label="Stats" value="/stats" icon={<BarChartIcon />} href="/stats" LinkComponent={Link}/>
      </BottomNavigation>
  )
}
