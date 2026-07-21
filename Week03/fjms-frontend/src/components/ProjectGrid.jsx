import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { SearchX } from 'lucide-react';

function ProjectGrid({ projects, onSaveProject, savedProjects = [] }) {
  const isSaved = (projectId) => {
    return savedProjects.some((p) => p.id === projectId);
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-5 px-3 bg-white rounded-3 border shadow-sm my-3">
        <SearchX size={48} className="text-muted mb-3 opacity-50" />
        <h5 className="fw-bold text-dark mb-2">Không tìm thấy dự án nào</h5>
        <p className="text-muted small mb-0" style={{ maxWidth: '480px', margin: '0 auto' }}>
          Rất tiếc, không có dự án nào thỏa mãn các điều kiện tìm kiếm hoặc danh mục của bạn. Vui lòng thử tìm với từ khóa khác hoặc đặt lại bộ lọc.
        </p>
      </div>
    );
  }

  return (
    <Row className="g-4">
      {projects.map((project) => (
        <Col key={project.id} xs={12} md={6} lg={4}>
          <ProjectCard 
            project={project} 
            onSaveProject={onSaveProject} 
            isSaved={isSaved(project.id)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProjectGrid;
