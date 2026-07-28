import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";
import type { Evento } from "../data/events";

interface EventoCardProps {
  evento: Evento;
  index?: number;
}

const estadoLabels = {
  disponible: "Boletos Disponibles",
  proximamente: "Próximamente",
  agotado: "Sold Out",
  pospuesto: "Pospuesto",
  finalizado: "Evento Finalizado",
  cancelado: "Cancelado",
};

const estadoColors = {
  disponible: "bg-green-500/20 text-green-400 border-green-500/30",
  proximamente: "bg-showcase-accent/20 text-showcase-accent border-showcase-accent/30",
  agotado: "bg-red-500/20 text-red-400 border-red-500/30",
  pospuesto: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  finalizado: "bg-gray-700/20 text-gray-300 border-gray-700/30",
  cancelado: "bg-red-700/20 text-red-300 border-red-700/30",
};

export default function EventoCard({ evento, index = 0 }: EventoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group bg-showcase-bg-card rounded-xl overflow-hidden border border-showcase-border-subtle hover:border-showcase-accent/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {evento.imagen ? (
          <img
            src={evento.imagen}
            alt={`Concierto de ${evento.artista} en ${evento.recinto}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-end bg-gradient-to-br from-showcase-bg-elevated via-showcase-bg-card to-showcase-accent/40 p-5">
            <span className="font-clash text-2xl font-bold leading-tight text-white">{evento.artista}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-showcase-bg-card via-transparent to-transparent" />
        
        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-showcase-accent text-white text-xs font-bold px-3 py-1.5 rounded-md">
          {evento.fecha}
        </div>

        {/* Estado Badge */}
        <div className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${estadoColors[evento.estadoEvento]}`}>
          {estadoLabels[evento.estadoEvento]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-clash font-semibold text-lg text-white mb-1 line-clamp-1">
          {evento.artista}
        </h3>
        {evento.descripcion && (
          <p className="text-showcase-text-muted text-xs mb-3">{evento.descripcion}</p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-showcase-text-secondary text-sm">
            <Calendar className="w-4 h-4 text-showcase-text-muted shrink-0" />
            <span>{evento.fecha}{evento.hora ? `, ${evento.hora}` : ""}</span>
          </div>
          <div className="flex items-center gap-2 text-showcase-text-secondary text-sm">
            <Building2 className="w-4 h-4 text-showcase-text-muted shrink-0" />
            <span className="line-clamp-1">{evento.recinto}</span>
          </div>
          <div className="flex items-center gap-2 text-showcase-text-secondary text-sm">
            <MapPin className="w-4 h-4 text-showcase-text-muted shrink-0" />
            <span>{evento.ciudad}, {evento.estado}</span>
          </div>
        </div>

        {/* CTA */}
        {evento.linkBoletos ? (
          <a
            href={evento.linkBoletos}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 border-[1.5px] border-showcase-accent text-showcase-accent rounded-lg text-sm font-semibold hover:bg-showcase-accent hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Comprar boletos
          </a>
        ) : (
          <button
            disabled
            className="flex items-center justify-center gap-2 w-full py-2.5 border-[1.5px] border-showcase-border-subtle text-showcase-text-muted rounded-lg text-sm font-semibold cursor-not-allowed"
          >
            Boletos no disponibles
          </button>
        )}

        {evento.plataforma && (
          <p className="text-center text-showcase-text-muted text-[10px] mt-2">
            Venta oficial via {evento.plataforma}
          </p>
        )}
      </div>
    </motion.div>
  );
}
