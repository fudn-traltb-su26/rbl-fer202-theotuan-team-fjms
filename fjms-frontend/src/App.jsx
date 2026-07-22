import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SavedProjectsPage from './pages/SavedProjectsPage';
import ProjectManagePage from './pages/admin/ProjectManagePage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

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
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
