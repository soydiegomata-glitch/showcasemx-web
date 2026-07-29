import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Clock,
  Instagram, Facebook, Youtube, Twitter,
  Mic2, Briefcase, Newspaper, Send,
} from "lucide-react";
import PageHero from "../components/PageHero";

const tiposSolicitud = [
  "Compra de boletos",
  "Contratación de artistas",
  "Patrocinios / Alianzas comerciales",
  "Producción de eventos",
  "Prensa / Medios",
  "Información general",
  "Otro",
];

const contactEmail = "";

const contactosEspecializados = [
  {
    icon: Mic2,
    title: "Eres artista o productor?",
    text: "Escríbenos sobre contrataciones, giras y colaboraciones artísticas.",
    cta: "Enviar correo",
  },
  {
    icon: Briefcase,
    title: "¿Quieres patrocinar un evento?",
    text: "Conecta tu marca con miles de personas. Tenemos opciones para todos los presupuestos.",
    cta: "Solicitar información",
  },
  {
    icon: Newspaper,
    title: "Eres periodista o influencer?",
    text: "Solicita acreditaciones de prensa, entrevistas o material audiovisual.",
    cta: "Contactar prensa",
  },
];

export default function Contacto() {
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipo: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto web: ${formData.tipo || "Consulta general"}`);
    const body = encodeURIComponent([
      `Nombre: ${formData.nombre}`,
      `Correo: ${formData.email}`,
      `Teléfono: ${formData.telefono || "No proporcionado"}`,
      `Empresa: ${formData.empresa || "No proporcionada"}`,
      `Tipo de solicitud: ${formData.tipo}`,
      "",
      "Mensaje:",
      formData.mensaje,
    ].join("\n"));
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormState("success");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Suscripción a novedades Showcase");
    const body = encodeURIComponent(`Quiero recibir novedades de Showcase en: ${newsletterEmail}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setNewsletterState("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHero
        label="CONTACTO"
        title="Hablemos"
        subtitle="Estamos listos para escucharte. Cuentanos sobre tu evento, consulta o propuesta."
        height="40vh"
      />

      {/* Form & Info */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-clash font-semibold text-2xl text-white mb-2">
                Envíanos un mensaje
              </h2>
              <p className="text-showcase-text-secondary mb-8">
                Completa el formulario y te responderemos lo antes posible.
              </p>

              {formState === "success" ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-clash font-semibold text-xl text-white mb-2">
                    Abriendo tu correo
                  </h3>
                  <p className="text-showcase-text-secondary">
                    Preparamos tu mensaje en tu aplicación de correo. Envíalo desde ahí para que podamos responderte.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-showcase-text-secondary mb-1.5">
                        Nombre completo <span className="text-showcase-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-3 text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-showcase-text-secondary mb-1.5">
                        Correo electrónico <span className="text-showcase-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-3 text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-showcase-text-secondary mb-1.5">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+52 000 000 0000"
                        className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-3 text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-showcase-text-secondary mb-1.5">
                        Empresa / Organizacion
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa (opcional)"
                        className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-3 text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-showcase-text-secondary mb-1.5">
                      Tipo de solicitud <span className="text-showcase-accent">*</span>
                    </label>
                    <select
                      name="tipo"
                      required
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-showcase-accent transition-colors cursor-pointer"
                    >
                      <option value="">Selecciona una opcion</option>
                      {tiposSolicitud.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-showcase-text-secondary mb-1.5">
                      Mensaje <span className="text-showcase-accent">*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="¿Cómo podemos ayudarte?"
                      className="w-full bg-showcase-bg-card border border-showcase-border-subtle rounded-lg px-4 py-3 text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 gradient-accent text-white font-semibold py-3.5 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Preparar mensaje
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8 sticky top-28">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-showcase-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-showcase-accent" />
                    </div>
                    <div>
                      <span className="text-showcase-text-muted text-xs uppercase tracking-wider">Correo electrónico</span>
                      <a href={`mailto:${contactEmail}`} className="block text-white hover:text-showcase-accent transition-colors">
                        {contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-showcase-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-showcase-accent" />
                    </div>
                    <div>
                      <span className="text-showcase-text-muted text-xs uppercase tracking-wider">Oficina principal</span>
                      <p className="text-showcase-text-secondary">Torreón, Coahuila, México</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-showcase-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-showcase-accent" />
                    </div>
                    <div>
                      <span className="text-showcase-text-muted text-xs uppercase tracking-wider">Horario</span>
                      <p className="text-showcase-text-secondary">Lunes a Viernes, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-showcase-border-subtle mt-8 pt-6">
                  <span className="text-showcase-text-muted text-xs uppercase tracking-wider block mb-4">
                    Síguenos
                  </span>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Instagram, href: "https://instagram.com/showcasemex", label: "Instagram" },
                      { icon: Facebook, href: "https://facebook.com/ShowcaseMex", label: "Facebook" },
                      { icon: Youtube, href: "https://youtube.com/channel/UCKTtrga1LJwSDrGhvDaUkug", label: "YouTube" },
                      { icon: Twitter, href: "https://twitter.com/ShowcaseMex", label: "Twitter" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-showcase-bg-primary border border-showcase-border-subtle flex items-center justify-center text-showcase-text-muted hover:text-showcase-accent hover:border-showcase-accent hover:scale-110 transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de Contacto */}
      <section className="section-padding bg-showcase-bg-secondary">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-showcase-accent mb-3 block">
              ¿CÓMO PODEMOS AYUDARTE?
            </span>
            <h2 className="font-clash font-semibold text-2xl lg:text-3xl text-white">
              Encuentra el contacto adecuado
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactosEspecializados.map((contacto, i) => (
              <motion.div
                key={contacto.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-showcase-bg-card border border-showcase-border-subtle rounded-xl p-8 hover:border-showcase-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <contacto.icon className="w-10 h-10 text-showcase-accent mb-4" />
                <h3 className="font-clash font-semibold text-lg text-white mb-2">
                  {contacto.title}
                </h3>
                <p className="text-showcase-text-secondary text-sm leading-relaxed mb-5">
                  {contacto.text}
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 border-[1.5px] border-showcase-accent text-showcase-accent text-sm font-medium px-4 py-2 rounded-lg hover:bg-showcase-accent hover:text-white transition-all duration-300"
                >
                  {contacto.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-showcase-bg-primary">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-showcase-bg-card to-showcase-bg-elevated border border-showcase-border-subtle rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-clash font-semibold text-xl lg:text-2xl text-white mb-3">
                  No te pierdas ningún evento
                </h3>
                <p className="text-showcase-text-secondary text-sm leading-relaxed">
                  Suscríbete y recibe antes que nadie las noticias sobre próximos conciertos, preventas exclusivas y promociones especiales.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 bg-showcase-bg-primary border border-showcase-border-subtle rounded-lg px-4 py-3 text-white placeholder:text-showcase-text-muted focus:outline-none focus:border-showcase-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="gradient-accent text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02] shrink-0"
                  >
                    Suscribirme
                  </button>
                </form>
                <p className="text-showcase-text-muted text-xs mt-3">
                  {newsletterState === "success"
                    ? "Preparamos tu solicitud de suscripción en tu correo. Envíala para confirmarla."
                    : "Tu correo se abrirá para que confirmes la suscripción."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
