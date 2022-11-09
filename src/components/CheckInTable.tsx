import { Tab } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { CheckIn, Event } from "../models/checkin"
import { CheckInRow } from "./CheckIn"

const CheckInTable = ({ checkins }: React.PropsWithChildren<{ checkins: Array<CheckIn> }>) => {
  const [all_events, set_all_events] = useState<Array<Event>>();

  const get_all_events = async () => {
    let all_events_retrieved: Array<Event> = (await axios.get("/event")).data;
    set_all_events(all_events_retrieved);
  }

  useEffect(() => { get_all_events() }, []);

  return (
    <Table>
      <TableHead>
        <TableRow >
          <TableCell align="center">EVENT</TableCell>
          <TableCell align="center">TIME</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {checkins.map((checkin, i) => <CheckInRow key={i} event_alias={all_events?.find(e => e.id == checkin.event)?.alias!} checkin={checkin} />)}
      </TableBody>
    </Table>
  )
}

export default CheckInTable