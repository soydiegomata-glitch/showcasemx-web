import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  backgroundImage = "/hero-concert.jpg",
  height = "50vh",
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: height, maxHeight: "500px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container-max text-center py-32">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-4"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="font-clash font-bold text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 text-showcase-text-secondary text-base lg:text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
