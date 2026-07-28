import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { artistas, categoriasGaleria } from "../data/artistas";
import PageHero from "../components/PageHero";
import ArtistaCard from "../components/ArtistaCard";

export default function Galeria() {
  const [categoria, setCategoria] = useState("Todos");

  const artistasFiltrados = useMemo(() => {
    if (categoria === "Todos") return artistas;
    return artistas.filter((a) => a.categoria === categoria);
  }, [categoria]);

  const estadisticas = [
    { numero: "500+", label: "Eventos producidos" },
    { numero: "50+", label: "Artistas internacionales" },
    { numero: "15+", label: "Ciudades en México" },
    { numero: "30K", label: "Récord de asistencia" },
  ];

  return (
    <div>
      <PageHero
        label="TRAYECTORIA"
        title="Galeria de Eventos"
        subtitle="Más de una década llevando los mejores espectáculos a escenarios de todo México."
        height="50vh"
      />

      {/* Stats */}
      <section className="py-10 bg-showcase-bg-secondary border-b border-showcase-border-subtle">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {estadisticas.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center ${i < estadisticas.length - 1 ? "lg:border-r lg:border-showcase-border-subtle" : ""}`}
              >
                <div className="text-gradient-accent font-clash font-bold text-3xl lg:text-4xl">
                  {stat.numero}
                </div>
                <div className="text-showcase-text-muted text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-showcase-bg-primary border-b border-showcase-border-subtle">
        <div className="container-max">
          <div className="flex flex-wrap gap-2">
            {categoriasGaleria.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  categoria === cat
                    ? "bg-showcase-accent text-white"
                    : "bg-transparent border border-showcase-border-subtle text-showcase-text-secondary hover:text-white hover:border-showcase-text-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <motion.div
            key={categoria}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
          >
            {artistasFiltrados.map((artista, i) => (
              <ArtistaCard key={artista.id} artista={artista} index={i % 8} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
