import axios from "axios";
import { CheckIn } from "../models/checkin";

/**
 * 
 * @param stu_id The students ID to get.
 * @returns An array of CheckIns that a student has.
 */
export const get_all_checkins_by_id = async (stu_id: string) => {
    // TODO: use a backend endpoint that does this filter.
    let all_check_ins: Array<CheckIn> = (await axios.get("http://localhost:3001/v1/checkin")).data;
    const filtered_check_ins = all_check_ins.filter((check_in) => {
        return stu_id === check_in.student_id;
    })
    return filtered_check_ins;
}