import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Avatar, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const DeleteDialog = ({ open, onClose, onDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: "426px",
          height: "248px",
          borderRadius: "5px",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "21px",
        }}
      >
        <Avatar style={{ backgroundColor: "#FF6868" }}>
          <ErrorOutlineIcon style={{ color: "white" }} />
        </Avatar>
      </div>

      <DialogTitle style={{ textAlign: "center" }}>
        Delete profile photo?
      </DialogTitle>
      <DialogContent style={{ textAlign: "center" }}>
        <Typography>
          You are about to delete your profile photo,
          <br />
          would you like to proceed?
        </Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button onClick={onClose} variant="outlined">
          No, keep it
        </Button>
        <Button onClick={onDelete} variant="contained">
          Yes, delete it
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
