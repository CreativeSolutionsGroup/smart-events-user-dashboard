import { AspectRatio } from '@mui/joy'
import {
  Box,
  Typography,
} from '@mui/material'
import { PropsWithChildren } from 'react'
const RewardsGraphic = ({ reward_status, color }: PropsWithChildren<{ reward_status: string, color: string }>) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box sx={{ height: 200, width: 200 }} textAlign="center" p={5} bgcolor={color + "0C"} borderRadius="100%" display="flex" flexDirection="column" zIndex="2" justifyContent="center">
        <Typography sx={{ fontWeight: "bold" }} color={color} variant="h1">{reward_status}</Typography>
        <Typography sx={{ fontWeight: "bold" }} color="text.secondary" variant="h6">Reward Status</Typography>
      </Box>
    </Box>
  )
}

export default RewardsGraphic