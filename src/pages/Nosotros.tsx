import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield, Award, Clock, HardHat, Target, Eye, CheckCircle,
  Building2, TrendingUp, BadgeCheck, ArrowRight,
} from "lucide-react";
import nosotrosHero from "@/assets/ayc-hero-bg.jpg";
import nosotrosTeam from "@/assets/ayc-office.png";
import nosotrosMision from "@/assets/ayc-proj-edif.png";

const valores = [
  { icon: Shield, title: "Seguridad en Obra", description: "Aplicamos protocolos estrictos de SST en cada frente de trabajo, protegiendo a nuestro personal y a la comunidad." },
  { icon: Award, title: "Calidad Técnica", description: "Procesos constructivos auditados, materiales certificados y profesionales colegiados en cada especialidad." },
  { icon: Clock, title: "Cumplimiento de Plazos", description: "Planificamos con holgura realista para entregar siempre dentro del cronograma pactado." },
  { icon: HardHat, title: "Compromiso Local", description: "Nacimos en Chiclayo y trabajamos con proveedores y mano de obra de la región." },
];

const hitos = [
  { year: "2014", title: "Fundación", description: "Constructora A&C nace en Chiclayo enfocada en consultoría y obra civil para entidades públicas." },
  { year: "2017", title: "Registro OSCE", description: "Inscripción formal al Registro Nacional de Proveedores, ampliando alcance a licitaciones del Estado." },
  { year: "2020", title: "Especialidades", description: "Consolidación de las 7 especialidades en supervisión, expedientes técnicos y ejecución." },
  { year: "2025", title: "Hoy", description: "Más de una década entregando obra pública y privada, con capacidad de consorciarnos." },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] bg-primary-dark flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={nosotrosHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary/80" />

        <div className="section-container relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/15 backdrop-blur-sm border border-accent/30 rounded-full mb-8 animate-fade-in">
            <BadgeCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Empresa chiclayana desde 2014</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up leading-tight">
            Nuestra historia.
            <br />
            <span className="text-accent">Construyendo el norte del Perú.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-3xl mx-auto animate-slide-up">
            Constructora A&amp;C — Consultoría y Construcción S.A.C. es una empresa peruana
            orgullosa de su origen norteño, con el compromiso de
            <strong className="text-primary-foreground"> elevar el estándar técnico de la construcción regional</strong>.
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-in-left">
              <span className="text-accent-foreground bg-accent px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider mb-4 inline-block">¿Quiénes Somos?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Equipo técnico con vocación de obra</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Desde nuestros inicios en <strong className="text-foreground">Chiclayo</strong>, hemos reunido a ingenieros
                civiles, arquitectos y técnicos colegiados con experiencia en obra pública,
                privada y consorcios. Cada proyecto se ejecuta con un residente y un supervisor
                a tiempo completo.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Atendemos a <strong className="text-foreground">entidades del Estado, empresas privadas y personas
                naturales</strong>, abarcando desde la formulación del perfil técnico hasta la
                ejecución integral de la obra.
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                <img src={nosotrosTeam} alt="Oficina Constructora A&C" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-6 right-4 md:right-8 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-primary rounded-full">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-sm">Registrados en OSCE</p>
                  <p className="text-xs opacity-80">RNP vigente · Consorciables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 animate-slide-in-left">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <img src={nosotrosMision} alt="Obra en ejecución" className="w-full h-[420px] object-cover" />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-xl"><Target className="w-6 h-6 text-accent-foreground" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Misión</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Brindar <strong className="text-foreground">soluciones integrales de ingeniería y construcción</strong>
                      en el norte del Perú, generando obras seguras, eficientes y rentables para
                      nuestros clientes, con un equipo técnico comprometido y proveedores locales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 shadow-md border border-primary text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-xl"><Eye className="w-6 h-6 text-accent-foreground" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Visión</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Ser la <strong className="text-accent">constructora de referencia</strong> en el norte del país
                      para proyectos de inversión pública y privada, reconocidos por la calidad,
                      el cumplimiento y la transparencia en cada obra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-foreground bg-accent px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider mb-4 inline-block">Lo que nos define</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros Pilares</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all group">
                <div className="p-3 bg-accent rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform">
                  <v.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Nuestra trayectoria</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Una década construyendo confianza</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hitos.map((h, i) => (
              <div key={h.year} className="relative bg-primary-foreground/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/40 transition-colors">
                <div className="absolute -top-3 left-6 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">{h.year}</div>
                <div className="p-3 bg-accent rounded-xl w-fit mb-4 mt-2">
                  {i === 0 && <Building2 className="w-5 h-5 text-accent-foreground" />}
                  {i === 1 && <BadgeCheck className="w-5 h-5 text-accent-foreground" />}
                  {i === 2 && <Award className="w-5 h-5 text-accent-foreground" />}
                  {i === 3 && <TrendingUp className="w-5 h-5 text-accent-foreground" />}
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{h.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="bg-accent rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">¿Tiene un proyecto en mente?</h2>
              <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto mb-8">
                Conversemos sobre su próximo expediente técnico, supervisión u obra civil.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg">
                Cotizar con un Ingeniero
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
