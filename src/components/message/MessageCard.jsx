import Card from "../ui/Card";

export default function MessageCard({ activeFlower, revealedCount, totalFlowers }) {
  return (
    <Card className="message-card">
      <p className="message-card__progress">
        {revealedCount} de {totalFlowers} rosas abiertas
      </p>

      {activeFlower ? (
        <>
          <h2 className="message-card__title">{activeFlower.title}</h2>
          <p className="message-card__description">{activeFlower.description}</p>
        </>
      ) : (
        <>
          <h2 className="message-card__title">Toca una rosa</h2>
          <p className="message-card__description">
            Cada rosa tiene algo que queria decirte. Son solo para ti, Diana.
          </p>
        </>
      )}
    </Card>
  );
}
