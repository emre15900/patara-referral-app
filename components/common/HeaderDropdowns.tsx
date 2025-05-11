"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/common/UserAvatar';

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative p-2 bg-zinc-800 hover:bg-zinc-700 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white p-4 w-80">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Notifications</h3>
          <Button variant="ghost" size="sm" className="text-xs text-blue-400 hover:text-blue-300">
            Mark all as read
          </Button>
        </div>

        <div className="space-y-4 mt-4 max-h-[300px] overflow-auto">
          <div className="border-l-2 border-blue-500 pl-4 py-1">
            <p className="text-sm font-medium">New referral reward</p>
            <p className="text-xs text-zinc-400">You received 0.05 ETH from user0x12...89f3</p>
            <p className="text-xs text-zinc-500 mt-1">2 hours ago</p>
          </div>

          <div className="border-l-2 border-blue-500 pl-4 py-1">
            <p className="text-sm font-medium">Level upgrade</p>
            <p className="text-xs text-zinc-400">Your referral level increased to Level 2</p>
            <p className="text-xs text-zinc-500 mt-1">1 day ago</p>
          </div>

          <div className="border-l-2 border-zinc-700 pl-4 py-1">
            <p className="text-sm font-medium">Welcome to Patara Referrals!</p>
            <p className="text-xs text-zinc-400">Start referring friends and earn crypto rewards</p>
            <p className="text-xs text-zinc-500 mt-1">3 days ago</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-800">
          <Button variant="ghost" size="sm" className="w-full justify-center text-zinc-400 hover:text-white">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SettingsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white p-2 w-48">
        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
            Profile
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Settings
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            Disconnect
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function UserDropdown() {
  const [copyStatus, setCopyStatus] = useState('Copy');
  const referralLink = "https://patara.io/ref/0x1a2b3c4d5e6f7g8h9i0j";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full overflow-hidden p-0 bg-zinc-800 hover:bg-zinc-700 w-10 h-10">
          <UserAvatar />
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