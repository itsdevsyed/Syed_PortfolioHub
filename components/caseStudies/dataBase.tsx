// components/caseStudies/dataBase.tsx
import React from 'react';

// Props for the close function
type DataBaseProps = {
  onClose: () => void;
};

export default function DataBase({ onClose }: DataBaseProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center relative dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold dark:text-gray-400 dark:hover:text-white"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Database Optimization Case Study</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
          This is the detailed content for the Database Optimization project. It would cover:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-700 dark:text-gray-300">
          <li>Understanding N+1 query problem</li>
          <li>Tools and techniques used for optimization</li>
          <li>Performance metrics before and after</li>
          <li>Scalability considerations</li>
        </ul>
      </div>
    </div>
  );
}
