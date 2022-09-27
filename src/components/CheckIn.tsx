import { TableCell, TableRow, Typography } from "@mui/material"
import { PropsWithChildren } from "react"
import { CheckIn } from "../models/checkin"

export const CheckInRow = ({ checkin }: PropsWithChildren<{ checkin: CheckIn }>) => {
  return (
      <TableRow>
        <TableCell>

        </TableCell>
        <TableCell>
          <Typography>{(new Date(+checkin.created)).toDateString()}</Typography>
        </TableCell>
      </TableRow>
  )
}