import React from 'react';

function Banner() {
  const bannerStyle = {
    padding: '5rem 2rem',
    backgroundColor: '#F0FDF4', // Very light Emerald Tint
    textAlign: 'center',
    fontFamily: "'Inter', sans-serif",
    borderBottom: '1px solid #E5E7EB',
    backgroundImage: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#065F46', // Dark emerald
    margin: '0 0 1rem 0',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#374151',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.6'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  };

  const primaryBtnStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#059669', // Emerald
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(5, 150, 105, 0.2)',
    transition: 'all 0.2s'
  };

  const secondaryBtnStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#FFFFFF',
    color: '#059669',
    border: '1px solid #059669',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  return (
    <section style={bannerStyle}>
      <h1 style={titleStyle}>Tìm Kiếm Freelancer Phù Hợp & Nhận Việc Ngay Hôm Nay</h1>
      <p style={subtitleStyle}>
        FJMS giúp kết nối các dự án công nghệ chất lượng cao với những lập trình viên và thiết kế viên hàng đầu Việt Nam một cách nhanh chóng và uy tín.
      </p>
      <div style={buttonContainerStyle}>
        <button style={primaryBtnStyle}>Tìm Việc Ngay</button>
        <button style={secondaryBtnStyle}>Đăng Dự Án</button>
      </div>
    </section>
  );
}

export default Banner;
