import { Tab } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { CheckIn } from "../models/checkin"

function CheckInTable({ all_checkins }: React.PropsWithChildren<{ all_checkins: Array<CheckIn> }>) {
  return (
    <Table>
      <TableHead>
        <TableRow >
          <TableCell>
            Event:
          </TableCell>
          <TableCell>
            Time:
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {all_checkins.map(checkin => { return (
        <TableRow>
          <TableCell>

          </TableCell>
          <TableCell>
            {(new Date(checkin.created)).toDateString()}
          </TableCell>
        </TableRow>) })}
      </TableBody>
    </Table>
  )
}

export default CheckInTable