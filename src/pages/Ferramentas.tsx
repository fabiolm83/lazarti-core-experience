import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import partnerMilvus from "@/assets/partners/milvus.svg";

const tools = [
  {
    name: "TeamViewer",
    desc: "Acesso remoto seguro para suporte técnico. Clique para baixar a versão personalizada da Lazarti.",
    url: "https://get.teamviewer.com/v13/Lazarti_suporte",
    color: "from-blue-600 to-blue-800",
    border: "hover:border-blue-400",
    badge: "bg-blue-100 text-blue-700",
    logo: null,
    logoText: "TV",
    logoSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#0E8EE9"/>
      <circle cx="24" cy="24" r="14" fill="white"/>
      <path d="M17 24h14M24 17v14" stroke="#0E8EE9" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  {
    name: "AnyDesk",
    desc: "Ferramenta de acesso remoto leve e rápida. Ideal para suporte em conexões limitadas.",
    url: "https://anydesk.com/pt/downloads/thank-you?dv=win_exe",
    color: "from-red-500 to-red-700",
    border: "hover:border-red-400",
    badge: "bg-red-100 text-red-700",
    logo: null,
    logoText: "AD",
    logoSvg: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#EF0000"/>
      <path d="M14 32l10-16 10 16H14z" fill="white" opacity="0.9"/>
      <path d="M19 32l5-8 5 8" fill="#EF0000"/>
    </svg>`,
  },
  {
    name: "Milvus Agent",
    desc: "Agente de monitoramento Milvus. Instale nos dispositivos gerenciados pela Lazarti.",
    url: "https://s3-sa-east-1.amazonaws.com/milvus-publico/Setup_Milvus.exe",
    color: "from-cyan-500 to-cyan-700",
    border: "hover:border-cyan-400",
    badge: "bg-cyan-100 text-cyan-700",
    logo: partnerMilvus,
    logoText: "",
    logoSvg: null,
  },
];

const Ferramentas = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Ferramentas"
        title="Downloads e ferramentas de suporte."
        description="Links oficiais para as ferramentas utilizadas pela equipe Lazarti. Baixe e instale com segurança."
        breadcrumb={[{ label: "Ferramentas" }]}
      />

      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white rounded-2xl border border-border ${tool.border} shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden`}
              >
                {/* Header colorido */}
                <div className={`bg-gradient-to-br ${tool.color} p-8 flex items-center justify-center min-h-[140px]`}>
                  {tool.logo ? (
                    <img src={tool.logo} alt={tool.name} className="max-h-14 max-w-[160px] w-auto h-auto object-contain brightness-0 invert" />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: tool.logoSvg || "" }} className="h-16 w-16" />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-navy-950">{tool.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tool.badge}`}>Download</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{tool.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Baixar agora
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Aviso de segurança */}
          <div className="mt-12 max-w-5xl mx-auto bg-white rounded-2xl border border-border p-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-navy-950">Aviso de segurança</h4>
              <p className="mt-1 text-sm text-muted-foreground">Instale estas ferramentas <strong>somente quando solicitado</strong> por um técnico Lazarti. Nossa equipe nunca pedirá senhas ou dados bancários durante o suporte remoto.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageLayout>
  );
};

export default Ferramentas;
