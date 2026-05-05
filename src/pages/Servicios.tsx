import { motion } from "framer-motion";
import {
  Mic2, Megaphone, FerrisWheel, Users, Truck, TrendingUp,
  Handshake, Palette, Trophy, CheckCircle,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

const serviciosPrincipales = [
  {
    icon: Mic2,
    title: "Produccion de Conciertos",
    desc: "Conceptualizacion, produccion tecnica, logistica y ejecucion de conciertos de cualquier escala. Desde el artista mas intimo hasta festivales masivos.",
    includes: [
      "Produccion tecnica (sonido, iluminacion, video)",
      "Logistica y montaje",
      "Coordinacion de artistas y crew",
      "Personal de produccion",
      "Permisos y gestoria",
    ],
  },
  {
    icon: Megaphone,
    title: "Promocion de Espectaculos",
    desc: "Estrategias de marketing integral para maximizar el alcance, la visibilidad y la venta de boletos de tu evento.",
    includes: [
      "Campanas digitales (redes sociales, SEM)",
      "Relaciones publicas y prensa",
      "Diseno grafico y branding",
      "Material promocional",
      "Reporte de resultados",
    ],
  },
  {
    icon: FerrisWheel,
    title: "Organizacion de Ferias",
    desc: "Planeacion, coordinacion y operacion completa de ferias municipales, estatales y regionales.",
    includes: [
      "Planeacion integral del evento",
      "Contratacion de artistas y espectaculos",
      "Gestion de recinto y seguridad",
      "Coordinacion de proveedores",
      "Operacion de taquillas y accesos",
    ],
  },
];

const serviciosAdicionales = [
  { icon: Palette, title: "Eventos Culturales", desc: "Festivales, exposiciones, presentaciones artisticas y eventos comunitarios que enriquecen la vida cultural de la region." },
  { icon: Trophy, title: "Eventos Deportivos", desc: "Organizacion de eventos deportivos masivos, incluyendo jaripeos, novilladas, peleas y competencias." },
  { icon: Users, title: "Contratacion de Artistas", desc: "Relacion directa con artistas nacionales e internacionales de todos los generos musicales." },
  { icon: Truck, title: "Operacion y Logistica", desc: "Gestion integral de recintos, permisos, seguridad, servicios auxiliares y todo lo necesario para tu evento." },
  { icon: TrendingUp, title: "Marketing y Difusion", desc: "Campanas digitales, redes sociales, relaciones publicas y medios tradicionales para posicionar tu evento." },
  { icon: Handshake, title: "Alianzas con Marcas", desc: "Espacios de patrocinio y activacion de marca dentro de eventos masivos. Conecta tu marca con miles de personas." },
];

const pasos = [
  { num: "01", title: "Planeacion", desc: "Definimos el concepto, presupuesto, fecha y recinto ideal para tu evento." },
  { num: "02", title: "Produccion", desc: "Coordinamos todos los aspectos tecnicos, artisticos y logisticos." },
  { num: "03", title: "Promocion", desc: "Lanzamos la campana de marketing y abrimos la venta de boletos." },
  { num: "04", title: "Ejecucion", desc: "El gran dia. Nuestro equipo esta en cada detalle para una experiencia impecable." },
];

const beneficiosVIP = [
  "Boleto exclusivo en 1era o 2da fila",
  "Articulos oficiales del concierto",
  "Hospitality con bebidas y alimentos de cortesia previo al concierto",
  "Acceso exclusivo a zonas preferenciales",
  "Estacionamiento VIP",
];

export default function Servicios() {
  return (
    <div>
      <PageHero
        label="SERVICIOS"
        title="Todo para tu evento"
        subtitle="Desde la idea hasta el ultimo aplauso, te acompanamos en cada paso."
        height="50vh"
        backgroundImage="/about-arena.jpg"
      />

      {/* Servicios Principales */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            {serviciosPrincipales.map((servicio, i) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8"
              >
                <div className="w-16 h-16 rounded-full bg-showcase-accent/10 border border-showcase-border-subtle flex items-center justify-center mb-6">
                  <servicio.icon className="w-8 h-8 text-showcase-accent" />
                </div>
                <h3 className="font-clash font-semibold text-xl text-white mb-3">
                  {servicio.title}
                </h3>
                <p className="text-showcase-text-secondary text-sm leading-relaxed mb-5">
                  {servicio.desc}
                </p>
                <ul className="space-y-2">
                  {servicio.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-showcase-accent shrink-0 mt-0.5" />
                      <span className="text-showcase-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <SectionHeader
            label="MAS SERVICIOS"
            title="Especializados en cada detalle"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosAdicionales.map((servicio, i) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8 hover:border-showcase-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <servicio.icon className="w-8 h-8 text-showcase-accent mb-4" />
                <h3 className="font-clash font-semibold text-lg text-white mb-2">
                  {servicio.title}
                </h3>
                <p className="text-showcase-text-secondary text-sm leading-relaxed">
                  {servicio.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <SectionHeader
            label="COMO TRABAJAMOS"
            title="De la idea al escenario"
            description="Un proceso probado que garantiza el exito de cada evento."
          />

          <div className="mt-12 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-showcase-border-subtle" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pasos.map((paso, i) => (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-showcase-bg-card border-2 border-showcase-accent mb-5">
                    <span className="font-clash font-bold text-2xl text-gradient-accent">
                      {paso.num}
                    </span>
                  </div>
                  <h3 className="font-clash font-semibold text-lg text-white mb-2">
                    {paso.title}
                  </h3>
                  <p className="text-showcase-text-secondary text-sm leading-relaxed">
                    {paso.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Primera F1la */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src="/event-carlos-rivera.jpg"
                alt="Experiencia VIP Primera Fila"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3 block">
                EXPERIENCIA VIP
              </span>
              <h2 className="font-clash font-semibold text-2xl lg:text-3xl text-white leading-tight mb-4">
                Primera F1la
              </h2>
              <p className="text-showcase-text-secondary leading-relaxed mb-6">
                Vive los eventos de una manera diferente. Primera F1la es nuestra experiencia exclusiva que te pone en el corazon de la accion.
              </p>

              <ul className="space-y-3 mb-8">
                {beneficiosVIP.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-showcase-accent shrink-0 mt-0.5" />
                    <span className="text-showcase-text-secondary text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contacto"
                className="inline-flex gradient-accent text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              >
                Solicitar informacion
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash font-semibold text-2xl text-white mb-3">
              Listo para tu proximo evento?
            </h3>
            <p className="text-showcase-text-secondary mb-6 max-w-lg mx-auto">
              Cuentanos tu idea y te ayudamos a hacerla realidad.
            </p>
            <a
              href="/contacto"
              className="inline-flex gradient-accent text-white font-semibold px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Contactar a Showcase
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
