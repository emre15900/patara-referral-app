"use client";

import { ReactNode } from 'react';
import { Header } from '@/components/common/Header';
import { Sidebar } from '@/components/common/Sidebar';
import { BackgroundAnimation } from '@/components/common/BackgroundAnimation';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
      
      <div className="flex-1 relative z-10">
        <Header />
        
        <main className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
      </div>
      
    </div>
  );
}
