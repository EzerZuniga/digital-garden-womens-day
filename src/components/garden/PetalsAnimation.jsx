import { motion } from "framer-motion";
import {
  createPetalItems,
  petalVariants,
  petalsLayerVariants
} from "../../animations/petalsAnimation";

const petals = createPetalItems(20);

export default function PetalsAnimation() {
  return (
    <motion.div
      className="petals-layer"
      aria-hidden="true"
      variants={petalsLayerVariants}
      initial="hidden"
      animate="visible"
    >
      {petals.map((petal, index) => (
        <motion.span
          key={petal.id}
          className={`petal ${petal.laneClass} ${petal.sizeClass}`}
          variants={petalVariants}
          custom={index}
          initial="hidden"
          animate="visible"
        />
      ))}
    </motion.div>
  );
}
