import { ClipboardList, HardHat } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Gerencia de Proyectos",
    description:
      "Acompañamiento desde la concepción de la idea: esquemas preliminares, evaluación de materiales, presupuesto y WBS junto al cliente.",
  },
  {
    icon: HardHat,
    title: "Ejecución de Obras",
    description:
      "Planeamiento, ejecución y control de procesos constructivos para proyectos especiales en industria, minería, saneamiento, viales y edificaciones.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-section-gray">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestras{" "}
            <span className="text-primary">Líneas de Negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones integrales adaptadas a las necesidades
            específicas de cada proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-md card-hover border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  Más información
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
