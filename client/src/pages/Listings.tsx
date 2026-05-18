/**
 * LISTINGS PAGE — Nautical Noir Design System
 * Filterable vessel inventory with rich cards
 */
import { useEffect, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  MapPin,
  Ruler,
  Zap,
  Calendar,
} from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-marina-night-F8jqijuVdANGBVLvPj5ocq.webp";
const TENDER_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/tender-boat-SCBBvdKJ5bdyakWSsiN3Aa.webp";
const SHIP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/commercial-ship-U3tVh5caiDG9FEVk6ogU7g.webp";
const SEAPLANE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/seaplane-bahamas-YqWgSXsMhpYKXnWaJZfrsm.webp";
const HERO_YACHT =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/hero-superyacht-WsNegnX7xPUAEJvvkpUX9b.webp";
const INTERIOR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/94639188/UKpchEQotAqkrf88vZ55AY/yacht-interior-salon-fS9XPZaqyjN2yB9p4x88kz.webp";

// Unsplash images for variety
const YACHT2 =
  "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80";
const YACHT3 =
  "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80";
const YACHT4 =
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80";

type Category = "All" | "Yacht" | "Commercial" | "Tender" | "Seaplane";

const listings = [
  {
    id: 1,
    category: "Yacht" as Category,
    name: "M/Y AZURE HORIZON",
    builder: "Feadship",
    year: 2021,
    length: "148 ft",
    price: "$18,500,000",
    location: "Fort Lauderdale, FL",
    engines: "2 × MTU 16V 4000",
    speed: "16 knots",
    img: HERO_YACHT,
    tag: "FEATURED",
    desc: "Immaculate 2021 Feadship with full refit in 2023. 5 staterooms, beach club, helipad. Asking below market.",
  },
  {
    id: 2,
    category: "Yacht" as Category,
    name: "M/Y SOUTHERN STAR",
    builder: "Westport",
    year: 2019,
    length: "112 ft",
    price: "$8,750,000",
    location: "Miami Beach, FL",
    engines: "2 × MTU 12V 4000",
    speed: "22 knots",
    img: YACHT2,
    tag: "NEW LISTING",
    desc: "2019 Westport W112 in exceptional condition. 4 staterooms, Jacuzzi, full crew quarters. Low hours.",
  },
  {
    id: 3,
    category: "Yacht" as Category,
    name: "M/Y PALM ROYALE",
    builder: "Benetti",
    year: 2018,
    length: "95 ft",
    price: "$5,200,000",
    location: "Palm Beach, FL",
    engines: "2 × CAT C32",
    speed: "18 knots",
    img: INTERIOR_IMG,
    tag: null,
    desc: "2018 Benetti Classic 95 with stunning interior by Francois Zuretti. 4 cabins, full beam master.",
  },
  {
    id: 4,
    category: "Yacht" as Category,
    name: "M/Y BISCAYNE BLUE",
    builder: "Viking",
    year: 2022,
    length: "72 ft",
    price: "$3,100,000",
    location: "Boca Raton, FL",
    engines: "2 × MAN V12",
    speed: "30 knots",
    img: YACHT3,
    tag: "PRICE REDUCED",
    desc: "2022 Viking 72 Convertible. Tournament-ready sportfisher with luxurious accommodations. 3 staterooms.",
  },
  {
    id: 5,
    category: "Commercial" as Category,
    name: "M/V ATLANTIC TRADER",
    builder: "Damen",
    year: 2017,
    length: "285 ft",
    price: "$12,400,000",
    location: "Port Everglades, FL",
    engines: "2 × Wärtsilä 6L26",
    speed: "14 knots",
    img: SHIP_IMG,
    tag: "COMMERCIAL",
    desc: "2017 Damen general cargo vessel. 8,500 DWT. Excellent class status, full ISM compliance. Ready for immediate operation.",
  },
  {
    id: 6,
    category: "Tender" as Category,
    name: "SHADOW RUNNER",
    builder: "Pascoe",
    year: 2023,
    length: "38 ft",
    price: "$485,000",
    location: "Fort Lauderdale, FL",
    engines: "2 × Volvo IPS 600",
    speed: "42 knots",
    img: TENDER_IMG,
    tag: "NEW",
    desc: "2023 Pascoe 38 Superyacht Tender. Carbon fiber construction, custom livery available. Ideal for 100ft+ superyachts.",
  },
  {
    id: 7,
    category: "Seaplane" as Category,
    name: "ISLAND HOPPER",
    builder: "Cessna",
    year: 2015,
    length: "28 ft",
    price: "$620,000",
    location: "Watson Island, Miami",
    engines: "1 × Continental IO-520",
    speed: "148 knots",
    img: SEAPLANE_IMG,
    tag: "RARE",
    desc: "2015 Cessna 172 Amphibian. 1,200 total hours. Ideal for Bahamas island-hopping or charter operations. All logs available.",
  },
  {
    id: 8,
    category: "Yacht" as Category,
    name: "M/Y SEA DUCHESS",
    builder: "Azimut",
    year: 2020,
    length: "65 ft",
    price: "$1,850,000",
    location: "Aventura, FL",
    engines: "2 × Volvo IPS 1200",
    speed: "28 knots",
    img: YACHT4,
    tag: null,
    desc: "2020 Azimut Grande 65. 3 staterooms, beach platform, Seakeeper gyro. Turnkey condition with all equipment.",
  },
];

