import React, { useState, useEffect } from 'react';
import projectService from '../../services/projectService';
import SectionWrapper from '../../components/SectionWrapper';
import { Container, Table, Button, Modal, Form, Alert, Row, Col, Spinner, Badge } from 'react-bootstrap';
import { Plus, Edit2, Trash2, RefreshCw } from 'lucide-react';

export function ProjectManagePage() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null); // null if adding new project
  
  // Form Fields State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('Open');
  const [skillsStr, setSkillsStr] = useState('');
  const [formError, setFormError] = useState('');

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      const projectsData = await projectService.getProjects();
      const categoriesData = await projectService.getCategories();
      setProjects(projectsData);
      setCategories(categoriesData);
      if (categoriesData.length > 0 && !category) {
        setCategory(categoriesData[0].name);
      }
    } catch (err) {
      setError('Lỗi khi kết nối đến json-server. Đảm bảo json-server đang chạy ở port 3001.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openAddModal = () => {
    setEditingProject(null);
    setTitle('');
    setDescription('');
    setBudget('');
    setCategory(categories.length > 0 ? categories[0].name : '');
    setDuration('1 month');
    setStatus('Open');
    setSkillsStr('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (proj) => {
    setEditingProject(proj);
    setTitle(proj.title);
    setDescription(proj.description);
    setBudget(proj.budget.toString());
    setCategory(proj.category);
    setDuration(proj.duration || '1 month');
    setStatus(proj.status || 'Open');
    setSkillsStr(proj.requiredSkills ? proj.requiredSkills.join(', ') : '');
    setFormError('');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const validateForm = () => {
    if (!title.trim()) return 'Vui lòng nhập tiêu đề dự án.';
    if (!description.trim()) return 'Vui lòng nhập mô tả dự án.';
    if (!budget || isNaN(budget) || parseFloat(budget) <= 0) return 'Vui lòng nhập ngân sách hợp lệ (> 0).';
    if (!category) return 'Vui lòng chọn danh mục.';
    if (!skillsStr.trim()) return 'Vui lòng nhập ít nhất một kỹ năng yêu cầu.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErr = validateForm();
    if (validationErr) {
      setFormError(validationErr);
      return;
    }

    const matchedCat = categories.find(c => c.name === category);
    const categoryId = matchedCat ? matchedCat.id : '1';

    const projectData = {
      title: title.trim(),
      description: description.trim(),
      budget: parseFloat(budget),
      category,
      categoryId,
      status,
      duration,
      requiredSkills: skillsStr.split(',').map(s => s.trim()).filter(Boolean),
      featured: editingProject ? editingProject.featured : false
    };

    try {
      if (editingProject) {
        // Update
        const updated = await projectService.updateProject(editingProject.id, projectData);
        setProjects(prev => prev.map(p => p.id === editingProject.id ? updated : p));
        alert('Cập nhật dự án thành công!');
      } else {
        // Create
        const created = await projectService.createProject(projectData);
        setProjects(prev => [...prev, created]);
        alert('Đăng dự án mới thành công!');
      }
      handleCloseModal();
    } catch (err) {
      setFormError('Lỗi khi lưu dữ liệu lên server. Vui lòng thử lại.');
      console.error(err);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa dự án "${name}"?`)) {
      try {
        await projectService.deleteProject(id);
        setProjects(prev => prev.filter(p => p.id !== id));
        alert('Đã xóa dự án thành công!');
      } catch (err) {
        alert('Lỗi khi xóa dự án trên server.');
        console.error(err);
      }
    }
  };

  const formatVND = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <Container className="py-4">
      <SectionWrapper 
        id="crud-panel"
        badge="Employer Console"
        title="Quản Lý Tin Tuyển Dụng" 
        subtitle="Quản lý và đăng tin tuyển dụng các dự án công nghệ mới của doanh nghiệp"
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button
            variant="success"
            onClick={openAddModal}
            className="fw-bold px-3 py-2 d-inline-flex align-items-center gap-1"
            style={{ backgroundColor: '#059669', borderColor: '#059669' }}
          >
            <Plus size={18} /> Đăng tuyển dự án mới
          </Button>
          
          <Button
            variant="outline-secondary"
            onClick={loadData}
            className="d-inline-flex align-items-center gap-1"
          >
            <RefreshCw size={16} /> Làm mới
          </Button>
        </div>

        {/* Loading / Error States */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-2 text-muted fw-semibold">Đang tải danh sách quản lý...</p>
          </div>
        ) : error ? (
          <Alert variant="danger" className="text-center">
            <h5>⚠️ Không thể tải dữ liệu!</h5>
            <p className="small mb-2">{error}</p>
            <p className="extra-small mb-3">Vui lòng kiểm tra lại Mock Server bằng cách chạy: <code>npm run server</code> ở thư mục frontend.</p>
            <Button variant="danger" size="sm" onClick={loadData}>Thử lại</Button>
          </Alert>
        ) : (
          <div className="table-responsive border rounded-3 bg-white">
            <Table hover className="align-middle mb-0 text-dark">
              <thead className="table-light text-secondary">
                <tr>
                  <th className="px-3 border-0 py-3">ID</th>
                  <th className="border-0 py-3">Tiêu đề dự án</th>
                  <th className="border-0 py-3">Danh mục</th>
                  <th className="border-0 py-3">Ngân sách</th>
                  <th className="border-0 py-3">Trạng thái</th>
                  <th className="px-3 border-0 py-3 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj) => (
                  <tr key={proj.id}>
                    <td className="px-3 py-3 text-muted small">{proj.id}</td>
                    <td>
                      <strong className="d-block">{proj.title}</strong>
                      {proj.featured && <Badge bg="success" className="fs-8 mt-1" style={{ backgroundColor: '#059669' }}>Nổi bật</Badge>}
                    </td>
                    <td>
                      <Badge bg="light" text="success" className="border border-success-subtle fw-semibold">
                        {proj.category}
                      </Badge>
                    </td>
                    <td className="fw-bold text-success">
                      {formatVND(proj.budget)}
                    </td>
                    <td>
                      <Badge bg={proj.status === 'Open' ? 'success' : 'secondary'} className="px-2 py-1">
                        {proj.status || 'Open'}
                      </Badge>
                    </td>
                    <td className="px-3 text-center">
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => openEditModal(proj)}
                        className="me-2 text-primary border-primary bg-primary bg-opacity-10"
                        title="Chỉnh sửa"
                      >
                        <Edit2 size={16} color="#0d6efd" />
                      </Button>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => handleDelete(proj.id, proj.title)}
                        className="text-danger border-danger bg-danger bg-opacity-10"
                        title="Xóa dự án"
                      >
                        <Trash2 size={16} color="#dc3545" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </SectionWrapper>

      {/* CRUD Form Modal */}
      <Modal show={isModalOpen} onHide={handleCloseModal} centered backdrop="static" className="text-dark">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold">
            {editingProject ? 'Chỉnh Sửa Dự Án' : 'Đăng Tin Tuyển Dụng Mới'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-2">
          {formError && <Alert variant="danger" className="py-2 small">⚠️ {formError}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">Tiêu đề dự án *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vd: Thiết kế Website Bán Hàng Điện Tử"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">Danh mục công việc *</Form.Label>
              <Form.Select
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Ngân sách (VND) *</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Vd: 8000000"
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Thời hạn dự kiến *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Vd: 3 tuần, 2 tháng"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">Trạng thái tuyển *</Form.Label>
              <Form.Select
                value={status}
                onChange={e => setStatus(e.target.value)}
                required
              >
                <option value="Open">Open (Đang nhận CV)</option>
                <option value="Closed">Closed (Đã đóng tuyển)</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">Kỹ năng yêu cầu * (phân cách bằng dấu phẩy)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vd: React, TypeScript, Figma"
                value={skillsStr}
                onChange={e => setSkillsStr(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">Mô tả công việc *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Nhập mô tả cụ thể về dự án, yêu cầu kỹ năng và quyền lợi..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2 pt-2">
              <Button variant="light" onClick={handleCloseModal} className="fw-semibold">
                Hủy bỏ
              </Button>
              <Button variant="success" type="submit" className="fw-bold" style={{ backgroundColor: '#059669', borderColor: '#059669' }}>
                {editingProject ? 'Lưu thay đổi' : 'Đăng tuyển'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ProjectManagePage;
