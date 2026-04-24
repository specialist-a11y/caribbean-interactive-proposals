"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BoringPdfMockup } from "@/components/demo/BoringPdfMockup";
import { InteractiveProposal } from "@/components/demo/InteractiveProposal";
import { FaFilePdf, FaLaptopCode } from "react-icons/fa";

export default function ConstructionDemoPage() {
  const [view, setView] = useState<"pdf" | "interactive">("interactive");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* Hero Section */}
      <section className="bg-navy-deepest text-white pt-20 pb-28 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-gold/20 text-gold font-semibold px-4 py-1.5 rounded-full text-sm tracking-wide uppercase mb-2 border border-gold/30">
            Interactive Showcase
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Stop Sending Boring PDFs. <br className="hidden md:block"/>
            <span className="text-gold">Close Deals Faster.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how transforming a static document into an interactive, digital experience changes the way clients interact with your construction and engineering proposals.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 -mt-16">
        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-lg shadow-slate-200/50 flex items-center border border-slate-200">
            <button
              onClick={() => setView("pdf")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                view === "pdf"
                  ? "bg-slate-100 text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <FaFilePdf className={view === "pdf" ? "text-red-500" : ""} />
              The Boring PDF
            </button>
            <button
              onClick={() => setView("interactive")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                view === "interactive"
                  ? "bg-gold text-navy-deepest shadow-md shadow-gold/30"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <FaLaptopCode className={view === "interactive" ? "text-white" : ""} />
              The Interactive Proposal
            </button>
          </div>
        </div>

        {/* Content Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {view === "pdf" ? (
              <motion.div
                key="pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-center max-w-3xl mx-auto shadow-sm">
                  <h2 className="text-red-800 font-bold text-lg mb-2">Why this fails to close deals:</h2>
                  <ul className="text-red-700 text-sm space-y-1 inline-block text-left">
                    <li>❌ Hard to read on mobile devices</li>
                    <li>❌ Client can't visualize timeline effectively</li>
                    <li>❌ Cannot instantly adjust options/budget</li>
                    <li>❌ Zero engagement or excitement</li>
                  </ul>
                </div>
                <BoringPdfMockup />
              </motion.div>
            ) : (
              <motion.div
                key="interactive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8 text-center max-w-3xl mx-auto shadow-sm">
                  <h2 className="text-emerald-800 font-bold text-lg mb-2">Why this wins contracts:</h2>
                  <ul className="text-emerald-700 text-sm space-y-1 inline-block text-left">
                    <li>✅ Fully responsive & mobile-optimized</li>
                    <li>✅ Expandable, interactive timeline builds trust</li>
                    <li>✅ Live budget calculator empowers the client</li>
                    <li>✅ Clear phased payments remove friction</li>
                  </ul>
                </div>
                <InteractiveProposal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
