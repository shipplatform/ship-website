"use client";

import { motion } from "framer-motion";

const CAL_URL = "https://cal.com/shipplatform/discovery";

export default function BookCall() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-lg border border-ship-accent/20 bg-ship-accent/5 p-10 text-center"
      >
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl">
          Want to talk to someone who&apos;s built this before?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ship-gray-400">
          Book a 30-minute discovery call. No pitch deck, no script — a working
          session on whether top-down alignment fits your org — with someone who
          has led large product-engineering teams in regulated fintech.
        </p>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-14 items-center justify-center rounded-sm bg-ship-accent px-10 text-base font-semibold text-white transition-colors hover:bg-ship-accent-hover"
        >
          Book a Discovery Call
        </a>
      </motion.div>
    </section>
  );
}
