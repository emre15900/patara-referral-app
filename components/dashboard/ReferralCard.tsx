"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { OrbitAnimation } from '@/components/common/OrbitAnimation';
import { toast } from 'sonner';

export function ReferralCard() {
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = "0x0e0Fdd520F76f3eAC0dAa76Ac0e489FC53b366f58";
  const textRef = useRef(null);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(referralLink);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = referralLink;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        let success = false;
        try {
          success = document.execCommand('copy');
        } catch (err) {
          console.error("Fallback: Copy failed", err);
        }

        document.body.removeChild(textArea);

        if (!success) {
          toast.error("Copy failed");
          return;
        }
      }

      setIsCopied(true);
      toast.success("Referral link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy to clipboard");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Patara with my referral link!',
          text: 'Use my referral link to join Patara and we both earn rewards!',
          url: referralLink,
        });
        toast.success("Thanks for sharing!");
      } catch (error: any) {
        console.error("Sharing failed:", error);
        if (error.name !== 'AbortError') {
          copyToClipboard();
          toast.info("Sharing failed. Link copied instead!");
        }
      }
    } else {
      copyToClipboard();
      toast.info("No sharing capability detected. Link copied instead!");
    }
  };

  return (
    <div className="bg-zinc-900 rounded-2xl p-8">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className='w-full'>
            <h1 className="text-2xl mb-2">Refer and Earn</h1>
            <p className="text-[#808080] text-sm mb-10">
              Invite your friends to Patara and earn a share of <br /> their on-chain rewards forever!
            </p>

            <div
              ref={textRef}
              className="bg-zinc-800 p-5 rounded-xl flex flex-col break-all text-sm mb-6"
            >
              <label className="text-[#808080] text-xs mb-2">Your Referral Link:</label>
              {referralLink}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={copyToClipboard}
                className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-white"
                size={"lg"}
              >
                {isCopied ? "Copied!" : "Copy Link"}
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                className="bg-zinc-800 hover:bg-zinc-700 text-[#808080] rounded-2xl"
                size={"lg"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 px-8">
            <OrbitAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}