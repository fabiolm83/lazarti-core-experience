import { Building2, Store, Factory, Stethoscope, Layers, ClipboardList } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

const segments = [
  { icon: Building2, label: "Escritórios corporativos", desc: "Ambientes corporativos com alta exigência de produtividade e segurança." },
  { icon: Store, label: "Varejo e franquias", desc: "Operações multiloja com necessidade de padronização e disponibilidade." },
  { icon: Factory, label: "Indústrias", desc: "Chão de fábrica conectado, com redes industriais e alta resiliência." },
  { icon: Stethoscope, label: "Clínicas e saúde", desc: "Conformidade, proteção de dados sensíveis e continuidade do atendimento." },
  { icon: Layers, label: "Empresas multiunidade", desc: "Gestão centralizada para operações distribuídas em diversas unidades." },
  { icon: ClipboardList, label: "Operações administrativas", desc: "Backoffice eficiente com automações e infraestrutura confiável." },
];

const Segmentos = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Segmentos"
        title="Atendemos quem opera com responsabilidade."
        description="Empresas de diferentes setores confiam na Lazarti para sustentar suas operações críticas."
        breadcrumb={[{ label: "Segmentos" }]}
      />
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-gradient-accent transition-colors">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">{label}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </PageLayout>
  );
};

export default Segmentos;
