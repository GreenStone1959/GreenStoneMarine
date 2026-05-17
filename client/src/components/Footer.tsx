/**
 * FOOTER — Nautical Noir Design System
 * Deep navy, gold accents, editorial layout
 */
import { Link } from "wouter";
import { Anchor, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.09 0.025 255)",
        borderTop: "1px solid oklch(0.30 0.02 255)",
      }}
    >
      {/* Top section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border"
                style={{
                  borderColor: "oklch(0.72 0.12 78 / 0.5)",
                  background: "oklch(0.72 0.12 78 / 0.08)",
                }}
              >
                <Anchor size={18} style={{ color: "oklch(0.72 0.12 78)" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.94 0.008 78)",
                  }}
                >
                  GREENSTONE
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.5rem",
                    letterSpacing: "0.3em",
                    color: "oklch(0.72 0.12 78)",
                  }}
                >
                  MARINE
                </div>
              </div>
            </div>
            <p
              style={{
                color: "oklch(0.60 0.015 255)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Fort Lauderdale's premier marine brokerage. Specialists in recreational yachts, commercial vessels, tenders, and seaplanes — serving South Florida from Miami to Palm Beach.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-200 hover:border-[oklch(0.72_0.12_78)] hover:text-[oklch(0.72_0.12_78)]"
                  style={{
                    borderColor: "oklch(0.30 0.02 255)",
                    color: "oklch(0.60 0.015 255)",
                  }}
                  onClick={() => {}}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="section-label mb-6"
              style={{ color: "oklch(0.72 0.12 78)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Yacht Sales",
                "Commercial Ship Sales",
                "Yacht Brokerage",
                "Tender Sales",
                "Seaplane Sales",
                "Marine Consulting",
                "Fleet Management",
                "Acquisition Advisory",
              ].map((item) => (
                <li key={item}>
                  <Link href="/services">
                    <span
                      className="transition-colors duration-200 hover:text-[oklch(0.72_0.12_78)]"
                      style={{
                        color: "oklch(0.60 0.015 255)",
                        fontSize: "0.875rem",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="section-label mb-6"
              style={{ color: "oklch(0.72 0.12 78)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Current Listings", href: "/listings" },
                { label: "About Our Team", href: "/about" },
                { label: "Sell Your Vessel", href: "/services" },
                { label: "Market Reports", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Request Valuation", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className="transition-colors duration-200 hover:text-[oklch(0.72_0.12_78)]"
                      style={{
                        color: "oklch(0.60 0.015 255)",
                        fontSize: "0.875rem",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="section-label mb-6"
              style={{ color: "oklch(0.72 0.12 78)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.72 0.12 78)" }}
                />
                <span
                  style={{
                    color: "oklch(0.60 0.015 255)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  1 N. Ocean Blvd, Suite 200<br />
                  Fort Lauderdale, FL 33316
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone
                  size={15}
                  className="shrink-0"
                  style={{ color: "oklch(0.72 0.12 78)" }}
                />
                <a
                  href="tel:+19545550100"
                  className="transition-colors duration-200 hover:text-[oklch(0.72_0.12_78)]"
                  style={{
                    color: "oklch(0.60 0.015 255)",
                    fontSize: "0.875rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  (954) 555-0100
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail
                  size={15}
                  className="shrink-0"
                  style={{ color: "oklch(0.72 0.12 78)" }}
                />
                <a
                  href="mailto:info@greenstonemarine.com"
                  className="transition-colors duration-200 hover:text-[oklch(0.72_0.12_78)]"
                  style={{
                    color: "oklch(0.60 0.015 255)",
                    fontSize: "0.875rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  info@greenstonemarine.com
                </a>
              </li>
            </ul>

            <div
              className="mt-6 p-4"
              style={{
                background: "oklch(0.72 0.12 78 / 0.08)",
                border: "1px solid oklch(0.72 0.12 78 / 0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "oklch(0.72 0.12 78)",
                  marginBottom: "4px",
                }}
              >
                SERVICE AREA
              </p>
              <p
                style={{
                  color: "oklch(0.75 0.008 78)",
                  fontSize: "0.8rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Miami · Fort Lauderdale · Palm Beach
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gold rule */}
      <div className="gold-rule" />

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          style={{
            color: "oklch(0.45 0.015 255)",
            fontSize: "0.75rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          © {new Date().getFullYear()} GreenStone Marine. All rights reserved. Fort Lauderdale, Florida.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "IYBA Member"].map((item) => (
            <span
              key={item}
              style={{
                color: "oklch(0.45 0.015 255)",
                fontSize: "0.7rem",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.1em",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
