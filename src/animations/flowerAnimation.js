export const flowerFieldVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

export const flowerVariants = {
  hidden: {
    opacity: 0,
    y: 140,
    scale: 0.2,
    rotate: -10
  },
  visible: (index) => ({
    opacity: 1,
    y: [0, -3, 0, -2, 0],
    scale: 1,
    rotate: [
      index % 2 === 0 ? -2.5 : 2.5,
      index % 2 === 0 ? -1 : 1,
      index % 2 === 0 ? -3 : 3,
      index % 2 === 0 ? -1.5 : 1.5,
      index % 2 === 0 ? -2.5 : 2.5
    ],
    transition: {
      opacity: { duration: 0.7, delay: index * 0.06 },
      scale: { duration: 0.9, delay: index * 0.06, type: "spring", stiffness: 110, damping: 14 },
      y: {
        duration: 4 + (index % 3),
        delay: index * 0.06 + 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      },
      rotate: {
        duration: 5 + (index % 4),
        delay: index * 0.06 + 0.9,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  })
};

export const flowerInteractionMotion = {
  whileHover: {
    y: -10,
    scale: 1.06,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18
    }
  },
  whileTap: {
    scale: 0.97,
    y: -4
  }
};
