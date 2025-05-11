"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const generateCircularPositions = (count: number) => {
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * 2 * Math.PI;
    const x = 50 + 45 * Math.sin(angle);
    const y = 50 + 45 * Math.cos(angle);
    return { x, y };
  });
};

const positions = generateCircularPositions(8);

const platformIcons = [
  { id: 'P', gradient: 'from-red-300 to-pink-300', position: positions[0] },
  { id: 'M', gradient: 'from-yellow-200 to-amber-200', position: positions[1] },
  { id: 'F', gradient: 'from-green-300 to-emerald-300', position: positions[2] },
  { id: 'S', gradient: 'from-purple-300 to-violet-300', position: positions[3] },
  { id: 'G', gradient: 'from-orange-300 to-amber-300', position: positions[4] },
  { id: 'C', gradient: 'from-rose-300 to-pink-300', position: positions[5] },
  { id: 'W', gradient: 'from-blue-300 to-indigo-300', position: positions[6] },
  { id: 'A', gradient: 'from-orange-200 to-amber-200', position: positions[7] },
];

export function OrbitAnimation() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-zinc-900"></div>
      
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-zinc-700/30"
            style={{ 
              scale: 0.4 + i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="absolute w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50">
        <div className="absolute w-full h-full rounded-full bg-cyan-500/20 blur-md"></div>
        {!imageError ? (
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-lg"></div>
            <Image 
              src="/images/orbit-logo.png" 
              alt="Patara" 
              width={64} 
              height={64}
              className="relative z-10"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-lg"></div>
            <span className="relative z-10">P</span>
          </div>
        )}
      </div>

      {platformIcons.map((icon, index) => (
        <div
          key={icon.id}
          className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${icon.gradient} flex items-center justify-center text-black font-medium shadow-lg z-40`}
          style={{
            left: `${icon.position.x}%`,
            top: `${icon.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <motion.span
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            {icon.id}
          </motion.span>
        </div>
      ))}
    </div>
  );
}