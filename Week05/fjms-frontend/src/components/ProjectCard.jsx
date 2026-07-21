import React, { useState } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import { Bookmark, BookmarkCheck, Clock, DollarSign, Send, CheckCircle2 } from 'lucide-react';

function ProjectCard({ project, onSaveProject, isSaved }) {
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const handleApply = () => {
    setProposalSubmitted(true);
    setTimeout(() => {
      setProposalSubmitted(false);
      setShowProposalModal(false);
    }, 1800);
  };

  return (
    <>
      <Card className="h-100 border shadow-sm fjms-card-hover rounded-3 overflow-hidden bg-white">
        <Card.Body className="p-4 d-flex flex-column justify-content-between">
          <div>
            {/* Header: Category Badge & Bookmark Button */}
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="fjms-badge-category">
                {project.category}
              </span>
              
              <Button
                variant={isSaved ? "success" : "light"}
                size="sm"
                className={`p-2 rounded-circle border-0 d-flex align-items-center justify-content-center transition-all ${
                  isSaved ? 'bg-success text-white' : 'bg-light text-muted'
                }`}
                style={{ backgroundColor: isSaved ? '#059669' : '#f1f5f9' }}
                onClick={() => onSaveProject(project)}
                title={isSaved ? "Bỏ lưu dự án" : "Lưu dự án quan tâm"}
              >
                {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
              </Button>
            </div>

            {/* Title & Description */}
            <Card.Title className="fs-5 fw-bold text-dark mb-2" style={{ lineHeight: '1.35' }}>
              {project.title}
            </Card.Title>

            <Card.Text className="text-muted small mb-3 line-clamp-3" style={{ minHeight: '3.6em', lineHeight: '1.5' }}>
              {project.description}
            </Card.Text>

            {/* Skills Badges */}
            {project.requiredSkills && project.requiredSkills.length > 0 && (
              <div className="d-flex flex-wrap gap-1 mb-3">
                {project.requiredSkills.map((skill, idx) => (
                  <Badge key={idx} bg="light" text="dark" className="border text-secondary fw-normal extra-small">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Footer Meta: Budget & Action Buttons */}
          <div className="pt-3 border-top mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="text-muted extra-small d-block">Ngân sách dự kiến</span>
                <span className="fs-6 fw-extrabold text-success" style={{ color: '#059669' }}>
                  {formatVND(project.budget)}
                </span>
              </div>
              {project.duration && (
                <div className="text-end">
                  <span className="text-muted extra-small d-block d-flex align-items-center justify-content-end gap-1">
                    <Clock size={12} /> Thời gian
                  </span>
                  <span className="small fw-semibold text-dark">
                    {project.duration}
                  </span>
                </div>
              )}
            </div>

            <div className="d-grid gap-2 d-sm-flex">
              <Button 
                variant={isSaved ? "outline-secondary" : "outline-success"} 
                size="sm"
                className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-1"
                style={{ borderColor: isSaved ? '#cbd5e1' : '#059669', color: isSaved ? '#475569' : '#059669' }}
                onClick={() => onSaveProject(project)}
              >
                {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                <span>{isSaved ? "Đã lưu" : "Lưu dự án"}</span>
              </Button>

              <Button 
                variant="success" 
                size="sm"
                className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-1"
                style={{ backgroundColor: '#059669', borderColor: '#059669' }}
                onClick={() => setShowProposalModal(true)}
              >
                <Send size={15} />
                <span>Ứng tuyển</span>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Proposal Modal Preview */}
      <Modal show={showProposalModal} onHide={() => setShowProposalModal(false)} centered>
        <Modal.Header closeButton className="bg-light border-bottom">
          <Modal.Title className="fs-5 fw-bold text-dark">
            Gửi báo giá / Proposal — {project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {proposalSubmitted ? (
            <div className="text-center py-4 text-success">
              <CheckCircle2 size={54} className="mb-3" />
              <h5 className="fw-bold">Nộp báo giá thành công!</h5>
              <p className="text-muted small">Nhà tuyển dụng sẽ nhận được hồ sơ của bạn và phản hồi trong thời gian sớm nhất.</p>
            </div>
          ) : (
            <div>
              <div className="bg-light p-3 rounded-3 mb-3 border">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold text-dark">Danh mục:</span>
                  <span className="text-success fw-bold">{project.category}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold text-dark">Ngân sách dự án:</span>
                  <span className="text-success fw-bold">{formatVND(project.budget)}</span>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small">Chào thầu & Báo giá mong muốn (VND):</label>
                <input type="number" className="form-control" defaultValue={project.budget} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-dark small">Thư giới thiệu / Đề xuất giải pháp:</label>
                <textarea 
                  className="form-control" 
                  rows={4} 
                  placeholder="Mô tả kinh nghiệm của bạn và cách bạn sẽ thực hiện dự án này..."
                  defaultValue="Chào bạn, tôi có hơn 3 năm kinh nghiệm trong lĩnh vực này và đã thực hiện thành công các dự án tương tự. Tôi rất mong muốn hợp tác cùng bạn!"
                />
              </div>
            </div>
          )}
        </Modal.Body>
        {!proposalSubmitted && (
          <Modal.Footer className="border-top bg-light">
            <Button variant="secondary" onClick={() => setShowProposalModal(false)}>
              Hủy bỏ
            </Button>
            <Button 
              variant="success" 
              style={{ backgroundColor: '#059669', borderColor: '#059669' }}
              onClick={handleApply}
            >
              Gửi ứng tuyển
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default ProjectCard;
