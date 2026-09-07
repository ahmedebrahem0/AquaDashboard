export function CardTitle({ id, title, subtitle, extra }: { id: string; title: string; subtitle: string; extra?: React.ReactNode }) {
  return <div className="card-heading"><div><h2 id={id}>{title}</h2><p>{subtitle}</p></div>{extra}</div>;
}
