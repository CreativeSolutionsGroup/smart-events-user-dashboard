import { TableCell, TableRow, Typography } from "@mui/material"
import { PropsWithChildren } from "react"
import { CheckIn } from "../models/checkin"

export const CheckInRow = ({ checkin, event_alias }: PropsWithChildren<{ checkin: CheckIn, event_alias: string }>) => {
  return (
    <TableRow>
      <TableCell>
        <Typography>{event_alias ?? ""}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{(new Date(+checkin.created)).toDateString()}</Typography>
      </TableCell>
    </TableRow>
  )
}