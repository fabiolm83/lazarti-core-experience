import heroImg from "@/assets/hero-tech.jpg";
import logo from "@/assets/logo.png";
import slideCloud from "@/assets/service-cloud.jpg";
import slideSecurity from "@/assets/service-security.jpg";
import slideSupport from "@/assets/service-support.jpg";
import slideMonitoring from "@/assets/service-monitoring.jpg";
import {
  Shield, Cloud, Network, Phone, Activity, Headphones, Briefcase,
  ArrowRight, Check, Building2, Store, Factory, Stethoscope,
  Layers, ClipboardList, Mail, MapPin, MessageCircle, Linkedin,
  Instagram, Sparkles, Gauge, Lock, TrendingUp, Users, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    image: slideCloud,
    eyebrow: "Cloud Computing",
    title: "Sua infraestrutura na nuvem, com performance enterprise.",
    desc: "Migração, gestão e otimização em AWS, Azure e Google Cloud com alta disponibilidade.",
  },
  {
    image: slideSecurity,
    eyebrow: "Segurança da Informação",
    title: "Proteção avançada para dados e operações críticas.",
    desc: "Defesa contra ameaças, compliance e continuidade operacional com camadas de segurança modernas.",
  },
  {
    image: slideSupport,
    eyebrow: "Terceirização de TI",
    title: "Equipe técnica dedicada com SLA garantido.",
    desc: "Suporte especializado, monitoramento 24/7 e gestão completa do seu ambiente tecnológico.",
  },
  {
    image: slideMonitoring,
    eyebrow: "Monitoramento 24/7",
    title: "Visibilidade total do seu ambiente, a toda hora.",
    desc: "NOC próprio com dashboards em tempo real, alertas inteligentes e resposta proativa para máxima uptime.",
  },
];

const services = [
  { icon: Headphones, title: "Terceirização de TI", desc: "Equipe técnica dedicada, SLA garantido e gestão completa do seu ambiente tecnológico." },
  { icon: Briefcase, title: "Consultoria Estratégica", desc: "Planejamento tecnológico alinhado aos objetivos de negócio e crescimento sustentável." },
  { icon: Network, title: "Infraestrutura e Redes", desc: "Projetos robustos de rede, servidores e estruturação de data centers corporativos." },
  { icon: Shield, title: "Segurança da Informação", desc: "Proteção avançada contra ameaças, compliance e continuidade operacional." },
  { icon: Cloud, title: "Soluções em Cloud", desc: "Migração, gestão e otimização de ambientes em nuvem AWS, Azure e Google Cloud." },
  { icon: Activity, title: "Monitoramento 24/7", desc: "NOC próprio com dashboards em tempo real, alertas inteligentes e uptime garantido." },
];

const differentiators = [
  { icon: Users, title: "Atendimento consultivo", desc: "Especialistas com visão estratégica de negócio." },
  { icon: TrendingUp, title: "Redução de custos", desc: "Otimização operacional e eficiência comprovada." },
  { icon: Lock, title: "Segurança e continuidade", desc: "Operação estável, segura e em conformidade." },
  { icon: Gauge, title: "Suporte ágil", desc: "Resposta rápida e personalizada para cada cliente." },
  { icon: Layers, title: "Soluções escaláveis", desc: "Infraestrutura preparada para o seu crescimento." },
  { icon: Sparkles, title: "Visão de negócio", desc: "Tecnologia como vetor real de resultados." },
];

const segments = [
  { icon: Building2, label: "Escritórios corporativos" },
  { icon: Store, label: "Varejo e franquias" },
  { icon: Factory, label: "Indústrias" },
  { icon: Stethoscope, label: "Clínicas e saúde" },
  { icon: Layers, label: "Empresas multiunidade" },
  { icon: ClipboardList, label: "Operações administrativas" },
];

