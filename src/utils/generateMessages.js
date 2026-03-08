const MESSAGES = [
  {
    id: "bonita",
    title: "Bonita",
    description:
      "Quería que hoy supieras lo bonita que eres, no solo por fuera, sino en todo lo que eres y haces."
  },
  {
    id: "fuerte",
    title: "Fuerte",
    description:
      "Me inspira mucho verte enfrentar todo con esa fortaleza. Eres más valiente de lo que crees."
  },
  {
    id: "especial",
    title: "Especial",
    description:
      "No hay otra persona como tú, Diana. Todo lo que haces tiene tu sello, y eso te hace única."
  },
  {
    id: "admirable",
    title: "Admirable",
    description:
      "Te admiro muchísimo. Ver lo que logras cada día me recuerda lo increíble que puedes llegar a ser."
  },
  {
    id: "brillante",
    title: "Brillante",
    description:
      "Tienes una luz que no se puede ignorar. Todo lo que tocas lo haces brillar, incluyéndome a mí."
  },
  {
    id: "valiente",
    title: "Valiente",
    description:
      "Cada vez que te veo enfrentar algo difícil me doy cuenta de lo valiente que eres. Eso me encanta."
  },
  {
    id: "alegria",
    title: "Alegría",
    description:
      "Tu sonrisa cambia el ambiente de cualquier lugar. No sabes cuánto bien le haces a quienes te rodean."
  },
  {
    id: "contigo",
    title: "Gracias",
    description:
      "Feliz día de la mujer, Diana. Gracias por existir y por ser exactamente como eres. Este ramo es para ti."
  }
];

export function generateMessages() {
  return MESSAGES.map((message, index) => ({
    ...message,
    flowerId: index + 1,
  }));
}
