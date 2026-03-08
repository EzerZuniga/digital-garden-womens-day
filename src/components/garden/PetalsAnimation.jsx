import { createPetalItems } from "../../animations/petalsAnimation";

const petals = createPetalItems(12);

export default function PetalsAnimation() {
  return (
    <div className="petals-layer" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={`petal ${petal.laneClass} ${petal.sizeClass}`}
          style={{
            "--petal-delay": `${petal.delay}s`,
            "--petal-duration": `${petal.duration}s`,
            "--petal-drift": `${petal.drift}px`
          }}
        />
      ))}
    </div>
  );
}
