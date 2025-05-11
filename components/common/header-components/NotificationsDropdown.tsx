"use client";

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
          <Button variant="ghost" size="sm" className="w-full justify-center text-zinc-400">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 