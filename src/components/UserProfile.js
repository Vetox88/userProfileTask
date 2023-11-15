import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import theme from '../theme';
import InputField from '../features/InputField';
import { headerTextStyle, formContainerStyle, buttonContainerStyle, dividerStyle} from '../styles/InputFieldStyle'

const PersonalInfo = () => {
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('personalInfoData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSaveClick = () => {
    
    setEditMode(false);

    localStorage.setItem('personalInfoData', JSON.stringify(formData));
  };

  
  const renderGridItem = (label, value, field, xs) => (
    <Grid item xs={xs}>
      {InputField(label, value, field, editMode, handleChange)}
    </Grid>
  );

  return (
    <>
      <div style={formContainerStyle}>
        <div style={buttonContainerStyle}>
          <Typography variant="h4" sx={headerTextStyle}>
            Personal Info
          </Typography>
          <Button
            variant="text"
            sx={{ ...theme.palette.primary, textTransform: 'none' }}
            onClick={editMode ? handleSaveClick : handleEditClick}
          >
            {editMode ? 'Save' : 'Edit info'}
          </Button>
        </div>

        <Grid container spacing={2}>
          {renderGridItem('First Name', formData.firstName, 'firstName', 2)}
          {renderGridItem('Last Name', formData.lastName, 'lastName', 2)}
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '32px' }}>
          {renderGridItem('Phone', formData.phone, 'phone', 2)}
          {renderGridItem('Email', formData.email, 'email', 2)}
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '32px' }}>
          {renderGridItem('Birthday', formData.birthday, 'birthday', 12)}
        </Grid>
      </div>
      <div style={dividerStyle}></div>
    </>
  );
};

export default PersonalInfo;
