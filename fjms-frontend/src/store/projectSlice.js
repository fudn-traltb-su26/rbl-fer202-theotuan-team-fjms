import { createSlice } from '@reduxjs/toolkit';

const getInitialSavedProjects = () => {
  try {
    const item = window.localStorage.getItem('saved_projects');
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
};

const getInitialAuth = () => {
  try {
    const item = window.localStorage.getItem('is_logged_in');
    return item ? JSON.parse(item) : false;
  } catch {
    return false;
  }
};

const initialState = {
  savedProjects: getInitialSavedProjects(),
  isLoggedIn: getInitialAuth()
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    saveProject: (state, action) => {
      const project = action.payload;
      const exists = state.savedProjects.some((p) => p.id === project.id);
      if (exists) {
        alert(`Dự án "${project.title}" đã có trong danh sách lưu!`);
        return;
      }
      state.savedProjects.push(project);
      window.localStorage.setItem('saved_projects', JSON.stringify(state.savedProjects));
    },
    unsaveProject: (state, action) => {
      const projectId = action.payload;
      state.savedProjects = state.savedProjects.filter((p) => p.id !== projectId);
      window.localStorage.setItem('saved_projects', JSON.stringify(state.savedProjects));
    },
    clearSavedProjects: (state) => {
      state.savedProjects = [];
      window.localStorage.setItem('saved_projects', JSON.stringify([]));
    },
    toggleAuth: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      window.localStorage.setItem('is_logged_in', JSON.stringify(state.isLoggedIn));
    }
  }
});

export const { saveProject, unsaveProject, clearSavedProjects, toggleAuth } = projectSlice.actions;

export default projectSlice.reducer;
