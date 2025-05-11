"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const platformIcons = [
  { id: 'P', gradient: 'from-red-300/90 to-pink-300/90', delay: 0 },
  { id: 'F', gradient: 'from-green-300/90 to-emerald-300/90', delay: 1 },
  { id: 'S', gradient: 'from-purple-300/90 to-violet-300/90', delay: 2 },
  { id: 'G', gradient: 'from-yellow-300/90 to-amber-300/90', delay: 3 },
  { id: 'C', gradient: 'from-rose-300/90 to-pink-300/90', delay: 4 },
  { id: 'W', gradient: 'from-blue-300/90 to-indigo-300/90', delay: 5 },
  { id: 'A', gradient: 'from-orange-200/90 to-amber-200/90', delay: 6 },
  { id: 'M', gradient: 'from-yellow-200/90 to-amber-200/90', delay: 7 },
];

export function OrbitAnimation() {
  return (
    <div className="relative w-64 h-64">
      {/* Orbital rings with flowing animation */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-zinc-700/20"
            style={{ scale: 1 - i * 0.1 }}
            animate={{
              rotate: [0, 360],
              scale: [1 - i * 0.1, 1 - i * 0.1 + 0.05, 1 - i * 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Center Patara logo */}
      <motion.div 
        className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg shadow-blue-500/20 z-50"
        animate={{
          scale: [1, 1.1, 1],
          background: [
            "linear-gradient(to bottom right, #3B82F6, #9333EA)",
            "linear-gradient(to bottom right, #4F46E5, #7C3AED)",
            "linear-gradient(to bottom right, #3B82F6, #9333EA)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-white font-bold text-2xl">P</div>
      </motion.div>

      {/* Orbiting icons with color transitions */}
      {platformIcons.map((icon, index) => {
        const angle = (index * 360) / platformIcons.length;
        const radius = 100;
        
        return (
          <motion.div
            key={icon.id}
            className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${icon.gradient} flex items-center justify-center text-black font-medium shadow-lg z-40`}
            style={{
              left: "calc(50% - 20px)",
              top: "calc(50% - 20px)",
            }}
            animate={{
              x: radius * Math.cos((angle * Math.PI) / 180),
              y: radius * Math.sin((angle * Math.PI) / 180),
              scale: [1, 1.1, 1],
              background: [
                `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                `linear-gradient(to bottom right, var(--tw-gradient-to), var(--tw-gradient-from))`,
                `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay * 0.2,
            }}
          >
            {icon.id}
          </motion.div>
        );
      })}
    </div>
  );
}