const features = [
  {
    title: "Earnings summaries",
    description:
      "Every report distilled to what moved the stock — revenue, guidance, and surprises in plain language.",
  },
  {
    title: "Bull vs Bear analysis",
    description:
      "See both sides before you decide. Structured arguments for and against, not noise.",
  },
  {
    title: "Key metrics tracking",
    description:
      "Track the numbers that matter across quarters. Margins, growth, and guidance at a glance.",
  },
  {
    title: "AI investment memos",
    description:
      "Generate concise memos you can save, share, or revisit when the next quarter drops.",
  },
];

const valueProps = [
  {
    stat: "12+ hrs",
    label: "Save hours every earnings season",
    detail: "Skip the transcript grind. Get the signal in one pass.",
  },
  {
    stat: "60 sec",
    label: "Read less. Understand more.",
    detail: "Dense filings, distilled to what actually moves the thesis.",
  },
  {
    stat: "100%",
    label: "Built for conviction",
    detail: "Structured output you can act on — not another news feed.",
  },
];

const testimonials = [
  {
    quote:
      "I used to block two hours per name on earnings night. StockMemo cuts that to minutes without losing depth.",
    role: "Portfolio Manager",
    firm: "Multi-strategy fund",
  },
  {
    quote:
      "The bull/bear framing alone is worth it. I finally have a consistent way to pressure-test my view.",
    role: "Independent investor",
    firm: "14-year market participant",
  },
  {
    quote:
      "Clean, fast, institutional-grade. This is what earnings workflow should feel like in 2026.",
    role: "Research Analyst",
    firm: "Long/short equity desk",
  },
];

const trustedBy = [
  "Family offices",
  "Buy-side analysts",
  "Independent PMs",
  "Research teams",
  "Retail allocators",
];

export default function Home() {
  return (
    <div className="relative min-h-full bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-120px] h-[720px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute right-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex min-h-full max-w-6xl flex-col px-6">
        <header className="flex items-center justify-between py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.04]">
              <span className="font-mono text-xs font-medium tracking-tight">
                SM
              </span>
            </div>
            <span className="text-sm font-medium tracking-tight">StockMemo</span>
          </div>
          <nav className="hidden items-center gap-8 sm:flex">
            <a
              href="#features"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Product
            </a>
            <a
              href="#proof"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Customers
            </a>
            <a
              href="#waitlist"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              Join waitlist
            </a>
          </nav>
        </header>

        <main className="flex flex-1 flex-col">
          <section className="flex flex-col items-center pt-12 pb-20 text-center sm:pt-20 sm:pb-28">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                Now accepting early access
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              Understand any earnings report in under 60 seconds.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/55 sm:text-xl">
              Built for investors who value time.
            </p>

            <div id="waitlist" className="mt-10 flex flex-col items-center gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all hover:opacity-90 hover:shadow-[0_0_60px_rgba(255,255,255,0.18)]"
              >
                Join the waitlist
              </a>
              <p className="text-sm text-white/35">
                Early access opening soon. No spam.
              </p>
            </div>

            {/* Product preview */}
            <div className="relative mt-20 w-full max-w-4xl">
              <div className="absolute inset-x-8 -bottom-6 h-24 rounded-full bg-white/[0.06] blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <span className="ml-3 font-mono text-[11px] text-white/30">
                    stockmemo.app / AAPL Q1 FY26
                  </span>
                </div>
                <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                  <div className="bg-black p-6 text-left sm:col-span-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Summary
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      Revenue beat by 2.1%. Services growth accelerated.
                      Management raised full-year guidance. Margin expansion
                      driven by mix shift — key watch item for next quarter.
                    </p>
                  </div>
                  <div className="bg-black p-6 text-left">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Key metrics
                    </p>
                    <dl className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <dt className="text-white/40">Revenue</dt>
                        <dd className="font-mono text-emerald-400">+8.2%</dd>
                      </div>
                      <div className="flex justify-between text-sm">
                        <dt className="text-white/40">EPS</dt>
                        <dd className="font-mono text-emerald-400">Beat</dd>
                      </div>
                      <div className="flex justify-between text-sm">
                        <dt className="text-white/40">Guidance</dt>
                        <dd className="font-mono text-white/70">Raised</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social proof strip */}
          <section
            id="proof"
            className="border-y border-white/10 py-14"
          >
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              Trusted by serious investors
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustedBy.map((label) => (
                <span
                  key={label}
                  className="text-sm font-medium tracking-tight text-white/25 transition-colors hover:text-white/45"
                >
                  {label}
                </span>
              ))}
            </div>
          </section>

          {/* Value props */}
          <section className="py-24">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {valueProps.map((prop) => (
                <article
                  key={prop.label}
                  className="bg-black px-8 py-10 text-center sm:px-6 sm:py-12"
                >
                  <p className="font-mono text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {prop.stat}
                  </p>
                  <h2 className="mt-4 text-base font-medium tracking-tight text-white sm:text-lg">
                    {prop.label}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {prop.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="border-t border-white/10 py-24">
            <div className="mb-14 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                From the desk
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Read less. Understand more.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote
                  key={item.role}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <p className="text-sm leading-7 text-white/60">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-sm font-medium text-white">
                      {item.role}
                    </p>
                    <p className="mt-1 text-xs text-white/35">{item.firm}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Features */}
          <section id="features" className="border-t border-white/10 py-24">
            <div className="mb-16 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                Capabilities
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Everything you need after the bell rings.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/45">
                Save hours every earnings season with a workflow designed for
                speed, clarity, and conviction.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group bg-black p-8 transition-colors hover:bg-white/[0.02] sm:p-10"
                >
                  <div className="mb-6 h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-white/40" />
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="border-t border-white/10 py-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center sm:px-16 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)]"
              />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  Trusted by serious investors
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Stop reading 80-page filings. Start understanding them.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/45">
                  Join the waitlist and be first when we open access for the
                  next earnings season.
                </p>
                <a
                  href="#waitlist"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/[0.04]">
              <span className="font-mono text-[10px] font-medium">SM</span>
            </div>
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} StockMemo
            </span>
          </div>
          <p className="text-sm text-white/30">
            Read less. Understand more.
          </p>
        </footer>
      </div>
    </div>
  );
}
