import React from 'react';
import { Button } from '@/components/ui/button';
import { FiShare2 } from 'react-icons/fi';

const ReferralForm = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col">
        <label className="text-xs text-gray-400 mb-2">Your Referral Link:</label>
        <div className="flex">
          <div className="flex-1 bg-[var(--patara-dark-bg)] border border-[var(--patara-border)] rounded-l-md py-2 px-3 text-gray-300 overflow-hidden">
            <p className="text-sm truncate">0x0eCad5D0F76i3eAC0Aa764De4B9FC53BC38d6f58</p>
          </div>
          <Button variant="default" className="rounded-l-none">
            Copy Link
          </Button>
        </div>
        <div className="mt-4">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FiShare2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm; 