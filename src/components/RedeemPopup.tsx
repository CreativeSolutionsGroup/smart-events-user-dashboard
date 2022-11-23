import { BottomPaper } from "@creativesolutionsgroup/bottom-paper"
import { Button, Paper, Typography } from "@mui/material"
import { PropsWithChildren } from "react"
import { IReward } from "../models/User"

interface PopupProps { reward: IReward, show?: boolean, onClose: Function };

export const RedeemPopup = ({ reward, show, onClose }: PropsWithChildren<PopupProps>) => {
  return (
    <BottomPaper show={show ?? false} onClose={onClose}>
      <Typography variant="h5">{reward.name ?? ""}</Typography>
      <Typography variant="body1">{reward.instructions ?? ""}</Typography>
      <Typography color="text.secondary">{reward.description ?? ""}</Typography>
      <Button sx={{mt: 3}} variant="outlined" onClick={() => onClose()}>Redeem</Button>
    </BottomPaper>
  )
}