const categories: Category[] = [
  "All",
  "Yacht",
  "Commercial",
  "Tender",
  "Seaplane",
];

function isCategory(value: string | null): value is Category {
  return value !== null && categories.includes(value as Category);
}

function getCategoryHref(category: Category) {
  return category === "All"
    ? "/listings#inventory"
    : `/listings?category=${encodeURIComponent(category)}#inventory`;
}

export default function Listings() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(search);
    const category = params.get("category");
    setActiveCategory(isCategory(category) ? category : "All");
  }, [search]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    navigate(getCategoryHref(category));
  };

  const filtered = listings.filter(l => {
    const matchCat = activeCategory === "All" || l.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.builder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: "oklch(0.12 0.025 255)", minHeight: "100vh" }}>
      {/* Page Hero */}
      <section
        id="listings-top"
        className="relative h-64 lg:h-80 flex items-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Fort Lauderdale Marina"
            className="w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.12 0.025 255) 0%, oklch(0.12 0.025 255 / 0.6) 60%, oklch(0.12 0.025 255 / 0.3) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-10">
          <span className="section-label">Current Inventory</span>
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
            Available Listings
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section
        id="listing-filters"
        style={{
          background: "oklch(0.15 0.025 255)",
          borderBottom: "1px solid oklch(0.30 0.02 255)",
          position: "sticky",
          top: "80px",
          zIndex: 30,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="btn-press px-5 py-2 transition-all duration-200"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    background:
                      activeCategory === cat
                        ? "oklch(0.72 0.12 78)"
                        : "transparent",
                    color:
                      activeCategory === cat
                        ? "oklch(0.12 0.025 255)"
                        : "oklch(0.65 0.015 255)",
                    border:
                      activeCategory === cat
                        ? "1px solid oklch(0.72 0.12 78)"
                        : "1px solid oklch(0.30 0.02 255)",
                    fontWeight: activeCategory === cat ? 700 : 400,
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "oklch(0.60 0.015 255)" }}
              />
              <input
                type="text"
                placeholder="Search by name, builder, location..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm w-72 outline-none"
                style={{
                  background: "oklch(0.12 0.025 255)",
                  border: "1px solid oklch(0.30 0.02 255)",
                  color: "oklch(0.94 0.008 78)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section id="inventory" className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <SlidersHorizontal
                size={40}
                style={{
                  color: "oklch(0.72 0.12 78 / 0.4)",
                  margin: "0 auto 1rem",
                }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  color: "oklch(0.65 0.015 255)",
                }}
              >
                No listings match your criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(listing => (
                <div
                  key={listing.id}
                  className="vessel-card gold-border-card overflow-hidden flex flex-col"
                  style={{ background: "oklch(0.15 0.025 255)" }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "220px" }}
                  >
                    <img
                      src={listing.img}
                      alt={listing.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Tag */}
                    {listing.tag && (
                      <div
                        className="absolute top-4 left-4 px-3 py-1"
                        style={{
                          background:
                            listing.tag === "FEATURED" ||
                            listing.tag === "NEW LISTING"
                              ? "oklch(0.72 0.12 78)"
                              : listing.tag === "PRICE REDUCED"
                                ? "oklch(0.577 0.245 27.325)"
                                : "oklch(0.12 0.025 255 / 0.85)",
                          color:
                            listing.tag === "FEATURED" ||
                            listing.tag === "NEW LISTING"
                              ? "oklch(0.12 0.025 255)"
                              : "oklch(0.94 0.008 78)",
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          fontWeight: 700,
                        }}
                      >
                        {listing.tag}
                      </div>
                    )}
                    {/* Category badge */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1"
                      style={{
                        background: "oklch(0.12 0.025 255 / 0.85)",
                        border: "1px solid oklch(0.72 0.12 78 / 0.4)",
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.5rem",
                        letterSpacing: "0.2em",
                        color: "oklch(0.72 0.12 78)",
                      }}
                    >
                      {listing.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-1">
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.2em",
                          color: "oklch(0.60 0.015 255)",
                        }}
                      >
                        {listing.builder} · {listing.year}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        fontSize: "1.4rem",
                        color: "oklch(0.94 0.008 78)",
                        letterSpacing: "0.02em",
                        marginBottom: "8px",
                      }}
                    >
                      {listing.name}
                    </h3>
                    <p
                      style={{
                        color: "oklch(0.60 0.015 255)",
                        fontSize: "0.82rem",
                        lineHeight: 1.65,
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: "1rem",
                        flex: 1,
                      }}
                    >
                      {listing.desc}
                    </p>

                    {/* Specs row */}
                    <div
                      className="grid grid-cols-3 gap-2 py-3 mb-4"
                      style={{ borderTop: "1px solid oklch(0.30 0.02 255)" }}
                    >
                      {[
                        { icon: Ruler, value: listing.length },
                        { icon: Zap, value: listing.speed },
                        { icon: Calendar, value: String(listing.year) },
                      ].map(({ icon: Icon, value }) => (
                        <div key={value} className="flex items-center gap-1.5">
                          <Icon
                            size={11}
                            style={{ color: "oklch(0.72 0.12 78)" }}
                          />
                          <span
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: "0.75rem",
                              color: "oklch(0.70 0.015 255)",
                            }}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Location + Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin
                          size={11}
                          style={{ color: "oklch(0.72 0.12 78)" }}
                        />
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.75rem",
                            color: "oklch(0.60 0.015 255)",
                          }}
                        >
                          {listing.location}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          fontSize: "1.2rem",
                          color: "oklch(0.72 0.12 78)",
                        }}
                      >
                        {listing.price}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/contact?inquiry=General%20Inquiry&listing=${encodeURIComponent(listing.name)}#inquiry`}
                    >
                      <button
                        className="btn-press w-full py-3 flex items-center justify-center gap-2 transition-all duration-200"
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.2em",
                          background: "oklch(0.72 0.12 78 / 0.1)",
                          color: "oklch(0.72 0.12 78)",
                          border: "1px solid oklch(0.72 0.12 78 / 0.4)",
                          fontWeight: 600,
                        }}
                      >
                        REQUEST INFORMATION
                        <ArrowRight size={12} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div
            className="text-center mt-16 pt-12"
            style={{ borderTop: "1px solid oklch(0.30 0.02 255)" }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.3rem",
                color: "oklch(0.65 0.015 255)",
                marginBottom: "1.5rem",
              }}
            >
              Don't see what you're looking for?
            </p>
            <Link href="/contact?inquiry=Buying%20a%20Yacht#inquiry">
              <button
                className="btn-press px-8 py-4 flex items-center gap-2 mx-auto"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  background: "oklch(0.72 0.12 78)",
                  color: "oklch(0.12 0.025 255)",
                  fontWeight: 700,
                }}
              >
                CONTACT US FOR PRIVATE LISTINGS
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
