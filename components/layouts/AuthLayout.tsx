"use client";

import { ReactNode, useState } from 'react';
import { Header } from '@/components/common/Header';
import { BackgroundAnimation } from '@/components/common/BackgroundAnimation';
import { Sidebar } from '@/components/common/Sidebar';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundAnimation />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isAuthenticated={false} />
      
      <main className="flex min-h-[calc(100vh-64px)] p-3 md:p-0 flex-col items-center justify-center relative overflow-hidden">
        {children}
      </main>
    </div>
  );
} 