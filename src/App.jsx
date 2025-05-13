import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/HeroSection';
import DealsList from './components/deals/DealsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <DealsList />
    </div>
  );
}

export default App;