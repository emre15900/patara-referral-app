"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Search } from "lucide-react";

export function SearchBar({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;
}) {
  const [focused, setFocused] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen, setIsModalOpen]);

  const SearchInput = ({ focused, setFocused }: { focused: boolean; setFocused: (v: boolean) => void }) => (
    <div className={`flex items-center rounded-xl bg-zinc-800 px-3 py-2 transition-all ${focused ? 'ring-1 ring-zinc-600' : ''}`}>
      <Search className="text-zinc-400 mr-2" />
      <input
        type="text"
        placeholder="Enter Accounts, Platforms, NFTs, Token"
        className="bg-transparent border-none text-sm text-white placeholder-zinc-400 focus:outline-none w-full"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div className="flex items-center gap-1 bg-[#181818] px-1.5 py-1 rounded-lg text-xs text-zinc-400">
        <span>⌘</span>
        <span>K</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative max-w-md w-full hidden [@media(min-width:870px)]:block">
        <SearchInput focused={focused} setFocused={setFocused} />
      </div>

      <Transition show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[10000] flex items-center justify-center px-4 [@media(min-width:870px)]:hidden"
          onClose={setIsModalOpen}
        >
          <div className="fixed inset-0 bg-black/50" />

          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-out duration-300"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition-transform ease-in duration-200"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-full opacity-0"
          >
            <div
              ref={modalRef}
              className="relative bg-zinc-900 w-[90%] max-w-md p-4 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-white font-medium">
                  Search
                </Dialog.Title>
              </div>
              <SearchInput focused={focused} setFocused={setFocused} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
