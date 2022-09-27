export interface CheckIn {
    id: string,
    event: string,
    student_id: string,
    // A string that represents a unix timestamp. (Cast to number)
    created: string
}