import { AspectRatio } from '@mui/joy'
import {
  Box,
  Typography,
} from '@mui/material'
import { PropsWithChildren } from 'react'
const RewardsGraphic = ({ reward_status, color }: PropsWithChildren<{ reward_status: string, color: string }>) => {
  return (
    <div className='RewardsGraphic'>
      <Box  display="flex" flexDirection="column" flexWrap="nowrap" justifyContent="center" alignItems="center">
        <Box height="200px" width="200px" p={5} sx={{ backgroundColor: color }} borderRadius="100%" display="flex" flexDirection="column" justifyContent="center">
          <Typography sx={{ fontWeight: "bold" }} color="white" variant="h3">{reward_status}</Typography>
          <Typography sx={{ fontWeight: "bold" }} color="white" variant="h6">Reward Status</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default RewardsGraphic