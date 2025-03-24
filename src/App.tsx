
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import TermsPage from "./pages/TermsPage";
import VerificationPage from "./pages/VerificationPage";
import EligibilityPage from "./pages/EligibilityPage";
import Dashboard from "./pages/Dashboard";
import ApplicationStartPage from "./pages/ApplicationStartPage";
import BankDetailsPage from "./pages/BankDetailsPage";
import FinancingTermsPage from "./pages/FinancingTermsPage";
import ApplicationSummaryPage from "./pages/ApplicationSummaryPage";
import ApplicationConfirmationPage from "./pages/ApplicationConfirmationPage";
import ApplicationTrackingPage from "./pages/ApplicationTrackingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application-start" element={<ApplicationStartPage />} />
          <Route path="/bank-details" element={<BankDetailsPage />} />
          <Route path="/financing-terms" element={<FinancingTermsPage />} />
          <Route path="/application-summary" element={<ApplicationSummaryPage />} />
          <Route path="/application-confirmation" element={<ApplicationConfirmationPage />} />
          <Route path="/application-tracking" element={<ApplicationTrackingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
