import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import { rankup } from "../services/User";

const RankupDialog = () => {
  const [open, set_open] = useState(false);

  const handleOpen = () => {
    set_open(true);
  };

  const handleClose = async () => {
    await rankup();
    set_open(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        ALERT DIALOG
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogContent>
          <DialogTitle fontWeight="bold">
            <Typography variant="h2" sx={{mb: 2}} align="center">
              🎉
            </Typography>
            You Ranked Up!
          </DialogTitle>
          <DialogActions sx={{justifyContent: "center"}}>
            <Button color="primary" variant="contained" onClick={handleClose}>
              DO IT
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RankupDialog