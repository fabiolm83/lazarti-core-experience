import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/servicos", label: "Serviços" },
  { to: "/diferenciais", label: "Diferenciais" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/contato", label: "Contato" },
];

export const SiteHeader = () => {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/95 border-b border-border shadow-sm">
      <div className="container flex h-20 items-center justify-between border-none">
        <Link to="/" className="flex items-center">
          <div className="bg-white rounded-lg px-3 py-1.5 shadow-elegant border border-border">
            <img src={logo} alt="Lazarti - Soluções em Tecnologia" className="h-10 w-auto" />
          </div>
        </Link>
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
        <Button asChild className="bg-gradient-accent text-white hover:opacity-95 font-medium rounded-full px-5 h-10">
          <Link to="/contato">Falar com Especialista</Link>
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
