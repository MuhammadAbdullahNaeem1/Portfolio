import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import ProjectCard from './ProjectCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReorderIcon from '@mui/icons-material/Reorder';

const Projects = ({ projects, onReorder }) => {
  const [isDraggable, setIsDraggable] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onReorder(items);
  };

  const toggleDraggable = () => {
    setIsDraggable(!isDraggable);
  };

  // Ensure all projects have an ID
  const projectsWithIds = projects.map((project, index) => ({
    ...project,
    id: project.id || `project-${index}`
  }));

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom sx={{ mb: 2, textAlign: 'center' }}>
          My Projects
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button 
            variant="outlined" 
            startIcon={<ReorderIcon />}
            onClick={toggleDraggable}
            color="primary"
            sx={{ mb: 3 }}
          >
            {isDraggable ? 'Save Order' : 'Reorder Projects'}
          </Button>
        </Box>

        {isDraggable ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="projects">
              {(provided) => (
                <Grid
                  container
                  spacing={4}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {projectsWithIds.map((project, index) => (
                    <Draggable
                      key={project.id}
                      draggableId={project.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          lg={4}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            githubLink={project.githubLink}
                            isDragging={snapshot.isDragging}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <Grid container spacing={4}>
            {projectsWithIds.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                lg={4} 
                key={project.id}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubLink={project.githubLink}
                  isDragging={false}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Projects;