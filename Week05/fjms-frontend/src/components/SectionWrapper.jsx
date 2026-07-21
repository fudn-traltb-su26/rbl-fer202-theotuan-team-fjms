import React from 'react';
import { Container, Badge } from 'react-bootstrap';

function SectionWrapper({ id, title, subtitle, badge, children, bg = "light" }) {
  const isWhite = bg === "white";

  return (
    <section 
      id={id} 
      className={`py-5 ${isWhite ? 'bg-white border-top border-bottom' : 'bg-transparent'}`}
    >
      <Container>
        {/* Section Header */}
        {title && (
          <div className="mb-4">
            {badge && (
              <Badge bg="success" className="px-3 py-2 rounded-pill fw-semibold mb-2" style={{ backgroundColor: '#059669' }}>
                {badge}
              </Badge>
            )}
            <h2 className="fw-bold text-dark fs-3 mb-1" style={{ letterSpacing: '-0.01em' }}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted fs-6 mb-0">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section Children Content */}
        <div className="w-100">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default SectionWrapper;
