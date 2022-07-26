import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import RankupDialog from '../components/RankupDialog';
import RewardCard from '../components/RewardCard';
import RewardsGraphic from '../components/RewardGraphic';
import UserRewardDisplay from '../components/UserRewardDisplay';
import { IReward, IRewardTier, IUserReward } from '../models/User';

const Dashboard = () => {
  const [reward_tier, set_reward_tier] = useState({
    name: "Gold",
    color: "#FF9B39",

  } as IRewardTier)
  const [rewards, set_rewards] = useState([
    {
      date_earned: new Date(),
      remaining_uses: -1,
      user_id: "",
      reward: {
        name: "15% OFF Rinnova",
        instructions: "Do something with this",
        description: "This is a test",
      } as IReward
    } as IUserReward,
    {
      date_earned: new Date(),
      remaining_uses: 1,
      user_id: "",
      reward: {
        name: "Free Book",
        instructions: "Do something with this",
        description: "This is a test",
      } as IReward
    } as IUserReward,
    {
      date_earned: new Date(),
      remaining_uses: 1,
      user_id: "",
      reward: {
        name: "Free 16oz Coffee",
        instructions: "Do something with this",
        description: "This is a test",
      } as IReward
    } as IUserReward,
    {
      date_earned: new Date(),
      remaining_uses: 1,
      user_id: "",
      reward: {
        name: "Free 16oz Coffee",
        instructions: "Do something with this",
        description: "This is a test",
      } as IReward
    } as IUserReward
  ])

  return (
    <Layout>
      <Box minWidth={350} pt={8} width="50%" display="flex" flexDirection="column" mx="auto">
        <RewardsGraphic reward_status={reward_tier.name} color={reward_tier.color} />
        <Typography mt={5} align="center" variant="h4">Rewards</Typography>
        <UserRewardDisplay user_rewards={rewards} />
      </Box>
    </Layout>
  )
}

export default Dashboard
