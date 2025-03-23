import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Projects = ({ projects, onReorder }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newProjects = Array.from(projects);
    const [movedProject] = newProjects.splice(result.source.index, 1);
    newProjects.splice(result.destination.index, 0, movedProject);
    
    onReorder(newProjects);
  };

  // Add validation for project IDs
  const hasInvalidProjects = projects.some(project => 
    !project.id && project.id !== 0
  );

  if (hasInvalidProjects) {
    console.error('Projects contain invalid IDs:', projects);
    return null;
  }

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
          My Projects
        </Typography>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="projects" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '32px',
                  padding: '8px'
                }}
              >
                {projects.map((project, index) => {
                  if (!project.id && project.id !== 0) {
                    console.error('Project missing ID:', project);
                    return null;
                  }

                  return (
                    <Draggable
                      key={project.id}
                      draggableId={String(project.id)}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={{
                            ...provided.draggableProps.style,
                            cursor: snapshot.isDragging ? 'grabbing' : 'grab',
                            zIndex: snapshot.isDragging ? 1000 : 1,
                          }}
                        >
                          <div {...provided.dragHandleProps} style={{ height: '100%' }}>
                            <ProjectCard
                              {...project}
                              isDragging={snapshot.isDragging}
                              style={{
                                transform: snapshot.isDragging ? 'rotate(3deg)' : 'none',
                                transition: 'transform 0.2s ease',
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </Box>
  );
};

export default Projects;