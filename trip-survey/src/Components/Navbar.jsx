// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  // #99ccff #5c8a8a

  return (
    <AppBar position="static" sx={{ backgroundColor: '#8585ad', mb: 2 }}> 
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Trip Survey
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Interested
        </Button>
        <Button color="inherit" onClick={() => navigate('/Dashboard')}>
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


