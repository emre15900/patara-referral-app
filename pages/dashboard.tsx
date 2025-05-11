import { useState } from 'react';
import { ReferralCard } from '@/components/dashboard/ReferralCard';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MainLayout } from '@/components/layouts/MainLayout';
import dynamic from 'next/dynamic';

const FilterableEarningsTable = dynamic(
  () => import('@/components/dashboard/FilterableEarningsTable').then(mod => mod.FilterableEarningsTable),
  { ssr: false }
);

export default function Dashboard() {
  const [activePeriod, setActivePeriod] = useState('all');

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <ReferralCard />
        </div>

        <div className="lg:col-span-5">
          <StatsCards />
        </div>
      </div>

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
    </MainLayout>
  );
} 