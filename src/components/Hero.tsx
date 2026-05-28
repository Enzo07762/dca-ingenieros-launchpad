import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, ShieldCheck } from "lucide-react";
import officeImage from "@/assets/ayc-hero.png";
import siteImage from "@/assets/ayc-hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 bg-primary-dark overflow-hidden">
      {/* Dark gradient layered background */}
      <div className="absolute inset-0 z-0">
        <img src={siteImage} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/70" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                +10 años de experiencia · Registrados en OSCE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] mb-6 tracking-tight">
              Construcción y consultoría
              <span className="block text-accent">para licitaciones de alto valor.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-2xl leading-relaxed">
              Constructora A&amp;C ejecuta expedientes técnicos, supervisión y obra civil
              para entidades públicas y empresas privadas en el norte del Perú.
              Capacidad para consorciarnos y respaldar Proyectos de Inversión Pública.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="bg-accent text-accent-foreground hover:bg-accent-light">
                Ver Proyectos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                Contáctanos
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/15">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">+10</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Años en el mercado</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">+80</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Obras entregadas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">RNP</div>
                <div className="text-sm text-primary-foreground/60 mt-1">OSCE vigente</div>
              </div>
            </div>
          </div>

          {/* Office image card (the wall logo) */}
          <div className="lg:col-span-5 relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden border border-accent/20 shadow-2xl">
              <img
                src={officeImage}
                alt="Oficina principal Constructora A&C — Chiclayo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-accent text-accent-foreground px-5 py-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Sede principal</div>
                <div className="text-sm font-bold">Chiclayo · Lambayeque</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
