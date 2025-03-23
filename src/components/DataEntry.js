import React, { use, useState } from 'react';
import { TextField, Button, Box, Container, Typography, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const DataEntry = ({ onSubmit }) => {
  const [projectId,setProjectId]=useState(0);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    profilePicture: '',
    skills: '',
    interests: '',
    description: '',
    projects: [
      {
        id: projectId.toString(), // Unique ID for each project
        title: '',
        description: '',
        image: '',
        githubLink: ''
      }
    ],
    socialMedia: [
      {
        name: '',
        url: ''
      }
    ]
  });

  const handleChange = (e, index, field, subfield) => {
    const { name, value } = e.target;
    if (field) {
      const newData = [...formData[field]];
      if (subfield) {
        newData[index] = { ...newData[index], [subfield]: value };
      } else {
        newData[index] = value;
      }
      setFormData({ ...formData, [field]: newData });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { name: '', url: '' }]
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = formData.socialMedia.filter((_, i) => i !== index);
    setFormData({ ...formData, socialMedia: newSocialMedia });
  };

  const addProject = () => {
    const newProject = {
      id: projectId.toString(), // Unique ID for each project
      title: '',
      description: '',
      image: '',
      githubLink: ''
    };
    
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
    
    setProjectId(prev => prev + 1);  // Always increment ID counter
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'background.paper' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
            Portfolio Data Entry
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2, color: 'text.primary' }}>
              Personal Information
            </Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={3}
              required
            />
            <TextField
              fullWidth
              label="Profile Picture URL"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              margin="normal"
              required
              helperText="Use a public image URL. Private GitHub image URLs may not display correctly."
            />

            {/* Skills and Interests */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2, color: 'text.primary' }}>
              Skills and Interests
            </Typography>
            <TextField
              fullWidth
              label="Skills (comma-separated)"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Interests (comma-separated)"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Detailed Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
              required
            />

            {/* Projects */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2, color: 'text.primary' }}>
              Projects
            </Typography>
            {formData.projects.map((project, index) => (
              <Paper key={index} sx={{ mb: 2, p: 2, backgroundColor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>Project {index + 1}</Typography>
                  {index > 0 && (
                    <IconButton onClick={() => removeProject(index)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Project Title"
                  value={project.title}
                  onChange={(e) => handleChange(e, index, 'projects', 'title')}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Project Description"
                  value={project.description}
                  onChange={(e) => handleChange(e, index, 'projects', 'description')}
                  margin="normal"
                  multiline
                  rows={2}
                  required
                />
                <TextField
                  fullWidth
                  label="Project Image URL"
                  value={project.image}
                  onChange={(e) => handleChange(e, index, 'projects', 'image')}
                  margin="normal"
                  required
                  helperText="Use a public image URL. Private GitHub image URLs may not display correctly."
                />
                <TextField
                  fullWidth
                  label="GitHub Link"
                  value={project.githubLink}
                  onChange={(e) => handleChange(e, index, 'projects', 'githubLink')}
                  margin="normal"
                  required
                />
              </Paper>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={addProject}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              Add Project
            </Button>

            {/* Social Media */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2, color: 'text.primary' }}>
              Social Media Links
            </Typography>
            {formData.socialMedia.map((social, index) => (
              <Paper key={index} sx={{ mb: 2, p: 2, backgroundColor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>Social Media {index + 1}</Typography>
                  {index > 0 && (
                    <IconButton onClick={() => removeSocialMedia(index)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Box>
                <TextField
                  fullWidth
                  label="Platform Name"
                  value={social.name}
                  onChange={(e) => handleChange(e, index, 'socialMedia', 'name')}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Profile URL"
                  value={social.url}
                  onChange={(e) => handleChange(e, index, 'socialMedia', 'url')}
                  margin="normal"
                  required
                />
              </Paper>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={addSocialMedia}
              variant="outlined"
              sx={{ mb: 2 }}
            >
              Add Social Media
            </Button>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 4 }}
            >
              Generate Portfolio
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default DataEntry; 