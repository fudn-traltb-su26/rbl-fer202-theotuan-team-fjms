import React from 'react';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuth } from '../store/projectSlice';
import ThemeToggle from './ThemeToggle';
import { Briefcase, BookmarkCheck, LogIn, LogOut } from 'lucide-react';

// Prefetch functions for chunks
const prefetchHome = () => import('../pages/HomePage');
const prefetchProjects = () => import('../pages/ProjectListPage');
const prefetchSaved = () => import('../pages/SavedProjectsPage');
const prefetchAdmin = () => import('../pages/admin/ProjectManagePage');

function Header() {
  const savedProjects = useSelector((state) => state.project.savedProjects);
  const isLoggedIn = useSelector((state) => state.project.isLoggedIn);
  const dispatch = useDispatch();

  const activeLinkStyle = ({ isActive }) => ({
    color: isActive ? '#059669' : '#4B5563',
    fontWeight: isActive ? '700' : '500',
    textDecoration: 'none'
  });

  return (
    <Navbar expand="lg" sticky="top" className="bg-white border-bottom shadow-sm py-2" style={{ backgroundColor: 'var(--header-bg) !important', borderColor: 'var(--border-color) !important' }}>
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 fw-bold text-success" style={{ color: '#059669', fontSize: '1.25rem' }}>
          <div className="p-2 rounded-3 bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center">
            <Briefcase size={22} color="#059669" />
          </div>
          <span style={{ color: 'var(--accent)' }}>FJMS Marketplace</span>
          <Badge bg="light" text="success" className="border border-success-subtle fw-semibold small">
            SWP Pro
          </Badge>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="fjms-navbar-nav" />

        {/* Collapsible Nav */}
        <Navbar.Collapse id="fjms-navbar-nav">
          <Nav className="mx-auto my-2 my-lg-0 gap-lg-3">
            <NavLink 
              to="/" 
              className="nav-link py-2" 
              style={activeLinkStyle}
              onMouseEnter={prefetchHome}
            >
              Trang chủ
            </NavLink>
            <NavLink 
              to="/projects" 
              className="nav-link py-2" 
              style={activeLinkStyle}
              onMouseEnter={prefetchProjects}
            >
              Tìm việc
            </NavLink>
            <NavLink 
              to="/saved" 
              className="nav-link py-2" 
              style={activeLinkStyle}
              onMouseEnter={prefetchSaved}
            >
              Dự án đã lưu
            </NavLink>
            <NavLink 
              to="/admin" 
              className="nav-link py-2" 
              style={activeLinkStyle}
              onMouseEnter={prefetchAdmin}
            >
              Dashboard
            </NavLink>
          </Nav>

          {/* Right Actions */}
          <div className="d-flex align-items-center gap-2 flex-wrap mt-2 mt-lg-0">
            {/* Saved Count Link */}
            <Button 
              as={Link}
              to="/saved"
              variant="light"
              className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill border fw-semibold position-relative shadow-sm"
              style={{ backgroundColor: 'var(--accent-bg)', borderColor: 'var(--accent-border, #a7f3d0)', color: 'var(--accent, #047857)' }}
              onMouseEnter={prefetchSaved}
            >
              <BookmarkCheck size={18} color="var(--accent)" />
              <span className="d-none d-sm-inline">Dự án đã lưu</span>
              <Badge 
                bg="success" 
                pill 
                className="ms-1 px-2 py-1 fs-7"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {savedProjects.length}
              </Badge>
            </Button>

            {/* Simulated login toggle button */}
            <Button 
              variant={isLoggedIn ? "outline-danger" : "outline-success"}
              onClick={() => dispatch(toggleAuth())}
              className="d-flex align-items-center gap-1 py-2 px-3 fw-bold rounded-pill"
              title={isLoggedIn ? 'Click để Đăng xuất' : 'Click để Đăng nhập'}
              style={!isLoggedIn ? { color: '#059669', borderColor: '#059669' } : {}}
            >
              {isLoggedIn ? (
                <>
                  <LogOut size={16} />
                  <span className="d-none d-md-inline">Đăng xuất (Admin)</span>
                </>
              ) : (
                <>
                  <LogIn size={16} />
                  <span className="d-none d-md-inline">Đăng nhập (Admin)</span>
                </>
              )}
            </Button>

            {/* Dark Mode Switcher */}
            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
