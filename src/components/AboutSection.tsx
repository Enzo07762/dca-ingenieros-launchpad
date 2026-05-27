import { CheckCircle2, Briefcase, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const features = [
  {
    icon: Briefcase,
    text: "Oficina de Gestión de Proyectos (PMO) propia",
  },
  {
    icon: Users,
    text: "Equipo técnico altamente calificado en obra",
  },
  {
    icon: Clock,
    text: "Trayectoria comprobada desde 1994",
  },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Una constructora con{" "}
              <span className="text-primary">prestigio y propósito</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sevilla|Rodríguez Development es una empresa peruana de construcción
              fundada en marzo de 1994. Edificamos obras de diseño único en sectores
              como comercio, salud, educación, infraestructura deportiva, vivienda y,
              especialmente, plantas industriales para producción y almacenamiento.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Equipo de ingenieros en reunión de planificación"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">30+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de Experiencia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
