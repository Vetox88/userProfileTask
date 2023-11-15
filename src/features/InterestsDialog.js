import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const InterestsDialog = ({ open, onClose, selectedInterests, onInterestSelect, initialInterests }) => {
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

export default InterestsDialog;
