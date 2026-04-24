import React from "react";

export function BoringPdfMockup() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-gray-300 shadow-xl p-8 md:p-12 font-serif text-gray-800">
      <div className="border-b-2 border-black pb-4 mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-center">Acme Construction & Engineering</h1>
        <p className="text-center text-sm mt-2 text-gray-500">PROPOSAL FOR SERVICES</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Project Overview</h2>
        <p className="text-sm leading-relaxed mb-4 text-gray-600">
          This document outlines the proposed scope of work, timeline, and budget for the commercial build-out project located at 123 Business Parkway. All work will be performed in accordance with local building codes and industry standards. This proposal is valid for 30 days from the date of issue.
        </p>
        <p className="text-sm leading-relaxed text-gray-600">
          The scope includes site preparation, foundation laying, structural framing, plumbing, electrical, and interior finishing.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Estimated Timeline</h2>
        <table className="w-full text-sm text-left border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 p-2">Phase</th>
              <th className="border border-gray-400 p-2">Description</th>
              <th className="border border-gray-400 p-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Phase 1</td>
              <td className="border border-gray-400 p-2">Site Prep & Permitting</td>
              <td className="border border-gray-400 p-2">4 Weeks</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Phase 2</td>
              <td className="border border-gray-400 p-2">Foundation & Framing</td>
              <td className="border border-gray-400 p-2">6 Weeks</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Phase 3</td>
              <td className="border border-gray-400 p-2">MEP & Drywall</td>
              <td className="border border-gray-400 p-2">8 Weeks</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Phase 4</td>
              <td className="border border-gray-400 p-2">Finishes & Handover</td>
              <td className="border border-gray-400 p-2">4 Weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Budget Breakdown</h2>
        <p className="text-sm mb-2 text-gray-600">The total estimated cost for the project is detailed below:</p>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          <li>Site Preparation: $45,000</li>
          <li>Materials & Foundation: $120,000</li>
          <li>Labor & Framing: $180,000</li>
          <li>MEP (Mechanical, Electrical, Plumbing): $95,000</li>
          <li>Finishes & Contingency: $60,000</li>
        </ul>
        <p className="font-bold mt-4">Total Estimated Cost: $500,000</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Payment Terms</h2>
        <p className="text-sm text-gray-600">
          Payment is required in phased installments. A 20% deposit is required to commence work. Subsequent payments of 30% are due upon completion of Phase 2 and Phase 3. The final 20% is due upon project handover.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-300">
        <p className="text-xs text-gray-400 text-center">
          CONFIDENTIAL - Do not distribute. Page 1 of 12.
        </p>
      </div>
    </div>
  );
}
