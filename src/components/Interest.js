import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import InterestsDialog from '../features/InterestsDialog'; 
import { h1, h2 } from '../styles/TypographyStyles';
import { containerStyle, flexContainerStyle, headerStyle, chipStyle, buttonStyle } from '../styles/InterestsSectionStyles';

const initialInterests = [
  'Soccer',
  'Beer Brewing',
  'Bicycling',
  'Wine',
  'Car',
  'Watches',
  'Games',
  'Movies',
  'Music',
  'Racing',
  'Coding',
];

const InterestsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleAddMoreClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleInterestSelect = (interest) => {
    setSelectedInterests((prevInterests) => [...prevInterests, interest]);
    setDialogOpen(false);
  };

  return (
    <div style={containerStyle}>
      <div style={flexContainerStyle}>
        <Typography variant="h4" sx={h1} style={headerStyle}>
          Other settings
        </Typography>
        <Typography variant="h4" sx={h2} style={headerStyle}>
          Interests
        </Typography>
      </div>

      <Stack direction="row" spacing={1} sx={headerStyle}>
        {selectedInterests.map((interest) => (
          <Chip
            key={interest}
            label={interest}
            onDelete={() => {
              setSelectedInterests((prevInterests) =>
                prevInterests.filter((i) => i !== interest)
              );
            }}
            sx={chipStyle}
          />
        ))}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddMoreClick}
          sx={buttonStyle}
        >
          Add More
        </Button>
      </Stack>

      <InterestsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        selectedInterests={selectedInterests}
        onInterestSelect={handleInterestSelect}
        initialInterests={initialInterests}
      />
    </div>
  );
};

export default InterestsSection;
