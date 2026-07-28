import { useState } from "react";
import { Link } from "react-router-dom";

const consentKey = "showcase-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(consentKey));

  const saveConsent = (value: "accepted" | "essential") => {
    localStorage.setItem(consentKey, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-xl border border-showcase-border-subtle bg-showcase-bg-card p-5 shadow-card-hover" aria-label="Preferencias de cookies">
      <p className="text-sm leading-relaxed text-showcase-text-secondary">
        Usamos almacenamiento local esencial para recordar tus preferencias. Consulta nuestro <Link to="/aviso-de-privacidad" className="text-showcase-accent underline">aviso de privacidad</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => saveConsent("essential")} className="rounded-lg border border-showcase-border-subtle px-4 py-2 text-sm font-medium text-white">Solo esenciales</button>
        <button type="button" onClick={() => saveConsent("accepted")} className="gradient-accent rounded-lg px-4 py-2 text-sm font-semibold text-white">Aceptar</button>
      </div>
    </aside>
  );
}
