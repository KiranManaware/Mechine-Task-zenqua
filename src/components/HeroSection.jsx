import React from 'react';
import Button from './ui/Button';
import image from "../assets/client-cover.png";


const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-sm text-gray-600 mb-2">Welcome!</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Manage your <span className="text-blue-600">Deals</span>
            </h1>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Team collaboration"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;