import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LgpdBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("lgpd-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-navy-950 border-t border-white/10 shadow-elegant">
      <div className="container py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
          Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar navegando, você concorda com nossa{" "}
          <Link to="/sobre" className="text-primary-glow underline underline-offset-2 hover:text-white transition-colors">
            Política de Privacidade
          </Link>{" "}
          em conformidade com a LGPD.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button
            onClick={accept}
            size="sm"
            className="bg-gradient-accent text-white hover:opacity-95 rounded-full px-5 font-medium"
          >
            Aceitar
          </Button>
          <button onClick={accept} className="text-white/40 hover:text-white transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LgpdBanner;
