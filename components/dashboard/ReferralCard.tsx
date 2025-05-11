"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { OrbitAnimation } from '@/components/common/OrbitAnimation';
import { toast } from 'sonner';

export function ReferralCard() {
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = "0x0e0Fdd520F76f3eAC0dAa76Ac0e489FC53b366f58";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setIsCopied(true);
    toast.success("Referral link copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Patara with my referral link!',
          text: 'Use my referral link to join Patara and we both earn rewards!',
          url: referralLink,
        });
        toast.success("Thanks for sharing!");
      } catch (error) {
        toast.error("Something went wrong with sharing");
      }
    } else {
      copyToClipboard();
      toast.info("No sharing capability detected. Link copied instead!");
    }
  };
  
  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-2">Refer and Earn</h2>
        <p className="text-zinc-400 text-sm mb-6">
          Invite your friends to Patara and earn a share of their on-chain rewards forever!
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full sm:w-auto flex-shrink-0">
            <OrbitAnimation />
          </div>
          
          <div className="w-full">
            <div className="mb-2">
              <label className="text-zinc-400 text-xs">Your Referral Link:</label>
            </div>
            <div className="bg-zinc-800 p-3 rounded flex items-center break-all text-sm mb-4 border border-zinc-700">
              {referralLink}
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={copyToClipboard}
                className="bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                {isCopied ? "Copied!" : "Copy Link"}
              </Button>
              
              <Button
                onClick={handleShare}
                variant="outline"
                className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}