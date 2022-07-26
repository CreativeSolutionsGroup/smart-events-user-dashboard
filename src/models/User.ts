export interface IReward {
  name: string;
  description: string;
  instructions: string;
  default_uses: number;
  image_url: string;
}

export interface IUserReward {
  user_id: string;
  reward: IReward;
  remaining_uses: number;
  date_earned: Date;
}

export interface IRewardTier {
  name: string;
  description: string;
  color: string;
  min_points: number;
}