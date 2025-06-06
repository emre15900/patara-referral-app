"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SearchBar } from '@/components/common/SearchBar';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Search } from "lucide-react";

const NotificationsDropdown = dynamic(
  () => import('@/components/common/HeaderDropdowns').then(mod => mod.NotificationsDropdown),
  { ssr: false }
);

const SettingsDropdown = dynamic(
  () => import('@/components/common/HeaderDropdowns').then(mod => mod.SettingsDropdown),
  { ssr: false }
);

const UserDropdown = dynamic(
  () => import('@/components/common/HeaderDropdowns').then(mod => mod.UserDropdown),
  { ssr: false }
);

interface HeaderProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: Dispatch<SetStateAction<boolean>>;
  isAuthenticated?: boolean;
}

export function Header({
  sidebarOpen: propSidebarOpen,
  setSidebarOpen: propSetSidebarOpen,
  isAuthenticated = false
}: HeaderProps) {
  const [localSidebarOpen, setLocalSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sidebarOpen = propSidebarOpen !== undefined ? propSidebarOpen : localSidebarOpen;
  const setSidebarOpen = propSetSidebarOpen || setLocalSidebarOpen;

  const [isResponsive, setIsResponsive] = useState(false);
  
  const pathname = usePathname();

  const handleResize = () => {
    setIsResponsive(window.innerWidth < 978);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, [pathname]);

  const handleSidebarToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-30 lg:hidden transition-all duration-300 ease-in-out ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)} />

      <header className="border-b border-zinc-800 sticky top-0 z-[9999] bg-black/70 backdrop-blur-sm">
        <div className="container-fluid p-2 mx-auto sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {
              isAuthenticated && <button
                className="p-2 text-white bg-zinc-800 rounded-md hover:bg-zinc-700 flex items-center justify-center"
                onClick={handleSidebarToggle}
                aria-label="Open menu"
                style={{ minWidth: '40px', minHeight: '40px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </button>
            }

            <Link href="/" className="block max-w-[150px]">
              {isResponsive && pathname === '/dashboard' ? (
                <Image
                  src="/logo/patara-favicon.png"
                  alt="Patara Logo"
                  width={40}
                  height={40}
                />
              ) : (
                <Image
                  src="/logo/patara-logo.png"
                  alt="Patara Logo"
                  width={130}
                  height={40}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </Link>
          </div>

          <SearchBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="[@media(min-width:870px)]:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  aria-label="Search"
                >
                  <Search className="text-white" size={20} />
                </button>
                <NotificationsDropdown />
                <SettingsDropdown />
                <UserDropdown />
              </>
            ) : (
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="[@media(min-width:870px)]:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  aria-label="Search"
                >
                  <Search className="text-white" size={20} />
                </button>
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2">
                    Connect/Sign in
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}