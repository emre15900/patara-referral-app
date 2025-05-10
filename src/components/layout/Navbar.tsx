import React from 'react';
import Link from 'next/link';
import { FiSettings, FiBell, FiMenu } from 'react-icons/fi';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 h-16 bg-[var(--patara-dark-bg)] border-b border-[var(--patara-border)] px-4">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <button className="lg:hidden mr-2 text-gray-400">
            <FiMenu size={24} />
          </button>
          <Link href="/" className="flex items-center">
            <svg
              className="h-9 w-9 p-1 mr-2 rounded-full bg-blue-500 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold text-xl text-white">patara</span>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="relative mx-2">
            <input
              type="text"
              placeholder="Enter Accounts, Platforms, NFTs, Token"
              className="w-80 py-2 px-4 pl-10 rounded-md bg-[var(--patara-card-bg)] border border-[var(--patara-border)] text-sm text-white placeholder-gray-500 focus:outline-none"
            />
            <svg
              className="absolute left-3 top-2.5 text-gray-500"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="absolute right-3 top-2 text-xs text-gray-500">⌘ K</span>
          </div>
          
          <button className="mx-2 text-gray-400">
            <FiBell size={20} />
          </button>
          
          <button className="mx-2 text-gray-400">
            <FiSettings size={20} />
          </button>
          
          <Button variant="blue" className="ml-4">
            Connect/Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 