import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Hero name={data.name} bio={data.bio} />
      <About
        profilePicture={data.profilePicture}
        skills={data.skills}
        interests={data.interests}
        description={data.description}
      />
      <Projects initialProjects={data.projects} />
      <Contact />
      <Footer socialMedia={data.socialMedia} />
    </Box>
  );
};

export default Portfolio; 