import { motion } from "framer-motion";
import Flower from "./Flower";
import { flowerFieldVariants } from "../../animations/flowerAnimation";

export default function GardenCanvas({ flowers, activeFlowerId, onRevealFlower }) {
  return (
    <motion.section
      className="garden-canvas"
      aria-label="Ramo de flores"
      variants={flowerFieldVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="garden-canvas__glow" aria-hidden="true" />
      <div className="bouquet" aria-label="Ramo interactivo de flores">
        <div className="bouquet__flowers">
          {flowers.map((flower, index) => (
            <Flower
              key={flower.flowerId}
              flower={flower}
              index={index}
              isActive={activeFlowerId === flower.flowerId}
              onReveal={onRevealFlower}
            />
          ))}
        </div>
        {/* Caja cilíndrica blanca — estilo floristería profesional */}
        <div className="bouquet__box" aria-hidden="true">
          <div className="bouquet__box-top" />
          <div className="bouquet__box-body" />
          <div className="bouquet__box-label" />
        </div>
      </div>
    </motion.section>
  );
}
