import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import HomeIcon from "@mui/icons-material/Home"
import BarChartIcon from "@mui/icons-material/BarChart"

export const BottomBar = () => {
    return (
        <div>
            <BottomNavigation className="fixed bottom-0 w-full" showLabels>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Stats" icon={<BarChartIcon />} />
            </BottomNavigation>
        </div>
    )
}