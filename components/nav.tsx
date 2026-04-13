"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAL_URL = "https://cal.com/shipplatform/discovery";

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Integrations", href: "#integrations" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Intelligence", href: "#blueprints" },
  { label: "Calculator", href: "#calculator" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-9 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ship-gray-800 bg-ship-black/80 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#hero"
            className="font-[family-name:var(--font-syne)] text-xl font-bold uppercase tracking-wider"
          >
            SHIP
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ship-gray-400 transition-colors hover:text-ship-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ship-gray-400 transition-colors hover:text-ship-white"
            >
              Book a Call
            </a>
            <a
              href="#waitlist"
              className="inline-flex h-9 items-center rounded-sm bg-ship-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-ship-accent-hover"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-ship-white transition-transform ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-ship-white transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-ship-white transition-transform ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[6.25rem] z-40 border-b border-ship-gray-800 bg-ship-black/95 px-6 pb-6 pt-4 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-ship-gray-300 transition-colors hover:text-ship-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-ship-gray-700 text-base font-medium text-ship-gray-300 transition-colors hover:border-ship-gray-500 hover:text-ship-white"
              >
                Book a Call
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-sm bg-ship-accent text-base font-semibold text-white transition-colors hover:bg-ship-accent-hover"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
