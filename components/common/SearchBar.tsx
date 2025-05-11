"use client";

import { useState } from 'react';

export function SearchBar() {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="relative max-w-md w-full hidden sm:block">
      <div className={`flex items-center rounded-md bg-zinc-800 px-3 py-2 transition-all ${focused ? 'ring-1 ring-zinc-600' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 mr-2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Enter Accounts, Platforms, NFTs, Token"
          className="bg-transparent border-none text-sm text-white placeholder-zinc-400 focus:outline-none w-full"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <div className="flex items-center gap-1 bg-zinc-700 px-1.5 py-0.5 rounded text-xs text-zinc-400">
          ⌘ K
        </div>
      </div>
    </div>
  );
}