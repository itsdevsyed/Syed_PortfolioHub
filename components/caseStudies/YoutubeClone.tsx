// components/caseStudies/YoutubeClone.tsx
import React from 'react';

// Props for the close function
type YoutubeCloneProps = {
  onClose: () => void;
};

export default function YoutubeClone({ onClose }: YoutubeCloneProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center relative dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold dark:text-gray-400 dark:hover:text-white"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">YouTube Clone Case Study</h2>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
          This is the detailed content for the YouTube Clone project. It would include:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-700 dark:text-gray-300">
          <li>Technical challenges faced and solutions</li>
          <li>Key features implemented (e.g., search, video playback, recommendations)</li>
          <li>API integration details (RapidAPI)</li>
          <li>Lessons learned</li>
        </ul>
        <a
          href="https://youtube-clone-theta-ruby.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
}
