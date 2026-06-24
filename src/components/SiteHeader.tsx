import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Página Inicial" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/diferenciais", label: "Diferenciais" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/ferramentas", label: "Ferramentas" },
  { to: "/contato", label: "Contato" },
];

export const SiteHeader = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/95 border-b border-border shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Lazarti - Soluções em Tecnologia" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9 text-sm text-navy-950/70">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors hover:text-navy-950 ${
                pathname === item.to ? "text-navy-950 font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden lg:inline-flex bg-gradient-accent text-white hover:opacity-95 font-medium rounded-full px-5 h-10">
            <Link to="/contato">Falar com Especialista</Link>
          </Button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-6 w-6 text-navy-950" /> : <Menu className="h-6 w-6 text-navy-950" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white/98 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-secondary hover:text-navy-950 ${
                  pathname === item.to ? "bg-secondary text-navy-950" : "text-navy-950/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 px-4">
              <Button asChild className="w-full bg-gradient-accent text-white hover:opacity-95 font-medium rounded-full h-11">
                <Link to="/contato" onClick={() => setMenuOpen(false)}>Falar com Especialista</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
