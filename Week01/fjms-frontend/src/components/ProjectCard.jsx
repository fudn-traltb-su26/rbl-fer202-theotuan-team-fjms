import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ProjectCard = () => {
  // Dữ liệu hardcode cho Tuần 2 theo đúng yêu cầu TODO
  const project = {
    title: 'Thiết kế lại Bảng điều khiển Doanh nghiệp (SaaS)',
    description: 'Tìm kiếm một lập trình viên frontend có kinh nghiệm để thiết kế lại bảng điều khiển phân tích cốt lõi của chúng tôi. Chúng tôi cần một giao diện gọn gàng, hiện đại xử lý dữ liệu lớn.',
    budget: '75.000.000 đ - 125.000.000 đ',
    category: 'Lập trình Web',
    company: 'Công ty TechNova'
  };

  return (
    <Card className="shadow-sm h-100 border-0" style={{ borderRadius: '1.5rem', transition: 'transform 0.3s ease' }}>
      <Card.Body className="d-flex flex-column p-4">
        
        {/* Danh mục */}
        <div className="mb-3">
          <Badge bg="light" text="success" className="px-3 py-2 rounded-pill" style={{ color: '#0F766E' }}>
            {project.category}
          </Badge>
        </div>
        
        {/* Tiêu đề & Mô tả */}
        <Card.Title className="fw-bolder fs-4 mb-3" style={{ color: '#020617' }}>
          {project.title}
        </Card.Title>
        <Card.Text className="text-muted flex-grow-1" style={{ lineHeight: '1.6' }}>
          {project.description}
        </Card.Text>
        
        {/* Ngân sách & Nút Lưu */}
        <div className="mt-4 pt-3 border-top">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-bolder" style={{ color: '#0F766E', fontSize: '1.1rem' }}>
              {project.budget}
            </span>
            <small className="text-muted fw-bold">{project.company}</small>
          </div>
          
          <Button 
            variant="outline-success" 
            className="w-100 rounded-pill fw-bold"
            style={{ color: '#0F766E', borderColor: '#0F766E' }}
          >
            Lưu dự án
          </Button>
        </div>
        
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
