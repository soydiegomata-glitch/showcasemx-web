import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/eventos", label: "Eventos" },
  { path: "/galeria", label: "Galería" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/servicios", label: "Servicios" },
  // { path: "/feria-torreon", label: "Feria Torreón" },
  { path: "/contacto", label: "Contacto" },
];

const recintos = [
  "Coliseo Centenario",
  "Poliforum Torreón",
  "Explanada de la Feria",
  "Estadio Revolución",
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/showcasemex", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/ShowcaseMex", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/channel/UCKTtrga1LJwSDrGhvDaUkug", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/ShowcaseMex", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-showcase-bg-footer border-t border-showcase-border-subtle">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex flex-col items-start mb-4">
              <span className="font-clash font-bold text-2xl tracking-tight text-white">
                SHOWCASE
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] text-showcase-text-muted uppercase -mt-1">
                Entretenimiento
              </span>
            </Link>
            <p className="text-showcase-text-secondary text-sm leading-relaxed max-w-xs">
              Empresa mexicana líder en producción y promoción de conciertos, ferias y eventos masivos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-clash font-semibold text-white mb-4">Navegacion</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-showcase-text-secondary text-sm hover:text-showcase-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Venues */}
          <div>
            <h4 className="font-clash font-semibold text-white mb-4">Recintos</h4>
            <ul className="space-y-2.5">
              {recintos.map((recinto) => (
                <li key={recinto}>
                  <span className="text-showcase-text-secondary text-sm">{recinto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-clash font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-showcase-bg-card border border-showcase-border-subtle flex items-center justify-center text-showcase-text-muted hover:text-showcase-accent hover:border-showcase-accent hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div>
              <span className="text-showcase-text-muted text-xs uppercase tracking-wider">Email</span>
              <a
                href="mailto:eventosshowcase@gmail.com"
                className="block text-showcase-text-secondary text-sm hover:text-showcase-accent transition-colors"
              >
                eventosshowcase@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-showcase-border-subtle mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-showcase-text-muted text-xs">
              © 2026 Showcase Entretenimiento. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-showcase-text-muted">
              <Link to="/aviso-de-privacidad" className="hover:text-showcase-text-secondary transition-colors">
                Aviso de Privacidad
              </Link>
              <Link to="/terminos-y-condiciones" className="hover:text-showcase-text-secondary transition-colors">
                Terminos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
