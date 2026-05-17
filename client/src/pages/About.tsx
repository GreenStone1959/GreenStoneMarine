/**
 * ABOUT PAGE — Nautical Noir Design System
 * Company story, team profiles, credentials, affiliations
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Award, Shield, Users, TrendingUp } from "lucide-react";

const MARINA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-marina-night-F8jqijuVdANGBVLvPj5ocq.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/yacht-interior-salon-fS9XPZaqyjN2yB9p4x88kz.webp";

// Unsplash professional headshots
const BROKER1 = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80";
const BROKER2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";
const BROKER3 = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80";
const BROKER4 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80";

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

const team = [
  {
    name: "William Hartley",
    title: "Founder & Senior Broker",
    credentials: "CPYB · IYBA · 30 Years",
    img: BROKER1,
    bio: "William founded GreenStone Marine in 1994 after a decade as a captain aboard superyachts in the Mediterranean and Caribbean. His encyclopedic knowledge of the South Florida market and global network of buyers and sellers has closed over $800 million in transactions.",
    specialty: "Superyachts · Commercial · Consulting",
  },
  {
    name: "Alexandra Reyes",
    title: "Senior Yacht Broker",
    credentials: "CPYB · FYBA · 15 Years",
    img: BROKER2,
    bio: "Alexandra specializes in recreational yachts from 40 to 120 feet, with a particular focus on the Miami and Palm Beach markets. Fluent in English, Spanish, and Portuguese, she serves a significant international clientele from Latin America and Europe.",
    specialty: "Recreational Yachts · International Buyers",
  },
  {
    name: "Marcus Donovan",
    title: "Commercial Division Director",
    credentials: "USCG Licensed · Maritime Law · 20 Years",
    img: BROKER3,
    bio: "Marcus leads our commercial maritime division with deep expertise in bulk carriers, tankers, and offshore support vessels. A former maritime attorney, he navigates the complex regulatory and legal landscape of commercial vessel transactions with precision.",
    specialty: "Commercial Ships · Fleet Management · Compliance",
  },
  {
    name: "Sophia Chen",
    title: "Tender & Seaplane Specialist",
    credentials: "FAA Licensed Pilot · CPYB · 10 Years",
    img: BROKER4,
    bio: "Sophia is our resident specialist in tenders and seaplanes — a uniquely rare combination. A licensed seaplane pilot herself, she brings firsthand operational knowledge to every transaction and has brokered some of the most distinctive amphibious aircraft in the Southeast.",
    specialty: "Tenders · Seaplanes · Bahamas Routes",
  },
];

const credentials = [
  { name: "IYBA", full: "International Yacht Brokers Association", desc: "Full member firm" },
  { name: "FYBA", full: "Florida Yacht Brokers Association", desc: "Active member" },
  { name: "CPYB", full: "Certified Professional Yacht Broker", desc: "All senior brokers certified" },
  { name: "NMMA", full: "National Marine Manufacturers Association", desc: "Industry partner" },
  { name: "USCG", full: "U.S. Coast Guard", desc: "Licensed documentation agents" },
  { name: "FAA", full: "Federal Aviation Administration", desc: "Seaplane transaction specialists" },
];

const milestones = [
  { year: "1994", event: "Founded in Fort Lauderdale by William Hartley" },
  { year: "2001", event: "Expanded to commercial maritime division" },
  { year: "2008", event: "Opened Palm Beach satellite office" },
  { year: "2012", event: "Launched seaplane and tender specialty division" },
  { year: "2018", event: "Surpassed $1 billion in cumulative transactions" },
  { year: "2023", event: "Expanded to full South Florida tri-county coverage" },
];

export default function About() {
  return (
    <div style={{ background: "oklch(0.12 0.025 255)", minHeight: "100vh" }}>
      {/* Page Hero */}
      <section className="relative h-64 lg:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={MARINA_IMG}
            alt="Fort Lauderdale Marina"
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
          <span className="section-label">Our Story</span>
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
            About GreenStone
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div>
                <span className="section-label">Est. 1994 · Fort Lauderdale</span>
                <div className="gold-line mt-3 mb-6" />
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "oklch(0.94 0.008 78)",
                    lineHeight: 1.15,
                    marginBottom: "1.5rem",
                  }}
                >
                  Thirty Years of
                  <br />
                  <em style={{ color: "oklch(0.72 0.12 78)" }}>Maritime Excellence</em>
                </h2>
                <p
                  style={{
                    color: "oklch(0.65 0.015 255)",
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: "1.25rem",
                  }}
                >
                  GreenStone Marine was founded in Fort Lauderdale in 1994 by William Hartley, a former superyacht captain with a vision for a brokerage built on integrity, expertise, and genuine client service. What began as a boutique recreational yacht brokerage has grown into one of South Florida's most respected full-service marine firms.
                </p>
                <p
                  style={{
                    color: "oklch(0.65 0.015 255)",
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: "1.25rem",
                  }}
                >
                  Today, our team of certified brokers and maritime specialists handles transactions across recreational yachts, commercial vessels, tenders, and seaplanes — serving clients from Miami to Palm Beach and beyond. Our global network spans over 40 countries.
                </p>
                <p
                  style={{
                    color: "oklch(0.65 0.015 255)",
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  We are proud members of the International Yacht Brokers Association (IYBA) and the Florida Yacht Brokers Association (FYBA), and all of our senior brokers hold the Certified Professional Yacht Broker (CPYB) designation — the highest standard in the industry.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="relative">
                <img
                  src={INTERIOR_IMG}
                  alt="Luxury yacht interior"
                  className="w-full object-cover"
                  style={{
                    height: "480px",
                    border: "1px solid oklch(0.72 0.12 78 / 0.2)",
                  }}
                />
                {/* Stats overlay */}
                <div
                  className="absolute -bottom-6 -right-6 p-6 grid grid-cols-2 gap-4"
                  style={{
                    background: "oklch(0.12 0.025 255)",
                    border: "1px solid oklch(0.72 0.12 78 / 0.3)",
                    minWidth: "220px",
                  }}
                >
                  {[
                    { val: "30+", label: "Years" },
                    { val: "500+", label: "Vessels Sold" },
                    { val: "$2.4B", label: "Transacted" },
                    { val: "40+", label: "Countries" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          fontSize: "1.6rem",
                          color: "oklch(0.72 0.12 78)",
                          lineHeight: 1,
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.5rem",
                          letterSpacing: "0.15em",
                          color: "oklch(0.55 0.015 255)",
                          marginTop: "2px",
                        }}
                      >
                        {s.label.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20"
        style={{
          background: "oklch(0.10 0.025 255)",
          borderTop: "1px solid oklch(0.30 0.02 255)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="mb-12">
              <span className="section-label">Our History</span>
              <div className="gold-line mt-3 mb-4" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                Three Decades of Milestones
              </h2>
            </div>
          </RevealSection>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "oklch(0.72 0.12 78 / 0.2)", transform: "translateX(-50%)" }}
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <RevealSection key={m.year} delay={i * 60}>
                  <div
                    className={`relative flex flex-col lg:flex-row gap-6 ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Year side */}
                    <div
                      className={`lg:w-1/2 ${
                        i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                      }`}
                    >
                      {i % 2 === 0 && (
                        <div>
                          <div
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontWeight: 600,
                              fontSize: "2rem",
                              color: "oklch(0.72 0.12 78)",
                              lineHeight: 1,
                            }}
                          >
                            {m.year}
                          </div>
                          <p
                            style={{
                              color: "oklch(0.65 0.015 255)",
                              fontSize: "0.9rem",
                              fontFamily: "'DM Sans', sans-serif",
                              marginTop: "4px",
                            }}
                          >
                            {m.event}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* Dot */}
                    <div
                      className="absolute left-0 lg:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-2"
                      style={{
                        background: "oklch(0.72 0.12 78)",
                        border: "2px solid oklch(0.10 0.025 255)",
                      }}
                    />
                    {/* Event side */}
                    <div
                      className={`lg:w-1/2 pl-8 lg:pl-0 ${
                        i % 2 === 1 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                      }`}
                    >
                      {i % 2 === 1 && (
                        <div>
                          <div
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontWeight: 600,
                              fontSize: "2rem",
                              color: "oklch(0.72 0.12 78)",
                              lineHeight: 1,
                            }}
                          >
                            {m.year}
                          </div>
                          <p
                            style={{
                              color: "oklch(0.65 0.015 255)",
                              fontSize: "0.9rem",
                              fontFamily: "'DM Sans', sans-serif",
                              marginTop: "4px",
                            }}
                          >
                            {m.event}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28" style={{ background: "oklch(0.12 0.025 255)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="mb-14">
              <span className="section-label">Our Brokers</span>
              <div className="gold-line mt-3 mb-4" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                Meet the Team
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <RevealSection key={member.name} delay={i * 80}>
                <div
                  className="gold-border-card overflow-hidden"
                  style={{ background: "oklch(0.15 0.025 255)" }}
                >
                  <div className="relative overflow-hidden" style={{ height: "280px" }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, oklch(0.15 0.025 255) 0%, transparent 60%)",
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        fontSize: "1.3rem",
                        color: "oklch(0.94 0.008 78)",
                        marginBottom: "2px",
                      }}
                    >
                      {member.name}
                    </h3>
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        color: "oklch(0.72 0.12 78)",
                        marginBottom: "4px",
                      }}
                    >
                      {member.title.toUpperCase()}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        color: "oklch(0.55 0.015 255)",
                        marginBottom: "12px",
                      }}
                    >
                      {member.credentials}
                    </div>
                    <div className="gold-rule mb-3" />
                    <p
                      style={{
                        color: "oklch(0.60 0.015 255)",
                        fontSize: "0.8rem",
                        lineHeight: 1.65,
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: "10px",
                      }}
                    >
                      {member.bio.substring(0, 120)}...
                    </p>
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.1em",
                        color: "oklch(0.72 0.12 78 / 0.7)",
                      }}
                    >
                      {member.specialty}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section
        className="py-20"
        style={{
          background: "oklch(0.10 0.025 255)",
          borderTop: "1px solid oklch(0.30 0.02 255)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <RevealSection>
            <div className="text-center mb-12">
              <span className="section-label">Credentials & Affiliations</span>
              <div className="gold-line mx-auto mt-3 mb-4" />
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                Industry Recognized
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {credentials.map((cred, i) => (
              <RevealSection key={cred.name} delay={i * 60}>
                <div
                  className="gold-border-card p-5 text-center"
                  style={{ background: "oklch(0.14 0.025 255)" }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "oklch(0.72 0.12 78)",
                      marginBottom: "6px",
                    }}
                  >
                    {cred.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "oklch(0.55 0.015 255)",
                      lineHeight: 1.4,
                    }}
                  >
                    {cred.full}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.12 0.025 255)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <RevealSection>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(0.94 0.008 78)",
                marginBottom: "1rem",
              }}
            >
              Work With Our Team
            </h2>
            <p
              style={{
                color: "oklch(0.60 0.015 255)",
                fontSize: "0.95rem",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: "460px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Contact us to be matched with the broker best suited to your specific vessel type, budget, and timeline.
            </p>
            <Link href="/contact">
              <button
                className="btn-press flex items-center gap-2 px-10 py-4 mx-auto"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  background: "oklch(0.72 0.12 78)",
                  color: "oklch(0.12 0.025 255)",
                  fontWeight: 700,
                }}
              >
                GET IN TOUCH
                <ArrowRight size={14} />
              </button>
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
