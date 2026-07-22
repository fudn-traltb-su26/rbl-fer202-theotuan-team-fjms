import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { Spinner } from 'react-bootstrap';

// Lazy load all pages for Route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectListPage = lazy(() => import('./pages/ProjectListPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const SavedProjectsPage = lazy(() => import('./pages/SavedProjectsPage'));
const ProjectManagePage = lazy(() => import('./pages/admin/ProjectManagePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Clean loading placeholder for Suspense
function LoadingFallback() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 my-5" style={{ minHeight: '30vh' }}>
      <Spinner animation="border" variant="success" />
      <span className="mt-2 text-muted fw-semibold">Đang tải trang...</span>
    </div>
  );
}

function App() {
  const mainStyle = {
    backgroundColor: 'var(--bg-main, #F9FAFB)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Inter', sans-serif",
    transition: 'background-color 0.3s, color 0.3s'
  };

  const contentStyle = {
    flex: '1'
  };

  return (
    <BrowserRouter>
      <div style={mainStyle}>
        <Header />

        <main style={contentStyle}>
          {/* Suspense boundary for route-based lazy loading */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectListPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/saved" element={<SavedProjectsPage />} />
              
              {/* Protected Route for Admin CRUD panel */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <ProjectManagePage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch-all Route for 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
