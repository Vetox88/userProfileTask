import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
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

const InterestsDialog = ({ open, onClose, selectedInterests, onInterestSelect }) => {
  const handleListItemClick = (interest) => {
    onInterestSelect(interest);
  };

  const filteredInterests = initialInterests.filter(
    (interest) => !selectedInterests.includes(interest)
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Interests</DialogTitle>
      <DialogContent>
        <List>
          {filteredInterests.map((interest) => (
            <ListItem key={interest} button onClick={() => handleListItemClick(interest)}>
              <ListItemText primary={interest} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

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
      />
    </div>
  );
};

export default InterestsSection;
