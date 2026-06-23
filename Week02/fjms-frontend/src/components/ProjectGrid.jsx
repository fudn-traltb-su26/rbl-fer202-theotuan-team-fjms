import React from 'react';
import ProjectCard from './ProjectCard';

// 4 sample projects for Week 2 requirements
const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Web App",
    description: "Build a responsive React e-commerce frontend with TailwindCSS.",
    budget: 15000000,
    category: "Web Development"
  },
  {
    id: 2,
    title: "iOS/Android Fitness App",
    description: "Design and develop a cross-platform Flutter mobile application.",
    budget: 25000000,
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "SaaS Dashboard UI/UX Design",
    description: "Create modern dashboard UI/UX mockups using Figma.",
    budget: 8000000,
    category: "UI/UX Design"
  },
  {
    id: 4,
    title: "Company Branding Logo Design",
    description: "Design a clean, professional logo and brand identity guidelines.",
    budget: 3000000,
    category: "Graphic Design"
  }
];

function ProjectGrid() {
  const containerStyle = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif"
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: '1.5rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Dự án mới đăng</h2>
      
      {PROJECTS_DATA && PROJECTS_DATA.length > 0 ? (
        <div style={gridStyle}>
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p style={{ color: '#6B7280', fontStyle: 'italic' }}>Không có dự án nào khả dụng.</p>
      )}
    </div>
  );
}

export default ProjectGrid;
export { PROJECTS_DATA }; // export for reuse if needed
