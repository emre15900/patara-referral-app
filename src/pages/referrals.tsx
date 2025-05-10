import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ReferralCircle from '@/components/referral/ReferralCircle';
import ReferralForm from '@/components/referral/ReferralForm';
import StatCard from '@/components/stats/StatCard';
import { FiDollarSign, FiGift, FiUsers, FiClock } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export default function Referrals() {
  return (
    <>
      <Head>
        <title>Patara - Referrals</title>
        <meta name="description" content="Manage your referrals and earn rewards on Patara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-4">Refer and Earn</h1>
            <p className="text-gray-400 mb-6">
              Invite your friends to Patara and earn a share of their on-chain rewards forever!
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ReferralCircle />
                  </div>
                  <div className="flex flex-col justify-center">
                    <ReferralForm />
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-xl font-bold mb-4">Earnings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>Get rewards for referring friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Share your referral link</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Copy your unique referral link and share it with friends
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Friends join Patara</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        When they sign up using your link, they'll be connected to your account
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Earn rewards</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        You'll earn a percentage of their platform fees forever!
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
} 