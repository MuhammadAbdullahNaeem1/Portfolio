import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const ProjectCard = ({ title, description, image, githubLink, isDragging }) => {
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
      {console.log(image)}
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        p: 1, 
        display: 'flex', 
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
        color: 'text.secondary'
      }}>
        <DragIndicatorIcon /> <Typography variant="caption" sx={{ ml: 1 }}>Drag to reorder</Typography>
      </Box>
      
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          objectFit: 'cover',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          mt: 4
        }}
      />
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