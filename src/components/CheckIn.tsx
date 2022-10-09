import { TableCell, TableRow, Typography } from "@mui/material"
import axios from "axios"
import { PropsWithChildren, useEffect, useState } from "react"
import { CheckIn, Event } from "../models/checkin"
import { get_all_checkins_by_id } from "../services/CheckIn"

export const CheckInRow = ({ checkin }: PropsWithChildren<{ checkin: CheckIn }>) => {   
  
  const get_all_events = async () => {
      let all_events: Array<Event> = (await axios.get("http://localhost:3001/v1/event")).data;
      const match_events_to_checkin = all_events.filter((event) => event.id == checkin.event)
      return match_events_to_checkin[0].alias;
  }

  return (
      <TableRow>
        <TableCell>
          <Typography>{get_all_events().toString()}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{(new Date(+checkin.created)).toDateString()}</Typography>
        </TableCell>
      </TableRow>
  )
}