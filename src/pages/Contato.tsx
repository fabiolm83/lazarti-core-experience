import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const Contato = () => {
  const { toast } = useToast();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Em breve um especialista Lazarti entrará em contato.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre a sua operação."
        description="Fale com um especialista Lazarti e receba um diagnóstico personalizado para o seu ambiente de TI."
        breadcrumb={[{ label: "Contato" }]}
      />
      <section className="py-20 lg:py-24 bg-gradient-subtle">
        <div className="container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy-950">Canais diretos</h2>
            <p className="mt-3 text-muted-foreground">Escolha o canal que preferir. Respondemos em horário comercial.</p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Telefone</div>
                  <div className="text-navy-950 font-medium">+55 (11) 4861-4030</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="text-navy-950 font-medium">+55 (11) 4861-4030</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</div>
                  <div className="text-navy-950 font-medium">contato@lazarti.com.br</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-navy-950 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Endereço</div>
                  <div className="text-navy-950 font-medium leading-relaxed">
                    R. Barão de Itapetininga, 273 - 4º Andar Sala C<br />República - São Paulo - SP - CEP: 01042-001
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-card space-y-5">
              <h2 className="font-display text-2xl font-bold text-navy-950">Solicite um diagnóstico</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" required placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" required placeholder="voce@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" required rows={5} placeholder="Conte um pouco sobre sua operação e necessidade..." />
              </div>
              <Button type="submit" size="lg" className="bg-gradient-accent text-white hover:opacity-95 rounded-full h-12 px-8 shadow-glow font-medium">
                Enviar Mensagem <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contato;
