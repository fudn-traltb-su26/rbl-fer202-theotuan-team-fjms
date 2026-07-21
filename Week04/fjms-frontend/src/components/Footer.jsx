import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Briefcase, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-dark text-white-50 py-5 mt-auto border-top border-secondary border-opacity-25">
      <Container>
        <Row className="g-4 mb-4">
          <Col md={5}>
            <div className="d-flex align-items-center gap-2 fw-bold text-white mb-2 fs-5">
              <div className="p-2 rounded bg-success bg-opacity-20 text-success d-inline-flex">
                <Briefcase size={20} color="#10b981" />
              </div>
              <span>FJMS Marketplace</span>
            </div>
            <p className="small text-white-50 mb-3" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
              Dự án Nền tảng Kết nối Công việc Freelancer (Freelancer Job Matching System) — Môn học FER202 & SWP391. Giải pháp hiện đại tối ưu luồng tuyển dụng và ứng tuyển lập trình viên.
            </p>
          </Col>

          <Col sm={6} md={35} lg={3}>
            <h6 className="text-white fw-bold mb-3">Liên kết nhanh</h6>
            <ul className="list-unstyled small mb-0 d-flex flex-column gap-2">
              <li><a href="#home" className="text-white-50 text-decoration-none hover-white">Trang chủ</a></li>
              <li><a href="#categories" className="text-white-50 text-decoration-none hover-white">Danh mục ngành nghề</a></li>
              <li><a href="#projects" className="text-white-50 text-decoration-none hover-white">Danh sách việc làm mới</a></li>
              <li><a href="#stats" className="text-white-50 text-decoration-none hover-white">Thống kê nền tảng</a></li>
            </ul>
          </Col>

          <Col sm={6} md={35} lg={4}>
            <h6 className="text-white fw-bold mb-3">Thành viên nhóm thực hiện</h6>
            <ul className="list-unstyled small mb-0 text-white-50 d-flex flex-column gap-2">
              <li>• <strong>Thành viên A (Trưởng nhóm):</strong> Architecture, Routing & Data Flow</li>
              <li>• <strong>Thành viên B:</strong> State Management, Filters & Audit Logs</li>
              <li>• <strong>Thành viên C:</strong> Responsive UI, Layout & Report Documentation</li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary opacity-25 my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center small text-white-50 gap-2">
          <span>© {new Date().getFullYear()} FJMS Team. Tất cả các quyền được bảo lưu.</span>
          <span className="d-flex align-items-center gap-1">
            Xây dựng với <Heart size={14} className="text-danger fill-danger" color="#ef4444" /> bằng React 19 + Bootstrap 5
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
