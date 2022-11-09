import { Button, Card, Chip, Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";

const RewardCard = ({ label, sub_label, is_redeemable, on_redeem }: React.PropsWithChildren<{ label: String, sub_label?: String, is_redeemable: boolean, on_redeem: Function }>) => {

    if (is_redeemable) {
        return (
            <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem", alignItems: "center", p: 1, m: 1, background: grey[400]}}>
                <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
                <Typography variant="subtitle1">{sub_label}</Typography>
            </Card>
        )
        
    }
    else {
        return (
            <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem", alignItems: "center", p: 1, m: 1}} onClick={() => on_redeem()}>
                <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
            </Card>
        )
    }
}

export default RewardCard