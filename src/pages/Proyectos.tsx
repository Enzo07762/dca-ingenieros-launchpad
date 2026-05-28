import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Hammer, PaintRoller, Droplets, ClipboardCheck, Home } from "lucide-react";
import proyectosHero from "@/assets/ayc-hero-bg.jpg";
import imgEdif from "@/assets/ayc-proj-edif.png";
import imgMuros from "@/assets/ayc-proj-muros.png";
import imgSan from "@/assets/ayc-proj-saneamiento.png";
import imgRemodel from "@/assets/ayc-proj-remodel.jpg";
import imgInterior from "@/assets/ayc-proj-interior.jpg";
import imgSup from "@/assets/ayc-proj-supervision.jpg";

type Project = { title: string; image: string; location: string };
type Category = { id: string; title: string; icon: typeof Building2; intro: string; projects: Project[] };

const categories: Category[] = [
  {
    id: "edificaciones",
    title: "Construcción Nueva",
    icon: Building2,
    intro: "Edificaciones de uso público, comercial y residencial con concreto armado y estructura metálica.",
    projects: [
      { title: "Edificio multifamiliar 5 niveles — Urb. Patazca", image: imgEdif, location: "Chiclayo, Lambayeque" },
      { title: "Local institucional — Municipalidad Distrital", image: imgEdif, location: "Ferreñafe, Lambayeque" },
      { title: "Casco estructural agroindustrial", image: imgEdif, location: "Lambayeque, Lambayeque" },
    ],
  },
  {
    id: "remodelacion",
    title: "Remodelación y Ampliación",
    icon: Hammer,
    intro: "Adecuación, ampliación y modernización de edificaciones existentes manteniendo la operación del cliente.",
    projects: [
      { title: "Ampliación de local comercial — 2 niveles", image: imgRemodel, location: "Chiclayo Centro" },
      { title: "Remodelación de oficinas corporativas", image: imgRemodel, location: "Chiclayo, Lambayeque" },
      { title: "Adecuación de planta de procesos agroindustriales", image: imgRemodel, location: "Olmos, Lambayeque" },
    ],
  },
  {
    id: "muros",
    title: "Cercos y Obras Perimétricas",
    icon: PaintRoller,
    intro: "Cercos perimétricos, muros de contención y acabados exteriores para predios públicos y privados.",
    projects: [
      { title: "Cerco perimétrico de I.E. — 1,200 ml", image: imgMuros, location: "José Leonardo Ortiz" },
      { title: "Muro de contención y vereda — habilitación urbana", image: imgMuros, location: "La Victoria, Chiclayo" },
      { title: "Mantenimiento de fachada institucional", image: imgMuros, location: "Pimentel, Lambayeque" },
    ],
  },
  {
    id: "saneamiento",
    title: "Saneamiento y Habilitaciones",
    icon: Droplets,
    intro: "Redes de agua potable, alcantarillado y habilitaciones urbanas para municipios y entidades.",
    projects: [
      { title: "Ampliación de redes de alcantarillado — I Etapa", image: imgSan, location: "Tumán, Chiclayo" },
      { title: "Conexiones domiciliarias de agua potable", image: imgSan, location: "Reque, Chiclayo" },
      { title: "Habilitación urbana — pavimentación y drenaje", image: imgSan, location: "Pomalca, Chiclayo" },
    ],
  },
  {
    id: "interior",
    title: "Diseño Interior y Exterior",
    icon: Home,
    intro: "Proyectos arquitectónicos con énfasis en confort, identidad de marca y acabados premium.",
    projects: [
      { title: "Oficinas corporativas — diseño integral", image: imgInterior, location: "Chiclayo, Lambayeque" },
      { title: "Showroom comercial — fit out llave en mano", image: imgInterior, location: "Real Plaza Chiclayo" },
      { title: "Vivienda residencial — diseño exterior", image: imgInterior, location: "Pimentel, Lambayeque" },
    ],
  },
  {
    id: "supervision",
    title: "Supervisión e Inspección",
    icon: ClipboardCheck,
    intro: "Supervisión técnica integral en 7 especialidades para obras públicas y privadas.",
    projects: [
      { title: "Supervisión de obra vial — pavimento rígido", image: imgSup, location: "Chongoyape, Chiclayo" },
      { title: "Inspección de obras de saneamiento rural", image: imgSup, location: "Mórrope, Lambayeque" },
      { title: "Supervisión de edificación educativa", image: imgSup, location: "Lambayeque" },
    ],
  },
];

const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } } };

const Proyectos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-[55vh] flex items-center pt-20 bg-primary-dark">
        <div className="absolute inset-0">
          <img src={proyectosHero} alt="Obras Constructora A&C" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/60" />
        </div>
        <div className="section-container relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 backdrop-blur-sm border border-accent/30 rounded-full mb-6 text-sm font-medium text-primary-foreground">
              <Building2 className="w-4 h-4 text-accent" />
              Portafolio de Obras
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Proyectos que respaldan
              <br />
              <span className="text-accent">nuestra trayectoria.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl">
              Más de una década entregando obras públicas y privadas en Chiclayo, Lambayeque
              y el norte del Perú.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="section-container py-4 overflow-x-auto">
          <div className="flex items-center gap-2 md:gap-3 min-w-max">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-accent-foreground hover:bg-accent transition-colors border border-border whitespace-nowrap">
                <c.icon className="w-4 h-4" />
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map((cat, idx) => (
        <section key={cat.id} id={cat.id} className={`section-padding scroll-mt-32 ${idx % 2 === 0 ? "bg-background" : "bg-section-gray"}`}>
          <div className="section-container">
            <div className="flex items-start gap-4 mb-10 border-l-4 border-accent pl-5">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <cat.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-2 py-0.5 rounded">Categoría</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{cat.title}</h2>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">{cat.intro}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.projects.map((p, i) => (
                <motion.article key={p.title} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08 }} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-accent transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded">{p.location}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-foreground font-medium leading-snug group-hover:text-accent transition-colors">{p.title}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="bg-primary-dark rounded-3xl p-10 md:p-16 text-center border border-accent/20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">¿Tiene una obra en mente?</h2>
            <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8">
              Conversemos sobre su próximo expediente técnico, supervisión u obra civil con Constructora A&amp;C.
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
