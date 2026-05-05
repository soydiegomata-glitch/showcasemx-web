import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={`${align === "center" ? "text-center" : "text-left"} ${
        light ? "max-w-2xl" : "max-w-3xl mx-auto"
      }`}
    >
      <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3">
        {label}
      </span>
      <h2
        className={`font-clash font-semibold text-white leading-tight ${
          light ? "text-2xl lg:text-3xl" : "text-3xl lg:text-[2.75rem]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-showcase-text-secondary text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
