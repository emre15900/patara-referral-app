"use client";

import { motion } from 'framer-motion';

const backgroundIcons = [
  { id: 'P', position: { top: '15%', left: '12%' }, size: 'lg' },
  { id: 'M', position: { top: '20%', right: '15%' }, size: 'lg' },
  { id: 'F', position: { top: '50%', left: '5%' }, size: 'lg' },
  { id: 'A', position: { top: '70%', right: '10%' }, size: 'lg' },
  { id: 'S', position: { top: '35%', left: '25%' }, size: 'lg' },
  { id: 'W', position: { top: '40%', right: '25%' }, size: 'lg' },
  { id: 'G', position: { top: '85%', left: '20%' }, size: 'lg' },
  { id: 'C', position: { bottom: '15%', left: '40%' }, size: 'lg' },
];

const getSize = (size: string) => {
  switch (size) {
    case 'sm': return 'w-8 h-8';
    case 'md': return 'w-12 h-12';
    case 'lg': return 'w-16 h-16';
    case 'xl': return 'w-20 h-20';
    default: return 'w-12 h-12';
  }
};

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-black/50"></div>

      {backgroundIcons.map((icon, i) => (
        <motion.div
          key={icon.id}
          style={{ ...icon.position }}
          className={`
            absolute ${getSize(icon.size)} rounded-full
            flex items-center justify-center
            text-black font-bold
          `}
          animate={{
            y: [4, -4, 4],
            scale: [0.98, 1.02, 0.98],
            opacity: [0.3, 0.3, 0.3],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          {/* Arka plan blurlu katman */}
          <div
            className="absolute inset-0 rounded-full filter blur-sm"
            style={{
              backgroundImage: `
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.5) 0%,
                  rgba(255,255,255,0) 60%
                ),
                radial-gradient(
                  circle at center,
                  rgba(255,255,255,0.6) 0%,
                  rgba(200,200,200,0.4) 80%
                )
              `,
              backgroundBlendMode: 'overlay',
              boxShadow: `
                inset 0 4px 6px rgba(255,255,255,0.7),
                inset 0 -4px 6px rgba(0,0,0,0.3),
                0 0 6px rgba(0,0,0,0.3)
              `,
            }}
          />

          {/* Yazı: çok hafif blur ile */}
          <span className="relative z-10 text-lg sm:text-xl md:text-3xl text-white filter blur-[2px]">
            {icon.id}
          </span>
        </motion.div>
      ))}
    </div>
  );
}