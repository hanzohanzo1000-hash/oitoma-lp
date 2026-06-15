import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: "header" | "footer";
};

const variantClasses = {
  header: "h-9 w-auto sm:h-10",
  footer: "h-8 w-auto opacity-90",
};

export function Logo({
  className = "",
  width = 140,
  height = 100,
  priority,
  variant = "header",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="退職代行オイトマ"
      width={width}
      height={height}
      className={`block object-contain object-left ${variantClasses[variant]} ${className}`}
      priority={priority}
    />
  );
}
