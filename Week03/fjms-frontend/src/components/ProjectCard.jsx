import React from 'react';

function ProjectCard({ project, onSaveProject }) {
  const cardStyle = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.2s',
    height: '220px'
  };

  const categoryBadgeStyle = {
    alignSelf: 'flex-start',
    backgroundColor: '#D1FAE5',
    color: '#059669',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600'
  };

  const titleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1F2937',
    margin: 0
  };

  const descStyle = {
    fontSize: '0.875rem',
    color: '#4B5563',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #F3F4F6',
    paddingTop: '1rem',
    marginTop: 'auto'
  };

  const budgetStyle = {
    fontWeight: '700',
    color: '#059669',
    fontSize: '1rem'
  };

  const btnStyle = {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#059669',
    border: '1px solid #059669',
    borderRadius: '6px',
    color: '#FFFFFF',
    fontSize: '0.85rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  // Format budget in VND
  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <span style={categoryBadgeStyle}>{project.category}</span>
        <h3 style={titleStyle}>{project.title}</h3>
        <p style={descStyle}>{project.description}</p>
      </div>

      <div style={footerStyle}>
        <div>
          <span style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block' }}>Ngân sách</span>
          <span style={budgetStyle}>{formatVND(project.budget)}</span>
        </div>
        <button 
          style={btnStyle}
          onClick={() => onSaveProject(project)}
        >
          Lưu dự án
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
