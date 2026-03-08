import { useMemo, useState } from "react";
import { generateMessages } from "../utils/generateMessages";

export function useFlowers() {
  const flowers = useMemo(() => generateMessages(), []);
  const [activeFlowerId, setActiveFlowerId] = useState(null);
  const [revealedFlowerIds, setRevealedFlowerIds] = useState([]);

  const revealFlower = (flowerId) => {
    setActiveFlowerId(flowerId);
    setRevealedFlowerIds((currentIds) => {
      if (currentIds.includes(flowerId)) {
        return currentIds;
      }

      return [...currentIds, flowerId];
    });
  };

  const activeFlower = useMemo(
    () => flowers.find((flower) => flower.flowerId === activeFlowerId) ?? null,
    [flowers, activeFlowerId]
  );

  const revealedCount = revealedFlowerIds.length;
  const allFlowersRevealed = revealedCount === flowers.length;

  return {
    flowers,
    activeFlower,
    revealFlower,
    revealedCount,
    totalFlowers: flowers.length,
    allFlowersRevealed
  };
}
