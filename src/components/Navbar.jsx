import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Medical Image Analyzer
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/workspace"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              Workspace
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? 
                <Sun className="text-white" size={24} /> : 
                <Moon className="text-gray-800" size={24} />
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;