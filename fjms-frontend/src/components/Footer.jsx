import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#1F2937', // Dark Slate
    color: '#9CA3AF',
    padding: '3rem 2rem',
    fontFamily: "'Inter', sans-serif",
    borderTop: '1px solid #374151'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    textAlign: 'center'
  };

  const linksStyle = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const linkStyle = {
    color: '#D1D5DB',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s'
  };

  const logoStyle = {
    color: '#10B981', // Secondary Mint Green
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <a href="#home" style={logoStyle}>
          💼 FJMS Marketplace
        </a>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          Nền tảng kết nối Freelancer và Nhà tuyển dụng hàng đầu Việt Nam.
        </p>
        
        <ul style={linksStyle}>
          <li><a href="#about" style={linkStyle}>Giới thiệu</a></li>
          <li><a href="#terms" style={linkStyle}>Điều khoản dịch vụ</a></li>
          <li><a href="#privacy" style={linkStyle}>Chính sách bảo mật</a></li>
          <li><a href="#contact" style={linkStyle}>Liên hệ</a></li>
        </ul>

        <div style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#6B7280' }}>
          © {new Date().getFullYear()} FJMS Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
