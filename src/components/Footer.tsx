import { MapPin, Phone, Mail, FileText, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
];

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary-dark text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg border border-accent/40">
                <span className="font-extrabold text-2xl text-accent leading-none tracking-tighter">A<span className="text-primary-foreground text-base align-middle px-0.5">&amp;</span>C</span>
              </div>
              <span className="text-xl font-bold">
                CONSTRUCTORA <span className="text-accent">A&amp;C</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Consultoría y Construcción S.A.C. Más de 10 años elaborando expedientes técnicos
              y ejecutando obras públicas y privadas en el norte del Perú. Registrados en OSCE
              con capacidad de consorciarnos.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Chiclayo, Lambayeque, Perú — 14000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+5174000000" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (074) 000-000 · WhatsApp 999 000 000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:contacto@constructoraayc.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  contacto@constructoraayc.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-accent hover:bg-accent-light rounded-lg text-accent-foreground font-semibold transition-colors">
                  <FileText className="h-4 w-4" />
                  Libro de Reclamaciones
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Constructora A&amp;C — Consultoría y Construcción S.A.C. Todos los derechos reservados.</p>
            <p>Diseñado con <span className="text-accent">precisión</span> en Chiclayo, Perú</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
