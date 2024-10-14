import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Slider } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
import axiosInstance from '../axiosInstance';

const Dashboard = () => {
  const [surveys, setSurveys] = useState([]);
  const [percentageComing, setPercentageComing] = useState(0);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axiosInstance.get('/api/surveys');
        setSurveys(response.data);
        calculatePercentage(response.data);
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    };

    fetchSurveys();
  }, []);

  const calculatePercentage = (data) => {
    const total = data.length;
    const comingCount = data.filter(survey => survey.willCome).length;
    const percentage = total ? (comingCount / total) * 100 : 0;
    setPercentageComing(percentage);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom align="center">Trip Survey Dashboard</Typography>

        <Box mb={4} display="flex" justifyContent="center">
          <Typography variant="h6">Percentage of People Coming: {percentageComing.toFixed(2)}%</Typography>
        </Box>

        <Slider
          value={percentageComing}
          aria-label="Percentage of People Coming"
          disabled
          valueLabelDisplay="on"
          sx={{ mb: 4 }}
        />

        <Grid container spacing={4} justifyContent="center">
          {surveys.map((survey, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>{survey.name}</Typography>
                  <Typography color="textSecondary">{survey.willCome ? "Will Come" : "Will Not Come"}</Typography>
                  {survey.willCome ? (
                    <>
                      <Typography variant="body2">Bringing Guests: {survey.guestCount}</Typography>
                      {survey.guestNames.length > 0 && (
                        <Typography variant="body2">Guest Names: {survey.guestNames.join(', ')}</Typography>
                      )}
                      <Typography variant="body2">Wants: {survey.additionalWants}</Typography>
                    </>
                  ) : (
                    <>
                      <Typography variant="body2">Reason Not Coming: {survey.reasonNotComing}</Typography>
                      {survey.wantToChangeDate && (
                        <Typography variant="body2">Preferred Change Date: {survey.acceptDate}</Typography>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;

