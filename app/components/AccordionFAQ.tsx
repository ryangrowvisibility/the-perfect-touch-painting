"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "The Perfect Touch Painting serves Hamilton, Burlington, Oakville, and the surrounding areas. Call 647-920-6353 to confirm your location before booking.",
  },
  {
    q: "How long does cabinet spray painting take?",
    a: "Most kitchen cabinet projects are completed within 2 to 3 days. Sara and Sean work efficiently to minimize disruption to your home. A precise timeline is provided during your free consultation.",
  },
  {
    q: "Do you offer color consultation?",
    a: "Yes. Color consultation is included with every cabinet and interior painting project. Sara helps clients choose tones that work with their existing finishes, lighting, and overall vision for the space.",
  },
  {
    q: "Why spray painting versus brush and roller for cabinets?",
    a: "Spray application produces a factory-smooth, brush-stroke-free finish that is not achievable with rollers or brushes on cabinet doors. The result is more durable, more even, and visually cleaner. It is the professional standard for cabinet refinishing.",
  },
  {
    q: "Is cabinet refinishing cost-effective compared to replacement?",
    a: "Yes. Refinishing typically costs a fraction of full cabinet replacement while delivering a dramatic transformation. Most clients achieve a like-new kitchen appearance at significantly less expense and disruption.",
  },
  {
    q: "Do you do one-time projects or require a contract?",
    a: "One-time projects are welcome. There is no requirement for an ongoing agreement. Whether it is a single room, a full interior, or your kitchen cabinets, The Perfect Touch handles projects of any scope without lock-in.",
  },
];

export default function AccordionFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "var(--border)" }}>
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors duration-200"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span
              className="text-base font-semibold leading-snug"
              style={{
                color: openIdx === i ? "var(--accent)" : "var(--text-primary)",
                fontFamily: "var(--font-dmsans)",
                transition: "color 200ms",
              }}
            >
              {faq.q}
            </span>
            <span
              className="mt-0.5 shrink-0 transition-transform duration-200"
              style={{ transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", color: "var(--accent)" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          {openIdx === i && (
            <div
              className="pb-5 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
