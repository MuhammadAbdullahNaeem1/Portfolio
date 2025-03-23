import React, { useState } from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Hero = ({ name, bio, profilePicture }) => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    console.log("Profile image failed to load:", profilePicture);
    setImageError(true);
  };

  // Check if the URL is a GitHub private image URL with JWT token
  const isPrivateGithubUrl = profilePicture && (
    profilePicture.includes('private-user-images.githubusercontent.com') || 
    profilePicture.includes('?jwt=') ||
    profilePicture.includes('X-Amz-Signature')
  );

  // Default placeholder image
  const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=random&size=300`;

  // Use placeholder if it's a private GitHub URL that likely won't work
  const imageToUse = isPrivateGithubUrl ? placeholderImage : (profilePicture || placeholderImage);

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