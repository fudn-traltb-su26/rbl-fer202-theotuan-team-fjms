import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container className="py-5 text-center my-5 text-dark">
      <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1.5rem' }}>🔍</span>
      <h1 className="fw-extrabold mb-2" style={{ fontSize: '3.5rem', color: '#1F2937' }}>404</h1>
      <h3 className="fw-bold mb-3 text-secondary">Không Tìm Thấy Trang</h3>
      <p className="text-muted mx-auto mb-4" style={{ maxWidth: '480px' }}>
        Trang bạn đang truy cập có thể đã được di chuyển sang địa chỉ khác hoặc không tồn tại trên hệ thống.
      </p>
      <Button
        onClick={() => navigate('/')}
        variant="success"
        size="lg"
        className="fw-bold px-4"
        style={{ backgroundColor: '#059669', borderColor: '#059669' }}
      >
        Quay lại Trang Chủ
      </Button>
    </Container>
  );
}

export default NotFoundPage;
