import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SectionWrapper from './components/SectionWrapper';
import CategoryList from './components/CategoryList';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

// Centralized Data for Week 3 Props Communication
const CATEGORIES_DATA = [
  { id: 1, name: "Web Development", icon: "💻", count: 3 },
  { id: 2, name: "Mobile Development", icon: "📱", count: 2 },
  { id: 3, name: "UI/UX Design", icon: "🎨", count: 2 },
  { id: 4, name: "Graphic Design", icon: "📐", count: 1 },
  { id: 5, name: "Content Writing", icon: "✍️", count: 1 }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Web App",
    description: "Build a responsive React e-commerce frontend with TailwindCSS.",
    budget: 15000000,
    category: "Web Development"
  },
  {
    id: 2,
    title: "iOS/Android Fitness App",
    description: "Design and develop a cross-platform Flutter mobile application.",
    budget: 25000000,
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "SaaS Dashboard UI/UX Design",
    description: "Create modern dashboard UI/UX mockups using Figma.",
    budget: 8000000,
    category: "UI/UX Design"
  },
  {
    id: 4,
    title: "Company Branding Logo Design",
    description: "Design a clean, professional logo and brand identity guidelines.",
    budget: 3000000,
    category: "Graphic Design"
  }
];

function App() {
  const mainStyle = {
    backgroundColor: '#F9FAFB', // Light gray background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Inter', sans-serif"
  };

  const contentStyle = {
    flex: '1'
  };

  // Callback function to handle component communication (child -> parent)
  const handleSaveProject = (project) => {
    console.log(">>> [App.jsx] Đã nhận sự kiện lưu dự án từ component con:", project);
    alert(`Đã lưu dự án: "${project.title}" vào danh sách quan tâm!`);
  };

  // Stats cards styling for the 3rd SectionWrapper
  const statsContainerStyle = {
    display: 'flex',
    gap: '2.5rem',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '1rem'
  };

  const statCardStyle = {
    flex: '1 1 calc(33.333% - 2rem)',
    minWidth: '220px',
    backgroundColor: '#FFFFFF',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
  };

  const statValStyle = {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: '#059669',
    margin: '0 0 0.5rem 0',
    display: 'block'
  };

  const statLabelStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#374151',
    margin: '0 0 0.25rem 0'
  };

  return (
    <div style={mainStyle}>
      <Header />

      <main style={contentStyle}>
        {/* Banner Section */}
        <Banner />

        {/* 1st SectionWrapper: CategoryList */}
        <SectionWrapper 
          title="Danh mục công việc" 
          subtitle="Khám phá các công việc tự do hấp dẫn theo lĩnh vực chuyên môn của bạn"
        >
          <CategoryList categories={CATEGORIES_DATA} />
        </SectionWrapper>

        {/* 2nd SectionWrapper: ProjectGrid */}
        <SectionWrapper 
          title="Dự án mới tuyển" 
          subtitle="Những cơ hội dự án công nghệ mới đăng tải trong ngày hôm nay"
        >
          <ProjectGrid 
            projects={PROJECTS_DATA} 
            onSaveProject={handleSaveProject} 
          />
        </SectionWrapper>

        {/* 3rd SectionWrapper: Platform Stats (Demonstrates reuse of SectionWrapper in at least 3 places) */}
        <SectionWrapper 
          title="FJMS bằng những con số" 
          subtitle="Chúng tôi tự hào là nền tảng đáng tin cậy của hàng ngàn freelancer Việt Nam"
        >
          <div style={statsContainerStyle}>
            <div style={statCardStyle}>
              <span style={statValStyle}>15,000+</span>
              <h4 style={statLabelStyle}>Freelancer Đăng Ký</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B7280' }}>Lực lượng lập trình viên chất lượng cao.</p>
            </div>
            <div style={statCardStyle}>
              <span style={statValStyle}>8,500+</span>
              <h4 style={statLabelStyle}>Dự Án Hoàn Thành</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B7280' }}>Kết nối thành công và thanh toán minh bạch.</p>
            </div>
            <div style={statCardStyle}>
              <span style={statValStyle}>98.5%</span>
              <h4 style={statLabelStyle}>Hài Lòng</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B7280' }}>Doanh nghiệp đánh giá xuất sắc sau hợp tác.</p>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

export default App;
