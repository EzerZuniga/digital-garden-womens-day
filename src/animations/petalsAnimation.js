export function createPetalItems(total = 20) {
  return Array.from({ length: total }, (_, index) => ({
    id: `petal-${index + 1}`,
    laneClass: `petal--lane-${(index % 8) + 1}`,
    sizeClass: `petal--size-${(index % 3) + 1}`
  }));
}

export const petalsLayerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

export const petalVariants = {
  hidden: {
    opacity: 0,
    y: "-10vh"
  },
  visible: (index) => ({
    opacity: [0, 0.85, 0.7, 0.5, 0],
    y: ["-8vh", "110vh"],
    x: [0, (index % 2 === 0 ? 22 : -22), (index % 2 === 0 ? 8 : -8), 0],
    rotate: [index * 15, index * 15 + 200, index * 15 + 340],
    transition: {
      duration: 9 + (index % 5),
      delay: index * 0.28,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear"
    }
  })
};
