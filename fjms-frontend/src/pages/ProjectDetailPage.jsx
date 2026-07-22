import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useProject } from '../context/ProjectContext';
import { Container, Card, Button, Row, Col, Spinner, Alert, Badge, Breadcrumb } from 'react-bootstrap';
import { ArrowLeft, Briefcase, Calendar, DollarSign, Award, Star } from 'lucide-react';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { saveProject, savedProjects, unsaveProject } = useProject();

  // Fetch project details dynamically
  const { data: project, loading, error } = useFetch(`/projects/${id}`);

  const isSaved = savedProjects.some((p) => p.id === id);

  const formatVND = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const handleSaveToggle = () => {
    if (isSaved) {
      unsaveProject(project.id);
    } else {
      saveProject(project);
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="success" />
        <p className="mt-2 text-muted fw-semibold">Đang tải thông tin chi tiết dự án...</p>
      </Container>
    );
  }

  if (error || !project) {
    return (
      <Container className="py-5">
        <Alert variant="danger" className="text-center mx-auto" style={{ maxWidth: '600px' }}>
          <Alert.Heading>Không tìm thấy dự án!</Alert.Heading>
          <p>{error || 'Dự án có thể đã bị xóa hoặc đường dẫn không đúng.'}</p>
          <hr />
          <Button variant="outline-danger" onClick={() => navigate('/projects')}>
            Quay lại danh sách
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {/* Back Button */}
      <Button 
        variant="link" 
        onClick={() => navigate(-1)} 
        className="d-inline-flex align-items-center gap-1 text-success text-decoration-none fw-semibold mb-3 p-0"
        style={{ color: '#059669' }}
      >
        <ArrowLeft size={16} /> Quay lại trang trước
      </Button>

      {/* Breadcrumb navigation */}
      <Breadcrumb className="small mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/projects" }}>Dự án</Breadcrumb.Item>
        <Breadcrumb.Item active>{project.title}</Breadcrumb.Item>
      </Breadcrumb>

      {/* Detail Card */}
      <Card className="border shadow-sm p-4 rounded-3 text-dark bg-white">
        <Card.Body>
          <div className="border-bottom pb-3 mb-4">
            <Badge bg="success" className="mb-2 px-3 py-1 rounded-pill" style={{ backgroundColor: '#059669' }}>
              {project.category}
            </Badge>
            <Card.Title as="h2" className="fw-bold mb-3">{project.title}</Card.Title>
            <div className="d-flex flex-wrap gap-3 small text-muted">
              <span>Trạng thái: <strong className="text-success">{project.status || 'Open'}</strong></span>
              <span>•</span>
              <span>Thời gian đăng: Vừa xong</span>
              <span>•</span>
              <span>Dự án ID: {project.id}</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <Row className="g-3 mb-4">
            <Col md={4} sm={12}>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-center gap-3">
                <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                  <DollarSign size={20} color="#059669" />
                </div>
                <div>
                  <span className="text-muted d-block small">Ngân sách dự án</span>
                  <strong className="text-success fs-5">{formatVND(project.budget)}</strong>
                </div>
              </div>
            </Col>
            
            <Col md={4} sm={12}>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-center gap-3">
                <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                  <Calendar size={20} color="#059669" />
                </div>
                <div>
                  <span className="text-muted d-block small">Thời gian dự kiến</span>
                  <strong className="text-dark fs-6">{project.duration || 'Thương lượng'}</strong>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-center gap-3">
                <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                  <Briefcase size={20} color="#059669" />
                </div>
                <div>
                  <span className="text-muted d-block small">Hình thức làm việc</span>
                  <strong className="text-dark fs-6">Remote / Tự do</strong>
                </div>
              </div>
            </Col>
          </Row>

          {/* Description Section */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Mô tả chi tiết công việc</h5>
            <p style={{ lineHeight: '1.6', whiteSpace: 'pre-line' }} className="text-secondary">
              {project.description}
            </p>
          </div>

          {/* Required Skills Section */}
          {project.requiredSkills && project.requiredSkills.length > 0 && (
            <div className="mb-5">
              <h5 className="fw-bold mb-3">Kỹ năng yêu cầu</h5>
              <div className="d-flex flex-wrap gap-2">
                {project.requiredSkills.map((skill, index) => (
                  <Badge key={index} bg="secondary" className="px-3 py-2 text-dark border bg-light font-medium small">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="d-flex flex-wrap gap-2 pt-3 border-top">
            <Button
              variant={isSaved ? 'danger' : 'success'}
              onClick={handleSaveToggle}
              className="fw-bold px-4 py-2"
              style={!isSaved ? { backgroundColor: '#059669', borderColor: '#059669' } : {}}
            >
              {isSaved ? 'Hủy lưu dự án' : 'Lưu dự án quan tâm'}
            </Button>
            <Button
              variant="outline-success"
              onClick={() => alert(`Đã gửi hồ sơ ứng tuyển dự án "${project.title}" thành công!`)}
              className="fw-bold px-4 py-2"
            >
              Nộp hồ sơ ứng tuyển (Proposal)
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProjectDetailPage;
