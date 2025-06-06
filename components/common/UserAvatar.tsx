"use client";

import Image from 'next/image';

interface UserAvatarProps {
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ size = 'sm' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold overflow-hidden`}
    >
      <Image
        src="/avatars/avatar.png"
        alt="User Avatar"
        width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = '';
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.textContent = 'AJ';
          }
        }}
      />
    </div>
  );
} 