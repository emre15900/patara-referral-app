"use client";

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'reward',
      title: 'New referral reward',
      message: 'You received 0.05 ETH from user0x12...89f3',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'level',
      title: 'Level upgrade',
      message: 'Your referral level increased to Level 2',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'welcome',
      title: 'Welcome to Patara Referrals!',
      message: 'Start referring friends and earn crypto rewards',
      time: '3 days ago',
      read: true
    }
  ]);

  const handleMarkAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative p-2 bg-zinc-800 hover:bg-zinc-700 text-white">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white p-4 w-80">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Notifications</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs text-blue-400 hover:text-blue-300"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </Button>
        </div>

        <div className="space-y-4 mt-4 max-h-[300px] overflow-auto">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`border-l-2 ${notification.read ? 'border-zinc-700' : 'border-blue-500'} pl-4 py-1`}
            >
              <p className="text-sm font-medium">{notification.title}</p>
              <p className="text-xs text-zinc-400">{notification.message}</p>
              <p className="text-xs text-zinc-500 mt-1">{notification.time}</p>
            </div>
          ))}
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