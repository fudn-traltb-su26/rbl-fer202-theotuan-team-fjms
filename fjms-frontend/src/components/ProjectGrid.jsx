import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectGrid({ projects, onSaveProject }) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    fontFamily: "'Inter', sans-serif"
  };

  return (
    <div>
      {projects && projects.length > 0 ? (
        <div style={gridStyle}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSaveProject={onSaveProject} 
            />
          ))}
        </div>
      ) : (
        <p style={{ color: '#6B7280', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>
          Không có dự án nào khả dụng.
        </p>
      )}
    </div>
  );
}

export default ProjectGrid;
