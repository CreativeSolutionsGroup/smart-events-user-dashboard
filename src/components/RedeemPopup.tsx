import { BottomPaper } from "@creativesolutionsgroup/bottom-paper"
import { Button, Paper, Typography } from "@mui/material"
import { PropsWithChildren, useEffect, useState } from "react"
import { IReward } from "../models/User"

interface PopupProps { reward: IReward, show?: boolean, onClose: Function };

export const RedeemPopup = ({ reward, show, onClose }: PropsWithChildren<PopupProps>) => {
  // The last Y scroll position.
  // This helps us set the fixed position bug.
  const [last_scroll, set_last_scroll] = useState(window.scrollY);

  useEffect(() => {
    let scroll = show ? window.scrollY : last_scroll;
    set_last_scroll(scroll);
    document.body.style.top = show ? `-${window.scrollY}px` : "";

    document.body.style.position = show ? "fixed" : "";
    document.body.style.overflow = show ? "hidden" : "scroll";
    document.body.style.overscrollBehaviorY = show ? "none" : "";
    !show && window.scrollTo(0, scroll);
  }, [show])

  return (
    <BottomPaper show={show ?? false} onClose={onClose}>
      <Typography variant="h5">{reward.name ?? ""}</Typography>
      <Typography variant="body1">{reward.instructions ?? ""}</Typography>
      <Typography color="text.secondary">{reward.description ?? ""}</Typography>
      <Button sx={{mt: 3}} variant="outlined" onClick={() => onClose()}>Redeem</Button>
    </BottomPaper>
  )
}