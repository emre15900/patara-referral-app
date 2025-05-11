"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/common/UserAvatar';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function UserDropdown() {
  const [copyStatus, setCopyStatus] = useState('Copy');
  const referralLink = "https://patara.io/ref/0x1a2b3c4d5e6f7g8h9i0j";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isResponsive, setIsResponsive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopyStatus('Copied!');

      toast.success("Referral link copied to clipboard!", {
        description: "Share with your friends to earn rewards",
        duration: 3000,
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopyStatus('Copy');
        timeoutRef.current = null;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopyStatus('Failed!');

      toast.error("Failed to copy link", {
        description: "Please try again",
        duration: 3000,
      });
    }
  };


  const handleResize = () => {
    setIsResponsive(window.innerWidth < 445);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, [pathname]);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg px-1.5 py-1"
        >
          <UserAvatar size="sm" />
          {
            !isResponsive && <span className="text-sm font-medium">@patara.sui</span>
          }
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white p-4 w-80">
        <div className="flex items-center gap-3 mb-2">
          <UserAvatar size="md" />
          <div>
            <p className="font-medium">Alex Johnson</p>
            <p className="text-xs text-zinc-400 truncate">0x1a2b...3c4d</p>
          </div>
        </div>

        <div className="py-3 border-t border-b border-zinc-800 my-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-zinc-400">Your Referral Link</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-blue-400 hover:text-blue-300"
              onClick={copyToClipboard}
            >
              {copyStatus}
            </Button>
          </div>
          <p className="text-xs bg-zinc-950 p-2 rounded border border-zinc-800 truncate overflow-hidden">
            {referralLink}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-zinc-800 p-3 rounded-md">
            <p className="text-sm text-zinc-400">Total Earned</p>
            <p className="text-lg font-semibold">2.45 ETH</p>
          </div>
          <div className="bg-zinc-800 p-3 rounded-md">
            <p className="text-sm text-zinc-400">Referrals</p>
            <p className="text-lg font-semibold">12</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-xl">
            Dashboard
          </Button>
          <Link href="/" className='w-full'>
            <Button variant="outline" className="w-full bg-zinc-800 hover:bg-zinc-700 border-none hover:text-white text-[#808080] rounded-xl">
              Sign Out
            </Button>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 