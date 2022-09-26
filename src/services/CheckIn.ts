import axios from "axios";
import { CheckIn } from "../models/checkin";

export const get_all_checkins_for_student = async (stu_id: string) => {
    let allCheckIns:Array<CheckIn> = (await axios.get("http://localhost:3001/v1/checkin")).data;
    const matchEvents = allCheckIns.filter((checkIn) => {
        return stu_id === checkIn.student_id;
    })
    return matchEvents;
}