import { useState } from "react";
import { Users, TrendingUp, Lock, Gauge, Layers, Sparkles, Plus, Minus } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

const differentiators = [
  {
    icon: Users,
    title: "Atendimento consultivo",
    desc: "Especialistas com visão estratégica de negócio que entendem o seu contexto.",
    detail: "Não somos apenas um suporte técnico — somos parceiros de negócio. Nossa equipe analisa o seu ambiente, entende os seus processos e propõe soluções alinhadas aos seus objetivos. Cada recomendação é feita com base na realidade da sua empresa, não em modelos genéricos.",
    color: "bg-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Redução de custos",
    desc: "Otimização operacional e eficiência comprovada com previsibilidade orçamentária.",
    detail: "Identificamos desperdícios, eliminamos redundâncias e estruturamos sua infraestrutura para operar com o máximo de eficiência. Com contratos claros e previsíveis, você tem controle total sobre os custos de TI e evita surpresas no orçamento.",
    color: "bg-emerald-500",
  },
  {
    icon: Lock,
    title: "Segurança e continuidade",
    desc: "Operação estável, segura e em conformidade com as melhores práticas e LGPD.",
    detail: "Sua operação não pode parar. Implementamos camadas de proteção, políticas de backup, controle de acessos e monitoramento contínuo para garantir a disponibilidade dos seus sistemas — e a conformidade com a legislação vigente.",
    color: "bg-violet-500",
  },
  {
    icon: Gauge,
    title: "Suporte ágil",
    desc: "Resposta rápida e personalizada com SLA garantido para cada cliente.",
    detail: "Quando algo acontece, você não fica na fila. Nosso time responde com agilidade e resolve com precisão, seguindo os acordos de nível de serviço definidos para o seu contrato. Atendimento humano, técnico e sem enrolação.",
    color: "bg-orange-500",
  },
  {
    icon: Layers,
    title: "Soluções escaláveis",
    desc: "Infraestrutura preparada para o seu crescimento sem retrabalho.",
    detail: "Planejamos sua infraestrutura pensando no hoje e no amanhã. À medida que sua empresa cresce, os sistemas acompanham — sem a necessidade de reconstruir do zero. Tecnologia que evolui com o seu negócio, de forma estruturada e segura.",
    color: "bg-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Visão de negócio",
    desc: "Tecnologia como vetor real de resultados, não apenas custo operacional.",
    detail: "Enxergamos TI como alavanca estratégica. Cada decisão técnica é orientada por impacto real no seu negócio — produtividade, competitividade e crescimento. Porque tecnologia bem aplicada não é despesa, é investimento com retorno mensurável.",
    color: "bg-rose-500",
  },
];

const DiferencialCard = ({ icon: Icon, title, desc, detail, color }: typeof differentiators[0]) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer relative rounded-2xl border border-border shadow-card overflow-hidden min-h-[220px] transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
    >
      {/* Frente */}
      <div className={`absolute inset-0 p-8 bg-white flex flex-col transition-all duration-500 ${flipped ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
        <div className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-navy-950">{title}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed flex-1">{desc}</p>
        <div className="mt-4 text-xs text-accent flex items-center gap-1 font-medium">
          <Plus className="h-3 w-3" /> clique para saber mais
        </div>
      </div>
      {/* Verso */}
      <div className={`absolute inset-0 p-8 bg-navy-950 flex flex-col transition-all duration-500 ${flipped ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-white/80 leading-relaxed text-sm flex-1">{detail}</p>
        <div className="mt-4 text-xs text-primary-glow flex items-center gap-1 font-medium">
          <Minus className="h-3 w-3" /> clique para fechar
        </div>
      </div>
    </div>
  );
};

const Diferenciais = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Diferenciais"
        title="Por que escolher a Lazarti?"
        description="Combinamos visão estratégica, execução técnica de alto nível e proximidade real com o cliente para entregar tecnologia que sustenta crescimento."
        breadcrumb={[{ label: "Diferenciais" }]}
      />
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d) => (
              <DiferencialCard key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </PageLayout>
  );
};

export default Diferenciais;
