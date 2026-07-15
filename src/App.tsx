import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { CookieConsent } from "@/components/shared/CookieConsent";
import Index from "./pages/Index";
import Vision from "./pages/Vision";
import Werk from "./pages/Werk";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Message from "./pages/Message";
import Prijzen from "./pages/Prijzen";
import Hosting from "./pages/Hosting";
import Privacy from "./pages/Privacy";
import Voorwaarden from "./pages/Voorwaarden";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
