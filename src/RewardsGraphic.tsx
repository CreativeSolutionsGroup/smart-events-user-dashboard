import {
    Box,
    LinearProgress,
    Typography,
} from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio'
function RewardsGraphic() {
    return (
        <div className='RewardsGraphic'>
            <Box className='h-auto flex flex-col flex-nowrap justify-center items-center rounded-3xl'>
                <AspectRatio ratio='1/1' className='w-11/12 mb-8'>
                    <Box className='bg-amber-100 border-2 border-amber-500 rounded-full flex flex-col justify-center'>
                        <Typography className='text-9xl font-bold font-poppins text-amber-500'>Gold</Typography>
                        <Typography className='text-2xl font-bold font-poppins text-zinc-700'>Reward Status</Typography>
                    </Box>
                </AspectRatio>
            </Box>
        </div>
    )
}

export default RewardsGraphic