import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SearchX } from "lucide-react";
import { eventos, ciudades, generos } from "../data/events";
import PageHero from "../components/PageHero";
import EventoCard from "../components/EventoCard";

export default function Eventos() {
  const [ciudadFilter, setCiudadFilter] = useState("Todas");
  const [generoFilter, setGeneroFilter] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const eventosFiltrados = useMemo(() => {
    return eventos.filter((evento) => {
      const matchCiudad = ciudadFilter === "Todas" || evento.ciudad === ciudadFilter;
      const matchGenero = generoFilter === "Todos" || evento.genero === generoFilter;
      const matchBusqueda =
        busqueda === "" ||
        evento.artista.toLowerCase().includes(busqueda.toLowerCase()) ||
        evento.ciudad.toLowerCase().includes(busqueda.toLowerCase()) ||
        evento.recinto.toLowerCase().includes(busqueda.toLowerCase());
      return matchCiudad && matchGenero && matchBusqueda;
    });
  }, [ciudadFilter, generoFilter, busqueda]);

  return (
    <div>
      <PageHero
        label="SHOWCASEMX"
        title="Proximos Eventos"
        subtitle="Descubre los conciertos, ferias y espectaculos que tenemos para ti."
        height="50vh"
      />

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-showcase-bg-secondary border-b border-showcase-border-subtle">
        <div className="container-max py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-showcase-text-muted" />
              <input
                type="text"
                placeholder="Buscar artista o evento..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors"
              />
            </div>

            {/* City Filter */}
            <select
              value={ciudadFilter}
              onChange={(e) => setCiudadFilter(e.target.value)}
              className="bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-showcase-accent transition-colors cursor-pointer"
            >
              <option value="Todas">Todas las ciudades</option>
              {ciudades.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Genre Filter */}
            <select
              value={generoFilter}
              onChange={(e) => setGeneroFilter(e.target.value)}
              className="bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-showcase-accent transition-colors cursor-pointer"
            >
              {generos.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <p className="text-showcase-text-muted text-xs mt-3">
            Mostrando {eventosFiltrados.length} evento{eventosFiltrados.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          {eventosFiltrados.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <SearchX className="w-16 h-16 text-showcase-text-muted mx-auto mb-4" />
              <h3 className="font-clash font-semibold text-xl text-white mb-2">
                No encontramos eventos con estos filtros
              </h3>
              <p className="text-showcase-text-secondary">
                Intenta con otra busqueda o ajusta los filtros.
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${ciudadFilter}-${generoFilter}-${busqueda}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {eventosFiltrados.map((evento, i) => (
                  <EventoCard key={evento.id} evento={evento} index={i % 4} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-showcase-bg-secondary">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash font-semibold text-xl text-white mb-2">
              No encuentras lo que buscas?
            </h3>
            <p className="text-showcase-text-secondary mb-6">
              Contactanos y te ayudamos a encontrar el evento perfecto.
            </p>
            <a
              href="/contacto"
              className="inline-flex gradient-accent text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              Contactar a Showcase
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
