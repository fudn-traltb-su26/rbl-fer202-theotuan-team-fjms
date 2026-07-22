import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.project.isLoggedIn);

  if (!isLoggedIn) {
    alert('Bạn cần đăng nhập (toggle ở Header) để truy cập trang quản lý Admin!');
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
