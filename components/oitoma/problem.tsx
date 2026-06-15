import { CheckIcon } from "@/components/oitoma/icons";
import { SectionHeading } from "@/components/oitoma/section-heading";

const problems = [
  "退職したいけど言い出せない",
  "上司が怖い",
  "会社へ行くのがつらい",
  "精神的に限界を感じている",
  "引き止められそうで不安",
  "相談相手がいない",
];

const badgeColors = [
  "bg-brand-orange/15 text-brand-orange",
  "bg-brand-yellow/30 text-brand-orange-dark",
  "bg-brand-pink/15 text-brand-pink",
];

export function Problem() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Worries" title="このようなお悩みはありませんか？" />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <li
              key={problem}
              className="flex items-start gap-3 rounded-2xl border-2 border-border bg-brand-cream px-5 py-4 pop-shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${badgeColors[index % badgeColors.length]}`}
              >
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-base font-medium leading-relaxed text-foreground">
                {problem}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
