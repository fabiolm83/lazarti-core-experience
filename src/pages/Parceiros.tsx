import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import partnerMicrosoft from "@/assets/partners/microsoft.svg";
import partnerAws from "@/assets/partners/aws.svg";
import partnerGoogleCloud from "@/assets/partners/googlecloud.svg";
import partnerCisco from "@/assets/partners/cisco.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";
import partnerVmware from "@/assets/partners/vmware.svg";
import partnerVeeam from "@/assets/partners/veeam.svg";
import partnerSophos from "@/assets/partners/sophos.png";
import partnerAhsay from "@/assets/partners/ahsay.png";
import partnerDell from "@/assets/partners/dell.svg";
import partnerLenovo from "@/assets/partners/lenovo.svg";
import partnerMikrotik from "@/assets/partners/mikrotik.svg";
import partnerMilvus from "@/assets/partners/milvus.svg";
import partnerZabbix from "@/assets/partners/zabbix.svg";
import partnerHp from "@/assets/partners/hp.svg";

const partners = [
  { name: "Microsoft", logo: partnerMicrosoft, url: "https://microsoft.com" },
  { name: "AWS", logo: partnerAws, url: "https://aws.amazon.com" },
  { name: "Google Cloud", logo: partnerGoogleCloud, url: "https://cloud.google.com" },
  { name: "Cisco", logo: partnerCisco, url: "https://cisco.com" },
  { name: "Fortinet", logo: partnerFortinet, url: "https://fortinet.com" },
  { name: "VMware", logo: partnerVmware, url: "https://vmware.com" },
  { name: "Veeam", logo: partnerVeeam, url: "https://veeam.com" },
  { name: "Sophos", logo: partnerSophos, url: "https://sophos.com" },
  { name: "Ahsay Backup", logo: partnerAhsay, url: "https://ahsay.com" },
  { name: "Dell", logo: partnerDell, url: "https://dell.com" },
  { name: "Lenovo", logo: partnerLenovo, url: "https://lenovo.com" },
  { name: "Mikrotik", logo: partnerMikrotik, url: "https://mikrotik.com" },
  { name: "Milvus", logo: partnerMilvus, url: "https://milvus.com.br" },
  { name: "Zabbix", logo: partnerZabbix, url: "https://zabbix.com" },
  { name: "HP", logo: partnerHp, url: "https://hp.com" },
];

const Parceiros = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Parceiros e tecnologias"
        title="Tecnologia de ponta com parceiros líderes globais."
        description="Trabalhamos com as principais marcas e plataformas do mercado para entregar soluções enterprise certificadas."
        breadcrumb={[{ label: "Parceiros" }]}
      />
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-border shadow-card p-6 flex flex-col items-center justify-center gap-4 hover:shadow-elegant hover:-translate-y-1 hover:border-accent transition-all"
              >
                <div className="h-16 flex items-center justify-center">
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-12 max-w-[140px] w-auto h-auto object-contain" />
                </div>
                <div className="text-xs font-medium text-muted-foreground text-center">{p.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </PageLayout>
  );
};

export default Parceiros;
