import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

function Banner() {
  return (
    <div className="fjms-gradient-banner text-white py-5 position-relative overflow-hidden">
      <Container className="py-4 position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={10} xl={9}>
            <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill fw-semibold mb-3 shadow-sm d-inline-flex align-items-center gap-2">
              <Sparkles size={16} className="text-success" />
              <span>Nền Tảng Đăng Việc & Kết Nối Lập Trình Viên Hàng Đầu</span>
            </Badge>

            <h1 className="fw-extrabold display-5 mb-3 fjms-banner-title text-white" style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Tìm Dự Án Công Nghệ & Nhận Việc Ngay Hôm Nay
            </h1>

            <p className="lead text-white-50 mb-4 mx-auto" style={{ maxWidth: '750px', fontSize: '1.15rem' }}>
              FJMS kết nối các doanh nghiệp công nghệ với đội ngũ Freelancer chất lượng cao tại Việt Nam. Minh bạch, nhanh chóng và bảo mật thanh toán tuyệt đối.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <Button 
                href="#projects" 
                variant="light" 
                size="lg" 
                className="px-4 py-3 fw-bold text-success d-flex align-items-center gap-2 rounded-3 shadow"
                style={{ color: '#047857' }}
              >
                <span>Xem danh sách việc làm</span>
                <ArrowRight size={20} />
              </Button>
              <Button 
                href="#categories" 
                variant="outline-light" 
                size="lg" 
                className="px-4 py-3 fw-semibold rounded-3"
              >
                Khám phá danh mục
              </Button>
            </div>

            {/* Sub-highlights */}
            <Row className="pt-3 border-top border-light border-opacity-25 g-3">
              <Col xs={4} md={4}>
                <div className="d-flex align-items-center justify-content-center gap-2 text-white-50">
                  <ShieldCheck size={20} className="text-warning d-none d-sm-inline" />
                  <span className="small text-white fw-medium">Thanh toán bảo đảm</span>
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="d-flex align-items-center justify-content-center gap-2 text-white-50">
                  <Zap size={20} className="text-warning d-none d-sm-inline" />
                  <span className="small text-white fw-medium">Phản hồi dưới 24h</span>
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="d-flex align-items-center justify-content-center gap-2 text-white-50">
                  <Users size={20} className="text-warning d-none d-sm-inline" />
                  <span className="small text-white fw-medium">10,000+ Thành viên</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
