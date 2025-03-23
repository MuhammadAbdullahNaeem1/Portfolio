import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = ({ socialMedia = [] }) => {
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <GitHubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'twitter':
        return <TwitterIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600 }}>
            Connect With Me
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialMedia && socialMedia.length > 0 ? (
              socialMedia.map((social, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'primary.contrastText',
                    },
                  }}
                >
                  {getSocialIcon(social.name)}
                </IconButton>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No social media links available
              </Typography>
            )}
          </Box>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Muhammad Abdullah Naeem. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 