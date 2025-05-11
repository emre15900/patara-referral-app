"use client";

import { ReactNode } from 'react';
import { Header } from '@/components/common/Header';
import { BackgroundAnimation } from '@/components/common/BackgroundAnimation';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundAnimation />
      
      <Header />
      
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center relative overflow-hidden">
        {children}
      </main>
    </div>
  );
} 