const testimonials = [
  { quote: "A Lazarti transformou nossa operação de TI. Hoje temos previsibilidade, segurança e suporte que realmente entende o negócio.", author: "Carla Mendes", role: "Diretora de Operações, Grupo Vértice" },
  { quote: "Migramos toda nossa infraestrutura para a cloud com zero impacto. Profissionalismo enterprise do começo ao fim.", author: "Rodrigo Almeida", role: "CTO, Industrial Pacific" },
  { quote: "Parceria estratégica de verdade. A consultoria deles redefiniu nossa estrutura tecnológica em 6 meses.", author: "Fernanda Lopes", role: "CEO, RedeSaúde+" },
];

import partnerMicrosoft from "@/assets/partners/microsoft.svg";
import partnerAws from "@/assets/partners/aws.svg";
import partnerGoogleCloud from "@/assets/partners/googlecloud.svg";
import partnerCisco from "@/assets/partners/cisco.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";
import partnerVmware from "@/assets/partners/vmware.svg";
import partnerVeeam from "@/assets/partners/veeam.svg";
import partnerSophos from "@/assets/partners/sophos.png";
import partnerAhsay from "@/assets/partners/ahsay.png";
import partnerDell from "@/assets/partners/dell.svg";
import partnerLenovo from "@/assets/partners/lenovo.svg";
import partnerMikrotik from "@/assets/partners/mikrotik.svg";
import partnerMilvus from "@/assets/partners/milvus.svg";
import partnerZabbix from "@/assets/partners/zabbix.svg";
import partnerHp from "@/assets/partners/hp.svg";

const partners = [
  { name: "Microsoft", logo: partnerMicrosoft },
  { name: "AWS", logo: partnerAws },
  { name: "Google Cloud", logo: partnerGoogleCloud },
  { name: "Cisco", logo: partnerCisco },
  { name: "Fortinet", logo: partnerFortinet },
  { name: "VMware", logo: partnerVmware },
  { name: "Veeam", logo: partnerVeeam },
  { name: "Sophos", logo: partnerSophos },
  { name: "Ahsay Backup", logo: partnerAhsay },
  { name: "Dell", logo: partnerDell },
  { name: "Lenovo", logo: partnerLenovo },
  { name: "Mikrotik", logo: partnerMikrotik },
  { name: "Milvus", logo: partnerMilvus },
  { name: "Zabbix", logo: partnerZabbix },
  { name: "HP", logo: partnerHp },
];

const HeroCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5500, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ loop: true }}
        className="relative"
      >
        <CarouselContent>
          {heroSlides.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="container relative grid lg:grid-cols-12 gap-12 items-center pt-12 pb-20 lg:pt-24 lg:pb-28 min-h-[600px] lg:min-h-[680px]">
                <div className="lg:col-span-7 animate-fade-up">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                    {slide.eyebrow}
                  </div>
                  <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] text-balance">
                    <span className="bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  <p className="mt-7 text-lg text-white/70 max-w-2xl leading-relaxed">{slide.desc}</p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-gradient-accent text-white hover:opacity-95 rounded-full h-13 px-7 shadow-glow font-medium">
                      <a href="#contato">Solicitar Diagnóstico <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-7 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-medium">
                      <a href="#servicos">Ver Soluções</a>
                    </Button>
                  </div>
                  <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/50">
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-glow" /> SLA corporativo</span>
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-glow" /> Monitoramento 24/7</span>
                    <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-glow" /> Especialistas certificados</span>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-white/10 aspect-[4/3]">
                    <img src={slide.image} alt={slide.eyebrow} width={1280} height={960} loading={i === 0 ? "eager" : "lazy"} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/70 via-navy-950/20 to-transparent" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-primary-glow" : "w-2 bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-navy-950/70 border-b border-white/5">
        <div className="container flex h-20 items-center justify-between border-none">
          <a href="#" className="flex items-center">
            <div className="bg-white rounded-lg px-3 py-1.5 shadow-glow">
              <img src={logo} alt="Lazarti - Soluções em Tecnologia" className="h-8 w-auto" />
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-sm text-white/70">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#segmentos" className="hover:text-white transition-colors">Segmentos</a>
            <a href="#parceiros" className="hover:text-white transition-colors">Parceiros</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>
          <Button asChild className="bg-white text-navy-950 hover:bg-white/90 font-medium rounded-full px-5 h-10">
            <a href="#contato">Falar com Especialista</a>
          </Button>
        </div>
      </header>

      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* AUTHORITY */}
      <section className="border-y border-border bg-white">
        <div className="container py-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { k: "+8", l: "Anos de mercado" },
            { k: "24/7", l: "Monitoramento contínuo" },
            { k: "100%", l: "Atendimento especializado" },
            { k: "98+", l: "Projetos personalizados" },
          ].map((s) => (
            <div key={s.l} className="text-center lg:text-left">
              <div className="font-display text-4xl lg:text-5xl font-bold text-navy-950">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 lg:py-32 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Serviços</div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-navy-950 text-balance">
              Soluções completas para a sua operação tecnológica.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cobertura ponta a ponta com expertise enterprise — do suporte ao planejamento estratégico.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                <div className="h-12 w-12 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-gradient-accent transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-950">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section id="diferenciais" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Diferenciais</div>
              <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-white text-balance">
                Por que escolher a Lazarti?
              </h2>
            </div>
            <p className="text-lg text-white/60 max-w-xl">
              Combinamos visão estratégica, execução técnica de alto nível e proximidade real com o cliente
              para entregar tecnologia que sustenta crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-navy-950 p-8 lg:p-10 hover:bg-navy-900 transition-colors">
                <Icon className="h-7 w-7 text-primary-glow" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section id="segmentos" className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Segmentos</div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-navy-950 text-balance">
              Atendemos quem opera com responsabilidade.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Empresas de diferentes setores confiam na Lazarti para sustentar suas operações críticas.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {segments.map(({ icon: Icon, label }) => (
              <div key={label} className="group flex flex-col items-center text-center p-6 rounded-xl border border-border hover:border-accent hover:shadow-card transition-all bg-white">
                <Icon className="h-8 w-8 text-navy-950 group-hover:text-accent transition-colors" strokeWidth={1.5} />
                <div className="mt-4 text-sm font-medium text-navy-950">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Clientes</div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-navy-950 text-balance">
              A confiança de quem opera no alto nível.
            </h2>
          </div>
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-card flex flex-col">
                <div className="text-5xl font-display text-accent leading-none">"</div>
                <blockquote className="mt-2 text-navy-950 leading-relaxed flex-1">{t.quote}</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-semibold text-navy-950">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="parceiros" className="py-20 border-y border-border">
        <div className="container">
          <div className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Parceiros e tecnologias
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 items-center">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center h-16 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-10 max-w-[140px] w-auto h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container relative text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Sua operação precisa de uma TI mais{" "}
            <span className="bg-gradient-to-r from-primary-glow to-blue-300 bg-clip-text text-transparent">
              estratégica, segura e eficiente.
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Converse com um especialista Lazarti e receba um diagnóstico personalizado da sua operação.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-accent text-white hover:opacity-95 rounded-full h-13 px-8 shadow-glow font-medium">
              <a href="#">Solicitar uma Proposta <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-8 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-medium">
              <a href="#">Falar no WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
            <div className="lg:col-span-2">
              <div className="font-display font-semibold text-white mb-4 text-sm">Soluções</div>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white">Terceirização TI</a></li>
                <li><a href="#" className="hover:text-white">Cloud</a></li>
                <li><a href="#" className="hover:text-white">Segurança</a></li>
                <li><a href="#" className="hover:text-white">Monitoramento 24/7</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <div className="font-display font-semibold text-white mb-4 text-sm">Empresa</div>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Cases</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div className="lg:col-span-4">
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
    </div>
  );
};

export default Index;
