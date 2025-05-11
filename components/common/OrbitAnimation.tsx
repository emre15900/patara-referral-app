"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const platformIcons = [
  { id: 'P', gradient: 'from-red-300/90 to-pink-300/90', position: { top: '5%', left: '50%' } },
  { id: 'M', gradient: 'from-yellow-200/90 to-amber-200/90', position: { top: '15%', right: '15%' } },
  { id: 'F', gradient: 'from-green-300/90 to-emerald-300/90', position: { top: '30%', left: '10%' } },
  { id: 'A', gradient: 'from-orange-200/90 to-amber-200/90', position: { top: '30%', right: '10%' } },
  { id: 'S', gradient: 'from-purple-300/90 to-violet-300/90', position: { top: '70%', left: '10%' } },
  { id: 'W', gradient: 'from-blue-300/90 to-indigo-300/90', position: { top: '70%', right: '10%' } },
  { id: 'G', gradient: 'from-yellow-300/90 to-amber-300/90', position: { top: '85%', left: '30%' } },
  { id: 'C', gradient: 'from-rose-300/90 to-pink-300/90', position: { bottom: '5%', left: '50%' } },
];

export function OrbitAnimation() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="relative w-64 h-64">
      {/* Orbital rings with flowing animation */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-zinc-700/20 overflow-hidden"
            style={{ scale: 1 - i * 0.1 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Center Patara logo */}
      <div className="absolute w-16 h-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50">
        {!imageError ? (
          <Image 
            src="/images/patara-logo.png" 
            alt="Patara" 
            width={64} 
            height={64}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            P
          </div>
        )}
      </div>

      {platformIcons.map((icon, index) => (
        <div
          key={icon.id}
          className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${icon.gradient} flex items-center justify-center text-black font-medium shadow-lg z-40 transform -translate-x-1/2 -translate-y-1/2`}
          style={{
            ...icon.position
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