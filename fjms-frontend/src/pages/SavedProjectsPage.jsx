import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveProject, clearSavedProjects } from '../store/projectSlice';
import SectionWrapper from '../components/SectionWrapper';
import { Container, Table, Button, Badge } from 'react-bootstrap';
import { Trash2, ExternalLink, FolderHeart, ArrowRight } from 'lucide-react';

export function SavedProjectsPage() {
  const savedProjects = useSelector((state) => state.project.savedProjects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearAll = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách dự án đã lưu?')) {
      dispatch(clearSavedProjects());
    }
  };

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <Container className="py-4">
      <SectionWrapper 
        id="saved-projects"
        badge="Lưu Trữ Cá Nhân"
        title="Dự Án Đang Quan Tâm" 
        subtitle="Danh sách các dự án bạn đã đánh dấu để theo dõi và chuẩn bị nộp hồ sơ"
      >
        {savedProjects && savedProjects.length > 0 ? (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted small">
                Có <strong className="text-dark">{savedProjects.length}</strong> dự án được lưu trữ.
              </span>
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={handleClearAll}
                className="fw-semibold px-3"
              >
                Xóa tất cả danh sách
              </Button>
            </div>

            {/* Responsive Table */}
            <div className="table-responsive border rounded-3 bg-white">
              <Table hover className="align-middle mb-0 text-dark">
                <thead className="table-light text-secondary">
                  <tr>
                    <th className="px-3 border-0 py-3">Tiêu đề dự án</th>
                    <th className="border-0 py-3">Lĩnh vực</th>
                    <th className="border-0 py-3">Ngân sách</th>
                    <th className="border-0 py-3">Trạng thái</th>
                    <th className="px-3 border-0 py-3 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {savedProjects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-3 py-3">
                        <strong className="d-block mb-1">{project.title}</strong>
                        <span className="text-muted extra-small d-block">ID: {project.id}</span>
                      </td>
                      <td>
                        <Badge bg="light" text="success" className="border border-success-subtle fw-semibold">
                          {project.category}
                        </Badge>
                      </td>
                      <td className="fw-bold text-success">
                        {formatVND(project.budget)}
                      </td>
                      <td>
                        <Badge bg={project.status === 'Open' ? 'success' : 'secondary'} className="px-2 py-1">
                          {project.status || 'Open'}
                        </Badge>
                      </td>
                      <td className="px-3 text-center">
                        <Button
                          variant="light"
                          size="sm"
                          onClick={() => navigate(`/projects/${project.id}`)}
                          className="me-2 text-success border-success bg-success bg-opacity-10"
                          title="Xem chi tiết"
                        >
                          <ExternalLink size={16} color="#059669" />
                        </Button>
                        <Button
                          variant="light"
                          size="sm"
                          onClick={() => dispatch(unsaveProject(project.id))}
                          className="text-danger border-danger bg-danger bg-opacity-10"
                          title="Xóa khỏi danh sách lưu"
                        >
                          <Trash2 size={16} color="#dc3545" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="text-center py-5 border rounded-3 bg-white" style={{ borderStyle: 'dashed' }}>
            <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle d-inline-flex mb-3">
              <FolderHeart size={48} color="#059669" />
            </div>
            <h4 className="fw-bold mb-2">Thư mục lưu trữ trống</h4>
            <p className="text-muted mx-auto mb-4" style={{ maxWidth: '460px' }}>
              Hãy khám phá các dự án công nghệ hấp dẫn trên FJMS và lưu lại những cơ hội phù hợp để theo dõi ứng tuyển.
            </p>
            <Button
              onClick={() => navigate('/projects')}
              variant="success"
              className="fw-bold px-4 py-2"
              style={{ backgroundColor: '#059669', borderColor: '#059669' }}
            >
              Tìm dự án ngay <ArrowRight size={16} className="ms-1" />
            </Button>
          </div>
        )}
      </SectionWrapper>
    </Container>
  );
}

export default SavedProjectsPage;
