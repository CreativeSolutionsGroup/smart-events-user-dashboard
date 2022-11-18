import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";

const RewardCard = ({ label, is_redeemable, on_redeem }: React.PropsWithChildren<{ label: String, is_redeemable: boolean, on_redeem: Function }>) => {
  if (is_redeemable) {
    return (
      <Card sx={{ alignItems: "center", cursor: "pointer", m: 1, background: grey[300], outlineColor: grey[400] }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )

  }
  else {
    return (
      <Card sx={{ alignItems: "center", cursor: "pointer", m: 1, outlineColor: grey[400] }} onClick={() => on_redeem()}>
        <CardActionArea>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default RewardCard