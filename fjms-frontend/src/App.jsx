import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

function App() {
  const mainStyle = {
    backgroundColor: '#F9FAFB', // Light gray background from style guide
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Inter', sans-serif"
  };

  const contentStyle = {
    flex: '1'
  };

  return (
    <div style={mainStyle}>
      {/* Header component [A] */}
      <Header />

      {/* Main content body */}
      <main style={contentStyle}>
        {/* Hero Banner component [B] */}
        <Banner />

        {/* CategoryList component [C] */}
        <CategoryList />

        {/* ProjectGrid component [C] */}
        <ProjectGrid />
      </main>

      {/* Footer component [A] */}
      <Footer />
    </div>
  );
}

export default App;
