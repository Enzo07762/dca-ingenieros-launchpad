import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  FileText, Map, Layers, Building2, Home, PencilRuler,
  ClipboardCheck, Wrench, Settings, ArrowRight, CheckCircle,
  HardHat, HeadphonesIcon, Store, Factory,
} from "lucide-react";
import serviciosHero from "@/assets/ayc-hero-bg.jpg";

const services = [
  { icon: FileText, secondaryIcon: PencilRuler, title: "Formulación de Proyectos", description: "Expedientes técnicos, perfiles, fichas técnicas y trámites RNP / OSCE para entidades públicas y privadas." },
  { icon: Map, secondaryIcon: Layers, title: "Topografía y Habilitaciones", description: "Levantamientos, drywall, estructuras metálicas y de madera, habilitaciones urbanas integrales." },
  { icon: Building2, secondaryIcon: HardHat, title: "Construcción y Remodelación", description: "Licencias, construcción nueva, ampliaciones y remodelaciones de edificaciones llave en mano." },
  { icon: Home, secondaryIcon: PencilRuler, title: "Diseño Interior y Exterior", description: "Diseño arquitectónico de espacios interiores y exteriores con acabados premium." },
  { icon: ClipboardCheck, secondaryIcon: CheckCircle, title: "Supervisión e Inspección", description: "Supervisión de obras públicas y privadas en 7 especialidades, con cuadernos de obra e informes técnicos." },
  { icon: Wrench, secondaryIcon: HardHat, title: "Mantenimiento y Reforzamiento", description: "Mantenimiento, reforzamiento y reparación estructural en edificaciones existentes." },
];

const tech = [
  {
    id: "civil",
    title: "Obras Civiles e Infraestructura",
    items: ["Cimentaciones y zapatas", "Estructuras de concreto armado", "Muros de contención y cercos perimétricos", "Habilitaciones urbanas", "Movimiento de tierras y pavimentación"],
  },
  {
    id: "arq",
    title: "Arquitectura y Acabados",
    items: ["Drywall y cielos rasos", "Pintura industrial y decorativa", "Porcelanatos, cerámicos y carpintería", "Mamparas y vidrios templados", "Diseño interior y exterior"],
  },
  {
    id: "inst",
    title: "Instalaciones y Especialidades",
    items: ["Instalaciones eléctricas y sanitarias", "Estructuras metálicas y de madera", "Sistemas de saneamiento y agua potable", "Pozos a tierra certificados", "Sistemas contra incendios"],
  },
];

const processSteps = [
  { number: "01", title: "Diagnóstico", description: "Evaluación técnica del sitio y necesidades del cliente.", icon: ClipboardCheck },
  { number: "02", title: "Expediente", description: "Diseño, planos, metrados y presupuesto certificado.", icon: FileText },
  { number: "03", title: "Ejecución", description: "Obra bajo estándares de calidad, seguridad y plazos.", icon: HardHat },
  { number: "04", title: "Entrega y Soporte", description: "Liquidación, garantía y mantenimiento posterior.", icon: HeadphonesIcon },
];

const sectors = [
  { icon: Building2, label: "Entidades Públicas", description: "Municipalidades, GORE, ministerios" },
  { icon: Factory, label: "Empresas Privadas", description: "Industria, agroindustria, retail" },
  { icon: Store, label: "Personas Naturales", description: "Viviendas, locales comerciales" },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const card = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } } };

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[50vh] flex items-center pt-20 bg-primary-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${serviciosHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/70" />

        <div className="section-container relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 backdrop-blur-sm border border-accent/30 rounded-full mb-6 text-sm font-medium text-primary-foreground">
              <Settings className="w-4 h-4 text-accent" />
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Soluciones integrales
              <br />
              <span className="text-accent">de ingeniería civil.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl">
              Ejecución <strong className="text-primary-foreground">"llave en mano"</strong>, consultoría y supervisión
              para obras públicas, privadas y proyectos de inversión.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main services */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-foreground bg-accent px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider mb-4 inline-block">Lo que hacemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Líneas de Negocio</h2>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const dark = i % 2 === 1;
              return (
                <motion.div
                  key={s.title}
                  variants={card}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`group relative rounded-2xl p-8 border transition-all duration-300 cursor-pointer overflow-hidden ${
                    dark ? "bg-primary border-primary text-primary-foreground hover:border-accent" : "bg-card border-border hover:border-accent hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-accent rounded-xl">
                      <s.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className={`p-2 rounded-lg ${dark ? "bg-primary-light" : "bg-secondary"}`}>
                      <s.secondaryIcon className={`w-4 h-4 ${dark ? "text-accent" : "text-foreground"}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug">{s.title}</h3>
                  <p className={`leading-relaxed text-sm ${dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technical accordion */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent-foreground bg-accent px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider mb-4 inline-block">Especialidades</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Desglose técnico por especialidad</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Operamos en <strong className="text-foreground">7 especialidades</strong> entre obra civil, arquitectura e
                instalaciones, con equipos colegiados en cada disciplina.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-foreground mb-1">+80</p>
                  <p className="text-sm text-muted-foreground">Proyectos</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-foreground mb-1">+10</p>
                  <p className="text-sm text-muted-foreground">Años</p>
                </div>
                <div className="text-center p-4 bg-primary rounded-xl">
                  <p className="text-3xl font-bold text-accent mb-1">7</p>
                  <p className="text-sm text-primary-foreground/80">Especialidades</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
              <Accordion type="single" collapsible className="w-full">
                {tech.map((d) => (
                  <AccordionItem key={d.id} value={d.id} className="border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent py-5">{d.title}</AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <ul className="space-y-3">
                        {d.items.map((it) => (
                          <li key={it} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-foreground bg-accent px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider mb-4 inline-block">Metodología</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestro Proceso de Trabajo</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {processSteps.map((step, i) => (
                <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-secondary border-2 border-border group-hover:border-accent transition-colors mb-6">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">{step.number}</div>
                    <step.icon className="w-10 h-10 text-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-6 translate-x-1/2">
                      <ArrowRight className="w-5 h-5 text-border" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Alcance</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">A quiénes atendemos</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {sectors.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/[0.05] backdrop-blur-sm rounded-2xl border border-primary-foreground/10 min-w-[180px] hover:border-accent/40 transition-colors">
                  <div className="p-4 bg-accent rounded-xl">
                    <s.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <p className="text-lg font-bold text-primary-foreground">{s.label}</p>
                  <p className="text-xs text-primary-foreground/65 text-center">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-10 md:p-16 border border-border shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Solicite una visita técnica</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Evaluamos su proyecto en sitio y entregamos una <strong className="text-foreground">propuesta personalizada sin compromiso</strong>.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-base rounded-xl shadow-lg">
              Contactar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
