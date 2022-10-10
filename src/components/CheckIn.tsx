import { TableCell, TableRow, Typography } from "@mui/material"
import axios from "axios"
import { PropsWithChildren, useEffect, useState } from "react"
import { CheckIn, Event } from "../models/checkin"

export const CheckInRow = ({ checkin }: PropsWithChildren<{ checkin: CheckIn }>) => {   
  const [the_event, set_the_event] = useState<Event>();

  const get_all_events = async () => {
      let all_events: Array<Event> = (await axios.get("http://localhost:3001/v1/event")).data;
      const match_events_to_checkin = all_events.find((event) => event.id == checkin.event)
      set_the_event(match_events_to_checkin);
  }

  // useEffect(() => get_all_events(), []);

  return (
      <TableRow>
        <TableCell>
          <Typography>{/*the_event.alias*/}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{(new Date(+checkin.created)).toDateString()}</Typography>
        </TableCell>
      </TableRow>
  )
}