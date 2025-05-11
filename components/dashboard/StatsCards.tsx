"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function StatsCards() {
  const handleClaim = () => {
    toast.success("Claim request submitted. You'll receive your funds shortly!");
  };
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <motion.div 
        className="bg-zinc-900 rounded-lg p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-start gap-3">
          <div className="bg-blue-500/20 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12" />
              <path d="M8 12h8" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-xs text-zinc-400">Total Earned Fee</div>
            <div className="text-md font-base">$1,000.00</div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-zinc-900 rounded-lg p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                <line x1="12" y1="22" x2="12" y2="13" />
                <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-zinc-400">Unclaimed Fee</div>
              <div className="text-md font-base">$500.00</div>
            </div>
          </div>
          <Button 
            onClick={handleClaim}
            className="bg-blue-600 hover:bg-blue-700 text-sm px-4 text-white rounded-xl"
          >
            Claim
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-zinc-900 rounded-lg p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex items-start gap-3">
          <div className="bg-green-500/20 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
              <path d="m15 5-2-3h-2l-2 3" />
              <path d="m15 19 2 3h2l2-3" />
              <path d="M19 5 7.1 9.2" />
              <path d="m12 12-3-3" />
              <path d="m5 19 12-4.2" />
              <path d="m5 5 5 8" />
              <path d="m19 19-5-8" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-zinc-400">Total Referral Points</div>
            <div className="text-md font-base">1289</div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-zinc-900 rounded-lg p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-start gap-3">
          <div className="bg-yellow-500/20 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-zinc-400">Referrals</div>
            <div className="text-md font-base">34</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}