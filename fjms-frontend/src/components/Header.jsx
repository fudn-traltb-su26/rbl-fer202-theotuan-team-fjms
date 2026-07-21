import React from 'react';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { Briefcase, BookmarkCheck, Sparkles } from 'lucide-react';

function Header({ savedCount, onOpenSavedModal }) {
  return (
    <Navbar expand="lg" sticky="top" className="bg-white border-bottom shadow-sm py-2">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bold text-success" style={{ color: '#059669', fontSize: '1.25rem' }}>
          <div className="p-2 rounded-3 bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center">
            <Briefcase size={22} color="#059669" />
          </div>
          <span>FJMS Marketplace</span>
          <Badge bg="light" text="success" className="border border-success-subtle fw-semibold small">
            SWP Pro
          </Badge>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="fjms-navbar-nav" />

        {/* Collapsible Nav */}
        <Navbar.Collapse id="fjms-navbar-nav">
          <Nav className="mx-auto my-2 my-lg-0 gap-lg-3">
            <Nav.Link href="#home" className="fw-semibold text-dark active">Trang chủ</Nav.Link>
            <Nav.Link href="#categories" className="fw-medium text-secondary">Danh mục</Nav.Link>
            <Nav.Link href="#projects" className="fw-medium text-secondary">Dự án mới</Nav.Link>
            <Nav.Link href="#stats" className="fw-medium text-secondary">Thống kê</Nav.Link>
          </Nav>

          {/* Right Action Trigger */}
          <div className="d-flex align-items-center gap-2">
            <Button 
              variant="light"
              onClick={onOpenSavedModal}
              className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill border fw-semibold position-relative shadow-sm"
              style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0', color: '#047857' }}
            >
              <BookmarkCheck size={18} color="#059669" />
              <span className="d-none d-sm-inline">Dự án đã lưu</span>
              <Badge 
                bg="success" 
                pill 
                className="ms-1 px-2 py-1 fs-7"
                style={{ backgroundColor: '#059669' }}
              >
                {savedCount}
              </Badge>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
