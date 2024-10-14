import React, { useState } from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box ,CardMedia,Chip} from '@mui/material';
import tripData from '../../tripData';
import { AccessAlarm, BeachAccess, LocalDining } from '@mui/icons-material'; 
import Form from './Form';
import Navbar from './Navbar';




const About = () => {
    const [showForm, setShowForm] = useState(true);

  return (
    <>
    <Navbar/>
     <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        {tripData.trip} Trip
      </Typography>
      {tripData.itinerary.map((day, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: 2,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: index % 2 === 0 ? '#e3f2fd' : '#fff3e0', 
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {day.day} - {day.date}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Activities:
            </Typography>
            <ul>
              {day.activities.map((activity, idx) => (
                <li key={idx}>
                  <Typography variant="body1" component="span">
                    {activity}
                  </Typography>
                  {activity.toLowerCase().includes('lunch') && <Chip label="🍽️" />}
                  {activity.toLowerCase().includes('rafting') && <Chip label="🌊" />}
                  {activity.toLowerCase().includes('visit') && <Chip label="🗺️" />}
                </li>
              ))}
            </ul>
            
          </CardContent>
        </Card>
      ))}

{showForm ? <Form/> : ""}   
    </Box>
    </>
  )
}

export default About
