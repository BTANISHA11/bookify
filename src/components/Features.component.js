import React from 'react';
import FeatureRoute from '../routes/Features.route';

const FeatureComponent = ({ title, description, icon, link }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
        </div>
        <h3 className="ml-4 text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Learn More
      </a>
    </div>
  );
};

export default FeatureComponent;
