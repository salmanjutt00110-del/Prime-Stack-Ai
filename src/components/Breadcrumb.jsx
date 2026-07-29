import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-400 font-body">
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
            title="Prime Tools Hub Home"
          >
            <Home size={14} className="text-purple-400" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((it, idx) => (
          <li key={it.name} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-slate-600 shrink-0" />
            {idx === items.length - 1 ? (
              <span className="text-slate-200 font-semibold truncate max-w-[240px] sm:max-w-[400px]">
                {it.name}
              </span>
            ) : (
              <Link to={it.url} className="hover:text-white transition-colors">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
