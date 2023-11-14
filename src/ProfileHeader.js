import React from 'react';
import { AppBar, Toolbar, Button, Avatar, Typography } from '@mui/material';
import theme from './theme';

const useStyles = {
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid #ccc',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '50px',
    marginTop: '50px',
    marginLeft: '32px',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    width: 439,
    height: 120,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 168,
    height: 38,
    whiteSpace: 'nowrap',
    borderRadius: 5,
    padding: '12px 20px',
    gap: 8,
    color: theme.palette.primary,
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '0.08px',
    textAlign: 'left',
    marginBottom: '10px',
  },
  description: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '14px',
    letterSpacing: '0.09px',
    textAlign: 'left',
    color: '#83888F',
  },
};

const Header = () => {
  return (
    <AppBar position="static" style={useStyles.appBar}>
      <Toolbar style={useStyles.toolbar}>
        <div style={useStyles.userInfoContainer}>
          <Avatar alt="Profile Picture" src="/path/to/profile/picture" style={useStyles.avatar} />
          <div style={useStyles.textContainer}>
            <Typography color="#252733" variant="body1" sx={useStyles.title}>
              Your Text Here
            </Typography>
            <Typography variant="body1" sx={useStyles.description}>
              Update your photo and personal information.
            </Typography>
          </div>
        </div>
        <div style={useStyles.buttonContainer}>
          <Button variant="contained">Upload new picture</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
