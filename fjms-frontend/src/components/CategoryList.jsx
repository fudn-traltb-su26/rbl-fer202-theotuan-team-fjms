import React from 'react';

const CATEGORIES_DATA = [
  { id: 1, name: "Web Development", icon: "💻", count: 3 },
  { id: 2, name: "Mobile Development", icon: "📱", count: 2 },
  { id: 3, name: "UI/UX Design", icon: "🎨", count: 2 },
  { id: 4, name: "Graphic Design", icon: "📐", count: 1 },
  { id: 5, name: "Content Writing", icon: "✍️", count: 1 }
];

function CategoryList({ categories = CATEGORIES_DATA }) {
  const sectionStyle = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif"
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: '1.5rem'
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-between'
  };

  const cardStyle = {
    flex: '1 1 calc(20% - 1rem)',
    minWidth: '160px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '10px',
    padding: '1.25rem',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
    transition: 'all 0.2s',
    cursor: 'pointer'
  };

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '0.75rem',
    display: 'block'
  };

  const nameStyle = {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#374151',
    margin: '0 0 0.25rem 0'
  };

  const countStyle = {
    fontSize: '0.75rem',
    color: '#059669', // Emerald
    fontWeight: '500'
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Danh mục công việc</h2>
      
      {/* Conditional rendering using ternary operator as requested in Week 2 checklist */}
      {categories && categories.length > 0 ? (
        <div style={listStyle}>
          {categories.map((cat) => (
            <div key={cat.id} style={cardStyle}>
              <span style={iconStyle}>{cat.icon}</span>
              <h3 style={nameStyle}>{cat.name}</h3>
              <span style={countStyle}>{cat.count} công việc</span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: '#6B7280', fontStyle: 'italic' }}>Không có danh mục nào khả dụng.</p>
      )}
    </div>
  );
}

export default CategoryList;
export { CATEGORIES_DATA };
