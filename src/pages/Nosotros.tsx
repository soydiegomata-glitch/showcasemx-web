import { motion } from "framer-motion";
import { Target, Eye, Heart, MapPin, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

const hitos = [
  { year: "2013", text: "Fundación de Showcase Entretenimiento en Torreón, Coahuila." },
  { year: "2016", text: "Primer concierto de nivel internacional en el Coliseo Centenario." },
  { year: "2019", text: "Ano record: mas de 30 eventos producidos, incluyendo Chayanne, Morat, Babasonicos y Maluma." },
  { year: "2020", text: "Adaptacion a nuevos formatos durante la pandemia, manteniendo la conexion con el publico." },
  { year: "2023", text: "Expansion a nuevas ciudades: Cancun, Merida, CD. Juarez y Durango." },
  { year: "2025", text: "Shakira en el TSM con 30,000 asistentes. El evento mas grande de la historia de La Laguna." },
  { year: "2026", text: "Proyeccion internacional: alianzas en Madrid y Lisboa." },
];

const valores = [
  "Pasion — Amamos lo que hacemos y eso se nota en cada evento.",
  "Excelencia — Buscamos la perfeccion en cada detalle.",
  "Integridad — Cumplimos lo que prometemos.",
  "Innovacion — Siempre buscamos sorprender.",
  "Compromiso — Con nuestros artistas, clientes y publico.",
];

const recintos = [
  { nombre: "Coliseo Centenario", ciudad: "Torreón, Coah.", capacidad: "8,000 personas", imagen: "/about-arena.jpg" },
  { nombre: "Explanada de la Feria", ciudad: "Torreón, Coah.", capacidad: "12,000 personas", imagen: "/hero-concert.jpg" },
  { nombre: "Estadio de Beisbol", ciudad: "Torreón, Coah.", capacidad: "7,000 personas", imagen: "/about-arena.jpg" },
  { nombre: "Poliforum Torreón", ciudad: "Torreón, Coah.", capacidad: "5,000 personas", imagen: "/hero-concert.jpg" },
  { nombre: "Plaza de Toros", ciudad: "Torreón & Cancún", capacidad: "4,000-6,000", imagen: "/about-arena.jpg" },
  { nombre: "Estadio TSM", ciudad: "Torreón, Coah.", capacidad: "30,000 personas", imagen: "/hero-concert.jpg" },
];

export default function Nosotros() {
  return (
    <div>
      <PageHero
        label="NOSOTROS"
        title="Showcase Entretenimiento"
        subtitle="Mas de una decada llevando los mejores espectaculos a escenarios de todo Mexico."
        height="60vh"
      />

      {/* Historia */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/about-arena.jpg"
                  alt="Coliseo Centenario"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3 block">
                NUESTRA HISTORIA
              </span>
              <h2 className="font-clash font-semibold text-2xl lg:text-3xl text-white leading-tight mb-6">
                De Torreón para todo México
              </h2>
              <div className="space-y-4 text-showcase-text-secondary leading-relaxed">
                <p>
                  Showcase Entretenimiento nació en Torreón, Coahuila, hace más de una década con una misión clara: llevar el mejor entretenimiento a la Comarca Lagunera y más allá.
                </p>
                <p>
                  Lo que comenzó como una pequeña promotora local se ha convertido en una de las empresas de entretenimiento más importantes del norte de México, operando recintos emblemáticos como el Coliseo Centenario, la Explanada de la Feria de Torreón y el Estadio Revolución.
                </p>
                <p>
                  Bajo la dirección de Jorge Mata, Showcase Entretenimiento ha producido eventos que han reunido a más de 30,000 personas en una sola noche y ha llevado a escenarios laguneros a artistas de la talla de Guns N' Roses, Andrea Bocelli, Caifanes, Morat y cientos más.
                </p>
                <p>
                  Hoy, Showcase Entretenimiento no solo produce conciertos, sino que organiza carteleras de ferias completas, eventos deportivos, espectáculos culturales y experiencias corporativas, con una visión de expansión que ya contempla escenarios internacionales.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mision, Vision, Valores */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <SectionHeader
            label="LO QUE NOS DEFINE"
            title="Mision, Vision y Valores"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Mision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8"
            >
              <Target className="w-12 h-12 text-showcase-accent mb-5" />
              <h3 className="font-clash font-semibold text-xl text-white mb-3">
                Nuestra Mision
              </h3>
              <p className="text-showcase-text-secondary text-sm leading-relaxed">
                Crear experiencias de entretenimiento memorables que conecten a artistas con su publico, generando momentos de emocion, alegria y unidad a traves de la musica y el espectaculo.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8"
            >
              <Eye className="w-12 h-12 text-showcase-accent mb-5" />
              <h3 className="font-clash font-semibold text-xl text-white mb-3">
                Nuestra Vision
              </h3>
              <p className="text-showcase-text-secondary text-sm leading-relaxed">
                Ser la promotora de entretenimiento más importante de México, reconocida por la calidad de nuestros eventos, la innovación en producción y el alcance internacional.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8"
            >
              <Heart className="w-12 h-12 text-showcase-accent mb-5" />
              <h3 className="font-clash font-semibold text-xl text-white mb-3">
                Nuestros Valores
              </h3>
              <ul className="space-y-2">
                {valores.map((v, i) => (
                  <li key={i} className="text-showcase-text-secondary text-sm leading-relaxed">
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <SectionHeader
            label="TRAYECTORIA"
            title="Momentos que marcaron nuestra historia"
          />

          <div className="mt-12 max-w-3xl mx-auto relative">
            {/* Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-showcase-border-subtle lg:-translate-x-px" />

            {hitos.map((hito, i) => (
              <motion.div
                key={hito.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-showcase-accent rounded-full -translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-10 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                  <span className="text-gradient-accent font-clash font-bold text-xl">
                    {hito.year}
                  </span>
                  <p className="text-showcase-text-secondary text-sm mt-1 leading-relaxed">
                    {hito.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recintos */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <SectionHeader
            label="NUESTROS ESCENARIOS"
            title="Recintos que operamos"
            description="Espacios iconicos donde se han vivido los momentos mas memorables."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recintos.map((recinto, i) => (
              <motion.div
                key={recinto.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-showcase-bg-card border border-showcase-border-subtle rounded-xl overflow-hidden hover:border-showcase-accent/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={recinto.imagen}
                    alt={recinto.nombre}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-clash font-semibold text-white mb-1">
                    {recinto.nombre}
                  </h3>
                  <div className="flex items-center gap-1.5 text-showcase-text-secondary text-sm mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {recinto.ciudad}
                  </div>
                  <div className="flex items-center gap-1.5 text-showcase-text-muted text-xs">
                    <Users className="w-3.5 h-3.5" />
                    Capacidad: {recinto.capacidad}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Quieres ser parte de la historia?
            </h3>
            <p className="text-showcase-text-secondary mb-6 max-w-lg mx-auto">
              Ya sea como artista, patrocinador o colaborador, queremos conocerte.
            </p>
            <a
              href="/contacto"
              className="inline-flex gradient-accent text-white font-semibold px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Trabaja con nosotros
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
