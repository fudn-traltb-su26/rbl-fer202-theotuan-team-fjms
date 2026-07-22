import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [savedProjects, setSavedProjects] = useLocalStorage('saved_projects', []);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('is_logged_in', false);

  const saveProject = (project) => {
    const isAlreadySaved = savedProjects.some((p) => p.id === project.id);
    if (isAlreadySaved) {
      alert(`Dự án "${project.title}" đã có trong danh sách lưu!`);
      return;
    }
    setSavedProjects((prev) => [...prev, project]);
  };

  const unsaveProject = (projectId) => {
    setSavedProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  // Side effect for document title with cleanup
  useEffect(() => {
    const count = savedProjects.length;
    const originalTitle = document.title || 'FJMS Marketplace';
    if (count > 0) {
      document.title = `(${count}) FJMS Marketplace`;
    } else {
      document.title = `FJMS Marketplace`;
    }

    return () => {
      document.title = originalTitle;
    };
  }, [savedProjects]);

  return (
    <ProjectContext.Provider
      value={{
        savedProjects,
        saveProject,
        unsaveProject,
        isLoggedIn,
        toggleAuth,
        setSavedProjects
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}

export default ProjectContext;
