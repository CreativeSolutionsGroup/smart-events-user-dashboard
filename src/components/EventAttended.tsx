import {
    Box,
    Typography,
} from '@mui/material'
import { PropsWithChildren } from 'react'
const EventsAttended = ({ checkin_count, color }: PropsWithChildren<{ checkin_count: number, color: string }>) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box sx={{ height: 200, width: 200 }} textAlign="center" p={5} bgcolor={color + "0C"} borderRadius="100%" display="flex" flexDirection="column" zIndex="2" justifyContent="center">
                <Typography sx={{ fontWeight: "bold" }} color={color} variant="h1">{checkin_count}</Typography>
                <Typography sx={{ fontWeight: "bold" }} color="text.secondary" variant="h6">Event{checkin_count === 1 ? "" : "s"} Attended</Typography>
            </Box>
        </Box>
    )
}

export default EventsAttended;