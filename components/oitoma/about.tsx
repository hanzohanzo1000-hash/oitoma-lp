import { SectionHeading } from "@/components/oitoma/section-heading";

export function About() {
  return (
    <section id="about" className="bg-brand-peach px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading label="About" title="オイトマとは" />

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted sm:text-lg sm:leading-loose">
          <p>
            オイトマは、退職を言い出せない方のための退職代行サービスです。
          </p>
          <div className="rounded-3xl border-2 border-brand-orange/20 bg-white px-6 py-8 pop-shadow">
            <p className="text-xl font-bold leading-relaxed text-brand-orange sm:text-2xl">
              退職は逃げではありません。
              <br />
              人生を前に進めるための選択です。
            </p>
          </div>
          <p>
            私たちは、お客様が安心して次の一歩を踏み出せるようサポートします。
          </p>
        </div>
      </div>
    </section>
  );
}
