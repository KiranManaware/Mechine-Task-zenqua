import React from 'react';
import Avatar from '../ui/Avatar';
import { currentUser } from '../../data/mockData';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  const navItems = [
    { name: 'Dashboard', href: '#' },
    { name: 'Roster', href: '#', dropdown: true },
    { name: 'Communications', href: '#', dropdown: true },
    { name: 'CRM', href: '#', active: true },
    { name: 'Contracts', href: '#', dropdown: true },
    { name: 'Settings', href: '#', dropdown: true },
    { name: 'More', href: '#', dropdown: true },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex items-center ">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600">ROSTER</span>
              <span className="text-gray-600 ml-1 text-sm font-medium">GRID</span>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    item.active
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">n
            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-700">{currentUser.name}</span>
              <Avatar 
                name={currentUser.name} 
                initials={currentUser.initials} 
                imageUrl={currentUser.avatar} 
                size="sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;