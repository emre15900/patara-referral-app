import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { ReferralCard } from '@/components/dashboard/ReferralCard';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { EarningsTable } from '@/components/dashboard/EarningsTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserAvatar } from '@/components/UserAvatar';
import Link from 'next/link';

export default function Dashboard() {
  const [activePeriod, setActivePeriod] = useState('all');
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-zinc-800">
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
            <UserAvatar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <ReferralCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <StatsCards />
          </div>
        </div>

        {/* Earnings Section */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <h2 className="text-xl font-semibold">Earnings</h2>
            
            <div className="flex flex-wrap gap-2">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-zinc-900 p-1">
                  <TabsTrigger 
                    value="1d" 
                    className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                    onClick={() => setActivePeriod('1d')}
                  >
                    1D
                  </TabsTrigger>
                  <TabsTrigger 
                    value="1w" 
                    className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                    onClick={() => setActivePeriod('1w')}
                  >
                    1W
                  </TabsTrigger>
                  <TabsTrigger 
                    value="1m" 
                    className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                    onClick={() => setActivePeriod('1m')}
                  >
                    1M
                  </TabsTrigger>
                  <TabsTrigger 
                    value="1y" 
                    className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                    onClick={() => setActivePeriod('1y')}
                  >
                    1Y
                  </TabsTrigger>
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400"
                    onClick={() => setActivePeriod('all')}
                  >
                    ALL
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <EarningsTable />
                </TabsContent>
                <TabsContent value="1d">
                  <EarningsTable />
                </TabsContent>
                <TabsContent value="1w">
                  <EarningsTable />
                </TabsContent>
                <TabsContent value="1m">
                  <EarningsTable />
                </TabsContent>
                <TabsContent value="1y">
                  <EarningsTable />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 