import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import DataEntry from './components/DataEntry';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);
  const [projects, setProjects] = useState([]);

  const handleDataSubmit = (data) => {
    setPortfolioData(data);
    // Add unique IDs to projects for drag and drop functionality
    const projectsWithIds = (data.projects || []).map((project, index) => ({
      ...project,
      id: `project-${index}`
    }));
    setProjects(projectsWithIds);
  };

  const handleProjectReorder = (reorderedProjects) => {
    setProjects(reorderedProjects);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!portfolioData) {
    return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <DataEntry onSubmit={handleDataSubmit} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar />
      <Hero
        name={portfolioData.name}
        bio={portfolioData.bio}
        profilePicture={portfolioData.profilePicture}
      />
      <About
        description={portfolioData.description}
        skills={portfolioData.skills}
        interests={portfolioData.interests}
      />
      <Projects projects={projects} onReorder={handleProjectReorder} />
      <Contact socialMedia={portfolioData.socialMedia || []} />
      <Footer socialMedia={portfolioData.socialMedia || []} />
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default App;
