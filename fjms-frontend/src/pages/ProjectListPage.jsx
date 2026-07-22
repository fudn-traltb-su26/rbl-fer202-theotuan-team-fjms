import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import ProjectGrid from '../components/ProjectGrid';
import SearchBar from '../components/SearchBar';
import SectionWrapper from '../components/SectionWrapper';
import { Button, Container, Spinner, Alert } from 'react-bootstrap';

export function ProjectListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Local state for search box
  const [searchQuery, setSearchQuery] = useState('');
  // Debounce the search query by 500ms
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Category filter state (read from URL parameter, fallback to 'ALL')
  const initialCategory = searchParams.get('category') || 'ALL';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Focus ref for the search input
  const searchInputRef = useRef(null);

  // Sync category state if URL parameter changes
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'ALL');
  }, [searchParams]);

  // Construct query parameters for the API call
  const apiParams = {};
  if (debouncedSearch && debouncedSearch.trim().length >= 2) {
    apiParams.q = debouncedSearch;
  }
  if (activeCategory !== 'ALL') {
    apiParams.category = activeCategory;
  }

  // Fetch projects from mock backend
  const { data: projects, loading, error, refetch } = useFetch('/projects', apiParams);
  // Fetch categories for category filter buttons
  const { data: categories, loading: catLoading } = useFetch('/categories');

  // Autofocus the search bar once the initial load completes
  useEffect(() => {
    if (!loading && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [loading]);

  const handleSearch = (val) => {
    setSearchQuery(val);
  };

  const handleCategorySelect = (categoryName) => {
    const newCategory = activeCategory === categoryName ? 'ALL' : categoryName;
    setActiveCategory(newCategory);
    
    // Update URL params
    const newParams = {};
    if (newCategory !== 'ALL') newParams.category = newCategory;
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('ALL');
    setSearchParams({});
  };

  return (
    <Container className="py-4">
      <SectionWrapper 
        id="project-list"
        badge="Tìm Việc Tự Do"
        title="Danh Sách Cơ Hội Dự Án" 
        subtitle="Tìm kiếm hàng ngàn dự án công nghệ phù hợp với năng lực của bạn"
      >
        {/* Controlled Search Bar Component */}
        <SearchBar 
          keyword={searchQuery}
          onChangeKeyword={handleSearch}
          onClearKeyword={() => setSearchQuery('')}
          totalCount={projects ? projects.length : 0}
          activeCategory={activeCategory}
          onResetCategory={() => handleCategorySelect('ALL')}
          inputRef={searchInputRef}
        />

        {/* Category Filters row */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          <Button
            variant={activeCategory === 'ALL' ? 'success' : 'outline-secondary'}
            onClick={() => handleCategorySelect('ALL')}
            className="rounded-pill px-3 py-1 fw-semibold small"
            style={activeCategory === 'ALL' ? { backgroundColor: '#059669', borderColor: '#059669' } : {}}
          >
            Tất cả
          </Button>
          {!catLoading && categories && categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.name ? 'success' : 'outline-secondary'}
              onClick={() => handleCategorySelect(cat.name)}
              className="rounded-pill px-3 py-1 fw-semibold small"
              style={activeCategory === cat.name ? { backgroundColor: '#059669', borderColor: '#059669' } : {}}
            >
              {cat.icon} {cat.name}
            </Button>
          ))}
        </div>

        {/* Loading and Error states */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-2 text-muted fw-semibold">Đang tải danh sách dự án...</p>
          </div>
        ) : error ? (
          <Alert variant="danger" className="mx-auto text-center" style={{ maxWidth: '600px' }}>
            <Alert.Heading>Đã xảy ra lỗi!</Alert.Heading>
            <p>{error}</p>
            <hr />
            <Button variant="danger" onClick={refetch} className="fw-semibold">
              Thử lại
            </Button>
          </Alert>
        ) : (
          <div>
            {/* Project list rendering */}
            {projects && projects.length > 0 ? (
              <ProjectGrid projects={projects} />
            ) : (
              <div className="text-center py-5 border rounded-3 bg-white">
                <p className="text-muted fs-5 mb-3">Không tìm thấy dự án nào phù hợp với bộ lọc của bạn.</p>
                <Button variant="success" onClick={handleResetFilters} style={{ backgroundColor: '#059669', borderColor: '#059669' }}>
                  Đặt lại bộ lọc
                </Button>
              </div>
            )}
          </div>
        )}
      </SectionWrapper>
    </Container>
  );
}

export default ProjectListPage;
