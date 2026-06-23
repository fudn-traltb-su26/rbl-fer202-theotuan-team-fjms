import React from 'react';

function SectionWrapper({ title, subtitle, children }) {
  const sectionStyle = {
    padding: '3rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif",
    borderBottom: '1px solid #F3F4F6'
  };

  const headerStyle = {
    marginBottom: '2rem',
    textAlign: 'left'
  };

  const titleStyle = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1F2937',
    margin: '0 0 0.5rem 0'
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#6B7280',
    margin: 0
  };

  const contentStyle = {
    width: '100%'
  };

  return (
    <section style={sectionStyle}>
      {/* Render header only if title is provided */}
      {title && (
        <div style={headerStyle}>
          <h2 style={titleStyle}>{title}</h2>
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        </div>
      )}
      <div style={contentStyle}>
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
