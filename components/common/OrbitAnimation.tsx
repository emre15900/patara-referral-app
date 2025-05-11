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
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900" />

      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ backgroundSize: '200% 200%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => {
          const baseScale = 0.4 + i * 0.15;
          return (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-cyan-700/20"
              style={{ scale: baseScale }}
              animate={{
                scale: [baseScale, baseScale + 0.03, baseScale],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute inset-0 rounded-full border-2 border-cyan-500/20 overflow-hidden"
            animate={{
              scale: [0.4, 0.9, 0.4],
              rotate: [0, i % 2 === 0 ? 20 : -20, 0],
            }}
            transition={{
              duration: 12 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/5 to-transparent"
              style={{ backgroundSize: '200% 200%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 15 + i * 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        {!imageError ? (
          <Image
            src="/images/orbit-logo.png"
            alt="Patara"
            width={64}
            height={64}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
            P
          </div>
        )}
      </div>

      {platformIcons.map((icon, idx) => (
        <div
          key={icon.id}
          className={`
            absolute w-10 h-10 rounded-full bg-gradient-to-br ${icon.gradient}
            flex items-center justify-center text-black font-medium shadow-lg z-40
          `}
          style={{
            left: `${icon.position.x}%`,
            top: `${icon.position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.span
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
          >
            {icon.id}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
