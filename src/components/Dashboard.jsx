import React from 'react';
import { Link } from 'react-router-dom';
import { ImagePlus, History, Settings } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Welcome to Medical Image Analyzer
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/workspace">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <ImagePlus className="text-blue-500" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  New Analysis
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Start a new image analysis session
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <History className="text-green-500" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Sessions
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                View your recent analysis sessions
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Settings className="text-purple-500" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Settings
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Configure application preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;