"use client";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <a
        href="tel:6479206353"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-200 active:scale-[0.97]"
        style={{ background: "var(--surface)", color: "var(--text-on-surface)", fontFamily: "var(--font-dmsans)" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call 647-920-6353
      </a>
      <a
        href="#services"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base border transition-all duration-200"
        style={{
          borderColor: "var(--text-primary)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-dmsans)",
          background: "transparent",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.color = "var(--text-on-surface)"; e.currentTarget.style.borderColor = "var(--surface)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "var(--text-primary)"; }}
      >
        See Our Work
      </a>
    </div>
  );
}
