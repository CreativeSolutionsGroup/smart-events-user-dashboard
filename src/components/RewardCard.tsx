import { Button, Card, Chip, Box, Typography } from "@mui/material"
import { useState } from "react";

const RewardCard = ({ label, sub_label, is_redeemable, on_redeem, is_claimed }: React.PropsWithChildren<{ label: String, sub_label?: String, is_redeemable: boolean, on_redeem: Function, is_claimed?: Boolean }>) => {

    if (is_redeemable) {
        return (
            <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem", alignItems: "center", p: 1, m: 1}}>
                <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
                <Typography variant="subtitle1">{sub_label}</Typography>
            </Card>
        )
        
    }
    else {
        return (
            <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25rem", alignItems: "center", p: 1, m: 1}}>
                <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
                <Button variant="contained" onClick={() => on_redeem()}>{is_claimed ? "Redeemed":"Redeem"}</Button>
            </Card>
        )
    }
}

export default RewardCard