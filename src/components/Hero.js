import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Hero = ({ name, bio, profilePicture }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* <Avatar
            src={profilePicture}
            alt={name}
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              fontSize: '5rem',
              bgcolor: 'primary.light',
            }}
          >
            <PersonIcon sx={{ fontSize: '5rem' }} />
          </Avatar> */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                color: 'text.primary',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
              }}
            >
              {bio}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 