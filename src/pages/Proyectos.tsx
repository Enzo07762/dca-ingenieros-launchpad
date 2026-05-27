import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Factory, Building2, Route, Droplets, Trophy } from "lucide-react";
import proyectosHero from "@/assets/proyectos-hero.jpg";
import catMineria from "@/assets/cat-mineria.jpg";
import catIndustria from "@/assets/cat-industria.jpg";
import catEdificaciones from "@/assets/cat-edificaciones.jpg";
import catViales from "@/assets/cat-viales.jpg";
import catSaneamiento from "@/assets/cat-saneamiento.jpg";
import catDeportiva from "@/assets/cat-deportiva.jpg";

type Project = { title: string; image: string };
type Category = {
  id: string;
  title: string;
  icon: typeof Mountain;
  intro: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    id: "mineria",
    title: "Obras para la minería",
    icon: Mountain,
    intro: "Infraestructura especializada para operaciones mineras en zonas altoandinas, con altos estándares de seguridad y logística.",
    projects: [
      { title: "Podios de edificios PB/ZN/CU, Plantas de cal y reactivos.", image: catMineria },
      { title: "Muro de contención del depósito de relaves, Río San Juan.", image: catMineria },
      { title: "Soporte de Línea de agua a Molinos Koppers y Dominion.", image: catMineria },
    ],
  },
  {
    id: "industria",
    title: "Obras para la industria",
    icon: Factory,
    intro: "Plantas industriales, talleres y movimiento de tierras para procesos productivos y de almacenamiento.",
    projects: [
      { title: "Remodelación y ampliación de talleres inmobiliaria CDR.", image: catIndustria },
      { title: "Movimiento de Tierras y Obras Civiles PureBiofuels del Perú SAC — Callao.", image: catIndustria },
      { title: "Construcción de tanques de almacenamiento PureBiofuels — Callao.", image: catIndustria },
      { title: "Construcción de sala de prueba de motores 6,000 HP.", image: catIndustria },
      { title: "Construcción de almacenes EFCO del Perú INC — Chilca, Lima.", image: catIndustria },
      { title: "Plantas de bloques de concreto — UNACEM, Cajamarquilla, Lima.", image: catIndustria },
    ],
  },
  {
    id: "edificaciones",
    title: "Edificaciones especiales",
    icon: Building2,
    intro: "Diseño y construcción de edificios singulares para investigación, control sanitario y desarrollo institucional.",
    projects: [
      { title: "Puestos de control Cuarentenario — SENASA/PRODESA, La Libertad, Ancash, Junín y Lima — Callao.", image: catEdificaciones },
      { title: "Centro de Investigaciones Acuícolas Alexander Von Humboldt — IMARPE, Callao.", image: catEdificaciones },
      { title: "Laboratorio CEDAP — PEPSICO, Manchay Bajo, Pachacámac.", image: catEdificaciones },
    ],
  },
  {
    id: "viales",
    title: "Obras viales",
    icon: Route,
    intro: "Vías de acceso, habilitaciones urbanas y pavimentación para parques industriales y conectividad regional.",
    projects: [
      { title: "Vía de acceso a Pucusana — Inversiones El Pino, Lima.", image: catViales },
      { title: "Habilitación Urbana INDUPARK — Chilca, Parque Ecológico Indupark.", image: catViales },
      { title: "Conformación de plataformas y pavimentación local — AmBev, Huachipa.", image: catViales },
    ],
  },
  {
    id: "saneamiento",
    title: "Obras de saneamiento",
    icon: Droplets,
    intro: "Redes de agua potable, alcantarillado y sistemas industriales de tratamiento de efluentes.",
    projects: [
      { title: "Mejoramiento del sistema de agua potable y alcantarillado de Santiago de Chuco, I Etapa.", image: catSaneamiento },
      { title: "Sustitución de redes industriales y cloacales — emisario de efluentes tratados.", image: catSaneamiento },
      { title: "Obras generales de agua potable y alcantarillado — Oquendo, Santa Rosa y El Naranjal, SMP y Callao.", image: catSaneamiento },
    ],
  },
  {
    id: "deportiva",
    title: "Infraestructura deportiva",
    icon: Trophy,
    intro: "Estadios, coliseos y complejos deportivos públicos y privados a lo largo del país.",
    projects: [
      { title: 'Construcción del Coliseo Cerrado del Complejo Deportivo "Fortunato Marota".', image: catDeportiva },
      { title: 'Construcción del Estadio del Colegio "San José de Jauja", Junín.', image: catDeportiva },
      { title: "Remodelación del Estadio Municipal de Barranco.", image: catDeportiva },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const Proyectos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={proyectosHero} alt="Obras de construcción Sevilla Rodríguez" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>

        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full mb-6 text-sm font-medium text-primary-foreground">
              <Building2 className="w-4 h-4" />
              Portafolio de Obras
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Proyectos que respaldan
              <br />
              <span className="text-accent-light">nuestra trayectoria.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Más de 30 años edificando obras de diseño único en comercio, salud, educación, infraestructura deportiva, vivienda y plantas industriales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Sticky Nav */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="section-container py-4 overflow-x-auto">
          <div className="flex items-center gap-2 md:gap-3 min-w-max">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors border border-border whitespace-nowrap"
              >
                <c.icon className="w-4 h-4" />
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-padding scroll-mt-32 ${idx % 2 === 0 ? "bg-background" : "bg-section-gray"}`}
        >
          <div className="section-container">
            <div className="flex items-start gap-4 mb-10 border-l-4 border-primary pl-5">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">Categoría</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{cat.title}</h2>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">{cat.intro}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.projects.map((p, i) => (
                <motion.article
                  key={p.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <p className="text-foreground font-medium leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ¿Tiene un proyecto especial en mente?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Conversemos sobre cómo Sevilla|Rodríguez puede ejecutar su próxima obra con la calidad técnica que su negocio requiere.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-lg">
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyectos;