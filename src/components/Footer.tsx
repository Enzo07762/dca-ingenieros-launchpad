import { MapPin, Phone, FileText, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
];

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-2 bg-primary rounded-lg">
                <span className="text-primary-foreground font-extrabold text-lg tracking-tight">SR</span>
              </div>
              <span className="text-xl font-bold">
                Sevilla<span className="text-accent-light">|</span>Rodríguez
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Empresa peruana de construcción fundada en 1994, especializada en gerencia
              y ejecución de proyectos no convencionales en todo el país.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-light mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Av. Santiago de Surco 3827 Int. 09, Urb. Vista Alegre — Santiago de Surco, Lima, Perú.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-light flex-shrink-0" />
                <a
                  href="tel:+5112717223"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors"
                >
                  Central: (01) 271-7223 / 271-1337
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/70 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-accent/20 hover:bg-accent/30 rounded-lg text-accent-light font-medium transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Libro de Reclamaciones
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© Copyright 2019 | Sevilla Rodríguez S.R.L. Todos los derechos reservados.</p>
            <p>
              Diseñado con{" "}
              <span className="text-accent-light">excelencia</span> en Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
