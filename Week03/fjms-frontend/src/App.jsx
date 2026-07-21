import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionWrapper from './components/SectionWrapper';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import SavedProjectsModal from './components/SavedProjectsModal';
import Footer from './components/Footer';
import { Row, Col, Card } from 'react-bootstrap';
import { Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

// Categories dataset with project counters
const CATEGORIES_DATA = [
  { id: 1, name: "Web Development", icon: "💻", count: 3 },
  { id: 2, name: "Mobile Development", icon: "📱", count: 2 },
  { id: 3, name: "UI/UX Design", icon: "🎨", count: 2 },
  { id: 4, name: "Graphic Design", icon: "📐", count: 1 },
  { id: 5, name: "Content Writing", icon: "✍️", count: 1 }
];

// Rich FJMS projects dataset
const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Web Application (React + Node.js)",
    description: "Xây dựng giao diện web bán hàng thời trang cao cấp responsive full với React 19, TailwindCSS, tích hợp cổng thanh toán VNPay và trang Dashboard quản lý đơn hàng.",
    budget: 18000000,
    category: "Web Development",
    duration: "4 tuần",
    requiredSkills: ["React", "Node.js", "TailwindCSS", "RESTful API"]
  },
  {
    id: 2,
    title: "Ứng Dụng Theo Dõi Sức Khỏe & Fitness App",
    description: "Thiết kế và phát triển ứng dụng di động đa nền tảng Flutter/React Native kết nối đồng hồ thông minh, theo dõi chỉ số tim mạch và lượng calo tiêu thụ hàng ngày.",
    budget: 28000000,
    category: "Mobile Development",
    duration: "6 tuần",
    requiredSkills: ["Flutter", "React Native", "Firebase", "UI/UX"]
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard UI/UX Design",
    description: "Thiết kế giao diện hệ thống quản lý dữ liệu lớn (Big Data Analytics) bao gồm 20+ màn hình Figma, hệ thống Design System chuẩn hóa và Prototype tương tác mượt mà.",
    budget: 12000000,
    category: "UI/UX Design",
    duration: "2 tuần",
    requiredSkills: ["Figma", "Design System", "Wireframing", "User Research"]
  },
  {
    id: 4,
    title: "Bộ Nhận Diện Thương Hiệu & Logo Công Ty Tech",
    description: "Sáng tạo logo, bộ Brand Guidelines chuyên nghiệp (card visit, phong bì, banner, avatar mạng xã hội) cho startup công nghệ trí tuệ nhân tạo AI.",
    budget: 5000000,
    category: "Graphic Design",
    duration: "1 tuần",
    requiredSkills: ["Adobe Illustrator", "Photoshop", "Branding"]
  },
  {
    id: 5,
    title: "Cổng Thông Tin Bất Động Sản Fullstack",
    description: "Phát triển website đăng tin bất động sản với bản đồ vệ tinh Google Maps API, lọc nâng cao theo vị trí giá tiền, và chat realtime giữa chủ nhà với người mua.",
    budget: 22000000,
    category: "Web Development",
    duration: "5 tuần",
    requiredSkills: ["React", "Express.js", "MongoDB", "Google Maps API"]
  },
  {
    id: 6,
    title: "Ứng Dụng Đặt Đồ Ăn & Giao Hàng Nhanh",
    description: "Xây dựng ứng dụng di động dành cho tài xế và khách hàng, tích hợp định vị GPS thời gian thực, thông báo push notification và thanh toán MoMo.",
    budget: 32000000,
    category: "Mobile Development",
    duration: "8 tuần",
    requiredSkills: ["React Native", "Redux Toolkit", "Socket.io", "GPS"]
  },
  {
    id: 7,
    title: "Thiết Kế App Ngân Hàng Số Mobile Banking UI",
    description: "Nghiên cứu trải nghiệm người dùng và thiết kế giao diện ứng dụng tài chính ngân hàng bảo mật cao, tối ưu luồng chuyển tiền nhanh trong 3 chạm.",
    budget: 15000000,
    category: "UI/UX Design",
    duration: "3 tuần",
    requiredSkills: ["Figma", "Mobile UI", "Prototyping"]
  },
  {
    id: 8,
    title: "Biên Tập Chuỗi Bài Viết SEO Công Nghệ & AI",
    description: "Viết 15 bài chuẩn SEO chuyên sâu về xu hướng công nghệ Web3, AI và Cloud Computing để đăng tải trên blog doanh nghiệp thu hút lượt truy cập tự nhiên.",
    budget: 4500000,
    category: "Content Writing",
    duration: "10 ngày",
    requiredSkills: ["SEO Content", "Copywriting", "Tech Writing"]
  }
];

