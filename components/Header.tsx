import Link from 'next/link';
import Image from 'next/image';
import { SearchBar } from '@/components/SearchBar';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const NotificationsDropdown = dynamic(
  () => import('@/components/HeaderDropdowns').then(mod => mod.NotificationsDropdown),
  { ssr: false }
);

const SettingsDropdown = dynamic(
  () => import('@/components/HeaderDropdowns').then(mod => mod.SettingsDropdown),
  { ssr: false }
);

const UserDropdown = dynamic(
  () => import('@/components/HeaderDropdowns').then(mod => mod.UserDropdown),
  { ssr: false }
);

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)} />
      
      <div className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-zinc-800">
          <Link href="/" className="block max-w-[120px]" onClick={() => setSidebarOpen(false)}>
            <img
              src="/images/patara-logo.png"
              alt="Patara Logo"
              width={120}
              height={30}
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-white hover:text-blue-400 block py-2" onClick={() => setSidebarOpen(false)}>Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-white hover:text-blue-400 block py-2" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
            </li>
            <li>
              <Link href="/referrals" className="text-white hover:text-blue-400 block py-2" onClick={() => setSidebarOpen(false)}>Referrals</Link>
            </li>
            <li>
              <Link href="/earnings" className="text-white hover:text-blue-400 block py-2" onClick={() => setSidebarOpen(false)}>Earnings</Link>
            </li>
            <li>
              <Link href="/settings" className="text-white hover:text-blue-400 block py-2" onClick={() => setSidebarOpen(false)}>Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      <header className="border-b border-zinc-800 sticky top-0 z-20 bg-black/70 backdrop-blur-sm">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-white bg-zinc-800 rounded-md hover:bg-zinc-700 lg:hidden flex items-center justify-center" 
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              style={{ minWidth: '40px', minHeight: '40px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
            
            <Link href="/" className="block max-w-[150px]">
              <img
                src="/images/patara-logo.png"
                alt="Patara Logo"
                width={150}
                height={40}
                style={{ width: '100%', height: 'auto' }}
              />
            </Link>
          </div>

          <SearchBar />

          <div className="flex items-center gap-4">
            <NotificationsDropdown />
            <SettingsDropdown />
            <UserDropdown />
          </div>
        </div>
      </header>
    </>
  );
} 