import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { getServiceBySlug, services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/servicos" replace />;

  const { icon: Icon, title, longDesc, benefits } = service;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Serviço"
        title={title}
        description={longDesc}
        breadcrumb={[{ label: "Serviços", to: "/servicos" }, { label: title }]}
      />
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-card">
              <div className="h-16 w-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="mt-6 font-display text-2xl lg:text-3xl font-bold text-navy-950">
                Como a Lazarti entrega {title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{longDesc}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Atuamos como uma extensão estratégica do seu time, combinando especialistas certificados,
                processos maduros e tecnologia de ponta para sustentar a continuidade e a evolução do seu negócio.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-navy-950 rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-glow">Benefícios</div>
                <h3 className="mt-3 font-display text-2xl font-bold">O que você ganha</h3>
                <ul className="mt-6 space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/85">
                      <span className="mt-1 h-5 w-5 rounded-full bg-gradient-accent flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 w-full bg-gradient-accent text-white hover:opacity-95 rounded-full h-12 font-medium">
                  <Link to="/contato">Falar com Especialista <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-accent">Outros serviços</div>
              <h2 className="mt-2 font-display text-2xl lg:text-3xl font-bold text-navy-950">Continue explorando</h2>
            </div>
            <Link to="/servicos" className="inline-flex items-center text-sm font-medium text-navy-950 hover:text-accent transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Serviços
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map(({ slug: s, title: t, desc, icon: I }) => (
              <Link key={s} to={`/servicos/${s}`} className="group bg-white rounded-2xl p-7 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-11 w-11 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-gradient-accent transition-colors">
                  <I className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetail;
