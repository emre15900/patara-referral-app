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
      
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center relative overflow-hidden">
        {children}
      </main>
    </div>
  );
} 