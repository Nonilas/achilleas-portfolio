interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-[var(--color-text-secondary)] serif-italic text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
