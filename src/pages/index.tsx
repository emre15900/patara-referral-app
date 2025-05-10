import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ReferralCircle from '@/components/referral/ReferralCircle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Patara - Refer and Earn</title>
        <meta name="description" content="Invite your friends to Patara and earn a share of their on-chain rewards forever!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="max-w-5xl mx-auto mt-8">
          <Card className="p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-4">Refer friends and earn with Patara!</h1>
                <p className="text-gray-400 mb-6">
                  Invite your friends to Patara and earn a share of their on-chain rewards forever!
                </p>
                <Button variant="blue" size="lg" className="w-full sm:w-auto">
                  Connect/Sign in
                </Button>
              </div>
              <div className="flex justify-center">
                <ReferralCircle />
              </div>
            </div>
          </Card>
        </div>
      </Layout>
    </>
  );
}
