import { Tab } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { CheckIn } from "../models/checkin"
import { CheckInRow } from "./CheckIn"

function CheckInTable({ checkins }: React.PropsWithChildren<{ checkins: Array<CheckIn> }>) {
  return (
    <Table>
      <TableHead>
        <TableRow >
            <TableCell>
              Event:
            </TableCell>
          </TableRow>
          <TableRow >
            <TableCell>
              Time:
            </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {checkins.map((checkin, i) => <CheckInRow key={i} checkin={checkin} />)}
      </TableBody>
    </Table>
  )
}

export default CheckInTable