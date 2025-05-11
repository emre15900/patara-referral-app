import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { ReferralCard } from '@/components/dashboard/ReferralCard';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { FilterableEarningsTable } from '@/components/dashboard/FilterableEarningsTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sidebar } from '@/components/Sidebar';
import { NotificationsDropdown, SettingsDropdown, UserDropdown } from '@/components/HeaderDropdowns';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';
import Image from 'next/image';

export default function Dashboard() {
  const [activePeriod, setActivePeriod] = useState('all');
  
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Animasyonlu Arka Plan */}
      <BackgroundAnimation />
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        {/* Navigation */}
        <header className="border-b border-zinc-800 sticky top-0 z-20 bg-black/70 backdrop-blur-sm">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4 md:hidden">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">P</div>
                <span className="font-bold text-xl">patara</span>
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
                    <FilterableEarningsTable />
                  </TabsContent>
                  <TabsContent value="1d">
                    <FilterableEarningsTable />
                  </TabsContent>
                  <TabsContent value="1w">
                    <FilterableEarningsTable />
                  </TabsContent>
                  <TabsContent value="1m">
                    <FilterableEarningsTable />
                  </TabsContent>
                  <TabsContent value="1y">
                    <FilterableEarningsTable />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 