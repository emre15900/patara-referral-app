"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Arka planda görünecek bulanık harfler
const backgroundIcons = [
  { id: 'P', gradient: 'from-red-300/30 to-pink-300/30', position: { top: '10%', left: '12%' }, size: 'lg' },
  { id: 'M', gradient: 'from-yellow-200/30 to-amber-200/30', position: { top: '20%', right: '15%' }, size: 'xl' },
  { id: 'F', gradient: 'from-green-300/30 to-emerald-300/30', position: { top: '40%', left: '5%' }, size: 'md' },
  { id: 'A', gradient: 'from-orange-200/30 to-amber-200/30', position: { top: '70%', right: '10%' }, size: 'lg' },
  { id: 'S', gradient: 'from-purple-300/30 to-violet-300/30', position: { top: '25%', left: '30%' }, size: 'md' },
  { id: 'W', gradient: 'from-blue-300/30 to-indigo-300/30', position: { top: '60%', right: '25%' }, size: 'xl' },
  { id: 'G', gradient: 'from-yellow-300/30 to-amber-300/30', position: { top: '85%', left: '20%' }, size: 'lg' },
  { id: 'C', gradient: 'from-rose-300/30 to-pink-300/30', position: { bottom: '15%', left: '40%' }, size: 'md' },
];

// Harflerin boyutunu belirleyen helper fonksiyon
const getSize = (size: string): string => {
  switch (size) {
    case 'sm': return 'w-16 h-16';
    case 'md': return 'w-20 h-20';
    case 'lg': return 'w-24 h-24';
    case 'xl': return 'w-32 h-32';
    default: return 'w-20 h-20';
  }
};

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hafif arkaplan bulanıklık katmanı */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>
      
      {/* Animasyonlu arka plan harfleri */}
      {backgroundIcons.map((icon, index) => (
        <motion.div
          key={icon.id}
          className={`absolute ${getSize(icon.size)} rounded-full bg-gradient-to-br ${icon.gradient} flex items-center justify-center text-white font-bold opacity-20 blur-lg`}
          style={{
            ...icon.position,
          }}
          animate={{
            y: [20, -20, 20],
            opacity: [0.15, 0.25, 0.15],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8,
          }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl">{icon.id}</span>
        </motion.div>
      ))}
    </div>
  );
} 