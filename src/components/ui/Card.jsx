export default function Card({ children, className = "" }) {
  const cardClassName = ["card", className].filter(Boolean).join(" ");

  return <article className={cardClassName}>{children}</article>;
}
