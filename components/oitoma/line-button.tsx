import { LINE_URL, LineIcon } from "@/components/oitoma/icons";

type LineButtonProps = {
  className?: string;
  size?: "default" | "large";
};

export function LineButton({ className = "", size = "default" }: LineButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base sm:text-lg"
      : "px-6 py-3.5 text-sm sm:text-base";

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-line-green font-bold text-white pop-shadow-sm transition-all hover:bg-line-green-hover hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_var(--brand-yellow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${sizeClasses} ${className}`}
    >
      <LineIcon className="h-5 w-5 shrink-0" />
      LINEで無料相談する
    </a>
  );
}
