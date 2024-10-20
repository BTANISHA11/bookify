import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Feature data (could be expanded or fetched from a backend)
const features = [
  {
    id: 1,
    title: 'AI-Powered Book Recommendations',
    description: 'Get personalized book recommendations based on your reading habits.',
    link: '/recommendations',
  },
  {
    id: 2,
    title: 'Book Condition Grading',
    description: 'Upload pictures of your books, and we’ll grade the condition for fair trading.',
    link: '/condition-grading',
  },
  {
    id: 3,
    title: 'Social Book Clubs',
    description: 'Join book clubs and discuss your favorite reads with other users.',
    link: '/book-clubs',
  },
  {
    id: 4,
    title: 'Augmented Reality (AR) Book Previews',
    description: 'Preview the look and feel of books before trading with AR technology.',
    link: '/ar-previews',
  },
  {
    id: 5,
    title: 'Blockchain for Ownership Authentication',
    description: 'Authenticate and track the ownership history of books with blockchain.',
    link: '/blockchain-authentication',
  },
];

const FeatureRoute = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Features of Bookify</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a
              href={feature.link}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureRoute;
