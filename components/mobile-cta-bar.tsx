"use client";

import { useEffect, useState } from "react";

const CAL_URL = "https://cal.com/shipplatform/discovery";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-ship-gray-800 bg-ship-black/95 px-4 py-3 backdrop-blur-lg md:hidden">
      <a
        href="#waitlist"
        className="flex h-11 flex-1 items-center justify-center rounded-sm bg-ship-accent text-sm font-semibold text-white"
      >
        Join Waitlist
      </a>
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 flex-1 items-center justify-center rounded-sm border border-ship-gray-700 text-sm font-medium text-ship-gray-300"
      >
        Book a Call
      </a>
    </div>
  );
}
