import axios from "axios"

export const register = async (student_id: string) => {
  await axios.post(`/user/${student_id}`);
}