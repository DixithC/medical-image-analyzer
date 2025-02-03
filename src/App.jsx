import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ImageWorkspace from './components/ImageWorkspace';
import Dashboard from './components/Dashboard';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workspace" element={<ImageWorkspace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;