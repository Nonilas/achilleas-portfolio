interface TechBadgeProps {
  name: string;
  highlighted?: boolean;
}

export default function TechBadge({ name, highlighted = false }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium border-2 border-black transition-colors ${
        highlighted
          ? 'bg-[var(--color-accent-lime)] text-black'
          : 'bg-transparent text-[var(--color-text)]'
      }`}
    >
      {name}
    </span>
  );
}