function App() {
  // State Management (Week 4)
  const [keyword, setKeyword] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [savedProjects, setSavedProjects] = useState([]);
  const [showSavedModal, setShowSavedModal] = useState(false);

  // Immutable Handler: Toggle Save Project
  const handleSaveProject = (projectToSave) => {
    setSavedProjects((prevSaved) => {
      const exists = prevSaved.some((p) => p.id === projectToSave.id);
      if (exists) {
        // Immutable remove
        return prevSaved.filter((p) => p.id !== projectToSave.id);
      } else {
        // Immutable add
        return [...prevSaved, projectToSave];
      }
    });
  };

  // Immutable Handler: Remove single saved project
  const handleRemoveSavedProject = (projectId) => {
    setSavedProjects((prevSaved) => prevSaved.filter((p) => p.id !== projectId));
  };

  // Immutable Handler: Clear all saved projects
  const handleClearSavedProjects = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ danh sách dự án đã lưu không?")) {
      setSavedProjects([]);
    }
  };

  // Category filter selection handler
  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
  };

  // Derived State: Filtered projects based on Category & Search Keyword
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === "ALL" || project.category === activeCategory;
    const cleanKeyword = keyword.trim().toLowerCase();
    
    // Ignore keyword filtering if length is less than 2
    const matchesKeyword = cleanKeyword.length < 2 || 
      project.title.toLowerCase().includes(cleanKeyword) ||
      project.description.toLowerCase().includes(cleanKeyword) ||
      (project.requiredSkills && project.requiredSkills.some(skill => skill.toLowerCase().includes(cleanKeyword)));

    return matchesCategory && matchesKeyword;
  });

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header Navigation */}
      <Header 
        savedCount={savedProjects.length} 
        onOpenSavedModal={() => setShowSavedModal(true)} 
      />

      <main className="flex-grow-1">
        {/* Banner Hero Section */}
        <Banner />

        {/* 1st SectionWrapper: Categories */}
        <SectionWrapper 
          id="categories"
          badge="Khám Phá Theo Lĩnh Vực"
          title="Danh Mục Công Việc Phổ Biến" 
          subtitle="Lựa chọn chuyên ngành phù hợp với bộ kỹ năng và định hướng phát triển sự nghiệp của bạn"
        >
          <CategoryList 
            categories={CATEGORIES_DATA} 
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />
        </SectionWrapper>

        {/* 2nd SectionWrapper: Search & Project Grid */}
        <SectionWrapper 
          id="projects"
          badge="Cơ Hội Việc Làm Mới"
          title="Danh Sách Dự Án Đang Tuyển" 
          subtitle="Tìm kiếm dự án tự do công nghệ chất lượng cao từ các doanh nghiệp hàng đầu"
        >
          {/* Controlled Search Bar Component */}
          <SearchBar 
            keyword={keyword}
            onChangeKeyword={setKeyword}
            onClearKeyword={() => setKeyword("")}
            totalCount={filteredProjects.length}
            activeCategory={activeCategory}
            onResetCategory={() => setActiveCategory("ALL")}
          />

          {/* Dynamic Project Grid */}
          <ProjectGrid 
            projects={filteredProjects} 
            onSaveProject={handleSaveProject} 
            savedProjects={savedProjects}
          />
        </SectionWrapper>

        {/* 3rd SectionWrapper: Platform Stats */}
        <SectionWrapper 
          id="stats"
          badge="Bằng Chứng Uy Tín"
          title="Nền Tảng FJMS Bằng Những Con Số" 
          subtitle="Chúng tôi tự hào là cầu nối tin cậy hàng đầu cho cộng đồng IT Freelancers tại Việt Nam"
          bg="white"
        >
          <Row className="g-4 text-center">
            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                    <Users size={28} color="#059669" />
                  </div>
                  <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>15,000+</h3>
                  <h6 className="fw-bold text-dark mb-1">Freelancers Đăng Ký</h6>
                  <p className="text-muted extra-small mb-0">Đội ngũ lập trình viên & thiết kế chuyên nghiệp.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                    <CheckCircle size={28} color="#059669" />
                  </div>
                  <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>8,500+</h3>
                  <h6 className="fw-bold text-dark mb-1">Dự Án Hoàn Thành</h6>
                  <p className="text-muted extra-small mb-0">Thanh toán minh bạch, đúng tiến độ 100%.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                    <Award size={28} color="#059669" />
                  </div>
                  <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>98.5%</h3>
                  <h6 className="fw-bold text-dark mb-1">Tỷ Lệ Hài Lòng</h6>
                  <p className="text-muted extra-small mb-0">Doanh nghiệp đánh giá 5 sao sau nghiệm thu.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm p-3 rounded-3 bg-light">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="p-3 bg-success bg-opacity-10 text-success rounded-circle mb-3">
                    <TrendingUp size={28} color="#059669" />
                  </div>
                  <h3 className="fw-extrabold text-success fs-2 mb-1" style={{ color: '#059669' }}>45 tỷ+</h3>
                  <h6 className="fw-bold text-dark mb-1">Tổng Giá Trị Giao Dịch</h6>
                  <p className="text-muted extra-small mb-0">Luồng ngân sách giao dịch an toàn tuyệt đối.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </SectionWrapper>
      </main>

      {/* Saved Projects Offcanvas Drawer */}
      <SavedProjectsModal 
        show={showSavedModal}
        onHide={() => setShowSavedModal(false)}
        savedProjects={savedProjects}
        onRemoveSavedProject={handleRemoveSavedProject}
        onClearAll={handleClearSavedProjects}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
