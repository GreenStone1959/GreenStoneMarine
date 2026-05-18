import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ScrollToTarget() {
  useEffect(() => {
    let frame = 0;

    const scrollToCurrentTarget = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          const hash = decodeURIComponent(
            window.location.hash.replace(/^#/, "")
          );
          const target = hash ? document.getElementById(hash) : null;

          if (target) {
            target.scrollIntoView({ block: "start" });
            return;
          }

          window.scrollTo({ left: 0, top: 0 });
        });
      });
    };

    const events = ["hashchange", "popstate", "pushState", "replaceState"];
    events.forEach(event =>
      window.addEventListener(event, scrollToCurrentTarget)
    );
    scrollToCurrentTarget();

    return () => {
      window.cancelAnimationFrame(frame);
      events.forEach(event =>
        window.removeEventListener(event, scrollToCurrentTarget)
      );
    };
  }, []);

  return null;
}

function Router() {
  return (
    <>
      <Navbar />
      <ScrollToTarget />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/listings" component={Listings} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
