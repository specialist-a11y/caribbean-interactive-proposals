"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveTimeline } from "./InteractiveTimeline";
import { FaCheck, FaCreditCard, FaPenNib, FaBuilding, FaShieldAlt, FaLeaf, FaServer, FaUniversity } from "react-icons/fa";

interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  selected: boolean;
  icon: any;
}

export function InteractiveProposal() {
  const basePrice = 300000;
  
  const [addons, setAddons] = useState<Addon[]>([
    { id: "premium-materials", name: "Premium Materials", description: "High-end finishes & imported stone.", price: 85000, selected: false, icon: FaBuilding },
    { id: "expedited", name: "Expedited Schedule", description: "Fast-track timeline to finish 4 weeks early.", price: 50000, selected: false, icon: FaCheck },
    { id: "landscaping", name: "Exterior Landscaping", description: "Full hardscaping and drought-resistant plants.", price: 40000, selected: true, icon: FaLeaf },
    { id: "smart-home", name: "Smart Building", description: "Integrated automation & climate control.", price: 25000, selected: false, icon: FaServer },
  ]);

  const [isApproved, setIsApproved] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"credit_card" | "bank_transfer">("bank_transfer");

  const toggleAddon = (id: string) => {
    if (isApproved) return;
    setAddons(addons.map(addon => 
      addon.id === id ? { ...addon, selected: !addon.selected } : addon
    ));
  };

  const totalCalculated = basePrice + addons.filter(a => a.selected).reduce((acc, a) => acc + a.price, 0);

  // Phased payment calculations based on total
  const deposit = totalCalculated * 0.20;
  const phase1 = totalCalculated * 0.30;
  const phase2 = totalCalculated * 0.30;
  const handover = totalCalculated * 0.20;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-deepest tracking-tight">
          Acme Commercial Build-out
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A modern, transparent, and interactive proposal designed specifically for your needs.
        </p>
      </div>

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      <AnimatePresence mode="wait">
        {!isApproved ? (
          <motion.div 
            key="builder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Live Budget Calculator */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-8 border border-slate-100 flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-navy-deepest">Project Scope Configuration</h3>
              <p className="text-slate-500 mb-8 text-sm">Select the add-ons that fit your vision and budget. The total updates instantly.</p>
              
              <div className="flex justify-between items-center p-4 mb-6 bg-navy-deepest text-white rounded-xl">
                <div>
                  <span className="block font-semibold">Base Build-out Scope</span>
                  <span className="text-xs text-slate-400">Standard materials, standard timeline</span>
                </div>
                <span className="font-mono text-xl">${basePrice.toLocaleString()}</span>
              </div>

              <h4 className="font-semibold text-slate-700 mb-4">Optional Upgrades</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow mb-8">
                {addons.map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div 
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`relative flex flex-col p-5 rounded-xl cursor-pointer border-2 transition-all ${
                        addon.selected 
                          ? "border-gold bg-gold/5 shadow-md shadow-gold/10" 
                          : "border-slate-100 hover:border-slate-300 bg-white"
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div className={`absolute top-4 right-4 w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                        addon.selected ? "bg-gold border-gold" : "border-slate-300"
                      }`}>
                        {addon.selected && <FaCheck className="w-3 h-3 text-white" />}
                      </div>

                      <Icon className={`w-8 h-8 mb-3 ${addon.selected ? "text-gold" : "text-slate-400"}`} />
                      <span className={`font-bold mb-1 ${addon.selected ? "text-navy-deepest" : "text-slate-700"}`}>
                        {addon.name}
                      </span>
                      <span className="text-xs text-slate-500 mb-3 flex-grow">{addon.description}</span>
                      <span className="font-mono font-semibold text-navy-mid">
                        +${addon.price.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-slate-200">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold text-slate-700">Total Investment</span>
                  <motion.span 
                    key={totalCalculated}
                    initial={{ scale: 1.1, color: "#C9963E" }}
                    animate={{ scale: 1, color: "#070F1C" }}
                    className="text-4xl font-extrabold font-mono"
                  >
                    ${totalCalculated.toLocaleString()}
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Phased Payment Schedule */}
            <div className="lg:col-span-5 bg-navy-deepest rounded-2xl shadow-xl p-8 border border-navy-dark text-white flex flex-col relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full blur-2xl"></div>

              <h3 className="text-2xl font-bold mb-2">Payment Schedule</h3>
              <p className="text-slate-400 mb-8 text-sm">Transparent milestones aligned with progress.</p>

              <div className="space-y-6 flex-grow">
                <div className="relative">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-navy-mid"></div>

                  <div className="space-y-8">
                    <div className="relative pl-12">
                      <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 bg-gold rounded-full ring-4 ring-navy-deepest shadow-[0_0_10px_#C9963E]"></div>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-slate-200">20% Deposit</span>
                        <span className="font-mono font-bold text-gold">${deposit.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-slate-400">Due upon signing to secure dates.</p>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 bg-navy-mid rounded-full ring-4 ring-navy-deepest"></div>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-slate-200">30% Progress 1</span>
                        <span className="font-mono font-bold text-gold">${phase1.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-slate-400">Phase 2 completion.</p>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 bg-navy-mid rounded-full ring-4 ring-navy-deepest"></div>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-slate-200">30% Progress 2</span>
                        <span className="font-mono font-bold text-gold">${phase2.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-slate-400">Phase 3 completion.</p>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 bg-navy-mid rounded-full ring-4 ring-navy-deepest"></div>
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-slate-200">20% Handover</span>
                        <span className="font-mono font-bold text-gold">${handover.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-slate-400">Final inspection.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setIsApproved(true)}
                className="w-full mt-10 bg-gold hover:bg-gold-light text-navy-deepest font-bold py-4 px-6 rounded-xl shadow-lg shadow-gold/20 transition-transform hover:-translate-y-1"
              >
                Approve & View Next Steps
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="approved"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
          >
            <div className="bg-navy-deepest p-8 text-center text-white relative">
              <FaShieldAlt className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Proposal Approved</h2>
              <p className="text-slate-300">Lock in your project scope for a total of <span className="font-mono text-gold font-bold">${totalCalculated.toLocaleString()}</span></p>
              <button 
                onClick={() => setIsApproved(false)}
                className="absolute top-6 right-6 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Go Back
              </button>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* E-Signature */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2 text-navy-deepest">
                    <FaPenNib className="text-gold"/> Step 1: E-Signature
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Draw or type your signature to authorize the build-out.</p>
                </div>
                
                <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl h-48 flex items-center justify-center cursor-text hover:bg-slate-100 transition-colors">
                  <span className="text-slate-400 font-medium italic">Sign here...</span>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 block">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-gold outline-none" />
                </div>
              </div>

              {/* Payment */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2 text-navy-deepest">
                    <FaCreditCard className="text-gold"/> Step 2: Initial Deposit
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Submit your 20% deposit (${deposit.toLocaleString()}) to secure dates.</p>
                </div>
                
                {/* Payment Method Selector */}
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setPaymentMethod("bank_transfer")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${paymentMethod === "bank_transfer" ? "bg-white shadow text-navy-deepest" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Bank Transfer
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("credit_card")}
                    className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${paymentMethod === "credit_card" ? "bg-white shadow text-navy-deepest" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Credit Card
                  </button>
                </div>

                {paymentMethod === "credit_card" ? (
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-slate-700 block mb-2">Card Number</label>
                      <input type="text" placeholder="**** **** **** ****" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-gold outline-none font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-slate-700 block mb-2">Expiry</label>
                        <input type="text" placeholder="MM/YY" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-gold outline-none" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700 block mb-2">CVC</label>
                        <input type="text" placeholder="123" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-gold outline-none" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-navy-deepest text-gold rounded-lg">
                        <FaUniversity size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deepest">Wire Transfer / ACH</h4>
                        <p className="text-xs text-slate-500">Zero processing fees for large amounts.</p>
                      </div>
                    </div>
                    <div className="space-y-3 bg-white p-4 rounded-lg border border-slate-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Bank Name</span>
                        <span className="font-semibold text-navy-deepest">Acme Commercial Bank</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Account Name</span>
                        <span className="font-semibold text-navy-deepest">Acme Build-outs LLC</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Routing Number</span>
                        <span className="font-mono font-semibold text-navy-deepest">122000661</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Account Number</span>
                        <span className="font-mono font-semibold text-navy-deepest">4455 6677 8899</span>
                      </div>
                    </div>
                  </div>
                )}

                <button className="w-full bg-navy-deepest hover:bg-navy-mid text-white font-bold py-4 px-6 rounded-xl transition-colors flex justify-center items-center gap-2">
                  <FaCheck /> {paymentMethod === "credit_card" ? "Complete Booking" : "I've Sent the Transfer"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
