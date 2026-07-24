import { useState, Suspense, lazy } from 'react';
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

const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Reviews = lazy(() => import('@/pages/Reviews'));

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

  return (
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
  )
}

export default App