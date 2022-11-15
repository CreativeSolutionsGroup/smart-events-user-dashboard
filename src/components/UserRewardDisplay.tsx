import { PropsWithChildren } from "react";
import { IUserReward } from "../models/User";
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function UserRewardDisplay({ userRewards }: PropsWithChildren< {userRewards: Array<IUserReward>} >) {
  return (
    <div></div>
  )
}

export default UserRewardDisplay;