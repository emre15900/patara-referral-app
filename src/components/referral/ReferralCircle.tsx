import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { id: 'p', color: '#f97364', label: 'P' },
  { id: 'f', color: '#62e884', label: 'F' },
  { id: 'm', color: '#f0dc65', label: 'M' },
  { id: 's', color: '#d585ff', label: 'S' },
  { id: 'a', color: '#ffbcad', label: 'A' },
  { id: 'w', color: '#85e0ff', label: 'W' },
  { id: 'c', color: '#ff85b1', label: 'C' },
  { id: 'g', color: '#ffbb55', label: 'G' },
];

const ReferralCircle = () => {
  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
      >
        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-90 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">@</span>
          </div>
        </div>
      </motion.div>

      {/* Orbital Circles */}
      <div className="absolute inset-0 rounded-full border border-gray-700 opacity-30"></div>
      <div className="absolute inset-2 rounded-full border border-gray-700 opacity-25"></div>
      <div className="absolute inset-4 rounded-full border border-gray-700 opacity-20"></div>
      <div className="absolute inset-6 rounded-full border border-gray-700 opacity-15"></div>
      <div className="absolute inset-8 rounded-full border border-gray-700 opacity-10"></div>
      <div className="absolute inset-10 rounded-full border border-gray-700 opacity-5"></div>

      {platforms.map((platform, index) => {
        const angle = (index * (360 / platforms.length) * Math.PI) / 180;
        const radius = 120;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        return (
          <motion.div
            key={platform.id}
            className="absolute flex items-center justify-center w-10 h-10 rounded-full z-20"
            style={{
              left: `calc(50% + ${x}px - 20px)`,
              top: `calc(50% + ${y}px - 20px)`,
              backgroundColor: platform.color,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <span className="text-[var(--patara-dark-bg)] font-bold">{platform.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ReferralCircle; 