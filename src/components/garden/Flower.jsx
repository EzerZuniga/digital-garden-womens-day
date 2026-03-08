import { motion } from "framer-motion";
import { flowerInteractionMotion, flowerVariants } from "../../animations/flowerAnimation";
import FlowerSvg from "./FlowerSvg";

export default function Flower({ flower, index, isActive, onReveal }) {
  const flowerClassName = [
    "flower",
    `flower--slot-${index + 1}`,
    isActive ? "is-active" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.button
      type="button"
      className={flowerClassName}
      variants={flowerVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={flowerInteractionMotion.whileHover}
      whileTap={flowerInteractionMotion.whileTap}
      style={{ transformOrigin: "bottom center" }}
      onHoverStart={() => onReveal(flower.flowerId)}
      onFocus={() => onReveal(flower.flowerId)}
      onClick={() => onReveal(flower.flowerId)}
      aria-label={`Descubrir mensaje de ${flower.title}`}
    >
      <FlowerSvg flowerId={flower.flowerId} />
      <span className="flower__label" aria-hidden="true">{flower.title}</span>
    </motion.button>
  );
}
