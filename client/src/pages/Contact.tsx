/**
 * CONTACT PAGE — Nautical Noir Design System
 * Multi-channel contact, inquiry form, service area map
 */
import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import { useSearch } from "wouter";

const MARINA_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-marina-night-F8jqijuVdANGBVLvPj5ocq.webp";
const CONTACT_EMAIL = "greenstonemarine@gmail.com";
const CONTACT_PHONE = "754-300-8651";
const CONTACT_PHONE_HREF = "tel:+17543008651";

const inquiryTypes = [
  "Buying a Yacht",
  "Selling a Vessel",
  "Commercial Ship Inquiry",
  "Tender Inquiry",
  "Seaplane Inquiry",
  "Marine Consulting",
  "Vessel Valuation",
  "General Inquiry",
];

export default function Contact() {
  const search = useSearch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const inquiry = params.get("inquiry");
    const listing = params.get("listing");

    setForm(prev => {
      const nextInquiry = inquiryTypes.includes(inquiry ?? "")
        ? (inquiry ?? "")
        : "";
      const shouldUseListingMessage =
        !!listing &&
        (!prev.message || prev.message.startsWith("I'm interested in "));

      return {
        ...prev,
        inquiryType: nextInquiry || prev.inquiryType,
        message: shouldUseListingMessage
          ? `I'm interested in ${listing}.`
          : prev.message,
      };
    });
  }, [search]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const subject = `GreenStone Marine Inquiry${form.inquiryType ? ` - ${form.inquiryType}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.inquiryType ? `Inquiry Type: ${form.inquiryType}` : "",
      form.budget ? `Budget Range: ${form.budget}` : "",
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    const mailtoParams = new URLSearchParams({ subject, body });

    window.location.href = `mailto:${CONTACT_EMAIL}?${mailtoParams.toString()}`;
    setSubmitted(true);
    toast.success("Your email draft is ready to send.");
  };

  const inputStyle = {
    background: "oklch(0.15 0.025 255)",
    border: "1px solid oklch(0.30 0.02 255)",
    color: "oklch(0.94 0.008 78)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 200ms ease",
  };

  const labelStyle = {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.6rem",
    letterSpacing: "0.2em",
    color: "oklch(0.65 0.015 255)",
    display: "block" as const,
    marginBottom: "6px",
  };

  return (
    <div style={{ background: "oklch(0.12 0.025 255)", minHeight: "100vh" }}>
      {/* Page Hero */}
      <section
        id="contact-top"
        className="relative h-64 lg:h-72 flex items-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={MARINA_IMG}
            alt="Fort Lauderdale Marina"
            className="w-full h-full object-cover"
            style={{ opacity: 0.3 }}
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
          <span className="section-label">Get In Touch</span>
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
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact-details" className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div id="office" className="lg:col-span-1 space-y-8">
              <div>
                <span className="section-label">Our Office</span>
                <div className="gold-line mt-3 mb-5" />
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "2rem",
                    color: "oklch(0.94 0.008 78)",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  Fort Lauderdale
                  <br />
                  <em style={{ color: "oklch(0.72 0.12 78)" }}>Headquarters</em>
                </h2>
                <p
                  style={{
                    color: "oklch(0.60 0.015 255)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Located in the heart of Fort Lauderdale's marine district,
                  steps from Bahia Mar Marina and the Intracoastal Waterway.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "1 N. Ocean Blvd, Suite 200\nFort Lauderdale, FL 33316",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: CONTACT_PHONE,
                    href: CONTACT_PHONE_HREF,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: CONTACT_EMAIL,
                    href: `mailto:${CONTACT_EMAIL}`,
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value:
                      "Mon–Fri: 8am–6pm\nSat: 9am–4pm\nSun: By appointment",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div
                      className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "oklch(0.72 0.12 78 / 0.1)",
                        border: "1px solid oklch(0.72 0.12 78 / 0.3)",
                      }}
                    >
                      <Icon
                        size={14}
                        style={{ color: "oklch(0.72 0.12 78)" }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          color: "oklch(0.55 0.015 255)",
                          marginBottom: "3px",
                        }}
                      >
                        {label.toUpperCase()}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          style={{
                            color: "oklch(0.75 0.008 78)",
                            fontSize: "0.88rem",
                            fontFamily: "'DM Sans', sans-serif",
                            lineHeight: 1.5,
                          }}
                          className="hover:text-[oklch(0.72_0.12_78)] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          style={{
                            color: "oklch(0.75 0.008 78)",
                            fontSize: "0.88rem",
                            fontFamily: "'DM Sans', sans-serif",
                            lineHeight: 1.5,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Area */}
              <div
                className="p-5"
                style={{
                  background: "oklch(0.15 0.025 255)",
                  border: "1px solid oklch(0.72 0.12 78 / 0.2)",
                }}
              >
                <div className="section-label mb-3">Service Area</div>
                <div className="space-y-2">
                  {[
                    {
                      city: "Miami / Miami Beach",
                      county: "Miami-Dade County",
                    },
                    { city: "Fort Lauderdale", county: "Broward County (HQ)" },
                    {
                      city: "Boca Raton / Palm Beach",
                      county: "Palm Beach County",
                    },
                  ].map(area => (
                    <div key={area.city} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "oklch(0.72 0.12 78)" }}
                      />
                      <div>
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.82rem",
                            color: "oklch(0.75 0.008 78)",
                          }}
                        >
                          {area.city}
                        </span>
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.72rem",
                            color: "oklch(0.50 0.015 255)",
                            marginLeft: "6px",
                          }}
                        >
                          · {area.county}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div
                id="inquiry"
                className="p-8 lg:p-10"
                style={{
                  background: "oklch(0.15 0.025 255)",
                  border: "1px solid oklch(0.30 0.02 255)",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle
                      size={48}
                      style={{
                        color: "oklch(0.72 0.12 78)",
                        marginBottom: "1.5rem",
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        fontWeight: 300,
                        color: "oklch(0.94 0.008 78)",
                        marginBottom: "1rem",
                      }}
                    >
                      Thank You, {form.name.split(" ")[0]}
                    </h3>
                    <p
                      style={{
                        color: "oklch(0.60 0.015 255)",
                        fontSize: "0.9rem",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.7,
                        maxWidth: "400px",
                      }}
                    >
                      Your email draft has been prepared. Send it from your
                      email client and a member of our team will contact you to
                      discuss your needs.
                    </p>
                    <div className="gold-rule w-24 mt-6" />
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <span className="section-label">Inquiry Form</span>
                      <div className="gold-line mt-3 mb-4" />
                      <h2
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 300,
                          fontSize: "1.8rem",
                          color: "oklch(0.94 0.008 78)",
                        }}
                      >
                        Send Us a Message
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            style={inputStyle}
                            required
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            style={inputStyle}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(305) 000-0000"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Inquiry Type</label>
                          <select
                            name="inquiryType"
                            value={form.inquiryType}
                            onChange={handleChange}
                            style={{
                              ...inputStyle,
                              appearance: "none" as const,
                            }}
                          >
                            <option value="">Select inquiry type...</option>
                            {inquiryTypes.map(t => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>Budget Range</label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          style={{ ...inputStyle, appearance: "none" as const }}
                        >
                          <option value="">Select budget range...</option>
                          <option value="Under $500K">Under $500,000</option>
                          <option value="$500K–$1M">
                            $500,000 – $1,000,000
                          </option>
                          <option value="$1M–$5M">
                            $1,000,000 – $5,000,000
                          </option>
                          <option value="$5M–$15M">
                            $5,000,000 – $15,000,000
                          </option>
                          <option value="$15M+">$15,000,000+</option>
                          <option value="Selling">I am selling a vessel</option>
                        </select>
                      </div>

                      <div>
                        <label style={labelStyle}>Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Please describe your needs, vessel specifications, timeline, or any other details..."
                          rows={5}
                          style={{ ...inputStyle, resize: "vertical" as const }}
                          required
                        />
                      </div>

                      <div
                        className="p-4 text-sm"
                        style={{
                          background: "oklch(0.72 0.12 78 / 0.06)",
                          border: "1px solid oklch(0.72 0.12 78 / 0.2)",
                          color: "oklch(0.60 0.015 255)",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.78rem",
                          lineHeight: 1.6,
                        }}
                      >
                        All inquiries are handled with strict confidentiality.
                        We do not share your information with third parties.
                      </div>

                      <button
                        type="submit"
                        className="btn-press w-full py-4 flex items-center justify-center gap-2"
                        style={{
                          fontFamily: "'Cinzel', serif",
                          letterSpacing: "0.2em",
                          fontSize: "0.7rem",
                          background: "oklch(0.72 0.12 78)",
                          color: "oklch(0.12 0.025 255)",
                          fontWeight: 700,
                          border: "none",
                        }}
                      >
                        SUBMIT INQUIRY
                        <ArrowRight size={14} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="service-area"
        className="py-16"
        style={{
          background: "oklch(0.10 0.025 255)",
          borderTop: "1px solid oklch(0.30 0.02 255)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <span className="section-label">Find Us</span>
            <div className="gold-line mt-3 mb-4" />
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "2rem",
                color: "oklch(0.94 0.008 78)",
              }}
            >
              South Florida Service Area
            </h2>
          </div>

          {/* Map placeholder with styled overlay */}
          <div
            className="relative overflow-hidden"
            style={{
              height: "400px",
              border: "1px solid oklch(0.30 0.02 255)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57445.23!2d-80.1417!3d26.1224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9002f6e5f7b1d%3A0x3e2e5c4d8f1a2b3c!2sFort%20Lauderdale%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) saturate(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GreenStone Marine Location"
            />
            {/* Overlay badge */}
            <div
              className="absolute top-4 left-4 p-4"
              style={{
                background: "oklch(0.12 0.025 255 / 0.95)",
                border: "1px solid oklch(0.72 0.12 78 / 0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "oklch(0.72 0.12 78)",
                  marginBottom: "4px",
                }}
              >
                HEADQUARTERS
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  color: "oklch(0.94 0.008 78)",
                }}
              >
                Fort Lauderdale, FL
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "oklch(0.60 0.015 255)",
                }}
              >
                Serving Miami to Palm Beach
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
