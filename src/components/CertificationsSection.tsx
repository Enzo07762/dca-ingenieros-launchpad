import { ShieldCheck, BadgeCheck, Award, FileBadge } from "lucide-react";

const badges = [
  { icon: BadgeCheck, title: "RNP — OSCE", subtitle: "Vigente", description: "Registro Nacional de Proveedores activo para contratación con el Estado." },
  { icon: ShieldCheck, title: "Consorciable", subtitle: "Capacidad legal", description: "Capacidad de consorciarnos con empresas pares para licitaciones de mayor envergadura." },
  { icon: Award, title: "+10 años", subtitle: "Trayectoria", description: "Década entregando obras públicas y privadas en el norte del Perú." },
  { icon: FileBadge, title: "PIP", subtitle: "Inversión pública", description: "Experiencia formulando y ejecutando Proyectos de Inversión Pública." },
];

export const CertificationsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="section-container relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em]">Respaldo</span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Listos para licitaciones <span className="text-accent">high ticket</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Cumplimos los requisitos formales y técnicos para postular y ejecutar contratos
            con entidades públicas y privadas en todo el país.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="group bg-primary-foreground/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/40 hover:bg-primary-foreground/[0.08] transition-all">
              <div className="inline-flex p-3 bg-accent rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <b.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-1">{b.title}</h3>
              <div className="inline-block px-2 py-0.5 bg-accent/15 rounded text-xs font-semibold text-accent mb-3">{b.subtitle}</div>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
