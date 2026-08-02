import { useLocation, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#050505] text-slate-100 selection:bg-[#00ff88] selection:text-black">
            <SEOHead 
                title="404 Page Not Found"
                description="The page you requested could not be found on Prime Tools Hub."
                noindex={true}
            />

            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500">404</span>
                        <div className="h-0.5 w-16 bg-emerald-500/30 mx-auto"></div>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold text-white">
                            Page Not Found
                        </h1>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            The requested page <span className="font-mono text-emerald-400">"/{pageName}"</span> does not exist or has been moved.
                        </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-4">
                        <Link 
                            to="/" 
                            className="inline-flex items-center px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-black bg-[#00ff88] rounded-xl hover:bg-[#00e077] transition-all duration-200 shadow-lg shadow-[#00ff88]/20"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}