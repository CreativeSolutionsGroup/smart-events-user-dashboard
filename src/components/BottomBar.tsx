import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import HomeIcon from "@mui/icons-material/Home"
import BarChartIcon from "@mui/icons-material/BarChart"
import { Paper } from "@mui/material";

export const BottomBar = () => {
  return (
    <div>
      <BottomNavigation component={Paper} sx={{ position: "fixed", bottom: 0, minWidth: "100%" }} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Stats" icon={<BarChartIcon />} />
      </BottomNavigation>
    </div>
  )
}