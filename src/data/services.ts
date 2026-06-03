import { Headphones, Briefcase, Network, Shield, Cloud, Activity, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  longDesc: string;
  benefits: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "terceirizacao-de-ti",
    icon: Headphones,
    title: "Terceirização de TI",
    desc: "Equipe técnica dedicada, SLA garantido e gestão completa do seu ambiente tecnológico.",
    longDesc:
      "Assuma o controle estratégico do seu negócio enquanto a Lazarti cuida de toda a operação de TI. Disponibilizamos uma equipe técnica certificada, processos maduros e SLAs corporativos para garantir continuidade, performance e previsibilidade de custos para o seu ambiente tecnológico.",
    benefits: [
      "Equipe técnica certificada e dedicada",
      "SLA corporativo com métricas claras",
      "Redução de custos operacionais",
      "Gestão proativa de incidentes",
      "Foco do seu time no core business",
    ],
  },
  {
    slug: "consultoria-estrategica",
    icon: Briefcase,
    title: "Consultoria Estratégica",
    desc: "Planejamento tecnológico alinhado aos objetivos de negócio e crescimento sustentável.",
    longDesc:
      "Conectamos tecnologia e estratégia de negócio. Nossa consultoria mapeia processos, identifica gargalos e desenha um roadmap tecnológico que sustenta crescimento, eficiência operacional e diferenciação competitiva.",
    benefits: [
      "Diagnóstico técnico e de negócio",
      "Roadmap tecnológico personalizado",
      "Governança e melhores práticas",
      "Análise de ROI em investimentos de TI",
      "Acompanhamento contínuo",
    ],
  },
  {
    slug: "infraestrutura-e-redes",
    icon: Network,
    title: "Infraestrutura e Redes",
    desc: "Projetos robustos de rede, servidores e estruturação de data centers corporativos.",
    longDesc:
      "Projetamos e implementamos infraestruturas de TI robustas, escaláveis e seguras. Do cabeamento estruturado à virtualização de servidores e redes de alta disponibilidade, entregamos a base tecnológica para uma operação confiável.",
    benefits: [
      "Projetos de rede com alta disponibilidade",
      "Virtualização e consolidação de servidores",
      "Cabeamento estruturado certificado",
      "Wi-Fi corporativo de alta densidade",
      "Documentação técnica completa",
    ],
  },
  {
    slug: "seguranca-da-informacao",
    icon: Shield,
    title: "Segurança da Informação",
    desc: "Proteção avançada contra ameaças, compliance e continuidade operacional.",
    longDesc:
      "Protegemos seus dados, sistemas e operações com camadas modernas de segurança. Implementamos firewalls de próxima geração, controle de acessos, backup, antivírus corporativo e políticas alinhadas à LGPD e melhores práticas internacionais.",
    benefits: [
      "Firewall de próxima geração (NGFW)",
      "Backup e disaster recovery",
      "Proteção contra ransomware",
      "Compliance com LGPD",
      "Resposta a incidentes",
    ],
  },
  {
    slug: "solucoes-em-cloud",
    icon: Cloud,
    title: "Soluções em Cloud",
    desc: "Migração, gestão e otimização de ambientes em nuvem AWS, Azure e Google Cloud.",
    longDesc:
      "Migramos, operamos e otimizamos ambientes em nuvem com performance enterprise. Trabalhamos com AWS, Microsoft Azure e Google Cloud, entregando arquiteturas resilientes, custos otimizados e governança completa.",
    benefits: [
      "Migração planejada com zero impacto",
      "Arquiteturas em AWS, Azure e GCP",
      "FinOps e otimização de custos",
      "Alta disponibilidade e escalabilidade",
      "Backup e DR em nuvem",
    ],
  },
  {
    slug: "monitoramento-24-7",
    icon: Activity,
    title: "Monitoramento 24/7",
    desc: "NOC próprio com dashboards em tempo real, alertas inteligentes e uptime garantido.",
    longDesc:
      "Operamos um NOC (Network Operations Center) próprio com monitoramento 24x7 do seu ambiente. Dashboards em tempo real, alertas inteligentes e resposta proativa garantem a máxima disponibilidade das suas operações críticas.",
    benefits: [
      "NOC operando 24x7x365",
      "Dashboards em tempo real",
      "Alertas inteligentes e proativos",
      "Métricas de uptime e performance",
      "Resposta rápida a incidentes",
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
