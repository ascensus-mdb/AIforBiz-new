"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { TERipple } from "tw-elements-react";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl mb-6"
      >
        Start <span className="text-blue-500">AI</span> transformation <br /> in{" "}
        <span className="text-blue-500">your business</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
         <TERipple rippleColor="light">
        <a
          href="#section-how-it-works"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-offset-slate-50"
        >
          Learn how
        </a>
        </TERipple>
      </motion.div>
    </LampContainer>
  );
}
