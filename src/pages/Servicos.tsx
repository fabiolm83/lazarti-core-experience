import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import { services } from "@/data/services";

const Servicos = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Serviços"
        title="Soluções completas para a sua operação tecnológica."
        description="Cobertura ponta a ponta com expertise enterprise — do suporte ao planejamento estratégico."
        breadcrumb={[{ label: "Serviços" }]}
      />
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, slug }) => (
              <Link
                key={slug}
                to={`/servicos/${slug}`}
                className="group relative bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-gradient-accent transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-950">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-accent">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </PageLayout>
  );
};

export default Servicos;
