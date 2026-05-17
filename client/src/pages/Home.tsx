/**
 * HOME PAGE — Nautical Noir Design System
 * Hero → Services → Featured Listings → Stats → Testimonials → CTA
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Star, Award, Shield, Compass } from "lucide-react";

// Image URLs (CDN)
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-superyacht-WsNegnX7xPUAEJvvkpUX9b.webp";
const MARINA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-marina-night-F8jqijuVdANGBVLvPj5ocq.webp";
const SEAPLANE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/seaplane-bahamas-YqWgSXsMhpYKXnWaJZfrsm.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/yacht-interior-salon-fS9XPZaqyjN2yB9p4x88kz.webp";
const TENDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/tender-boat-SCBBvdKJ5bdyakWSsiN3Aa.webp";
const SHIP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/commercial-ship-U3tVh5caiDG9FEVk6ogU7g.webp";

// Scroll-reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    roman: "I",
    title: "Yacht Sales",
    subtitle: "Recreational Vessels",
    desc: "From express cruisers to superyachts, we represent the finest recreational vessels in the South Florida market. Our inventory spans 30 to 200+ feet across all major builders.",
    img: HERO_IMG,
    href: "/listings",
  },
  {
    roman: "II",
    title: "Commercial Ships",
    subtitle: "Commercial Fleet",
    desc: "Bulk carriers, tankers, container ships, and specialty vessels. We broker commercial maritime assets globally with deep expertise in USCG and international compliance.",
    img: SHIP_IMG,
    href: "/listings",
  },
  {
    roman: "III",
    title: "Tenders",
    subtitle: "Yacht Tenders",
    desc: "Premium superyacht tenders, RIBs, and day boats. Whether you need a custom-built tender for a megayacht or a standalone sport vessel, we source the finest available.",
    img: TENDER_IMG,
    href: "/listings",
  },
  {
    roman: "IV",
    title: "Seaplanes",
    subtitle: "Amphibious Aircraft",
    desc: "A rare and exclusive specialty. We broker seaplanes for private ownership, charter operations, and island-hopping routes across South Florida and the Bahamas.",
    img: SEAPLANE_IMG,
    href: "/listings",
  },
];

const stats = [
  { value: "$2.4B+", label: "In Closed Transactions" },
  { value: "30+", label: "Years of Experience" },
  { value: "500+", label: "Vessels Sold" },
  { value: "3", label: "Counties Served" },
];

const testimonials = [
  {
    quote: "GreenStone Marine found us our 148-foot Feadship in under six weeks. Their market knowledge and negotiation expertise saved us over $2 million on the transaction.",
    name: "James R.",
    title: "Private Buyer, Palm Beach",
    stars: 5,
  },
  {
    quote: "We listed our 80-foot Viking with them and had a qualified buyer within 10 days. The entire process — survey, sea trial, closing — was handled flawlessly.",
    name: "Catherine M.",
    title: "Seller, Fort Lauderdale",
    stars: 5,
  },
  {
    quote: "Their commercial division handled the sale of three bulk carriers for our fleet. Exceptional professionalism and deep knowledge of international maritime law.",
    name: "Rodrigo F.",
    title: "Fleet Manager, Miami",
    stars: 5,
  },
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.12 0.025 255)" }}>
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Luxury superyacht at Fort Lauderdale"
            className="w-full h-full object-cover"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
            onLoad={() => setHeroLoaded(true)}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, oklch(0.09 0.025 255 / 0.92) 0%, oklch(0.09 0.025 255 / 0.65) 50%, oklch(0.09 0.025 255 / 0.3) 100%)",
            }}
          />
        </div>

        {/* Compass rose watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[28rem] leading-none select-none pointer-events-none"
          style={{
            color: "oklch(0.72 0.12 78 / 0.04)",
            fontFamily: "'Cinzel', serif",
            right: "-4rem",
          }}
        >
          ✦
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <div
              className="fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <span className="section-label">Fort Lauderdale · South Florida</span>
              <div className="gold-line mt-3 mb-6" />
            </div>

            <h1
              className="fade-up"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 1.05,
                color: "oklch(0.94 0.008 78)",
                animationDelay: "350ms",
              }}
            >
              Where the Sea
              <br />
              <em style={{ color: "oklch(0.72 0.12 78)", fontStyle: "italic" }}>
                Meets Ambition.
              </em>
            </h1>

            <p
              className="fade-up mt-6 max-w-lg"
              style={{
                color: "oklch(0.75 0.008 78)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontFamily: "'DM Sans', sans-serif",
                animationDelay: "500ms",
              }}
            >
              Premier yacht and commercial ship brokerage serving South Florida. Recreational yachts, commercial vessels, tenders, and seaplanes — from Miami to Palm Beach.
            </p>

            <div
              className="fade-up flex flex-wrap gap-4 mt-10"
              style={{ animationDelay: "650ms" }}
            >
              <Link href="/listings">
                <button
                  className="btn-press flex items-center gap-2 px-8 py-4 text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.2em",
                    background: "oklch(0.72 0.12 78)",
                    color: "oklch(0.12 0.025 255)",
                    fontSize: "0.7rem",
                  }}
                >
                  VIEW LISTINGS
                  <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="btn-press flex items-center gap-2 px-8 py-4 text-sm transition-all duration-200"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.2em",
                    background: "transparent",
                    color: "oklch(0.94 0.008 78)",
                    border: "1px solid oklch(0.94 0.008 78 / 0.4)",
                    fontSize: "0.7rem",
                  }}
                >
                  REQUEST VALUATION
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-up"
          style={{ animationDelay: "1000ms" }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              color: "oklch(0.72 0.12 78)",
            }}
          >
            SCROLL
          </span>
          <ChevronDown
            size={16}
            style={{ color: "oklch(0.72 0.12 78)" }}
            className="animate-bounce"
          />
        </div>
      </section>

      {/* ===== INTRO STRIP ===== */}
      <section
        style={{
          background: "oklch(0.72 0.12 78)",
          padding: "1.25rem 0",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              "IYBA Certified Brokers",
              "FYBA Member",
              "CPYB Certified",
              "30+ Years in South Florida",
              "Miami · Fort Lauderdale · Palm Beach",
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "oklch(0.12 0.025 255)",
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 lg:py-32" style={{ background: "oklch(0.12 0.025 255)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="flex items-start gap-8 mb-16">
              <div>
                <span className="section-label">What We Do</span>
                <div className="gold-line mt-3 mb-4" />
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "oklch(0.94 0.008 78)",
                    lineHeight: 1.1,
                  }}
                >
                  A Full Spectrum of
                  <br />
                  <em style={{ color: "oklch(0.72 0.12 78)" }}>Marine Services</em>
                </h2>
              </div>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <RevealSection key={svc.title} delay={i * 100}>
                <Link href={svc.href}>
                  <div
                    className="vessel-card gold-border-card relative overflow-hidden group"
                    style={{
                      background: "oklch(0.15 0.025 255)",
                      height: "320px",
                    }}
                  >
                    {/* Background image */}
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ opacity: 0.35 }}
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, oklch(0.10 0.025 255 / 0.95) 0%, oklch(0.10 0.025 255 / 0.5) 60%, transparent 100%)",
                      }}
                    />
                    {/* Roman numeral */}
                    <div
                      className="absolute top-4 right-6"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "4rem",
                        fontWeight: 700,
                        color: "oklch(0.72 0.12 78 / 0.12)",
                        lineHeight: 1,
                      }}
                    >
                      {svc.roman}
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="section-label">{svc.subtitle}</span>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                          fontSize: "1.9rem",
                          color: "oklch(0.94 0.008 78)",
                          marginTop: "6px",
                          marginBottom: "8px",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        style={{
                          color: "oklch(0.65 0.015 255)",
                          fontSize: "0.85rem",
                          lineHeight: 1.65,
                          fontFamily: "'DM Sans', sans-serif",
                          maxWidth: "400px",
                        }}
                      >
                        {svc.desc}
                      </p>
                      <div
                        className="flex items-center gap-2 mt-4 transition-all duration-300 group-hover:gap-3"
                        style={{ color: "oklch(0.72 0.12 78)" }}
                      >
                        <span
                          style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.2em",
                          }}
                        >
                          EXPLORE
                        </span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BROKERAGE FEATURE ===== */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "oklch(0.10 0.025 255)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div>
                <span className="section-label">Brokerage & Consulting</span>
                <div className="gold-line mt-3 mb-6" />
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "oklch(0.94 0.008 78)",
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  Trusted Advisors
                  <br />
                  <em style={{ color: "oklch(0.72 0.12 78)" }}>From Contract to Keys</em>
                </h2>
                <p
                  style={{
                    color: "oklch(0.65 0.015 255)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: "1.5rem",
                  }}
                >
                  Whether you're buying or selling, our certified brokers guide every step of the transaction — valuation, listing strategy, buyer qualification, survey coordination, sea trials, and closing. We protect your interests throughout.
                </p>
                <p
                  style={{
                    color: "oklch(0.65 0.015 255)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: "2rem",
                  }}
                >
                  Our consulting practice extends beyond transactions to fleet management, regulatory compliance, refit oversight, and strategic acquisition advisory for private clients and corporate operators.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Award, label: "CPYB Certified Brokers" },
                    { icon: Shield, label: "IYBA & FYBA Members" },
                    { icon: Compass, label: "30+ Years Experience" },
                    { icon: Star, label: "5-Star Client Reviews" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <Icon size={16} style={{ color: "oklch(0.72 0.12 78)" }} />
                      <span
                        style={{
                          color: "oklch(0.75 0.008 78)",
                          fontSize: "0.82rem",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <button
                    className="btn-press flex items-center gap-2 px-8 py-4"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.2em",
                      fontSize: "0.7rem",
                      background: "oklch(0.72 0.12 78)",
                      color: "oklch(0.12 0.025 255)",
                      fontWeight: 600,
                    }}
                  >
                    OUR SERVICES
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="relative">
                <img
                  src={INTERIOR_IMG}
                  alt="Luxury yacht interior"
                  className="w-full object-cover"
                  style={{
                    height: "520px",
                    border: "1px solid oklch(0.72 0.12 78 / 0.2)",
                  }}
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -left-6 p-6"
                  style={{
                    background: "oklch(0.72 0.12 78)",
                    minWidth: "180px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      color: "oklch(0.12 0.025 255)",
                      lineHeight: 1,
                    }}
                  >
                    30+
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "oklch(0.12 0.025 255 / 0.7)",
                      marginTop: "4px",
                    }}
                  >
                    YEARS IN SOUTH FLORIDA
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section
        className="py-20"
        style={{
          background: "oklch(0.12 0.025 255)",
          borderTop: "1px solid oklch(0.30 0.02 255)",
          borderBottom: "1px solid oklch(0.30 0.02 255)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <div className="stat-number">{stat.value}</div>
                  <div
                    className="gold-rule mx-auto mt-3 mb-3"
                    style={{ width: "40px" }}
                  />
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: "oklch(0.60 0.015 255)",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARINA FEATURE ===== */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${MARINA_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.09 0.025 255 / 0.92) 0%, oklch(0.09 0.025 255 / 0.7) 50%, oklch(0.09 0.025 255 / 0.4) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="max-w-xl">
              <span className="section-label">The Yachting Capital of the World</span>
              <div className="gold-line mt-3 mb-6" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "oklch(0.94 0.008 78)",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Based in Fort Lauderdale.
                <br />
                <em style={{ color: "oklch(0.72 0.12 78)" }}>Serving All of South Florida.</em>
              </h2>
              <p
                style={{
                  color: "oklch(0.75 0.008 78)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "2rem",
                }}
              >
                Fort Lauderdale is home to more than 50,000 registered vessels and hosts the world's largest in-water boat show. Our deep roots in this community give our clients unmatched access to inventory, buyers, and maritime professionals across Miami-Dade, Broward, and Palm Beach counties.
              </p>
              <Link href="/contact">
                <button
                  className="btn-press flex items-center gap-2 px-8 py-4"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.2em",
                    fontSize: "0.7rem",
                    background: "transparent",
                    color: "oklch(0.94 0.008 78)",
                    border: "1px solid oklch(0.72 0.12 78 / 0.6)",
                    fontWeight: 600,
                  }}
                >
                  CONTACT OUR TEAM
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 lg:py-32" style={{ background: "oklch(0.10 0.025 255)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="section-label">Client Testimonials</span>
              <div className="gold-line mx-auto mt-3 mb-4" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                What Our Clients Say
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div
                  className="gold-border-card p-8 h-full flex flex-col"
                  style={{ background: "oklch(0.14 0.025 255)" }}
                >
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        fill="oklch(0.72 0.12 78)"
                        style={{ color: "oklch(0.72 0.12 78)" }}
                      />
                    ))}
                  </div>
                  <blockquote
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      lineHeight: 1.7,
                      color: "oklch(0.85 0.008 78)",
                      flex: 1,
                      marginBottom: "1.5rem",
                    }}
                  >
                    "{t.quote}"
                  </blockquote>
                  <div className="gold-rule mb-4" />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        color: "oklch(0.94 0.008 78)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.78rem",
                        color: "oklch(0.60 0.015 255)",
                        marginTop: "2px",
                      }}
                    >
                      {t.title}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="py-24"
        style={{
          background: "oklch(0.72 0.12 78)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <RevealSection>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "oklch(0.12 0.025 255 / 0.6)",
              }}
            >
              BEGIN YOUR JOURNEY
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "oklch(0.12 0.025 255)",
                lineHeight: 1.1,
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              Ready to Find Your
              <br />
              <em>Perfect Vessel?</em>
            </h2>
            <p
              style={{
                color: "oklch(0.12 0.025 255 / 0.7)",
                fontSize: "1rem",
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
              }}
            >
              Contact our team today for a confidential consultation. Whether buying, selling, or seeking expert marine advisory, we are here to serve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="btn-press flex items-center gap-2 px-10 py-4"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.2em",
                    fontSize: "0.7rem",
                    background: "oklch(0.12 0.025 255)",
                    color: "oklch(0.72 0.12 78)",
                    fontWeight: 700,
                  }}
                >
                  CONTACT US TODAY
                  <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/listings">
                <button
                  className="btn-press flex items-center gap-2 px-10 py-4"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.2em",
                    fontSize: "0.7rem",
                    background: "transparent",
                    color: "oklch(0.12 0.025 255)",
                    border: "1px solid oklch(0.12 0.025 255 / 0.5)",
                    fontWeight: 600,
                  }}
                >
                  BROWSE LISTINGS
                </button>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
