import { motion } from "framer-motion";
import Card from "../ui/Card";

export default function FinalMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="final-message">
        <p className="final-message__title">Feliz dia de la mujer, Diana &#127801;</p>
        <p>
          Espero que este ramo te haya sacado una sonrisa. Solo queria que supieras
          lo mucho que te admiro y lo especial que eres para mi. Gracias por existir.
        </p>
      </Card>
    </motion.div>
  );
}
