import { Button, Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const RegisterUser = () => {

    const [decoded_token, set_decoded_token] = useState({} as any);
    const [name, set_name] = useState("");
    const [stu_id, set_stu_id] = useState("");
    const [confirm_stu_id, set_confirm_stu_id] = useState("");
    const [enable, set_enable] = useState<boolean>(true);
    const [id_match, set_id_match] = useState<boolean>(false);
    const [id_length, set_id_length] = useState<boolean>(false);

    const get_all_register_components = () => {
        set_decoded_token(jwt_decode(sessionStorage.getItem("credential")!));
    }

    const enable_button = () => {
        if (stu_id !== confirm_stu_id) {
            set_id_match(true);
        } 
        if (stu_id.length !== 5) {
            set_id_length(true);
        }
        if (name !== "" && stu_id !== "") {
            set_enable(false);
        }
    }

    useEffect(() => {get_all_register_components()}, []);
    useEffect(() => {enable_button()}, [name, stu_id, confirm_stu_id]);

    return (
    <Box sx={{m: 4}}>
        <Grid container spacing={2}>
            <Grid xs={12} sx={{m: 1}}>
                <TextField label='Email:' variant='outlined' defaultValue={decoded_token.email} disabled></TextField>
            </Grid>
            <Grid xs={12} sx={{mb: 1}}>
                <TextField label='Name:' variant='outlined' defaultValue={decoded_token.name} onInput={(evt: any) => set_name(evt.target.value)}></TextField>
            </Grid>
            <Grid xs={12} sx={{mb: 1}}>
                <TextField label='5-digit ID:'variant='outlined' onInput={(evt: any) => set_stu_id(evt.target.value)} error={id_length}></TextField>
            </Grid>
            <Grid xs={12} sx={{mb: 1}}>
                <TextField label='Confirm 5-digit ID:' variant='outlined' onInput={(evt: any) => set_confirm_stu_id(evt.target.value)} error={id_match}></TextField>
            </Grid>
            <Grid xs={12} sx={{mb: 1}}>
                <Button variant='contained' disabled={enable}>CONFIRM</Button>
            </Grid>
        </Grid>
    </Box>
    );
}

export default RegisterUser;