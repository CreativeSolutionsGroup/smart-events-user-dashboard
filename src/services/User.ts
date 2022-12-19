import axios from "axios"
import { IRewardTier } from "../models/User";

export const register = async (student_id: string) => {
  await axios.post(`/user/${student_id}`);
}

/**
 * Simply a get request to the backend. Returns 401/403
 * if not authenticated correctly.
 * @returns the axios response object for the /me endpoint.
 */
export const check_login = async (): Promise<boolean> => {
  if (sessionStorage.getItem("credential") == null) {
    return false;
  }

  let res = await axios.get("/me");
  if (res.status !== 200) {
    return false;
  }

  return true;
}

export const rankup = async () => {
  return await axios.post("/me/up");
}

export const getRewardTiers = async (): Promise<Array<IRewardTier>> => {
  return await axios.get("/reward_tier");
}