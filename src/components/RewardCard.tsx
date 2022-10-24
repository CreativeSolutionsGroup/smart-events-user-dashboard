import { Button, Card, Chip, Box, Typography } from "@mui/material"
import { useState } from "react";

const RewardCard = ({ label, status, is_redeemable }: React.PropsWithChildren<{ label: String, status: String, is_redeemable: boolean }>) => {

    /*const MyComponent = () => {
        const some_thing = () => {
             alert("Hello world");
        }
    
        return (
            <RewardCard on_redeem={some_thing} reward={true} />
        );
    }*/
    
    const [redeem, set_redeem] = useState("Redeem");

    const handleClick = () => {
        set_redeem("Redeemed");
    };

    if (is_redeemable) {
        return (
            <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem", alignItems: "center", p: 1, m: 1}}>
                <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
                <Typography variant="subtitle1">{status}</Typography>
            </Card>
        )
        
    }
    else {
        return (
            <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem", alignItems: "center", p: 1, m: 1}}>
                <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
                <Button variant="contained" onClick={handleClick}>{redeem}</Button>
            </Card>
        )
    }
}

export default RewardCard