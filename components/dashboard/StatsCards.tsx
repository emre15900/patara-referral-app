"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  HandCoins,
  Package,
  Gift,
  Users
} from 'lucide-react';

export function StatsCards() {
  const handleClaim = () => {
    toast.success("Claim request submitted. You'll receive your funds shortly!");
  };

  const statsData = [
    {
      title: "Total Earned Fee",
      value: "$1,000.00",
      icon: HandCoins,
      iconBgColor: "bg-blue-500/20",
      iconColor: "text-blue-500",
      delay: 0
    },
    {
      title: "Unclaimed Fee",
      value: "$500.00",
      icon: Package,
      iconBgColor: "bg-purple-500/20",
      iconColor: "text-purple-500",
      delay: 0.1,
      action: {
        label: "Claim",
        onClick: handleClaim
      }
    },
    {
      title: "Total Referral Points",
      value: "1289",
      icon: Gift,
      iconBgColor: "bg-green-500/20",
      iconColor: "text-green-500",
      delay: 0.2
    },
    {
      title: "Referrals",
      value: "34",
      icon: Users,
      iconBgColor: "bg-yellow-500/20",
      iconColor: "text-yellow-500",
      delay: 0.3
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-zinc-900 rounded-2xl p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: stat.delay }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className={`${stat.iconBgColor} p-2 rounded-full`}>
                <stat.icon className={`${stat.iconColor}`} size={20} />
              </div>
              <div>
                <div className="text-xs text-zinc-400">{stat.title}</div>
                <div className="text-md font-base">{stat.value}</div>
              </div>
            </div>
            {stat.action && (
              <Button
                onClick={stat.action.onClick}
                className="bg-blue-600 hover:bg-blue-700 text-sm px-4 text-white rounded-xl"
              >
                {stat.action.label}
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}