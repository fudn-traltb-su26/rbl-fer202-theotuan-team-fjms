import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Layers } from 'lucide-react';

function CategoryList({ categories, activeCategory, onSelectCategory }) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center p-4 text-muted fst-italic bg-white rounded-3 border">
        Không tìm thấy danh mục công việc nào.
      </div>
    );
  }

  return (
    <div className="w-100">
      {/* Category selection row */}
      <Row className="g-3">
        {/* All categories option */}
        <Col xs={6} sm={4} lg={2.4}>
          <Card 
            className={`h-100 text-center cursor-pointer fjms-card-hover border-0 shadow-sm ${activeCategory === 'ALL' ? 'bg-success text-white' : 'bg-white'}`}
            style={{ 
              backgroundColor: activeCategory === 'ALL' ? '#059669' : '#ffffff',
              cursor: 'pointer',
              borderRadius: '12px'
            }}
            onClick={() => onSelectCategory('ALL')}
          >
            <Card.Body className="p-3 d-flex flex-column justify-content-center align-items-center">
              <div className={`p-2 rounded-circle mb-2 ${activeCategory === 'ALL' ? 'bg-white text-success' : 'bg-light text-muted'}`}>
                <Layers size={22} color={activeCategory === 'ALL' ? '#059669' : '#64748b'} />
              </div>
              <h6 className={`fw-bold mb-1 fs-6 ${activeCategory === 'ALL' ? 'text-white' : 'text-dark'}`}>
                Tất cả danh mục
              </h6>
              <span className={`small ${activeCategory === 'ALL' ? 'text-white-50' : 'text-muted'}`}>
                Tất cả dự án
              </span>
            </Card.Body>
          </Card>
        </Col>

        {/* Dynamic categories map */}
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <Col key={cat.id} xs={6} sm={4} lg={2.4}>
              <Card 
                className={`h-100 text-center cursor-pointer fjms-card-hover border-0 shadow-sm ${isActive ? 'bg-success text-white' : 'bg-white'}`}
                style={{ 
                  backgroundColor: isActive ? '#059669' : '#ffffff',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  border: isActive ? '2px solid #059669' : '1px solid #e2e8f0'
                }}
                onClick={() => onSelectCategory(cat.name)}
              >
                <Card.Body className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <span className="fs-3 mb-2" role="img" aria-label={cat.name}>
                    {cat.icon}
                  </span>
                  <h6 className={`fw-bold mb-1 fs-6 ${isActive ? 'text-white' : 'text-dark'}`}>
                    {cat.name}
                  </h6>
                  <Badge 
                    bg={isActive ? 'light' : 'success'} 
                    text={isActive ? 'success' : 'light'}
                    className="fw-semibold px-2 py-1"
                    style={{ backgroundColor: isActive ? '#ffffff' : '#ecfdf5', color: isActive ? '#059669' : '#059669' }}
                  >
                    {cat.count} dự án
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default CategoryList;
