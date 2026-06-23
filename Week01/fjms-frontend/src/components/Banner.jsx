import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <div 
      className="bg-light py-5 text-center d-flex align-items-center" 
      style={{ minHeight: '60vh', backgroundColor: '#F8FAFC' }}
    >
      <Container>
        {/* Tiêu đề lấy cảm hứng từ LandingPage SWP */}
        <h1 className="fw-bolder mb-4" style={{ color: '#020617', fontSize: '3.5rem', lineHeight: '1.2' }}>
          Nâng tầm doanh nghiệp của bạn với <br />
          <span style={{ color: '#0F766E' }}>Nhân tài hàng đầu toàn cầu.</span>
        </h1>
        
        <p className="text-muted mb-5 fs-5 mx-auto" style={{ maxWidth: '700px' }}>
          Kết nối với các chuyên gia Freelancer hàng đầu. Thực hiện các dự án tầm nhìn của bạn một cách an toàn trên FJMS Marketplace.
        </p>
        
        <div className="d-flex justify-content-center gap-3">
          <Button 
            style={{ backgroundColor: '#0F766E', borderColor: '#0F766E' }} 
            size="lg" 
            className="px-4 py-2 fw-bold rounded-pill shadow-sm"
          >
            Khám phá Freelancer
          </Button>
          <Button 
            variant="outline-dark" 
            size="lg" 
            className="px-4 py-2 fw-bold rounded-pill"
          >
            Tìm dự án
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
