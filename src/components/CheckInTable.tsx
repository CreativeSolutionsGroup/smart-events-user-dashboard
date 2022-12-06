import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react";
import { CheckIn, Event } from "../models/Checkin"
import { get_all_events } from "../services/CheckIn";
import { CheckInRow } from "./CheckIn"

const CheckInTable = ({ checkins }: React.PropsWithChildren<{ checkins: Array<CheckIn> }>) => {
  const [all_events, set_all_events] = useState<Array<Event>>();

  const get_events = async () => {
    let all_events_retrieved: Array<Event> = await get_all_events();
    set_all_events(all_events_retrieved);
  }

  useEffect(() => { get_events() }, []);

  return (
    <Table>
      <TableHead>
        <TableRow >
          <TableCell align="center">Event</TableCell>
          <TableCell align="center">Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {checkins.map((checkin, i) => <CheckInRow key={i} event_alias={all_events?.find(e => e.id == checkin.event)?.alias!} checkin={checkin} />)}
      </TableBody>
    </Table>
  )
}

export default CheckInTable