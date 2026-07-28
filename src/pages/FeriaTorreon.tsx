import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Clock, CheckCircle, ChevronDown,
  Ticket, ExternalLink, Share2,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const tabs = ["Conciertos Gratuitos", "Conciertos con Boleto"];

const conciertosGratuitos = [
  { fecha: "12 Sep", artista: "Liberacion", horario: "21:00", zonaFan: "Mesas 4p $2,280" },
  { fecha: "19 Sep", artista: "El Poder del Norte", horario: "21:00", zonaFan: "Mesas 4p $2,280" },
  { fecha: "27 Sep", artista: "Chicos de Barrio", horario: "21:00", zonaFan: "Mesas 4p $1,720" },
  { fecha: "5 Oct", artista: "Tropicalisimo Apache", horario: "21:00", zonaFan: "Mesas 4p $2,280" },
];

const conciertosPaga = [
  {
    fecha: "5 Sep",
    artista: "Los Primeritos de Colombia, Tropicalisimo Lobo, Sonora Everest, La Vaina Colombiana",
    horario: "",
    precios: "General $100, Mesa Patino $1,720, Mesa Zona Fan $2,280",
  },
  {
    fecha: "13 Sep",
    artista: "Josi Cuen y Jorge Medina — Juntos",
    horario: "",
    precios: "Zona Fan $3,680, Diamante $3,220, Platino $2,530, Oro $2,070, Plata $1,730, Preferente $1,150, General $690",
  },
  {
    fecha: "14 Sep",
    artista: "Bely y Beto",
    horario: "18:30",
    precios: "General $300, Preferente $600, Plata $950, Oro $1,150, Platino $1,400, Zona Fan $1,850",
  },
  {
    fecha: "20 Sep",
    artista: "Noche de Reinas: Banda Kanon, Mi Barrio Colombiano, Tropicana de Rene Alonso",
    horario: "",
    precios: "Preferente $120",
  },
  {
    fecha: "4 Oct",
    artista: "La Parranda Tour: Virlan Garcia, Alta Consigna, Perdidos de Sinaloa",
    horario: "",
    precios: "General $340, Mesas Platino $5,720, Mesas Zona Fan $6,840",
  },
];

const infoCards = [
  { icon: Clock, title: "Horarios", lines: ["Lunes a jueves: 5:00 PM – 12:00 AM", "Viernes a domingo: 5:00 PM – 2:00 AM"] },
  { icon: Ticket, title: "Precios de Entrada", lines: ["Adultos: $50", "Niños menores de 10: GRATIS", "Adultos mayores: GRATIS"] },
  { icon: MapPin, title: "Ubicación", lines: ["Recinto Ferial de Torreón", "Torreón, Coahuila, México"] },
  { icon: Calendar, title: "Fechas", lines: ["5 de septiembre al 5 de octubre 2025"] },
];

const puntosVenta = [
  "Boletea.com",
  "Taquillas del Coliseo Centenario",
  "Cimaco (sucursal Hidalgo y 4 Caminos)",
  "Los 3 Garcia (Fco. I. Madero y San Pedro)",
  "El Vaquero Norteno (Paseo Durango)",
  "Sombrereria La Fe",
];

