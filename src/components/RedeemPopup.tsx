import { BottomPaper } from "@creativesolutionsgroup/bottom-paper"
import { Typography } from "@mui/material"
import { PropsWithChildren } from "react"

interface PopupProps { title: string, description: string, instructions: string, show: boolean, onClose: Function };

export const RedeemPopup = ({ title, description, instructions, show, onClose }: PropsWithChildren<PopupProps>) => {
  return (
    <BottomPaper show={show} onClose={onClose}>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{instructions}</Typography>
    </BottomPaper>
  )
}