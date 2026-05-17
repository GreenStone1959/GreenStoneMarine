/**
 * SERVICES PAGE — Nautical Noir Design System
 * Detailed service offerings with process and consulting sections
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Ship, Anchor, Plane, Sailboat, BarChart3, FileText, Wrench, Globe
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-superyacht-WsNegnX7xPUAEJvvkpUX9b.webp";
const SHIP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/commercial-ship-U3tVh5caiDG9FEVk6ogU7g.webp";
const SEAPLANE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/seaplane-bahamas-YqWgSXsMhpYKXnWaJZfrsm.webp";
const TENDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/tender-boat-SCBBvdKJ5bdyakWSsiN3Aa.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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

const mainServices = [
  {
    icon: Anchor,
    roman: "I",
    title: "Yacht Sales & Brokerage",
    subtitle: "Recreational Vessels",
    img: HERO_IMG,
    desc: "We represent buyers and sellers of recreational yachts from 30 to 200+ feet. Our certified brokers provide expert valuation, strategic listing, buyer qualification, and seamless transaction management from offer through closing.",
    features: [
      "Certified Professional Yacht Brokers (CPYB)",
      "IYBA and FYBA member firm",
      "Comprehensive vessel valuation",
      "Global buyer network",
      "Survey & sea trial coordination",
      "Title and documentation services",
    ],
  },
  {
    icon: Ship,
    roman: "II",
    title: "Commercial Ship Sales",
    subtitle: "Commercial Maritime",
    img: SHIP_IMG,
    desc: "Our commercial division specializes in the sale and acquisition of commercial vessels — bulk carriers, tankers, container ships, ferries, offshore support vessels, and specialty craft. We navigate complex international maritime law and flag state requirements.",
    features: [
      "Bulk carriers & tankers",
      "Container ships & ferries",
      "Offshore support vessels",
      "ISM & ISPS compliance advisory",
      "Class survey coordination",
      "Flag state documentation",
    ],
  },
  {
    icon: Sailboat,
    roman: "III",
    title: "Tender Sales",
    subtitle: "Yacht Tenders & Day Boats",
    img: TENDER_IMG,
    desc: "From custom-built superyacht tenders to high-performance RIBs and luxury day boats, we source and broker the finest tender craft available. We work with leading builders including Pascoe, Williams, Castoldi, and Novurania.",
    features: [
      "Custom superyacht tenders",
      "High-performance RIBs",
      "Luxury day boats",
      "Tender-to-mothership matching",
      "New build representation",
      "Warranty and support coordination",
    ],
  },
  {
    icon: Plane,
    roman: "IV",
    title: "Seaplane Sales",
    subtitle: "Amphibious Aircraft",
    img: SEAPLANE_IMG,
    desc: "A rare specialty in the South Florida market. We broker seaplanes and amphibious aircraft for private ownership, charter operations, and commercial routes. Our team understands both FAA regulations and maritime law — a unique combination.",
    features: [
      "Private ownership seaplanes",
      "Charter operation aircraft",
      "FAA documentation & transfer",
      "Pilot training referrals",
      "Bahamas route advisory",
      "Insurance coordination",
    ],
  },
];

const consultingServices = [
  {
    icon: BarChart3,
    title: "Acquisition Advisory",
    desc: "Strategic guidance for buyers navigating the market. We identify opportunities, conduct due diligence, and negotiate on your behalf.",
  },
  {
    icon: FileText,
    title: "Vessel Valuation",
    desc: "Certified appraisals for insurance, estate, financing, and sale purposes. Backed by current market data and 30+ years of expertise.",
  },
  {
    icon: Wrench,
    title: "Refit Oversight",
    desc: "Project management for major refits and refurbishments. We coordinate shipyards, contractors, and suppliers to protect your investment.",
  },
  {
    icon: Globe,
    title: "Fleet Management",
    desc: "Comprehensive fleet management for corporate operators and charter companies. Crew, maintenance, compliance, and logistics.",
  },
];

const buyingProcess = [
  {
    step: "01",
    title: "Consultation",
    desc: "We begin with a confidential consultation to understand your needs, budget, intended use, and timeline.",
  },
  {
    step: "02",
    title: "Market Search",
    desc: "We search our proprietary database and global network to identify vessels that match your exact criteria.",
  },
  {
    step: "03",
    title: "Showings",
    desc: "We arrange private showings and sea trials, providing detailed reports and our professional assessment.",
  },
  {
    step: "04",
    title: "Negotiation",
    desc: "Our experienced brokers negotiate price, terms, and conditions on your behalf to secure the best outcome.",
  },
  {
    step: "05",
    title: "Due Diligence",
    desc: "We coordinate independent surveys, sea trials, title searches, and lien checks to protect your investment.",
  },
  {
    step: "06",
    title: "Closing",
    desc: "We manage all documentation, escrow, title transfer, and registration to ensure a smooth, clean closing.",
  },
];

export default function Services() {
  return (
    <div style={{ background: "oklch(0.12 0.025 255)", minHeight: "100vh" }}>
      {/* Page Hero */}
      <section className="relative h-64 lg:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Luxury yacht"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.12 0.025 255) 0%, oklch(0.12 0.025 255 / 0.5) 60%, transparent 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-10">
          <span className="section-label">What We Offer</span>
          <div className="gold-line mt-2 mb-3" />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "oklch(0.94 0.008 78)",
              lineHeight: 1.1,
            }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="space-y-20">
            {mainServices.map((svc, i) => (
              <RevealSection key={svc.title} delay={0}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" }}
                >
                  {/* Image side */}
                  <div
                    className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full object-cover"
                      style={{
                        height: "420px",
                        border: "1px solid oklch(0.72 0.12 78 / 0.2)",
                      }}
                    />
                    {/* Roman numeral overlay */}
                    <div
                      className="absolute top-4 right-4"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "5rem",
                        fontWeight: 700,
                        color: "oklch(0.72 0.12 78 / 0.15)",
                        lineHeight: 1,
                      }}
                    >
                      {svc.roman}
                    </div>
                  </div>

                  {/* Text side */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <svc.icon
                        size={20}
                        style={{ color: "oklch(0.72 0.12 78)" }}
                      />
                      <span className="section-label">{svc.subtitle}</span>
                    </div>
                    <div className="gold-line mb-5" />
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 300,
                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                        color: "oklch(0.94 0.008 78)",
                        lineHeight: 1.15,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {svc.title}
                    </h2>
                    <p
                      style={{
                        color: "oklch(0.65 0.015 255)",
                        fontSize: "0.95rem",
                        lineHeight: 1.8,
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {svc.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {svc.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <div
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "oklch(0.72 0.12 78)" }}
                          />
                          <span
                            style={{
                              color: "oklch(0.70 0.015 255)",
                              fontSize: "0.85rem",
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <button
                        className="btn-press flex items-center gap-2 px-7 py-3"
                        style={{
                          fontFamily: "'Cinzel', serif",
                          letterSpacing: "0.2em",
                          fontSize: "0.65rem",
                          background: "oklch(0.72 0.12 78)",
                          color: "oklch(0.12 0.025 255)",
                          fontWeight: 700,
                        }}
                      >
                        INQUIRE ABOUT THIS SERVICE
                        <ArrowRight size={12} />
                      </button>
                    </Link>
                  </div>
                </div>
                {i < mainServices.length - 1 && (
                  <div className="gold-rule mt-20" />
                )}
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.10 0.025 255)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="section-label">Advisory & Consulting</span>
              <div className="gold-line mx-auto mt-3 mb-4" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                Beyond the Transaction
              </h2>
              <p
                style={{
                  color: "oklch(0.60 0.015 255)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  fontFamily: "'DM Sans', sans-serif",
                  maxWidth: "520px",
                  margin: "1rem auto 0",
                }}
              >
                Our consulting practice provides strategic guidance to private clients, family offices, and corporate operators throughout the vessel lifecycle.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((svc, i) => (
              <RevealSection key={svc.title} delay={i * 80}>
                <div
                  className="gold-border-card p-7 h-full"
                  style={{ background: "oklch(0.14 0.025 255)" }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-5"
                    style={{
                      background: "oklch(0.72 0.12 78 / 0.1)",
                      border: "1px solid oklch(0.72 0.12 78 / 0.3)",
                    }}
                  >
                    <svc.icon size={18} style={{ color: "oklch(0.72 0.12 78)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      fontSize: "1.3rem",
                      color: "oklch(0.94 0.008 78)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      color: "oklch(0.60 0.015 255)",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-20 lg:py-28" style={{ background: "oklch(0.12 0.025 255)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="mb-14">
              <span className="section-label">How It Works</span>
              <div className="gold-line mt-3 mb-4" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                The Buying Process
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyingProcess.map((step, i) => (
              <RevealSection key={step.step} delay={i * 80}>
                <div
                  className="p-7 relative"
                  style={{
                    background: "oklch(0.15 0.025 255)",
                    border: "1px solid oklch(0.30 0.02 255)",
                  }}
                >
                  <div
                    className="absolute top-4 right-5"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "oklch(0.72 0.12 78 / 0.07)",
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "oklch(0.72 0.12 78)",
                      marginBottom: "8px",
                    }}
                  >
                    STEP {step.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      fontSize: "1.4rem",
                      color: "oklch(0.94 0.008 78)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "oklch(0.60 0.015 255)",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "oklch(0.72 0.12 78)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "oklch(0.12 0.025 255)",
              marginBottom: "1rem",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              color: "oklch(0.12 0.025 255 / 0.7)",
              fontSize: "0.95rem",
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: "460px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Contact our team for a confidential consultation. We'll match you with the right broker for your specific needs.
          </p>
          <Link href="/contact">
            <button
              className="btn-press flex items-center gap-2 px-10 py-4 mx-auto"
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                background: "oklch(0.12 0.025 255)",
                color: "oklch(0.72 0.12 78)",
                fontWeight: 700,
              }}
            >
              SCHEDULE A CONSULTATION
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
