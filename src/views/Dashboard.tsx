import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@mui/material';
import { Layout } from '../components/Layout';
import RankupDialog from '../components/RankupDialog';
import RewardCard from '../components/RewardCard';

const Dashboard = () => {

  const handleClick = () => {};

  return (
    <Layout>
      <Box minWidth={350} width="50%" display="flex" flexDirection="column" mx="auto">
        <Typography align="center" variant="h4">Rewards</Typography>
        <RewardCard label="15% OFF Rinnova" is_redeemable={true} on_redeem={handleClick} />
        <RewardCard label="Free Book" is_redeemable={false} on_redeem={handleClick} />
        <RewardCard label="Free 16oz Coffee" is_redeemable={false} on_redeem={handleClick} />
        <RewardCard label="Free 16oz Coffee" is_redeemable={false} on_redeem={handleClick} />
      </Box>
    </Layout>
  )
}

export default Dashboard
