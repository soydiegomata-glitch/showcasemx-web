import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Galeria from "./pages/Galeria";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import FeriaTorreon from "./pages/FeriaTorreon";
import Contacto from "./pages/Contacto";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/feria-torreon" element={<FeriaTorreon />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
