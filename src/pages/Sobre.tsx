import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

const values = [
  { icon: Target, title: "Missão", desc: "Entregar soluções tecnológicas que gerem resultado real para nossos clientes, com qualidade enterprise, transparência e comprometimento.", color: "bg-blue-500" },
  { icon: Eye, title: "Visão", desc: "Ser referência nacional em gestão de TI para empresas que exigem alta disponibilidade, segurança e inovação contínua.", color: "bg-violet-500" },
  { icon: Heart, title: "Valores", desc: "Ética, excelência técnica, parceria estratégica, responsabilidade e foco absoluto no sucesso do cliente.", color: "bg-rose-500" },
];

const timeline = [
  { year: "2016", title: "Fundação", desc: "A Lazarti nasce em São Paulo com foco em suporte técnico e infraestrutura para pequenas e médias empresas." },
  { year: "2018", title: "Expansão cloud", desc: "Início das operações com AWS e Azure, acompanhando a migração do mercado para ambientes em nuvem." },
  { year: "2020", title: "NOC próprio", desc: "Inauguração do Network Operations Center próprio, com monitoramento 24/7 para todos os clientes." },
  { year: "2022", title: "Certificações", desc: "Equipe ampliada com especialistas certificados Microsoft, AWS, Cisco e Fortinet." },
  { year: "2024", title: "Digital Elevation", desc: "Novo posicionamento estratégico: tecnologia como vetor real de crescimento para empresas de todos os portes." },
];

const team = [
  { name: "Fábio Machado", role: "CEO & Fundador", initials: "FM", color: "from-blue-500 to-blue-700" },
  { name: "Equipe NOC", role: "Monitoramento 24/7", initials: "NOC", color: "from-violet-500 to-violet-700" },
  { name: "Suporte N2/N3", role: "Engenheiros Sênior", initials: "N3", color: "from-emerald-500 to-emerald-700" },
];

const Sobre = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Sobre a Lazarti"
        title="Tecnologia que sustenta negócios reais."
        description="Desde 2016, ajudamos empresas a operar com mais segurança, eficiência e previsibilidade tecnológica."
        breadcrumb={[{ label: "Sobre" }]}
      />

      {/* MISSÃO VISÃO VALORES */}
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                <div className={`h-12 w-12 rounded-xl ${color} flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-950">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-primary-glow">Nossa história</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-white text-balance">
              Quase uma década construindo confiança.
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{item.year}</div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Quem somos</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-navy-950 text-balance">
              Especialistas comprometidos com o seu negócio.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nossa equipe é formada por profissionais certificados com experiência em ambientes corporativos de alta demanda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 border border-border shadow-card text-center hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto`}>
                  {member.initials}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-950">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageLayout>
  );
};

export default Sobre;
