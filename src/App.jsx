import { useState, useEffect, Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import StartupIntro from './components/StartupIntro';
import PageTransition from './components/PageTransition';
import Home from '@/pages/Home';
import ErrorBoundary from '@/components/ErrorBoundary';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { LanguageProvider } from '@/context/LanguageContext';

const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Reviews = lazy(() => import('@/pages/Reviews'));
const HtmlSitemap = lazy(() => import('@/pages/HtmlSitemap'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('@/pages/RefundPolicy'));
const DisclaimerPage = lazy(() => import('@/pages/DisclaimerPage'));
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'));
const AcceptableUse = lazy(() => import('@/pages/AcceptableUse'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const ComparePage = lazy(() => import('@/pages/ComparePage'));
const TrackOrderPage = lazy(() => import('@/pages/TrackOrderPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const CitySeoPage = lazy(() => import('@/pages/CitySeoPage'));

const AuthenticatedApp = ({ isLoaded }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home isLoaded={isLoaded} />
            </PageTransition>
          }
        />
        <Route
          path="/lahore"
          element={
            <PageTransition>
              <CitySeoPage />
            </PageTransition>
          }
        />
        <Route
          path="/karachi"
          element={
            <PageTransition>
              <CitySeoPage />
            </PageTransition>
          }
        />
        <Route
          path="/islamabad"
          element={
            <PageTransition>
              <CitySeoPage />
            </PageTransition>
          }
        />
        <Route
          path="/faisalabad"
          element={
            <PageTransition>
              <CitySeoPage />
            </PageTransition>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageTransition>
              <ProductDetail />
            </PageTransition>
          }
        />
        <Route
          path="/reviews"
          element={
            <PageTransition>
              <Reviews />
            </PageTransition>
          }
        />
        <Route
          path="/html-sitemap"
          element={
            <PageTransition>
              <HtmlSitemap />
            </PageTransition>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <PageTransition>
              <TermsOfService />
            </PageTransition>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <PageTransition>
              <RefundPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <PageTransition>
              <DisclaimerPage />
            </PageTransition>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <PageTransition>
              <CookiePolicy />
            </PageTransition>
          }
        />
        <Route
          path="/acceptable-use"
          element={
            <PageTransition>
              <AcceptableUse />
            </PageTransition>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <PageTransition>
              <HowItWorksPage />
            </PageTransition>
          }
        />
        <Route
          path="/faq"
          element={
            <PageTransition>
              <FaqPage />
            </PageTransition>
          }
        />
        <Route
          path="/compare"
          element={
            <PageTransition>
              <ComparePage />
            </PageTransition>
          }
        />
        <Route
          path="/track-order"
          element={
            <PageTransition>
              <TrackOrderPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <PageNotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Suppress unexpected automatic PWA install prompts (Fix #7)
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <CurrencyProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClientInstance}>
              <StartupIntro onComplete={() => setIsLoaded(true)} />
              <Router>
                <ScrollToTop />
                <Suspense fallback={
                  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                    <div className="w-10 h-10 border-t-2 border-violet-500 rounded-full animate-spin" />
                  </div>
                }>
                  <AuthenticatedApp isLoaded={isLoaded} />
                </Suspense>
              </Router>
              <Toaster />
            </QueryClientProvider>
          </AuthProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;