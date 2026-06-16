type BrandLogoProps = {
  size?: "sm" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "block h-9 w-auto object-contain object-left sm:h-10",
  lg: "block h-auto w-full max-w-[300px] object-contain sm:max-w-[360px]",
};

export default function BrandLogo({
  size = "sm",
  className = "",
}: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/tenshoku/logo.png"
      alt="転職サポート キリカエ"
      width={140}
      height={100}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}
