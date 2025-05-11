import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { OrbitAnimation } from '@/components/OrbitAnimation';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundAnimation />

      <Header />

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
              onClick={() => window.location.href = '/dashboard'}
            >
              Connect/Sign in
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 