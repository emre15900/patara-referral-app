import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { OrbitAnimation } from '@/components/OrbitAnimation';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animasyonlu Arka Plan */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <header className="border-b border-zinc-800 relative z-10">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">P</div>
              <span className="font-bold text-xl">patara</span>
            </Link>
          </div>
          
          <SearchBar />
          
          <div className="flex items-center gap-4">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Connect/Sign in</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center relative overflow-hidden">
        <div className="max-w-md w-full bg-zinc-900/60 backdrop-blur-sm p-12 rounded-lg border border-zinc-800 shadow-xl z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-10 relative">
              <OrbitAnimation />
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
              Refer friends and earn with Patara!
            </h1>
            
            <p className="text-zinc-400 mb-8">
              Invite your friends to Patara and earn a share of their on-chain rewards forever!
            </p>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full py-6"
              asChild
            >
              <Link href="/dashboard">Connect/Sign in</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 