import { LINE_URL, LineIcon } from "@/components/oitoma/icons";

export function MobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-brand-yellow bg-brand-orange px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_24px_rgba(240,122,7,0.35)] md:hidden"
      role="complementary"
      aria-label="スマートフォン用LINE相談ボタン"
    >
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-line-green py-4 text-base font-bold text-white shadow-lg shadow-black/15 transition-colors active:bg-line-green-hover"
      >
        <LineIcon className="h-5 w-5 shrink-0" />
        LINEで無料相談する
      </a>
    </div>
  );
}
