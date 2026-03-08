import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "./pages/IntroScreen";
import GardenPage from "./pages/GardenPage";

export default function App() {
  const [hasEnteredGarden, setHasEnteredGarden] = useState(false);

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        {hasEnteredGarden ? (
          <motion.div
            key="garden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <GardenPage />
          </motion.div>
        ) : (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <IntroScreen onEnterGarden={() => setHasEnteredGarden(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
