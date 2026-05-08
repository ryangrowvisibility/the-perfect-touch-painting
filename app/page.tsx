import NavBar from "./components/NavBar";
import HeroCTA from "./components/HeroCTA";
import PhotoGallery from "./components/PhotoGallery";
import AccordionFAQ from "./components/AccordionFAQ";

const services = [
  {
    number: "01",
    title: "Kitchen Cabinet Spray Painting",
    description:
      "Cabinets are removed, sanded, primed, and spray-finished with professional equipment. The result is a factory-smooth, brush-stroke-free surface that looks and holds better than a brush-and-roller repaint. Most kitchens are completed in 2 to 3 days.",
    detail: "Color matching available. Any paint color on request.",
  },
  {
    number: "02",
    title: "Interior Wall Painting",
    description:
      "Full interior painting for living rooms, bedrooms, hallways, and whole-home repaints. Sara and Sean work with precision — clean lines, consistent coverage, no overspray. Furniture is protected and walls are properly prepped before any paint touches a surface.",
    detail: "One room or entire home. Single coat or full repaint.",
  },
  {
    number: "03",
    title: "Color Consultation",
    description:
      "Choosing paint colors is harder than it looks. Undertones shift under different lighting, and what looks right on a chip often looks wrong on a wall. Sara walks through the space, understands the light, and helps clients choose colors they will live with comfortably for years.",
    detail: "Included with every project. No extra charge.",
  },
];

