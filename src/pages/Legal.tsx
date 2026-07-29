import PageHero from "../components/PageHero";

interface LegalProps {
  type: "privacy" | "terms";
}

export default function Legal({ type }: LegalProps) {
  const privacy = type === "privacy";
  const title = privacy ? "Aviso de privacidad" : "Términos y condiciones";

  return (
    <div>
      <PageHero label="SHOWCASE ENTRETENIMIENTO" title={title} height="35vh" />
      <section className="section-padding bg-showcase-bg-primary">
        <article className="container-max max-w-4xl space-y-8 text-showcase-text-secondary leading-relaxed">
          <p className="text-sm">Última actualización: 28 de julio de 2026.</p>
          {privacy ? <PrivacyContent /> : <TermsContent />}
          <p>Para cualquier duda relacionada con este sitio, escríbenos a <a className="text-showcase-accent underline" href="mailto:">gmail.com</a>.</p>
        </article>
      </section>
    </div>
  );
}

function PrivacyContent() {
  return <>
    <Section title="Datos y finalidad">El sitio no almacena formularios ni crea cuentas. Cuando eliges contactarnos o suscribirte, se abre tu aplicación de correo y tú decides si envías el mensaje. Los datos que incluyas se usan únicamente para atender tu solicitud.</Section>
    <Section title="Cookies y preferencias">Usamos almacenamiento local esencial para recordar tu elección sobre cookies. No usamos cookies publicitarias ni analíticas en esta versión del sitio.</Section>
    <Section title="Tus derechos">Puedes solicitar acceso, corrección o eliminación de la información que nos hayas enviado escribiendo al correo de contacto.</Section>
  </>;
}

function TermsContent() {
  return <>
    <Section title="Uso del sitio">La información de eventos, recintos y disponibilidad puede cambiar sin previo aviso. Confirma siempre los detalles antes de realizar una compra.</Section>
    <Section title="Boletos y terceros">Los enlaces de venta dirigen a plataformas de terceros. Cada compra queda sujeta a las condiciones, disponibilidad y políticas de la plataforma correspondiente.</Section>
    <Section title="Propiedad intelectual">Los contenidos, marcas, fotografías y elementos gráficos del sitio no pueden utilizarse sin autorización de sus titulares.</Section>
  </>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="font-clash mb-2 text-2xl font-semibold text-white">{title}</h2><p>{children}</p></section>;
}
