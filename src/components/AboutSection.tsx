import { CheckCircle2, Briefcase, Users, Clock, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/ayc-office.png";

const features = [
  { icon: Briefcase, text: "Elaboración de expedientes técnicos y perfiles PIP" },
  { icon: Users, text: "Equipo multidisciplinario en 7 especialidades" },
  { icon: ShieldCheck, text: "Registrados en OSCE — capacidad de consorcio" },
  { icon: Clock, text: "Más de una década entregando obra a tiempo" },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-in-left">
            <span className="inline-block text-sm font-semibold text-accent-foreground bg-accent px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ingeniería local con{" "}
              <span className="text-primary">estándares de licitación</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Constructora A&amp;C — Consultoría y Construcción S.A.C. es una empresa peruana con
              más de 10 años acompañando a entidades públicas, empresas privadas y personas
              naturales en el ciclo completo de sus proyectos: desde el perfil y el expediente
              técnico hasta la ejecución y supervisión de obra. Operamos desde Chiclayo con
              alcance a todo el norte del país.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors group">
                  <div className="p-2 bg-accent/15 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <f.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <img src={aboutImage} alt="Oficina y equipamiento Constructora A&C" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
