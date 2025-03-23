import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <IconButton
      onClick={onToggle}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: 'background.paper',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkModeToggle; 