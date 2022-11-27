import { PropsWithChildren, useState } from "react";
import { IReward, IUserReward } from "../models/User";
import { RedeemPopup } from "./RedeemPopup";
import RewardCard from "./RewardCard";

function UserRewardDisplay({ user_rewards }: PropsWithChildren<{ user_rewards: Array<IUserReward> }>) {
  const [current_reward, set_current_reward] = useState({} as IReward);
  const [show_reward_popup, set_show_reward_popup] = useState(false);
  const handle_click = (reward: IReward) => {
    return () => {
      set_current_reward(reward);
      set_show_reward_popup(true);
    }
  }

  const handle_close = () => {
    set_current_reward({} as IReward);
    set_show_reward_popup(false);
  }

  return (
    <div>
      <RedeemPopup show={show_reward_popup} reward={current_reward} onClose={handle_close} />

      {user_rewards.map(user_reward => (
        <RewardCard on_redeem={handle_click(user_reward.reward)} is_redeemable={user_reward.remaining_uses !== -1} reward={user_reward.reward} />
      ))}
    </div>
  )
}

export default UserRewardDisplay;
