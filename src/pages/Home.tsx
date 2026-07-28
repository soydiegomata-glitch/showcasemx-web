import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, Mic2, Megaphone, FerrisWheel, Users, Mail } from "lucide-react";
import { eventosUpcoming } from "../data/events";
import { artistas } from "../data/artistas";
import SectionHeader from "../components/SectionHeader";
import EventoCard from "../components/EventoCard";
import ArtistaCard from "../components/ArtistaCard";

const eventosDestacados = eventosUpcoming
  .filter((e) => e.estadoEvento === "disponible" || e.estadoEvento === "proximamente")
  .slice(0, 6);

const artistasDestacados = artistas.slice(0, 12);

const servicios = [
  {
    icon: Mic2,
    title: "Producción de Conciertos",
    desc: "Conceptualización, producción técnica, logística y ejecución de conciertos de cualquier escala.",
  },
  {
    icon: Megaphone,
    title: "Promoción de Espectáculos",
    desc: "Estrategias de marketing, publicidad y difusión para maximizar alcance y venta de boletos.",
  },
  {
    icon: FerrisWheel,
    title: "Organización de Ferias",
    desc: "Planeación, coordinación y operación de ferias municipales y estatales.",
  },
  {
    icon: Users,
    title: "Contratación de Artistas",
    desc: "Relación directa con artistas nacionales e internacionales de todos los géneros.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: "url(/hero-concert.jpg)" }}
        />
        <div className="absolute inset-0 gradient-hero" />

        {/* Glow spots */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 glow-spot opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 glow-spot opacity-30" />

        {/* Content */}
        <div className="relative z-10 container-max text-center pt-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-6"
          >
            SHOWCASE ENTRETENIMIENTO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="font-clash font-bold text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)", letterSpacing: "-0.02em" }}
          >
            Los mejores
            <br />
            <span className="text-gradient-accent">conciertos y espectáculos</span>
            <br />
            en México
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-showcase-text-secondary text-lg max-w-xl mx-auto leading-relaxed"
          >
            Producción, promoción y organización de conciertos, ferias, eventos culturales, deportivos y especiales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/eventos"
              className="flex items-center gap-2 gradient-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5" />
              Ver Proximos Eventos
            </Link>
            <Link
              to="/contacto"
              className="flex items-center gap-2 bg-transparent border border-showcase-border-subtle text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-showcase-bg-elevated hover:border-showcase-accent transition-all duration-300"
            >
              Contactar a Showcase
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-showcase-text-muted animate-bounce-slow" />
        </motion.div>
      </section>

      {/* ========== EVENTOS DESTACADOS ========== */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <SectionHeader
            label="PRÓXIMAS FECHAS"
            title="No te pierdas los próximos eventos"
            description="Conciertos, ferias y espectáculos para todos los gustos. Compra tus boletos ahora."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventosDestacados.map((evento, i) => (
              <EventoCard key={evento.id} evento={evento} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/eventos"
              className="inline-flex items-center gap-2 text-showcase-accent font-medium hover:underline"
            >
              Ver todos los eventos
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== SOBRE NOSOTROS ========== */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/about-arena.jpg"
                  alt="Coliseo Centenario lleno durante un concierto"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3 block">
                SOBRE NOSOTROS
              </span>
              <h2 className="font-clash font-semibold text-2xl lg:text-3xl text-white leading-tight mb-4">
                Más de una década creando experiencias inolvidables
              </h2>
              <p className="text-showcase-text-secondary leading-relaxed mb-6">
                Showcase Entretenimiento es una empresa mexicana originaria de Torreón, Coahuila, especializada en la producción, promoción y organización de conciertos, ferias, eventos culturales, deportivos y especiales. Hemos llevado a escenarios de todo México a artistas internacionales como Shakira, Guns N' Roses y Andrea Bocelli.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { number: "10+", label: "Anos de trayectoria" },
                  { number: "500+", label: "Eventos producidos" },
                  { number: "30K", label: "Maxima asistencia" },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="text-gradient-accent font-clash font-bold text-2xl lg:text-3xl">
                      {metric.number}
                    </div>
                    <div className="text-showcase-text-muted text-xs mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 border-[1.5px] border-showcase-accent text-showcase-accent font-semibold px-6 py-2.5 rounded-lg hover:bg-showcase-accent hover:text-white transition-all duration-300"
              >
                Conoce mas sobre nosotros
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== GALERIA PREVIEW ========== */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <SectionHeader
            label="GALERIA"
            title="Artistas que han pasado por nuestros escenarios"
            description="De Shakira a Carin Leon, de Guns N' Roses a Morat. Una trayectoria que habla por si sola."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {artistasDestacados.map((artista, i) => (
              <ArtistaCard key={artista.id} artista={artista} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-showcase-accent font-medium hover:underline"
            >
              Ver galeria completa
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICIOS PREVIEW ========== */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <SectionHeader
            label="NUESTROS SERVICIOS"
            title="Todo lo que necesitas para tu evento"
            description="Desde la concepcion hasta la ejecucion, te acompanamos en cada paso."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, i) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group text-center p-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-showcase-accent/10 border border-showcase-border-subtle flex items-center justify-center mb-5 group-hover:bg-showcase-accent/20 group-hover:border-showcase-accent/30 transition-all duration-300">
                  <servicio.icon className="w-8 h-8 text-showcase-accent" />
                </div>
                <h3 className="font-clash font-semibold text-lg text-white mb-2">
                  {servicio.title}
                </h3>
                <p className="text-showcase-text-secondary text-sm leading-relaxed">
                  {servicio.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border-[1.5px] border-showcase-accent text-showcase-accent font-semibold px-6 py-2.5 rounded-lg hover:bg-showcase-accent hover:text-white transition-all duration-300"
            >
              Descubre todos nuestros servicios
            </Link>
          </motion.div>
        </div>
      </section>
       

      {/* ========== CTA FINAL ========== */}
      <section className="relative overflow-hidden" style={{ padding: "clamp(6rem, 12vw, 10rem) 0" }}>
        <div className="absolute inset-0 bg-showcase-bg-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-spot opacity-20" />

        <div className="relative z-10 container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-clash font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Tienes un evento en mente?
            </h2>
            <p className="text-showcase-text-secondary text-lg max-w-xl mx-auto mb-8">
              Hablemos. Estamos listos para convertir tu vision en una experiencia inolvidable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="gradient-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              >
                Escribenos
              </Link>
              <a
                href="mailto:eventosshowcase@gmail.com"
                className="flex items-center gap-2 bg-transparent border border-showcase-border-subtle text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-showcase-bg-elevated hover:border-showcase-accent transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                eventosshowcase@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
