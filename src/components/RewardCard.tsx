import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";
import { IReward, IUserReward } from "../models/User";

const ActionArea = ({label}: PropsWithChildren<{label: string}>) => (
  <CardActionArea>
    <CardContent>
      <Typography variant="subtitle1" fontWeight="bold">{label}</Typography>
    </CardContent>
  </CardActionArea>
)

const RewardCard = ({ reward, is_redeemable, on_redeem }: React.PropsWithChildren<{ reward: IReward, is_redeemable: boolean, on_redeem: Function }>) => {
  if (is_redeemable) {
    return (
      <Card sx={{ alignItems: "center", cursor: "pointer", m: 1, background: grey[300], outlineColor: grey[400] }} onClick={() => on_redeem()}>
        <ActionArea label={reward.name} />
      </Card>
    )

  }
  else {
    return (
      <Card sx={{ alignItems: "center", cursor: "pointer", m: 1, outlineColor: grey[400] }} onClick={() => on_redeem()}>
        <ActionArea label={reward.name} />
      </Card>
    )
  }
}

export default RewardCard