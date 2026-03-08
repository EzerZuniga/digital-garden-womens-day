export function createPetalItems(total = 12) {
  return Array.from({ length: total }, (_, index) => ({
    id: `petal-${index + 1}`,
    laneClass: `petal--lane-${(index % 8) + 1}`,
    sizeClass: `petal--size-${(index % 3) + 1}`,
    delay: index * 0.7,
    duration: 9 + (index % 5),
    drift: index % 2 === 0 ? 22 : -22
  }));
}
