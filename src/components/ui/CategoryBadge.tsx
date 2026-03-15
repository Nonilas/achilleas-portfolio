interface CategoryBadgeProps {
  label: string;
  color: string;
}

export default function CategoryBadge({ label, color }: CategoryBadgeProps) {
  return (
    <span
      className="badge-category"
      style={{ backgroundColor: color, color: '#000' }}
    >
      {label}
    </span>
  );
}
