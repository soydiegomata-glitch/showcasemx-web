import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/eventos", label: "Eventos" },
  { path: "/galeria", label: "Galería" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/servicios", label: "Servicios" },
  // { path: "/feria-torreon", label: "Feria Torreón" },
  { path: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const isScrolled = useScrolled(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-b border-showcase-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20 lg:h-20">
            {/* Logo */}
<Link to="/" className="flex items-center gap-2">
  <img
    src="/showcase-logo-header.png"
    alt="Logo Showcase"
    className="h-10 w-10 object-contain shrink-0"
  />

  <div className="flex flex-col items-start">
    <span className="font-clash font-bold text-lg lg:text-2xl tracking-tight text-white">
      CASE
    </span>
    <span className="text-[0.6rem] tracking-[0.2em] text-showcase-text-muted uppercase -mt-1">
      Entretenimiento
    </span>
  </div>
</Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-showcase-text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-showcase-accent"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/eventos"
                className="hidden sm:flex items-center gap-2 gradient-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <Ticket className="w-4 h-4" />
                Comprar Boletos
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-showcase-bg-secondary border-l border-showcase-border-subtle p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? "bg-showcase-accent/10 text-showcase-accent"
                          : "text-showcase-text-secondary hover:text-white hover:bg-showcase-bg-card"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Link
                    to="/eventos"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 gradient-accent text-white font-semibold px-5 py-3 rounded-lg w-full"
                  >
                    <Ticket className="w-4 h-4" />
                    Comprar Boletos
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
