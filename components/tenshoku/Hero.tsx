import LineButton from "./LineButton";
import BrandLogo from "./BrandLogo";

export default function Hero() {
  return (
    <section id="top" className="bg-brand-bg px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <BrandLogo size="lg" />
          </div>
          <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            自分に合った仕事、
            <br />
            <span className="text-sky-500">一緒に見つけませんか？</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            向いている仕事がわからない、給与を上げたい、転職が初めてで不安…。
            そんな20代の方のキャリア選択を、無料でサポートします。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <LineButton size="lg" label="LINEで無料相談する" />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            相談無料・面談も無料・しつこい勧誘なし
          </p>
        </div>
      </div>
    </section>
  );
}
