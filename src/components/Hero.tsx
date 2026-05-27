import { Button } from "@/components/ui/button";
import { ChevronRight, Phone } from "lucide-react";
import heroImage from "@/assets/sr-hero.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Proyecto de construcción moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 via-hero-overlay/70 to-hero-overlay/50" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Desde marzo de 1994 · +30 años construyendo el Perú
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Respuestas simples a{" "}
            <span className="text-accent-light">retos complejos</span> de
            construcción.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Sevilla|Rodríguez Development gestiona y ejecuta proyectos especiales
            de construcción a nivel nacional, con la trayectoria y solidez técnica
            que el mercado peruano exige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Ver Proyectos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="mr-2 h-5 w-5" />
              Contáctanos
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                +30
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                Años de trayectoria
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                +100
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                Obras ejecutadas
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-light">
                6
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                Sectores atendidos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
