interface MetricBoxProps {
  label: string;
  value: string;
}

export default function MetricBox({ label, value }: MetricBoxProps) {
  return (
    <div className="border-2 border-black p-4 min-w-[120px]">
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}
