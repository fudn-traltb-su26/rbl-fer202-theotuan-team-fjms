import React from 'react';

function CategoryList({ categories }) {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-between',
    fontFamily: "'Inter', sans-serif"
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
    <div>
      {/* Conditional rendering using ternary operator */}
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
        <p style={{ color: '#6B7280', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>
          Không có danh mục nào khả dụng.
        </p>
      )}
    </div>
  );
}

export default CategoryList;
