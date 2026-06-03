import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { services } from "@/data/services";

export const SiteFooter = () => {
  return (
    <footer className="bg-navy-950 text-white/70 pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center bg-white rounded-lg px-3 py-1.5">
              <img src={logo} alt="Lazarti - Soluções em Tecnologia" className="h-9 w-auto" />
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Soluções em Tecnologia e Telecom para empresas que exigem performance, segurança e continuidade operacional.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="font-display font-semibold text-white mb-4 text-sm">Soluções</div>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicos/${s.slug}`} className="hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="font-display font-semibold text-white mb-4 text-sm">Empresa</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/diferenciais" className="hover:text-white">Diferenciais</Link></li>
              <li><Link to="/segmentos" className="hover:text-white">Segmentos</Link></li>
              <li><Link to="/parceiros" className="hover:text-white">Parceiros</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="font-display font-semibold text-white mb-4 text-sm">Contato</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> +55 (11) 4861-4030</li>
              <li className="flex items-start gap-3"><MessageCircle className="h-4 w-4 mt-0.5 text-primary-glow" /> WhatsApp: +55 (11) 4861-4030</li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /> contato@lazarti.com.br</li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /> R. Barão de Itapetininga, 273 - 4º Andar Sala C República - São Paulo - SP - Cep: 01042-001</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Lazarti Soluções em Tecnologia e Telecom. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
