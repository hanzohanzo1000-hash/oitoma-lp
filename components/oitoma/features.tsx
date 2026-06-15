import {
  ClockIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  MessageIcon,
  ReceiptIcon,
  ZapIcon,
} from "@/components/oitoma/icons";
import { SectionHeading } from "@/components/oitoma/section-heading";

const features = [
  {
    icon: ZapIcon,
    title: "即日対応",
    description: "お急ぎの場合も、スピーディーに対応いたします。",
    color: "bg-brand-orange/15 text-brand-orange",
  },
  {
    icon: MessageIcon,
    title: "LINEで完結",
    description: "ご相談から手続きまで、LINEでスムーズに進められます。",
    color: "bg-brand-yellow/30 text-brand-orange-dark",
  },
  {
    icon: MapPinIcon,
    title: "全国対応",
    description: "日本全国どこからでもご利用いただけます。",
    color: "bg-brand-pink/15 text-brand-pink",
  },
  {
    icon: ClockIcon,
    title: "24時間相談受付",
    description: "深夜・早朝でも、いつでもご相談いただけます。",
    color: "bg-brand-orange/15 text-brand-orange",
  },
  {
    icon: HeartHandshakeIcon,
    title: "相談無料",
    description: "ご相談は無料。まずはお気軽にお問い合わせください。",
    color: "bg-brand-yellow/30 text-brand-orange-dark",
  },
  {
    icon: ReceiptIcon,
    title: "わかりやすい料金体系",
    description: "事前に料金をご説明。追加費用の心配はありません。",
    color: "bg-brand-pink/15 text-brand-pink",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-brand-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Features" title="オイトマが選ばれる理由" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border-2 border-border bg-white p-7 pop-shadow-sm transition-transform hover:-translate-y-1"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}
              >
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
