import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Reviews = lazy(() => import('@/pages/Reviews'));

const AuthenticatedApp = () => {
  // Render the main app directly without Base44 auth checks
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <Suspense fallback={
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
              <div className="w-10 h-10 border-t-2 border-violet-500 rounded-full animate-spin" />
            </div>
          }>
            <AuthenticatedApp />
          </Suspense>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App