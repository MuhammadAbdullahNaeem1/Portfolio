import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ImageIcon from '@mui/icons-material/Image';

const ProjectCard = ({ title, description, image, githubLink, isDragging }) => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    console.log("Image failed to load:", image);
    setImageError(true);
  };

  // Check if the URL is a GitHub private image URL with JWT token
  const isPrivateGithubUrl = image && (
    image.includes('private-user-images.githubusercontent.com') || 
    image.includes('?jwt=') ||
    image.includes('X-Amz-Signature')
  );

  // Default placeholder image if no image provided or on error
  const placeholderImage = `https://via.placeholder.com/400x200?text=${encodeURIComponent(title || 'Project Image')}`;
  
  // Use placeholder if it's a private GitHub URL that likely won't work
  const imageToUse = isPrivateGithubUrl ? placeholderImage : (image || placeholderImage);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'background.paper',
        boxShadow: isDragging ? '0 12px 20px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.1)',
        transform: isDragging ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
        border: isDragging ? '2px solid' : 'none',
        borderColor: 'primary.main',
      }}
    >
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        p: 1, 
        display: 'flex', 
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
        color: 'text.secondary',
        zIndex: 1
      }}>
        <DragIndicatorIcon /> <Typography variant="caption" sx={{ ml: 1 }}>Drag to reorder</Typography>
      </Box>
      
      {imageError ? (
        <Box
          sx={{
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.100',
            color: 'text.secondary',
            mt: 4,
            padding: 2
          }}
        >
          <ImageIcon sx={{ fontSize: 48, opacity: 0.6, mb: 1 }} />
          <Typography variant="caption" align="center">
            {isPrivateGithubUrl ? 
              "Private GitHub images can't be displayed directly" : 
              "Image could not be loaded"}
          </Typography>
        </Box>
      ) : (
        <CardMedia
          component="img"
          height="200"
          image={imageToUse}
          alt={title}
          onError={handleImageError}
          sx={{
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            mt: 4
          }}
        />
      )}
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            View on GitHub
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 