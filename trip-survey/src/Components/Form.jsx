import React, { useState } from 'react';
import { Container, TextField, Checkbox, FormControlLabel, Button, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../axiosInstance';

const Form = () => {
  const [name, setName] = useState('');
  const [willCome, setWillCome] = useState(true);
  const [bringingGuest, setBringingGuest] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [guestNames, setGuestNames] = useState(['']);
  const [reasonNotComing, setReasonNotComing] = useState('');
  const [additionalWants, setAdditionalWants] = useState('');
  const [wantToChangeDate, setWantToChangeDate] = useState(false);
  const [acceptDate, setAcceptDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGuestNameChange = (index, value) => {
    const newGuestNames = [...guestNames];
    newGuestNames[index] = value;
    setGuestNames(newGuestNames);
  };

  const handleGuestCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setGuestCount(count);

    const newGuestNames = [...guestNames];
    if (count > guestNames.length) {
      for (let i = guestNames.length; i < count; i++) {
        newGuestNames.push(''); 
      }
    } else {
      newGuestNames.splice(count); 
    }
    setGuestNames(newGuestNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      willCome,
      bringingGuest,
      guestCount: bringingGuest ? guestCount : 0,
      guestNames: bringingGuest ? guestNames : [],
      reasonNotComing: willCome ? null : reasonNotComing,
      additionalWants: willCome ? additionalWants : null,
      wantToChangeDate,
      acceptDate: wantToChangeDate ? acceptDate : null
    };

    setLoading(true);
    axiosInstance.post('/api/survey', formData)
      .then(() => {
        alert('Survey submitted!');
        setLoading(false);
      })
      .catch(() => {
        alert('Submission failed!');
        setLoading(false);
      });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Survey Form</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Checkbox checked={willCome} onChange={() => setWillCome(!willCome)} />}
            label="Will you come?"
          />
        </Box>
        {willCome ? (
          <Box mb={2}>
            <TextField
              label="What do you want more?"
              value={additionalWants}
              onChange={(e) => setAdditionalWants(e.target.value)}
              fullWidth
              required
              multiline
              rows={3}
            />
          </Box>
        ) : (
          <>
            <Box mb={2}>
              <TextField
                label="Why are you not coming?"
                value={reasonNotComing}
                onChange={(e) => setReasonNotComing(e.target.value)}
                fullWidth
                required
                multiline
                rows={3}
              />
            </Box>
            <Box mb={2}>
              <FormControlLabel
                control={<Checkbox checked={wantToChangeDate} onChange={() => setWantToChangeDate(!wantToChangeDate)} />}
                label="Do you want to change the date?"
              />
              {wantToChangeDate && (
                <TextField
                  label="Acceptable Date"
                  type="date"
                  value={acceptDate}
                  onChange={(e) => setAcceptDate(e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  required
                />
              )}
            </Box>
          </>
        )}
        <Box mb={2}>
          <FormControlLabel
            control={<Checkbox checked={bringingGuest} onChange={() => setBringingGuest(!bringingGuest)} />}
            label="Bringing a guest?"
          />
        </Box>
        {bringingGuest && (
          <>
            <Box mb={2}>
              <TextField
                label="Number of Guests"
                type="number"
                value={guestCount}
                onChange={handleGuestCountChange}
                fullWidth
                required
                inputProps={{ min: 1 }}
              />
            </Box>
            {guestNames.map((guestName, index) => (
              <Box mb={2} key={index}>
                <TextField
                  label={`Guest ${index + 1} Name`}
                  value={guestName}
                  onChange={(e) => handleGuestNameChange(index, e.target.value)}
                  fullWidth
                  required
                />
              </Box>
            ))}
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </form>
    </Container>
  );
};

export default Form;



