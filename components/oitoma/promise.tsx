import { ShieldIcon } from "@/components/oitoma/icons";

const promises = [
  "無理な勧誘は行いません",
  "ご相談だけでも歓迎します",
  "お客様に寄り添った対応を心掛けます",
  "個人情報は厳重に管理します",
];

export function Promise() {
  return (
    <section className="bg-brand-orange px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
            Promise
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            オイトマの約束
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {promises.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border-2 border-white/30 bg-white px-5 py-5 pop-shadow"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/40 text-brand-orange">
                <ShieldIcon className="h-4 w-4" />
              </span>
              <span className="text-base font-medium leading-relaxed text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
