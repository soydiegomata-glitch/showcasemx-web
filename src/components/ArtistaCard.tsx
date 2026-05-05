import { motion } from "framer-motion";
import type { Artista } from "../data/artistas";

interface ArtistaCardProps {
  artista: Artista;
  index?: number;
}

export default function ArtistaCard({ artista, index = 0 }: ArtistaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
    >
      <img
        src={artista.imagen}
        alt={`${artista.nombre} en concierto`}
        className="w-full h-full object-contain bg-black
         transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
        <h3 className="font-clash font-semibold text-white text-sm lg:text-base leading-tight">
          {artista.nombre}
        </h3>
        <p className="text-showcase-text-muted text-xs mt-1">
          {artista.recinto}{artista.fecha ? ` — ${artista.fecha}` : ""}
        </p>
      </div>
    </motion.div>
  );
}
