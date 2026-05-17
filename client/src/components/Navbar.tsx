/**
 * NAVBAR — Nautical Noir Design System
 * Transparent on hero, transitions to deep navy on scroll
 * Cinzel small-caps navigation, gold accent on active/hover
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Anchor, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "oklch(0.12 0.025 255 / 0.97)"
            : "oklch(0 0 0 / 0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(0.30 0.02 255)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-300"
                style={{
                  borderColor: "oklch(0.72 0.12 78 / 0.6)",
                  background: "oklch(0.72 0.12 78 / 0.1)",
                }}
              >
                <Anchor
                  size={16}
                  style={{ color: "oklch(0.72 0.12 78)" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.94 0.008 78)",
                    lineHeight: 1.2,
                  }}
                >
                  BLUEWATER
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: "oklch(0.72 0.12 78)",
                    lineHeight: 1,
                  }}
                >
                  MARINE GROUP
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="nav-link"
                  style={{
                    color:
                      location === link.href
                        ? "oklch(0.72 0.12 78)"
                        : "oklch(0.75 0.008 78)",
                    borderBottom:
                      location === link.href
                        ? "1px solid oklch(0.72 0.12 78)"
                        : undefined,
                    paddingBottom: "2px",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+19545550100"
              className="flex items-center gap-2 transition-colors duration-200"
              style={{ color: "oklch(0.72 0.12 78)", fontSize: "0.8rem" }}
            >
              <Phone size={14} />
              <span style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.1em", fontSize: "0.7rem" }}>
                (954) 555-0100
              </span>
            </a>
            <Link href="/contact">
              <button
                className="btn-press px-5 py-2.5 text-xs transition-all duration-200"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.2em",
                  background: "oklch(0.72 0.12 78)",
                  color: "oklch(0.12 0.025 255)",
                  border: "none",
                  fontWeight: 600,
                }}
              >
                INQUIRE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "oklch(0.94 0.008 78)" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-400"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          background: "oklch(0.10 0.025 255 / 0.98)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.2rem",
                  letterSpacing: "0.25em",
                  color:
                    location === link.href
                      ? "oklch(0.72 0.12 78)"
                      : "oklch(0.94 0.008 78)",
                  animationDelay: `${i * 60}ms`,
                }}
                className="fade-up"
              >
                {link.label.toUpperCase()}
              </span>
            </Link>
          ))}
          <div className="gold-rule w-24 mt-4" />
          <a
            href="tel:+19545550100"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "oklch(0.72 0.12 78)",
            }}
          >
            (954) 555-0100
          </a>
          <Link href="/contact">
            <button
              className="btn-press px-8 py-3 mt-2"
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.2em",
                fontSize: "0.75rem",
                background: "oklch(0.72 0.12 78)",
                color: "oklch(0.12 0.025 255)",
                fontWeight: 600,
              }}
            >
              INQUIRE NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
