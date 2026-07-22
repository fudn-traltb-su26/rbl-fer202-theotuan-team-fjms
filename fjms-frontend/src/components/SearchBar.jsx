import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Form, InputGroup, Button, Badge } from 'react-bootstrap';

function SearchBar({ keyword, onChangeKeyword, onClearKeyword, totalCount, activeCategory, onResetCategory, inputRef }) {
  const isTooShort = keyword.trim().length === 1;

  return (
    <div className="w-100 mb-4">
      <div className="p-3 bg-white rounded-3 border shadow-sm">
        <Form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <InputGroup.Text className="bg-light border-end-0 text-muted">
              <Search size={18} />
            </InputGroup.Text>
            
            <Form.Control
              ref={inputRef}
              type="text"
              placeholder="Tìm kiếm dự án theo tên hoặc kỹ năng (ví dụ: React, Flutter, UI/UX...)"
              value={keyword}
              onChange={(e) => onChangeKeyword(e.target.value)}
              className={`border-start-0 shadow-none ${isTooShort ? 'is-invalid' : ''}`}
              style={{ fontSize: '0.95rem' }}
            />

            {keyword && (
              <Button 
                variant="light" 
                onClick={onClearKeyword}
                className="border border-start-0 text-muted px-2"
                title="Xóa từ khóa"
              >
                <X size={18} />
              </Button>
            )}

            <Button variant="success" className="px-4 fw-semibold" style={{ backgroundColor: '#059669', borderColor: '#059669' }}>
              Tìm kiếm
            </Button>
          </InputGroup>
        </Form>

        {/* Validation Warning */}
        {isTooShort && (
          <div className="text-danger small mt-2 d-flex align-items-center gap-1 fw-medium">
            <span>⚠️</span> Từ khóa tìm kiếm quá ngắn! Vui lòng nhập từ 2 ký tự trở lên để lọc chính xác.
          </div>
        )}

        {/* Search Results Summary & Active Filters */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 pt-2 border-top fs-7 text-muted">
          <div className="d-flex align-items-center gap-2">
            <span>Hiển thị <strong className="text-dark">{totalCount}</strong> dự án phù hợp</span>
            {activeCategory !== 'ALL' && (
              <Badge bg="success" className="d-inline-flex align-items-center gap-1 px-2 py-1 fw-normal" style={{ backgroundColor: '#059669' }}>
                <Filter size={12} /> Danh mục: {activeCategory}
                <X size={14} className="ms-1 cursor-pointer" onClick={onResetCategory} style={{ cursor: 'pointer' }} />
              </Badge>
            )}
            {keyword.trim().length >= 2 && (
              <Badge bg="secondary" className="d-inline-flex align-items-center gap-1 px-2 py-1 fw-normal">
                Từ khóa: "{keyword}"
              </Badge>
            )}
          </div>

          {(activeCategory !== 'ALL' || keyword) && (
            <Button 
              variant="link" 
              className="text-decoration-none p-0 text-success fw-medium small"
              onClick={() => {
                onClearKeyword();
                onResetCategory();
              }}
              style={{ color: '#059669' }}
            >
              Đặt lại bộ lọc
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
