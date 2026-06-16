import type { Metadata } from "next";
import Header from "@/components/tenshoku/Header";
import Hero from "@/components/tenshoku/Hero";
import Problems from "@/components/tenshoku/Problems";
import BlackCompanyDiagnosis from "@/components/tenshoku/BlackCompanyDiagnosis";
import About from "@/components/tenshoku/About";
import Flow from "@/components/tenshoku/Flow";
import Recommend from "@/components/tenshoku/Recommend";
import FAQ from "@/components/tenshoku/FAQ";
import CTA from "@/components/tenshoku/CTA";

export const metadata: Metadata = {
  title: "20代のキャリア相談 | LINE無料相談",
  description:
    "自分に合った仕事がわからない、給与を上げたい、転職が初めてで不安——20代のキャリア選択を無料サポート。LINE相談から無料面談まで。",
};

export default function TenshokuPage() {
  return (
    <div className="bg-brand-bg text-slate-800">
      <Header />
      <Hero />
      <Problems />
      <BlackCompanyDiagnosis />
      <About />
      <Flow />
      <Recommend />
      <FAQ />
      <CTA />
      <footer className="border-t border-sky-100 bg-white px-4 py-6 text-center text-xs leading-relaxed text-slate-500">
        <p>© {new Date().getFullYear()} 転職サポート キリカエ</p>
        <p className="mt-1">
          ※当サービスは転職エージェントではありません。20代向けのキャリア支援サービスです。
        </p>
      </footer>
    </div>
  );
}
