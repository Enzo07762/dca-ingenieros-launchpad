import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/", isRoute: true },
  { label: "Nosotros", href: "/nosotros", isRoute: true },
  { label: "Servicios", href: "/servicios", isRoute: true },
  { label: "Proyectos", href: "/proyectos", isRoute: true },
  { label: "Clientes", href: "/#clientes", isRoute: false },
  { label: "Contacto", href: "/#contacto", isRoute: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string, isRoute: boolean) =>
    isRoute ? location.pathname === href : false;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo A&C */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-primary rounded-lg group-hover:bg-primary-light transition-colors">
              <span className="font-extrabold text-2xl text-accent leading-none tracking-tighter">A<span className="text-primary-foreground text-base align-middle px-0.5">&amp;</span>C</span>
            </div>
            <span className="text-sm md:text-base font-bold text-foreground tracking-tight leading-tight">
              CONSTRUCTORA <span className="text-accent">A&amp;C</span>
              <span className="block text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
                Consultoría y Construcción S.A.C.
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                    isActive(item.href, item.isRoute)
                      ? "text-foreground after:w-full"
                      : "text-muted-foreground hover:text-foreground after:w-0"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button variant="nav" size="lg" className="bg-accent text-accent-foreground hover:bg-accent-light">
              Cotizar Proyecto
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`text-base font-medium py-2 ${
                      isActive(item.href, item.isRoute) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <Button variant="nav" size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent-light">
                Cotizar Proyecto
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
