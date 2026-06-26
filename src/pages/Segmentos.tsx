import { Building2, Store, Factory, Stethoscope, Layers, ClipboardList, Scale, ShoppingBag, Heart, Home, Key } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

const segments = [
  { icon: Building2, label: "Escritórios corporativos", desc: "Ambientes corporativos com alta exigência de produtividade e segurança.", color: "bg-blue-500", hover: "group-hover:border-blue-300" },
  { icon: Store, label: "Varejo e franquias", desc: "Operações multiloja com necessidade de padronização e disponibilidade.", color: "bg-violet-500", hover: "group-hover:border-violet-300" },
  { icon: Factory, label: "Indústrias", desc: "Chão de fábrica conectado, com redes industriais e alta resiliência.", color: "bg-orange-500", hover: "group-hover:border-orange-300" },
  { icon: Stethoscope, label: "Clínicas e saúde", desc: "Conformidade, proteção de dados sensíveis e continuidade do atendimento.", color: "bg-emerald-500", hover: "group-hover:border-emerald-300" },
  { icon: Layers, label: "Empresas multiunidade", desc: "Gestão centralizada para operações distribuídas em diversas unidades.", color: "bg-cyan-500", hover: "group-hover:border-cyan-300" },
  { icon: ClipboardList, label: "Operações administrativas", desc: "Backoffice eficiente com automações e infraestrutura confiável.", color: "bg-rose-500", hover: "group-hover:border-rose-300" },
  { icon: Building2, label: "Construtoras e incorporadoras", desc: "Conectividade em canteiros e escritórios com segurança de dados de projetos.", color: "bg-amber-500", hover: "group-hover:border-amber-300" },
  { icon: Scale, label: "Escritórios de Advocacia", desc: "Proteção de dados sigilosos, LGPD e alta disponibilidade para documentos críticos.", color: "bg-indigo-500", hover: "group-hover:border-indigo-300" },
  { icon: ShoppingBag, label: "Shoppings e administradoras", desc: "Infraestrutura robusta para ambientes de alto fluxo e múltiplos lojistas.", color: "bg-pink-500", hover: "group-hover:border-pink-300" },
  { icon: Heart, label: "ONGs", desc: "Soluções acessíveis para organizações do terceiro setor com foco em impacto social.", color: "bg-red-500", hover: "group-hover:border-red-300" },
  { icon: Home, label: "Imobiliárias", desc: "Sistemas integrados, conectividade e suporte para operações de vendas e locação.", color: "bg-teal-500", hover: "group-hover:border-teal-300" },
  { icon: Key, label: "Administradoras de Condomínios", desc: "Redes, câmeras, controle de acesso e suporte técnico para condomínios residenciais e comerciais.", color: "bg-lime-600", hover: "group-hover:border-lime-300" },
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
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map(({ icon: Icon, label, desc, color, hover }) => (
              <div key={label} className={`group bg-white rounded-2xl p-8 border border-border ${hover} shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all`}>
                <div className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center`}>
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
