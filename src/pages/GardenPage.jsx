import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GardenCanvas from "../components/garden/GardenCanvas";
import PetalsAnimation from "../components/garden/PetalsAnimation";
import MessageCard from "../components/message/MessageCard";
import FinalMessage from "../components/message/FinalMessage";
import Button from "../components/ui/Button";
import { useFlowers } from "../hooks/useFlowers";
import dianaPhoto from "../assets/images/diana.jpeg";
import ramoPhoto from "../assets/images/ramo.png";

export default function GardenPage() {
  const {
    flowers,
    activeFlower,
    revealFlower,
    revealedCount,
    totalFlowers,
    allFlowersRevealed
  } = useFlowers();
  const [showSpecialNote, setShowSpecialNote] = useState(false);

  return (
    <main className="garden-page">
      <PetalsAnimation />

      <motion.header
        className="garden-page__header"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="ramo-hero"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <img src={ramoPhoto} alt="Ramo de rosas para ti" className="ramo-hero__img" />
        </motion.div>

        <h1 className="garden-page__title">Feliz Día de la Mujer</h1>
        <p className="garden-page__subtitle">
          Cada rosa lleva un mensaje especial para ti.
          <span className="garden-page__subtitle-hint">Tócalas y descubre todo lo que quiero decirte.</span>
        </p>
      </motion.header>

      <section className="bouquet-experience">
        <GardenCanvas
          flowers={flowers}
          activeFlowerId={activeFlower?.flowerId ?? null}
          onRevealFlower={revealFlower}
        />

        <aside className="bouquet-experience__side" aria-live="polite">
          <p className="bouquet-experience__tag">Para ti, con mucho cariño</p>

          {/* Marco de foto de Diana */}
          <div className="diana-frame" aria-label="Foto de Diana">
            <div className="diana-frame__photo-wrap">
              <img
                src={dianaPhoto}
                alt="Diana Saenz Pahuara"
                className="diana-frame__photo"
              />
            </div>
            <p className="diana-frame__name">Diana Saenz Pahuara</p>
          </div>

          <section className="special-note" aria-live="polite">
            <Button
              className="btn btn--secondary"
              onClick={() => setShowSpecialNote((current) => !current)}
              aria-expanded={showSpecialNote}
              aria-controls="special-note-content"
            >
            {showSpecialNote ? "Ocultar mi mensaje" : "Leer mi mensaje para ti"}
            </Button>

            <AnimatePresence>
              {showSpecialNote && (
                <motion.p
                  id="special-note-content"
                  className="special-note__text"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  Diana, estoy muy feliz de que seas parte de mi vida.
                  Este ramo es mi forma de decirte que te admiro, que me alegras
                  el día y que hoy, más que nunca, quería que te sintieras especial.
                  Feliz día de la mujer.
                </motion.p>
              )}
            </AnimatePresence>
          </section>

          <MessageCard
            activeFlower={activeFlower}
            revealedCount={revealedCount}
            totalFlowers={totalFlowers}
          />

          <AnimatePresence>{allFlowersRevealed && <FinalMessage />}</AnimatePresence>
        </aside>
      </section>
    </main>
  );
}
