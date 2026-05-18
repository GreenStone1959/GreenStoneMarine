import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 pt-28 pb-20"
      style={{ background: "oklch(0.12 0.025 255)" }}
    >
      <div className="max-w-xl text-center">
        <div className="flex justify-center mb-8">
          <div
            className="w-14 h-14 flex items-center justify-center border"
            style={{
              borderColor: "oklch(0.72 0.12 78 / 0.45)",
              background: "oklch(0.72 0.12 78 / 0.08)",
            }}
          >
            <AlertCircle size={24} style={{ color: "oklch(0.72 0.12 78)" }} />
          </div>
        </div>

        <span className="section-label">Page Not Found</span>
        <div className="gold-line mx-auto mt-3 mb-6" />

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(5rem, 16vw, 9rem)",
            lineHeight: 0.9,
            color: "oklch(0.94 0.008 78)",
            marginBottom: "1.5rem",
          }}
        >
          404
        </h1>

        <p
          style={{
            color: "oklch(0.65 0.015 255)",
            fontSize: "1rem",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            margin: "0 auto 2.25rem",
            maxWidth: "420px",
          }}
        >
          The page you are looking for does not exist, or it may have moved.
        </p>

        <button
          onClick={handleGoHome}
          className="btn-press inline-flex items-center justify-center gap-2 px-8 py-4"
          style={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.2em",
            fontSize: "0.7rem",
            background: "oklch(0.72 0.12 78)",
            color: "oklch(0.12 0.025 255)",
            fontWeight: 700,
          }}
        >
          <Home size={14} />
          RETURN HOME
        </button>
      </div>
    </div>
  );
}
