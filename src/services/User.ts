import axios from "axios"

export const register = async (student_id: string) => {
  await axios.post(`/user/${student_id}`);
}

export const check_login = async () => {
  return await axios.get("/me");
}

export const rankup = async () => {
  return await axios.post("/me/up");
}