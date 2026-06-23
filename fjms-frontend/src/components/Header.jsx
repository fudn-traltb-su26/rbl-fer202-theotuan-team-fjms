import React from 'react';

function Header() {
  // Inline styles for high-fidelity aesthetics without bootstrap/tailwind in Week 2
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontFamily: "'Inter', sans-serif"
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#059669', // Emerald Green
    textDecoration: 'none'
  };

  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#4B5563',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease-in-out'
  };

  const savedBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#D1FAE5',
    color: '#059669',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '600'
  };

  return (
    <header style={headerStyle}>
      <a href="#home" style={logoStyle}>
        <span style={{ marginRight: '0.5rem' }}>💼</span> FJMS Marketplace
      </a>
      
      <nav>
        <ul style={navListStyle}>
          <li><a href="#home" style={navLinkStyle}>Trang chủ</a></li>
          <li><a href="#projects" style={navLinkStyle}>Tìm việc</a></li>
          <li><a href="#saved" style={navLinkStyle}>Dự án đã lưu</a></li>
          <li><a href="#dashboard" style={navLinkStyle}>Dashboard</a></li>
        </ul>
      </nav>

      <div style={savedBadgeStyle}>
        <span>📁 Dự án đã lưu</span>
        <span style={{
          backgroundColor: '#059669',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '0.75rem'
        }}>
          0
        </span>
      </div>
    </header>
  );
}

export default Header;
