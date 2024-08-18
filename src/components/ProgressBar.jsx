import React from 'react';

const ProgressBar = ({ value, max }) => {
  const progressPercentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-6 mb-4">
      <div
        className="bg-blue-600 dark:bg-blue-400 h-6 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
