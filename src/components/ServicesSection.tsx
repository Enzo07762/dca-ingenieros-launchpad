import {
  FileText, Map, Layers, Building2, Home, PencilRuler,
  ClipboardCheck, Wrench,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Formulación de Proyectos", description: "Expedientes técnicos, perfiles, fichas técnicas y trámites RNP / OSCE." },
  { icon: Map, title: "Topografía y Habilitaciones", description: "Levantamientos topográficos, estructuras metálicas, drywall y habilitaciones urbanas." },
  { icon: Building2, title: "Construcción Nueva", description: "Licencias, edificaciones nuevas, ampliaciones y remodelaciones a llave en mano." },
  { icon: Home, title: "Diseño Interior y Exterior", description: "Diseño arquitectónico de espacios interiores y exteriores con acabados de primera." },
  { icon: ClipboardCheck, title: "Supervisión e Inspección", description: "Supervisión de obras públicas y privadas en 7 especialidades, con informes técnicos." },
  { icon: Wrench, title: "Mantenimiento y Reforzamiento", description: "Mantenimiento, reforzamiento y reparación estructural de edificaciones existentes." },
  { icon: PencilRuler, title: "Planos a Detalle", description: "Elaboramos planos integrales para cada proyecto civil, arquitectónico y de instalaciones." },
  { icon: Layers, title: "Proyectos de Inversión Pública", description: "PIP, obras por encargo y consorcios con entidades del Estado peruano." },
];

// Rotating accent/primary visual treatments as the user scrolls
const variants = [
  { wrap: "bg-card border-border", iconBg: "bg-accent/15", iconText: "text-foreground" },
  { wrap: "bg-primary border-primary text-primary-foreground", iconBg: "bg-accent", iconText: "text-accent-foreground" },
  { wrap: "bg-accent border-accent text-accent-foreground", iconBg: "bg-primary", iconText: "text-accent" },
  { wrap: "bg-card border-border", iconBg: "bg-primary", iconText: "text-accent" },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-section-gray">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent-foreground bg-accent px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Líneas de Negocio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluciones integrales para{" "}
            <span className="text-primary">obra pública y privada</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseñamos, ejecutamos y supervisamos. Acompañamos a nuestros clientes desde el
            perfil del proyecto hasta la entrega final.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const v = variants[i % variants.length];
            return (
              <div
                key={s.title}
                className={`group rounded-2xl p-7 border shadow-sm card-hover ${v.wrap}`}
              >
                <div className={`p-3 rounded-xl w-fit mb-5 ${v.iconBg}`}>
                  <s.icon className={`h-7 w-7 ${v.iconText}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug">{s.title}</h3>
                <p className={`text-sm leading-relaxed ${v.wrap.includes("bg-card") ? "text-muted-foreground" : "opacity-90"}`}>
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
