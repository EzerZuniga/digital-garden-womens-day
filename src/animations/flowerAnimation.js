// Configuración por slot: rotación base (°) y escala para simular profundidad.
// Framer Motion maneja estos valores inline (el CSS transform no aplica).
const SLOT_CONFIG = [
  { rotate: -20, scale: 0.87 }, // slot 1 — fila trasera izq extremo
  { rotate:  -6, scale: 0.91 }, // slot 2 — fila trasera izq centro
  { rotate:   7, scale: 0.91 }, // slot 3 — fila trasera der centro
  { rotate:  20, scale: 0.87 }, // slot 4 — fila trasera der extremo
  { rotate: -28, scale: 1.00 }, // slot 5 — fila delantera izq extremo
  { rotate: -12, scale: 1.00 }, // slot 6 — fila delantera izq centro
  { rotate:   1, scale: 1.04 }, // slot 7 — fila delantera centro (protagonista)
  { rotate:  15, scale: 1.00 }, // slot 8 — fila delantera der
];

export const flowerFieldVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

export const flowerVariants = {
  hidden: { opacity: 0, y: 90, scale: 0.25 },
  visible: (index) => {
    const { rotate: base, scale } = SLOT_CONFIG[index] ?? { rotate: 0, scale: 1 };
    const bob = 1.6; // oscilación suave ± grados sobre la rotación base
    return {
      opacity: 1,
      y: [0, -5, 0],
      scale,
      rotate: [base - bob, base + bob, base - bob],
      transition: {
        opacity: { duration: 0.55, delay: index * 0.08 },
        scale:   { duration: 0.85, delay: index * 0.08, type: "spring", stiffness: 110, damping: 14 },
        y:       { duration: 4 + (index % 3), delay: index * 0.08 + 0.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        rotate:  { duration: 5 + (index % 4), delay: index * 0.08 + 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      },
    };
  },
};

export const flowerInteractionMotion = {
  whileHover: {
    y: -14,
    transition: { type: "spring", stiffness: 300, damping: 18 }
  },
  whileTap: { y: -6 },
};
