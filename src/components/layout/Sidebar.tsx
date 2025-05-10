import React from 'react';
import Link from 'next/link';
import { FiHome, FiDollarSign, FiUsers, FiPieChart, FiSliders, FiGift } from 'react-icons/fi';

const menuItems = [
  { icon: <FiHome />, label: 'Dashboard', href: '/' },
  { icon: <FiDollarSign />, label: 'Earnings', href: '/earnings' },
  { icon: <FiUsers />, label: 'Referrals', href: '/referrals', active: true },
  { icon: <FiPieChart />, label: 'Statistics', href: '/statistics' },
  { icon: <FiSliders />, label: 'Settings', href: '/settings' },
  { icon: <FiGift />, label: 'Rewards', href: '/rewards' },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 border-r border-[var(--patara-border)] bg-[var(--patara-dark-bg)]">
      <div className="p-4">
        <div className="flex items-center mb-8 mt-2">
          <div className="h-8 w-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center mr-3 font-bold text-sm">
            @
          </div>
          <div>
            <p className="font-medium">@patara.sui</p>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></div>
              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </div>
        
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-1">
                <Link 
                  href={item.href}
                  className={`flex items-center px-3 py-2.5 rounded-md text-sm ${
                    item.active 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400 hover:bg-[var(--patara-card-bg)]'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 