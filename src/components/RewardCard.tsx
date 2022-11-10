import { Button, Card, Chip, Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";

const RewardCard = ({ label, is_redeemable, on_redeem }: React.PropsWithChildren<{ label: String, is_redeemable: boolean, on_redeem: Function }>) => {
  if (is_redeemable) {
    return (
      <Card sx={{ alignItems: "center", cursor: "pointer", p: 1, m: 1, background: grey[300], outlineColor: grey[400] }}>
        <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
      </Card>
    )

  }
  else {
    return (
      <Card sx={{ alignItems: "center", cursor: "pointer", p: 1, m: 1, outlineColor: grey[400] }} onClick={() => on_redeem()}>
        <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
      </Card>
    )
  }
}

export default RewardCard