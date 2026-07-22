import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import SectionWrapper from '../components/SectionWrapper';
import CategoryList from '../components/CategoryList';
import ProjectCard from '../components/ProjectCard';
import useFetch from '../hooks/useFetch';
import { useProject } from '../context/ProjectContext';
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import { Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const { saveProject } = useProject();
  
  // Use custom hooks to fetch categories and projects
  const { data: categories, loading: catLoading } = useFetch('/categories');
  const { data: featuredProjects, loading: projLoading } = useFetch('/projects?featured=true');

  const handleCategoryClick = (categoryName) => {
    navigate(`/projects?category=${encodeURIComponent(categoryName)}`);
  };

  const handleBannerAction = () => {
    navigate('/projects');
  };

  const handleAdminAction = () => {
    navigate('/admin');
  };

  return (
    <div>
      <Banner 
        onFindWork={handleBannerAction} 
        onPostProject={handleAdminAction} 
      />

      {/* Categories */}
      <SectionWrapper 
        id="categories"
        badge="Khám Phá Theo Lĩnh Vực"
        title="Danh Mục Công Việc Phổ Biến" 
        subtitle="Lựa chọn chuyên ngành phù hợp với bộ kỹ năng và định hướng phát triển sự nghiệp của bạn"
      >
        {catLoading ? (
          <div className="text-center py-4">
            <Spinner animation="border" variant="success" />
            <p className="mt-2 text-muted">Đang tải danh mục...</p>
          </div>
        ) : (
          <CategoryList 
            categories={categories} 
            activeCategory="ALL"
            onSelectCategory={handleCategoryClick} 
          />
        )}
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper 
        id="featured-projects"
        badge="Cơ Hội Đặc Biệt"
        title="Dự Án Nổi Bật Được Đề Xuất" 
        subtitle="Những cơ hội dự án công nghệ chất lượng cao được tuyển dụng tích cực từ các doanh nghiệp"
      >
        {projLoading ? (
          <div className="text-center py-4">
            <Spinner animation="border" variant="success" />
            <p className="mt-2 text-muted">Đang tải dự án nổi bật...</p>
          </div>
        ) : featuredProjects && featuredProjects.length > 0 ? (
          <Row className="g-4">
            {featuredProjects.slice(0, 4).map((project) => (
              <Col key={project.id} lg={3} md={6} sm={12}>
                <ProjectCard 
                  project={project} 
                  onSaveProject={saveProject} 
                  onViewDetails={() => navigate(`/projects/${project.id}`)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center text-muted italic">Không có dự án nổi bật nào.</p>
        )}
      </SectionWrapper>

      {/* Platform Stats */}
      <SectionWrapper 
        id="stats"
        badge="Bằng Chứng Uy Tín"
        title="Nền Tảng FJMS Bằng Những Con Số" 
        subtitle="Chúng tôi tự hào là cầu nối tin cậy hàng đầu cho cộng đồng IT Freelancers tại Việt Nam"
        bg="white"
      >
        <Row className="g-4 text-center">
          <Col md={3} sm={6}>
            <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light text-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                  <Users size={28} color="#059669" />
                </div>
                <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>15,000+</h3>
                <h6 className="fw-bold mb-1">Freelancers Đăng Ký</h6>
                <p className="text-muted extra-small mb-0">Đội ngũ lập trình viên & thiết kế chuyên nghiệp.</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6}>
            <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light text-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                  <CheckCircle size={28} color="#059669" />
                </div>
                <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>8,500+</h3>
                <h6 className="fw-bold mb-1">Dự Án Hoàn Thành</h6>
                <p className="text-muted extra-small mb-0">Thanh toán minh bạch, đúng tiến độ 100%.</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6}>
            <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light text-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                  <Award size={28} color="#059669" />
                </div>
                <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>98.5%</h3>
                <h6 className="fw-bold mb-1">Tỷ Lệ Hài Lòng</h6>
                <p className="text-muted extra-small mb-0">Doanh nghiệp đánh giá 5 sao sau nghiệm thu.</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6}>
            <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light text-dark">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                  <TrendingUp size={28} color="#059669" />
                </div>
                <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>45 tỷ+</h3>
                <h6 className="fw-bold mb-1">Tổng Giá Trị Giao Dịch</h6>
                <p className="text-muted extra-small mb-0">Luồng ngân sách giao dịch an toàn tuyệt đối.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </SectionWrapper>
    </div>
  );
}

export default HomePage;
