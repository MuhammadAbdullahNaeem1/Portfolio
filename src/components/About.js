import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const About = ({ profilePicture, skills, interests, description }) => {
  const skillsList = skills.split(',').map(skill => skill.trim());
  const interestsList = interests.split(',').map(interest => interest.trim());

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Profile Picture */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src={
                    profilePicture ||
                    'data:image/jpeg;base64,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'
                  }
                  alt="Profile Picture"
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 2,
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>

          {/* Bio and Skills */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="body1" paragraph>
                {description}
              </Typography>

              {/* Skills */}
              <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'primary.main' }}>
                Skills
              </Typography>
              <Box sx={{ mb: 4 }}>
                {skillsList.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      m: 0.5,
                      backgroundColor: 'primary.main',
                      color: 'white',
                    }}
                  />
                ))}
              </Box>

              {/* Interests */}
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                Interests
              </Typography>
              <Box>
                {interestsList.map((interest, index) => (
                  <Chip
                    key={index}
                    label={interest}
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 