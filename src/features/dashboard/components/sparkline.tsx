interface SparklineProps {
  values: readonly number[];
  tone: "positive" | "negative";
}

export function Sparkline({ values, tone }: SparklineProps) {
  const safeValues = values.filter(Number.isFinite);
  if (safeValues.length < 2) return <div className="h-10" aria-hidden="true" />;

  const width = 164;
  const height = 42;
  const padding = 2;
  const min = Math.min(...safeValues);
  const max = Math.max(...safeValues);
  const spread = Math.max(max - min, 1);
  const step = (width - padding * 2) / (safeValues.length - 1);
  const points = safeValues.map((value, index) => ({
    x: padding + index * step,
    y: padding + ((max - value) / spread) * (height - padding * 2),
  }));
  const line = points.map(({ x, y }) => `${x},${y}`).join(" ");
  const area = `${padding},${height} ${line} ${width - padding},${height}`;
  const color = tone === "positive" ? "#16a45d" : "#e0444f";

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="h-10 w-full overflow-visible" aria-hidden="true" focusable="false">
      <polygon points={area} fill={color} opacity="0.09" />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
