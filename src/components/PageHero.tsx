import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export const PageHero = ({ eyebrow, title, description, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative py-20 lg:py-28 max-w-4xl">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            {breadcrumb.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
          {eyebrow}
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] text-balance">
          <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {description && (
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
