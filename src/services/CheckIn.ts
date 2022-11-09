import axios from "axios";
import { CheckIn, Event } from "../models/checkin";

/**
 * 
 * @param stu_id The students ID to get.
 * @returns An array of CheckIns that a student has.
 */
export const get_all_checkins_by_id = async (stu_id: string): Promise<Array<CheckIn>> => {
    let all_check_ins = await axios.get("/checkin/" + stu_id);
    return all_check_ins.data as Array<CheckIn>;
}

export const get_all_events = async (): Promise<Array<Event>> => {
   const req = await axios.get("/events");
   return req.data as Array<Event>;
}