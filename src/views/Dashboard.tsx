import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
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

  async function get_user_rewards() {
    const reward_request = await axios.get("/user_rewards");
    const rewards: Array<IUserReward> = reward_request.data;

    set_rewards(rewards);
  }

  async function get_user_reward_tier() {
    const reward_tier_request = await axios.get("/me");
    const reward_tier: IRewardTier = reward_tier_request.data;

    set_reward_tier(reward_tier);
  }

  useEffect(() => {
    get_user_rewards();
    get_user_reward_tier();
  }, [])

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
