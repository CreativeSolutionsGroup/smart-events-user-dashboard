import { Button, Box, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { register } from "../services/User";

const RegisterUser = () => {

    const [decoded_token, set_decoded_token] = useState({} as any);
    const [stu_id, set_stu_id] = useState("");
    const [confirm_stu_id, set_confirm_stu_id] = useState("");
    const [enable, set_enable] = useState<boolean>(false);
    const [id_match, set_id_match] = useState<boolean>(false);
    const [id_length, set_id_length] = useState<boolean>(false);
    const [confirm_id_helper, set_confirm_id_helper] = useState<string>("");
    const [id_helper, set_id_helper] = useState<string>("");

    const get_all_register_components = () => {
        try {
            const cred = jwt_decode(sessionStorage.getItem("credential")!) as any;
            set_decoded_token(cred);
            error_check();
        } catch (e) {
            console.log("not logged in")
        }
    }

    const error_check = () => {
        if (stu_id.length !== 5) {
            set_id_length(false);
            set_id_helper("ID is not length 5");
        } else {
            set_id_length(true);
            set_id_helper("");
        }
        if (stu_id !== confirm_stu_id) {
            set_id_match(false);
            set_confirm_id_helper("IDs do not match");
        } else {
            set_id_match(true);
            set_confirm_id_helper("");
        }
    }

    /**
     * If not both the IDs length and contents are correct, disble the button. 
     * @returns Nothing really.
     */
    const enable_button = () => set_enable(id_match && id_length);

    const send_register = async () => await register(stu_id);

    useEffect(() => { get_all_register_components() }, []);
    useEffect(() => { error_check() }, [stu_id, confirm_stu_id]);
    useEffect(() => { enable_button() }, [id_match, id_length]);

    return (
        <Box sx={{ m: 4 }}>
            <Grid container spacing={2}>
                <Grid xs={12} sx={{ m: 1 }}>
                    <TextField label='Email' variant='outlined' defaultValue={decoded_token.email} disabled multiline fullWidth></TextField>
                </Grid>
                <Grid xs={12} sx={{ m: 1 }}>
                    <TextField label='Name' variant='outlined' defaultValue={decoded_token.name} multiline disabled fullWidth></TextField>
                </Grid>
                <Grid xs={12} sx={{ m: 1 }}>
                    <TextField label='5-digit ID' variant='outlined' onInput={(evt: any) => set_stu_id(evt.target.value)} inputProps={{ maxLength: 5 }} error={!id_length} helperText={id_helper} required fullWidth></TextField>
                </Grid>
                <Grid xs={12} sx={{ m: 1 }}>
                    <TextField label='Confirm 5-digit ID' variant='outlined' onInput={(evt: any) => set_confirm_stu_id(evt.target.value)} inputProps={{ maxLength: 5 }} error={!id_match} helperText={confirm_id_helper} required fullWidth></TextField>
                </Grid>
                <Grid xs={12} sx={{ m: 1 }}>
                    <Button variant='contained' disabled={!enable} onClick={send_register}>CONFIRM</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RegisterUser;