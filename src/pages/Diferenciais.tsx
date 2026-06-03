import { Users, TrendingUp, Lock, Gauge, Layers, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

const differentiators = [
  { icon: Users, title: "Atendimento consultivo", desc: "Especialistas com visão estratégica de negócio que entendem o seu contexto." },
  { icon: TrendingUp, title: "Redução de custos", desc: "Otimização operacional e eficiência comprovada com previsibilidade orçamentária." },
  { icon: Lock, title: "Segurança e continuidade", desc: "Operação estável, segura e em conformidade com as melhores práticas e LGPD." },
  { icon: Gauge, title: "Suporte ágil", desc: "Resposta rápida e personalizada com SLA garantido para cada cliente." },
  { icon: Layers, title: "Soluções escaláveis", desc: "Infraestrutura preparada para o seu crescimento sem retrabalho." },
  { icon: Sparkles, title: "Visão de negócio", desc: "Tecnologia como vetor real de resultados, não apenas custo operacional." },
];

const Diferenciais = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Diferenciais"
        title="Por que escolher a Lazarti?"
        description="Combinamos visão estratégica, execução técnica de alto nível e proximidade real com o cliente para entregar tecnologia que sustenta crescimento."
        breadcrumb={[{ label: "Diferenciais" }]}
      />
      <section className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative">
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
      <ContactCTA />
    </PageLayout>
  );
};

export default Diferenciais;
