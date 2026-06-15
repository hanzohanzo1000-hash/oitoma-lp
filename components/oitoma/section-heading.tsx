type SectionHeadingProps = {
  label: string;
  title: string;
};

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-sm font-bold tracking-wide text-brand-orange">
        {label}
      </span>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
