import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import StatCard from '@/components/stats/StatCard';
import { FiDollarSign, FiGift, FiUsers, FiClock } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import TransactionTable from '@/components/transactions/TransactionTable';

export default function Earnings() {
  return (
    <>
      <Head>
        <title>Patara - Earnings</title>
        <meta name="description" content="Track your earnings and rewards on Patara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <h1 className="text-2xl font-bold mb-4">Earnings</h1>
          <p className="text-gray-400 mb-6">
            Track and manage your earnings from referrals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            <StatCard 
              icon={<FiDollarSign size={20} />} 
              title="Total Earned Fee" 
              value="$1,000.00" 
            />
            <StatCard 
              icon={<FiGift size={20} />} 
              title="Unclaimed Fee" 
              value="$500.00" 
              action={<Button variant="blue" size="sm">Claim</Button>}
            />
            <StatCard 
              icon={<FiUsers size={20} />} 
              title="Total Referral Points" 
              value="1289" 
            />
            <StatCard 
              icon={<FiUsers size={20} />} 
              title="Referrals" 
              value="34" 
            />
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Earnings</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="text-xs h-8">1D</Button>
                  <Button variant="outline" size="sm" className="text-xs h-8 bg-white/5">1W</Button>
                  <Button variant="outline" size="sm" className="text-xs h-8">1M</Button>
                  <Button variant="outline" size="sm" className="text-xs h-8">1Y</Button>
                  <Button variant="outline" size="sm" className="text-xs h-8">ALL</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TransactionTable />
            </CardContent>
          </Card>
        </div>
      </Layout>
    </>
  );
} 