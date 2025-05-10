import React from 'react';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  action?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, action }) => {
  return (
    <Card className="mb-4 flex items-center p-4">
      <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-sm text-gray-400">{title}</h4>
        <p className="text-xl font-bold mt-1">{value}</p>
      </div>
      {action && (
        <div className="ml-auto">
          {action}
        </div>
      )}
    </Card>
  );
};

export default StatCard; 