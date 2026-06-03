import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="container relative text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white text-balance leading-tight">
          Pronto para uma TI mais{" "}
          <span className="bg-gradient-to-r from-primary-glow to-blue-300 bg-clip-text text-transparent">
            estratégica e segura?
          </span>
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Converse com um especialista Lazarti e receba um diagnóstico personalizado.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-accent text-white hover:opacity-95 rounded-full h-13 px-8 shadow-glow font-medium">
            <Link to="/contato">Falar com Especialista <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
