import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function IntroScreen({ onEnterGarden }) {
  return (
    <main className="intro-screen">
      <motion.section
        className="intro-screen__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="intro-screen__eyebrow">8 de marzo &middot; Día de la Mujer</p>

        <h1 className="intro-screen__title">Para ti</h1>

        <p className="intro-screen__subtitle">
          Preparé algo especial para ti. Cada rosa esconde un mensaje que quería decirte.
        </p>

        <div className="intro-screen__roses-deco" aria-hidden="true">
          &#127801;&#127801;&#127801;
        </div>

        <Button className="btn btn--primary" onClick={onEnterGarden}>
          Abrir tu ramo
        </Button>
      </motion.section>
    </main>
  );
}
