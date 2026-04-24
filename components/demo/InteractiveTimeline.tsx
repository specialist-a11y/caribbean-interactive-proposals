"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHardHat, FaHammer, FaTruck, FaCheckCircle } from "react-icons/fa";

const phases = [
  {
    id: 1,
    title: "Phase 1: Site Prep & Permitting",
    duration: "4 Weeks",
    icon: FaHardHat,
    details: "Securing all local permits, clearing the site, and setting up temporary facilities.",
    color: "bg-navy-dark",
  },
  {
    id: 2,
    title: "Phase 2: Foundation & Framing",
    duration: "6 Weeks",
    icon: FaHammer,
    details: "Pouring the concrete foundation, erecting steel/wood structural framing, and weatherproofing.",
    color: "bg-navy-mid",
  },
  {
    id: 3,
    title: "Phase 3: MEP & Drywall",
    duration: "8 Weeks",
    icon: FaTruck,
    details: "Installing Mechanical, Electrical, and Plumbing systems, followed by insulation and drywall.",
    color: "bg-gold",
  },
  {
    id: 4,
    title: "Phase 4: Finishes & Handover",
    duration: "4 Weeks",
    icon: FaCheckCircle,
    details: "Painting, flooring, fixtures installation, final inspections, and project handover.",
    color: "bg-gold-light",
  },
];

export function InteractiveTimeline() {
  const [activePhase, setActivePhase] = useState<number | null>(1);

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-navy-deepest">Interactive Project Timeline</h3>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-6">
          {phases.map((phase) => {
            const isActive = activePhase === phase.id;
            const Icon = phase.icon;

            return (
              <div key={phase.id} className="relative pl-16">
                {/* Timeline Node */}
                <button
                  onClick={() => setActivePhase(isActive ? null : phase.id)}
                  className={`absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-md transition-transform duration-300 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  } ${phase.color} text-white`}
                  aria-label={`Toggle ${phase.title}`}
                  aria-expanded={isActive}
                >
                  <Icon size={20} />
                </button>

                {/* Content */}
                <div
                  className={`cursor-pointer group p-4 rounded-xl border transition-all duration-300 ${
                    isActive ? "border-gold bg-gold/5" : "border-gray-100 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setActivePhase(isActive ? null : phase.id)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className={`text-lg font-semibold ${isActive ? "text-gold" : "text-navy-deepest"}`}>
                      {phase.title}
                    </h4>
                    <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                      {phase.duration}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {phase.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
