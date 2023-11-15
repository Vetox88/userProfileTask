import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Avatar, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { h1, description } from "../styles/TypographyStyles";
import {
  appBar,
  toolbar,
  userInfoContainer,
  avatarContainer,
  avatar,
  personIcon,
  textContainer,
  buttonContainer,
  dropzone,
  centerContent,
} from "../styles/ProfilePicture";
import PersonIcon from "@mui/icons-material/Person";
import DeleteDialog from "../features/DeleteDialog";

const Header = () => {
  const [profilePicture, setProfilePicture] = useState(() => {
    const storedPicture = localStorage.getItem("profilePicture");
    return storedPicture || "/path/to/default/picture";
  });
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    localStorage.setItem("profilePicture", profilePicture);
  }, [profilePicture]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setProfilePicture(imageUrl);
    setShowUploadPopup(false);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDeletePicture = () => {
    setProfilePicture("");
    setShowDeleteDialog(false);
  };

  const handleOpenDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  return (
    <div>
      <AppBar position="static" style={appBar}>
        <Toolbar style={toolbar}>
          <div style={userInfoContainer}>
            <div style={avatarContainer}>
              <Avatar alt="Profile Picture" src={profilePicture} sx={avatar}>
                <PersonIcon style={personIcon} />
              </Avatar>
            </div>
            <div style={textContainer}>
              <Typography color="#252733" variant="body1" sx={h1}>
                Profile
              </Typography>
              <Typography variant="body1" sx={description}>
                Update your photo and personal information.
              </Typography>
            </div>
          </div>
          <div style={buttonContainer}>
            <Button
              variant="contained"
              onClick={() => setShowUploadPopup(true)}
              sx={{ marginLeft: "auto", textTransform: "none" }}
            >
              Upload new picture
            </Button>
            {profilePicture && (
              <Button
                variant="outlined"
                onClick={handleOpenDeleteDialog}
                sx={{ marginRight: "8px", textTransform: "none" }}
              >
                Delete Picture
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {showUploadPopup && (
        <div style={centerContent}>
          <div style={dropzone} {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography
              variant="body1"
              sx={{ color: "#333", textAlign: "center" }}
            >
              Drop your profile picture here or click to select one.
            </Typography>
          </div>
        </div>
      )}

      <DeleteDialog
        open={showDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onDelete={handleDeletePicture}
      />
    </div>
  );
};

export default Header;
