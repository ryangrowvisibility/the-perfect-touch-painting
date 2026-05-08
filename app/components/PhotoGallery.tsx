"use client";

const highlights = [
  {
    label: "Cabinet Spray Painting",
    stat: "Showroom finish",
    detail: "Kitchen and bathroom cabinets refinished with professional spray equipment — no brush marks, no drips, factory-level results.",
  },
  {
    label: "Interior Painting",
    stat: "Clean edges, every room",
    detail: "Full interior repaints handled with precision prep, clean tape lines, and consistent coverage from ceiling to baseboard.",
  },
  {
    label: "Repeat Clients",
    stat: "4.9★ · 29 reviews",
    detail: "Customers come back for every repaint because the quality and care are consistent. Sara leads every project start to finish.",
  },
];

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {highlights.map((h, i) => (
        <div
          key={i}
          className="flex flex-col justify-between p-8 overflow-hidden"
          style={{
            height: "280px",
            background: i === 1 ? "var(--accent)" : "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dmsans)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: i === 1 ? "var(--bg)" : "var(--text-secondary)",
            }}
          >
            {h.label}
          </p>
          <div>
            <p
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: i === 1 ? "var(--bg)" : "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {h.stat}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dmsans)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: i === 1 ? "oklch(95% 0.005 50)" : "var(--text-secondary)",
              }}
            >
              {h.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
