type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function SectionImage({
  src,
  alt,
  priority = false,
}: SectionImageProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/80 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={800}
        height={480}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
