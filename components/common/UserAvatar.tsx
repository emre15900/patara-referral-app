"use client";

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
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold overflow-hidden`}
    >
      <img
        src="/images/avatar.jpg"
        alt="User Avatar"
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