const faqs = [
  {
    q: "Donde compro los boletos?",
    a: "Puedes comprar tus boletos en linea a traves de Boletea.com o en puntos de venta fisicos: Coliseo Centenario, Cimaco (sucursales Hidalgo y 4 Caminos), Los 3 Garcia en Fco. I. Madero y San Pedro, El Vaquero Norteno en Paseo Durango, y Sombrereria La Fe.",
  },
  {
    q: "Cuanto cuesta la entrada a la feria?",
    a: "La entrada general cuesta $50 para adultos. Los ninos menores de 10 anos y adultos mayores entran gratis.",
  },
  {
    q: "Los conciertos del Foro de las Estrellas tienen costo extra?",
    a: "Algunos conciertos son gratuitos con tu boleto de entrada a la feria. Otros conciertos requieren la compra de un boleto adicional. Consulta la cartelera para mas detalles.",
  },
  {
    q: "A que hora abre la feria?",
    a: "La feria abre de lunes a jueves de 5:00 PM a medianoche, y de viernes a domingo de 5:00 PM a 2:00 AM.",
  },
  {
    q: "Hay estacionamiento?",
    a: "Si, contamos con estacionamiento vigilado dentro del recinto ferial. Tambien hay zonas adaptadas para personas con discapacidad.",
  },
  {
    q: "Puedo llevar mi camara profesional?",
    a: "Las camaras profesionales y equipos de grabacion requieren autorizacion previa. Para mas informacion, contacta a nuestro equipo de prensa.",
  },
  {
    q: "Hay opciones de comida para vegetarianos/veganos?",
    a: "Si, en la zona gastronomica encontraras una gran variedad de opciones, incluyendo alternativas vegetarianas y veganas.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-showcase-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-clash font-semibold text-white pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-showcase-text-muted shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-showcase-text-secondary text-sm leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FeriaTorreon() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: "url(/feria-torreon.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-showcase-bg-primary via-showcase-bg-primary/70 to-transparent" />

        <div className="relative z-10 container-max text-center pt-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-showcase-gold border border-showcase-gold/50 bg-showcase-gold/10 px-4 py-1.5 rounded-full mb-6"
          >
            79a EDICION
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-clash font-bold text-white leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            Feria
            <br />
            <span className="text-gradient-gold">Torreón</span>
            <br />
            2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-showcase-text-secondary text-lg"
          >
            5 de septiembre al 5 de octubre — Un mes de musica, diversion y tradicion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://boletea.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-showcase-gold text-showcase-bg-primary font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
            >
              <Ticket className="w-5 h-5" />
              Comprar Boletos
            </a>
            <a
              href="#cartelera"
              className="flex items-center gap-2 border-[1.5px] border-showcase-gold text-showcase-gold font-semibold px-8 py-3.5 rounded-lg hover:bg-showcase-gold/10 transition-all duration-300"
            >
              Ver Cartelera
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-showcase-text-secondary"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-showcase-gold" />
              5 Sep – 5 Oct
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-showcase-gold" />
              Recinto Ferial, Torreón
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-showcase-gold" />
              5:00 PM – 2:00 AM
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-showcase-text-muted animate-bounce-slow" />
        </motion.div>
      </section>

      {/* ========== INTRODUCCION ========== */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/feria-torreon.jpg"
                alt="Feria Torreón"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3 block">
                LA FERIA MÁS ESPERADA DEL AÑO
              </span>
              <h2 className="font-clash font-semibold text-2xl lg:text-3xl text-white leading-tight mb-4">
                Una tradición que une a la familia lagunera
              </h2>
              <p className="text-showcase-text-secondary leading-relaxed mb-6">
                La Feria de Torreón es mucho más que un evento: es una tradición que reúne a familias de toda la región para celebrar lo mejor de nuestra cultura. Durante un mes completo, el Recinto Ferial se llena de música, gastronomía, juegos mecánicos, exposiciones y espectáculos para todas las edades.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Musica", desc: "Conciertos gratuitos y de paga" },
                  { title: "Gastronomia", desc: "Comida regional y antojitos" },
                  { title: "Diversion", desc: "Juegos mecanicos y atracciones" },
                ].map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-showcase-bg-card border border-showcase-border-subtle rounded-lg p-4 text-center"
                  >
                    <h4 className="font-clash font-semibold text-white text-sm mb-1">{h.title}</h4>
                    <p className="text-showcase-text-muted text-xs">{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CARTELERA ========== */}
      <section id="cartelera" className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <SectionHeader
            label="CARTELERA 2025"
            title="Conciertos en el Foro de las Estrellas"
          />

          {/* Tabs */}
          <div className="mt-8 flex gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-showcase-accent text-white"
                    : "bg-showcase-bg-card text-showcase-text-secondary hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-8 space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === 0 ? (
                <motion.div
                  key="gratuitos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {conciertosGratuitos.map((c, i) => (
                    <motion.div
                      key={c.fecha}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-5"
                    >
                      <div className="sm:w-24 shrink-0">
                        <div className="font-clash font-bold text-2xl text-gradient-accent">
                          {c.fecha.split(" ")[0]}
                        </div>
                        <div className="text-showcase-text-muted text-xs uppercase">
                          {c.fecha.split(" ")[1]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-clash font-semibold text-white">{c.artista}</h4>
                        <p className="text-showcase-text-muted text-sm">{c.horario}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                          GRATIS
                        </span>
                        <span className="text-showcase-text-muted text-xs">{c.zonaFan}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="paga"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {conciertosPaga.map((c, i) => (
                    <motion.div
                      key={c.fecha}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-5"
                    >
                      <div className="sm:w-24 shrink-0">
                        <div className="font-clash font-bold text-2xl text-gradient-accent">
                          {c.fecha.split(" ")[0]}
                        </div>
                        <div className="text-showcase-text-muted text-xs uppercase">
                          {c.fecha.split(" ")[1]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-clash font-semibold text-white text-sm">{c.artista}</h4>
                        {c.horario && <p className="text-showcase-text-muted text-xs">{c.horario}</p>}
                        <p className="text-showcase-text-muted text-xs mt-1">{c.precios}</p>
                      </div>
                      <a
                        href="https://boletea.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-showcase-accent text-sm font-medium hover:underline shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Comprar
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========== INFORMACION ========== */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <SectionHeader
            label="TODO LO QUE NECESITAS SABER"
            title="Información de la Feria"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-6"
              >
                <card.icon className="w-8 h-8 text-showcase-accent mb-4" />
                <h4 className="font-clash font-semibold text-white mb-2">{card.title}</h4>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-showcase-text-secondary text-sm">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Puntos de venta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-6 lg:p-8"
          >
            <h4 className="font-clash font-semibold text-white mb-4">
              Puntos de venta de boletos
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {puntosVenta.map((pv, i) => (
                <div key={i} className="flex items-center gap-2 text-showcase-text-secondary text-sm">
                  <CheckCircle className="w-4 h-4 text-showcase-accent shrink-0" />
                  {pv}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3 block">
              FAQ
            </span>
            <h2 className="font-clash font-semibold text-2xl lg:text-3xl text-white">
              Preguntas Frecuentes
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/feria-torreon.jpg)" }}
        />
        <div className="absolute inset-0 bg-showcase-bg-primary/80" />

        <div className="relative z-10 container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-clash font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              Te esperamos en la Feria Torreón 2025!
            </h2>
            <p className="text-showcase-text-secondary text-lg mb-8">
              5 de septiembre al 5 de octubre — Recinto Ferial, Torreón, Coah.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://boletea.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-showcase-gold text-showcase-bg-primary font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
              >
                <Ticket className="w-5 h-5" />
                Comprar Boletos
              </a>
              <button className="flex items-center gap-2 border-[1.5px] border-showcase-border-subtle text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-showcase-bg-elevated transition-all duration-300">
                <Share2 className="w-5 h-5" />
                Compartir
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
