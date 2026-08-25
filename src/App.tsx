import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { CookieConsent } from "@/components/shared/CookieConsent";
import Index from "./pages/Index";

// Alle overige pagina's worden pas geladen wanneer ze bezocht worden
const Vision = lazy(() => import("./pages/Vision"));
const Werk = lazy(() => import("./pages/Werk"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Message = lazy(() => import("./pages/Message"));
const Prijzen = lazy(() => import("./pages/Prijzen"));
const Hosting = lazy(() => import("./pages/Hosting"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Voorwaarden = lazy(() => import("./pages/Voorwaarden"));
const SeoHaarlem = lazy(() => import("./pages/SeoHaarlem"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Primary NL routes */}
            <Route path="/werk" element={<Werk />} />
            <Route path="/werkwijze" element={<Vision />} />
            <Route path="/prijzen" element={<Prijzen />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/over-mij" element={<About />} />
            <Route path="/contact" element={<Message />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacybeleid" element={<Privacy />} />
            <Route path="/voorwaarden" element={<Voorwaarden />} />
            <Route path="/seo-haarlem" element={<SeoHaarlem />} />

            {/* Backwards-compatible redirects from old paths */}
            <Route path="/vision" element={<Navigate to="/werkwijze" replace />} />
            <Route path="/diensten" element={<Navigate to="/werk" replace />} />
            <Route path="/services" element={<Navigate to="/werk" replace />} />
            <Route path="/about" element={<Navigate to="/over-mij" replace />} />
            <Route path="/partnerships" element={<Navigate to="/werk" replace />} />
            <Route path="/message" element={<Navigate to="/contact" replace />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
