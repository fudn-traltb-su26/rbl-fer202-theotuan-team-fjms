import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from 'react-bootstrap';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="light"
      onClick={toggleTheme}
      className="d-flex align-items-center justify-content-center p-2 rounded-circle border shadow-sm"
      style={{
        width: '40px',
        height: '40px',
        color: theme === 'light' ? '#4B5563' : '#F3F4F6',
        backgroundColor: theme === 'light' ? '#FFFFFF' : '#374151',
        borderColor: theme === 'light' ? '#E5E7EB' : '#4B5563',
      }}
      title={theme === 'light' ? 'Chuyển sang chế độ tối' : 'Chuyển sang chế độ sáng'}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
}

export default ThemeToggle;
