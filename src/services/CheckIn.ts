import axios from "axios";
import { CheckIn } from "../models/checkin";

/**
 * 
 * @param stu_id The students ID to get.
 * @returns An array of CheckIns that a student has.
 */
export const get_all_checkins_by_id = async (stu_id: string) => {
    let all_check_ins: Array<CheckIn> = (await axios.get("/checkin/" + stu_id)).data;
    return all_check_ins;
}