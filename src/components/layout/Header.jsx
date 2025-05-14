import React, { useState } from 'react';
import Avatar from '../ui/Avatar';
import { currentUser } from '../../data/mockData';
import { Menu, ChevronDown, Search, Bell } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="bg-white shadow-sm border-b border-gray-200 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo and Nav */}
          <div className="flex items-center">
            {/* Mobile Menu Toggle (visible on small screens only) */}
            <div className="mr-2 lg:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600">ROSTER</span>
              <span className="text-gray-600 ml-1 text-sm font-medium">GRID</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex md:ml-8 rounded-full bg-gray-100 px-2 space-x-1">
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

          {/* Right: Icons and Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search icon - visible on medium screens and up */}
            <button
              type="button"
              className="hidden sm:block p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" />
            </button>

            {/* Notifications icon - visible on medium screens and up */}
            <button
              type="button"
              className="hidden sm:block p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-5 w-5" />
            </button>

            {/* Avatar and name - visible on small screens and up */}
            <div className="flex items-center ml-2 sm:ml-0">
              <span className="hidden sm:block mr-2 text-sm font-medium text-gray-700">
                {currentUser.name}
              </span>
              <Avatar
                name={currentUser.name}
                initials={currentUser.initials}
                imageUrl={currentUser.avatar}
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu (shown only if open) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 px-2 pb-3 space-y-1 bg-gray-50 rounded-lg shadow">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 text-base font-medium rounded-md ${
                  item.active
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;