const testimonials = [
  {
    name: "Seif E.",
    note: "Repeat client",
    rating: 5,
    review:
      "I have used The Perfect Touch multiple times and every experience has been consistently excellent. Sara is professional, the finish is always clean, and they respect the space completely. This is the team I call without hesitation.",
    photo: null,
  },
  {
    name: "Vera L.",
    note: "Cabinet spray painting",
    rating: 5,
    review:
      "My kitchen cabinets look like they came from a showroom. The spray finish is flawless — not a single brush mark or drip. Sara was thorough during the consultation and Sean's work on application day was meticulous. I am absolutely thrilled with the result.",
    photo: null,
  },
  {
    name: "Andrew R.",
    note: "Interior painting",
    rating: 5,
    review:
      "Sara and Sean treated my home with exceptional care. They were on time, tidy throughout the job, and the painting itself is pristine. Clean edges, even coverage, no touch-ups needed. Exactly what you want when you let someone into your home.",
    photo: null,
  },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Sara visits your home to assess the space, understand what you want, and provide an honest scope and price. No pressure, no guesswork.",
  },
  {
    step: "02",
    title: "Color Selection",
    description:
      "Sara walks through tone options with you — considering light, undertones, and existing finishes. Most clients land on a color they are completely certain about before the project begins.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    description:
      "Every surface is properly sanded, cleaned, and primed before any finish coat is applied. Preparation determines the quality of the result — this step is never rushed.",
  },
  {
    step: "04",
    title: "Professional Application",
    description:
      "Cabinets are spray-finished with professional equipment in a controlled environment. Walls receive brush and roller or spray application depending on the project. Each coat is inspected before the next.",
  },
  {
    step: "05",
    title: "Final Walkthrough",
    description:
      "Before leaving, Sara and Sean walk through the finished space with you. Any concerns are addressed on the spot. The job is complete only when you are satisfied.",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO — Typographic Monolith with photo */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              {/* Women-owned badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] mb-8"
                style={{ background: "var(--accent-light)", color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>
                </svg>
                Women-Owned Business
              </div>

              <h1
                className="text-5xl lg:text-6xl xl:text-7xl leading-[1.0] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                <span className="italic">Cabinets</span> that look{" "}
                <span className="italic">factory-new.</span>
                <br />
                <span style={{ color: "var(--accent)" }}>Rooms</span> that feel{" "}
                <span className="italic">completely changed.</span>
              </h1>

              <p
                className="text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              >
                The Perfect Touch Painting serves Hamilton, Burlington, and Oakville with professional spray cabinet finishing, interior painting, and color consultation. Sara and Sean deliver results that last — with the care your home deserves.
              </p>

              <HeroCTA />

              {/* Star rating inline */}
              <div className="flex items-center gap-3 mt-8">
                <div className="flex items-center gap-0.5" aria-label="4.9 out of 5 stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)", fontSize: "0.875rem" }}>
                  4.9 stars — 29 Google reviews
                </span>
              </div>
            </div>

            {/* Hero accent — typography-led, no photo */}
            <div className="relative overflow-hidden flex items-center justify-center" style={{ height: "480px", background: "var(--surface)" }}>
              <p className="text-center px-8" style={{ fontFamily: "var(--font-instrument)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--text-secondary)", lineHeight: 1.4, maxWidth: "520px" }}>
                &ldquo;The finished result exceeded what I had imagined. Absolutely worth every penny.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STAR RATING STRIP */}
      <section
        className="py-6 border-t border-b"
        style={{ background: "var(--surface)", borderColor: "var(--border-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span
                className="text-4xl font-black"
                style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)" }}
              >
                4.9
              </span>
              <div>
                <div className="flex gap-0.5" aria-label="4.9 stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="oklch(68% 0.140 58)" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p style={{ color: "oklch(75% 0.010 50)", fontFamily: "var(--font-dmsans)", fontSize: "0.8rem", marginTop: "2px" }}>
                  29 verified Google reviews
                </p>
              </div>
            </div>
            <div
              className="hidden sm:block w-px h-10"
              style={{ background: "var(--border-dark)" }}
              aria-hidden="true"
            />
            <p
              className="text-center sm:text-left text-base italic"
              style={{ fontFamily: "var(--font-instrument)", color: "oklch(75% 0.010 50)", maxWidth: "420px" }}
            >
              &ldquo;Not a single brush mark or drip. Sara and Sean are the team you call without hesitation.&rdquo;
            </p>
            <a
              href="tel:6479206353"
              className="px-6 py-3 font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
              style={{ background: "var(--accent)", color: "#fff", fontFamily: "var(--font-dmsans)" }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section id="work" className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              Recent Projects
            </p>
            <h2
              className="text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              The finish speaks{" "}
              <span className="italic">for itself.</span>
            </h2>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* SERVICES — Editorial numbered articles */}
      <section
        id="services"
        className="py-20 lg:py-28"
        style={{ background: "var(--bg-warm)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              What We Do
            </p>
            <h2
              className="text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Services built for{" "}
              <span className="italic">lasting results.</span>
            </h2>
          </div>

          <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
            {services.map((service) => (
              <div key={service.number} className="py-10 grid md:grid-cols-[120px_1fr] gap-6 lg:gap-12">
                <div>
                  <span
                    className="text-5xl font-black italic"
                    style={{ fontFamily: "var(--font-instrument)", color: "var(--border)", lineHeight: 1 }}
                  >
                    {service.number}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-4 max-w-2xl"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                  >
                    {service.description}
                  </p>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
                  >
                    {service.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Named, photo-paired on dark surface */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "oklch(68% 0.140 58)", fontFamily: "var(--font-dmsans)" }}
            >
              Client Reviews
            </p>
            <h2
              className="text-4xl lg:text-5xl italic"
              style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)", letterSpacing: "-0.02em" }}
            >
              What clients say.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 p-8"
                style={{ background: "var(--surface-mid)", border: "1px solid var(--border-dark)" }}
              >
                <div className="flex gap-0.5" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="oklch(68% 0.140 58)" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed italic flex-1"
                  style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)", fontSize: "1.05rem" }}
                >
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border-dark)" }}>
                  <div className="relative w-10 h-10 overflow-hidden shrink-0 flex items-center justify-center" style={{ borderRadius: "2px", background: "var(--accent)", color: "var(--bg)" }}>
                    <span style={{ fontFamily: "var(--font-dmsans)", fontWeight: 700, fontSize: "0.85rem" }}>{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-on-surface)", fontFamily: "var(--font-dmsans)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(60% 0.010 50)", fontFamily: "var(--font-dmsans)" }}
                    >
                      {t.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — Numbered steps */}
      <section id="process" className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              How It Works
            </p>
            <h2
              className="text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              From consultation{" "}
              <span className="italic">to finished space.</span>
            </h2>
          </div>

          <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
            {process.map((p, i) => (
              <div key={p.step} className="py-8 grid md:grid-cols-[80px_1fr] gap-4 lg:gap-10 items-start">
                <span
                  className="text-3xl font-black italic"
                  style={{ fontFamily: "var(--font-instrument)", color: "var(--accent)", opacity: 0.6 }}
                >
                  {p.step}
                </span>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-dmsans)", color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-2xl"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS STATEMENT — Women-owned, spray technique */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "var(--bg-warm)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4"
                style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
              >
                Women-Owned
              </p>
              <h2
                className="text-3xl lg:text-4xl mb-6"
                style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Built on precision,{" "}
                <span className="italic">run with care.</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              >
                The Perfect Touch Painting is a women-owned business founded on a straightforward belief: people deserve quality work in their home, delivered by people who treat the space with respect. Sara leads every project from consultation through final walkthrough.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              >
                The business has grown almost entirely through repeat clients and referrals — a fact that reflects more about the work than any advertisement could. Clients come back because the result holds up and the experience is easy from start to finish.
              </p>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4"
                style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
              >
                Why Spray Finishing
              </p>
              <h2
                className="text-3xl lg:text-4xl mb-6"
                style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                The standard{" "}
                <span className="italic">brush cannot match.</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              >
                Spray application is the professional standard for cabinet refinishing because it produces a surface that brush and roller physically cannot. The atomized finish eliminates brush strokes, drip marks, and roller texture — delivering the smooth, even coat you see on factory-finished cabinetry.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              >
                Sean applies every cabinet finish with equipment used in production finishing environments. The result is durable, washable, and visually identical to replacement — at a fraction of the cost. Most clients are surprised by how dramatic the change is before they realize no cabinets were replaced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p
              className="text-xs uppercase tracking-[0.18em] font-semibold mb-3"
              style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
            >
              Common Questions
            </p>
            <h2
              className="text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-instrument)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Before you{" "}
              <span className="italic">call.</span>
            </h2>
          </div>
          <AccordionFAQ />
        </div>
      </section>

      {/* CONTACT — Oversized phone card */}
      <section
        id="contact"
        className="py-20 lg:py-28"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4"
                style={{ color: "oklch(68% 0.140 58)", fontFamily: "var(--font-dmsans)" }}
              >
                Get In Touch
              </p>
              <h2
                className="text-4xl lg:text-5xl italic mb-6"
                style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)", letterSpacing: "-0.02em" }}
              >
                Start with a free consultation.
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(70% 0.010 50)", fontFamily: "var(--font-dmsans)" }}
              >
                Sara will visit your home, assess the space, and provide an honest estimate — no obligation, no hard sell. Most consultations take 20 to 30 minutes and answer every question you have before any commitment is made.
              </p>

              <div className="space-y-4">
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.14em] font-semibold mb-1"
                    style={{ color: "oklch(55% 0.008 50)", fontFamily: "var(--font-dmsans)" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:6479206353"
                    className="text-3xl font-black transition-opacity duration-200 hover:opacity-80"
                    style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)" }}
                  >
                    647-920-6353
                  </a>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.14em] font-semibold mb-1"
                    style={{ color: "oklch(55% 0.008 50)", fontFamily: "var(--font-dmsans)" }}
                  >
                    Hours
                  </p>
                  <p style={{ color: "oklch(70% 0.010 50)", fontFamily: "var(--font-dmsans)" }}>Available 7 days a week</p>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.14em] font-semibold mb-1"
                    style={{ color: "oklch(55% 0.008 50)", fontFamily: "var(--font-dmsans)" }}
                  >
                    Service Area
                  </p>
                  <p style={{ color: "oklch(70% 0.010 50)", fontFamily: "var(--font-dmsans)" }}>Hamilton, Burlington, Oakville and surrounding areas</p>
                </div>
              </div>
            </div>

            <div
              className="p-10 lg:p-14"
              style={{ background: "var(--surface-mid)", border: "1px solid var(--border-dark)" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-[0.12em] mb-4"
                style={{ color: "oklch(55% 0.008 50)", fontFamily: "var(--font-dmsans)" }}
              >
                Ready to book?
              </p>
              <p
                className="text-4xl lg:text-5xl italic mb-8"
                style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)", lineHeight: 1.1 }}
              >
                Call to schedule your free in-home estimate.
              </p>
              <a
                href="tel:6479206353"
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-base transition-all duration-200 active:scale-[0.97] w-full justify-center"
                style={{ background: "var(--accent)", color: "#fff", fontFamily: "var(--font-dmsans)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                647-920-6353
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 border-t"
        style={{ background: "var(--surface)", borderColor: "var(--border-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span
              className="text-base italic"
              style={{ fontFamily: "var(--font-instrument)", color: "var(--text-on-surface)" }}
            >
              The Perfect Touch Painting
            </span>
            <span
              className="text-xs"
              style={{ color: "oklch(50% 0.008 50)", fontFamily: "var(--font-dmsans)" }}
            >
              Hamilton · Burlington · Oakville
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: "oklch(45% 0.008 50)", fontFamily: "var(--font-dmsans)" }}
          >
            &copy; {new Date().getFullYear()} The Perfect Touch Painting. Women-Owned Business.
          </p>
        </div>
      </footer>
    </>
  );
}
