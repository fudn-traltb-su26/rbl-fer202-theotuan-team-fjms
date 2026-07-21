import React from 'react';
import { Offcanvas, Button, Badge, ListGroup, Card } from 'react-bootstrap';
import { BookmarkCheck, Trash2, ExternalLink, Briefcase } from 'lucide-react';

function SavedProjectsModal({ show, onHide, savedProjects, onRemoveSavedProject, onClearAll }) {
  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const totalBudget = savedProjects.reduce((sum, p) => sum + p.budget, 0);

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" style={{ width: '420px' }}>
      <Offcanvas.Header closeButton className="border-bottom bg-light">
        <Offcanvas.Title className="d-flex align-items-center gap-2 text-success fw-bold fs-5" style={{ color: '#059669' }}>
          <BookmarkCheck size={22} color="#059669" />
          <span>Dự Án Đã Lưu</span>
          <Badge bg="success" pill className="ms-1" style={{ backgroundColor: '#059669' }}>
            {savedProjects.length}
          </Badge>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column justify-content-between p-3">
        {savedProjects.length > 0 ? (
          <>
            <div className="overflow-auto pe-1">
              <p className="text-muted small mb-3">
                Danh sách các dự án bạn đang quan tâm và dự định gửi báo giá/ứng tuyển.
              </p>

              <ListGroup variant="flush" className="gap-2">
                {savedProjects.map((project) => (
                  <ListGroup.Item key={project.id} className="p-0 border-0">
                    <Card className="border shadow-sm rounded-3">
                      <Card.Body className="p-3">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="badge bg-light text-success border border-success-subtle fw-semibold">
                            {project.category}
                          </span>
                          <Button 
                            variant="light" 
                            size="sm" 
                            className="p-1 text-danger border-0" 
                            onClick={() => onRemoveSavedProject(project.id)}
                            title="Xóa khỏi danh sách lưu"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>

                        <Card.Title className="fs-6 fw-bold mb-1 text-dark">
                          {project.title}
                        </Card.Title>

                        <Card.Text className="text-muted small mb-2 line-clamp-2">
                          {project.description}
                        </Card.Text>

                        <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                          <div>
                            <span className="text-muted extra-small d-block">Ngân sách</span>
                            <span className="fw-bold text-success" style={{ color: '#059669' }}>
                              {formatVND(project.budget)}
                            </span>
                          </div>
                          <Button 
                            variant="outline-success" 
                            size="sm" 
                            className="d-flex align-items-center gap-1 fw-semibold"
                            style={{ borderColor: '#059669', color: '#059669' }}
                            onClick={() => alert(`Đang mở trang nộp ứng tuyển cho dự án: ${project.title}`)}
                          >
                            Ứng tuyển <ExternalLink size={14} />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>

            <div className="border-top pt-3 mt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted fw-medium">Tổng giá trị dự án:</span>
                <span className="fs-5 fw-extrabold text-success" style={{ color: '#059669' }}>
                  {formatVND(totalBudget)}
                </span>
              </div>

              <div className="d-flex gap-2">
                <Button 
                  variant="outline-danger" 
                  className="w-50 fw-semibold"
                  onClick={onClearAll}
                >
                  Xóa tất cả
                </Button>
                <Button 
                  variant="success" 
                  className="w-50 fw-semibold"
                  style={{ backgroundColor: '#059669', borderColor: '#059669' }}
                  onClick={() => alert(`Đã gửi thông báo ứng tuyển tới nhà tuyển dụng cho ${savedProjects.length} dự án!`)}
                >
                  Ứng tuyển ngay
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center my-auto py-5">
            <Briefcase size={48} className="text-muted mb-3 opacity-50" />
            <h6 className="fw-bold text-dark mb-1">Chưa có dự án nào được lưu</h6>
            <p className="text-muted small px-3">
              Hãy bấm vào nút <strong>"Lưu dự án"</strong> trên danh sách dự án để theo dõi và ứng tuyển sau.
            </p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SavedProjectsModal;
