
const metrics = [
  {
    label: "PROJECTS COMPLETED",
    value: "248",
    change: "+18.6%",
    bars: [30, 48, 38, 65, 52, 75, 60, 90, 70, 100],
  },
  {
    label: "CLIENT SATISFACTION",
    value: "96.8",
    suffix: "%",
    change: "+4.2%",
    bars: [42, 55, 48, 65, 58, 72, 68, 85, 78, 100],
  },
  {
    label: "TOTAL REVENUE",
    value: "₹12.4",
    suffix: "L",
    change: "+24.8%",
    bars: [25, 35, 30, 48, 42, 60, 56, 72, 85, 100],
  },
];

export function AnimatedStatsSection() {
  return (
    <section className="stats-motion relative isolate overflow-hidden bg-[#10120F] px-5 py-20 font-[Poppins] text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-lime-300/[0.07] blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
              <p className="text-[10px] font-semibold tracking-[0.23em] text-lime-300 sm:text-xs">
                PERFORMANCE OVERVIEW
              </p>
            </div>

            <h2 className="text-3xl font-medium leading-[1.13] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Numbers tell a story.
              <span className="block text-neutral-500">
                Make yours count.
              </span>
            </h2>
          </div>

          <div className="max-w-xs border-l border-white/15 pl-5">
            <p className="text-sm leading-7 text-neutral-400">
              A visual snapshot of growth, performance and the
              metrics that move a business forward.
            </p>
            <p className="mt-4 text-[10px] tracking-[0.17em] text-neutral-600">
              SAMPLE ANALYTICS / 2026
            </p>
          </div>
        </div>

        {/* Main analytics panel */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#171A16]">
          {/* Panel header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] px-5 py-5 sm:px-8">
            <div>
              <p className="text-sm font-medium text-white">
                Growth overview
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Illustrative dashboard data
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              <span className="text-[10px] text-neutral-300">
                Preview mode
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {metrics.map((metric, index) => (
              <article
                key={metric.label}
                className={`stats-card group min-w-0 p-6 sm:p-7 lg:p-8 ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="max-w-[180px] text-[10px] font-medium tracking-[0.16em] text-neutral-500">
                    {metric.label}
                  </p>

                  <span className="rounded-full border border-lime-300/20 bg-lime-300/[0.07] px-2 py-1 text-[10px] font-medium text-lime-300">
                    {metric.change}
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap items-baseline gap-1">
                  <p className="stats-number text-4xl font-medium tracking-[-0.065em] text-white sm:text-5xl lg:text-[52px]">
                    {metric.value}
                  </p>
                  {metric.suffix && (
                    <span className="text-2xl font-medium text-lime-300">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                {/* Mini bar chart */}
                <div
                  className="mt-7 flex h-[76px] items-end gap-1.5"
                  aria-label={`Illustrative trend for ${metric.label}`}
                >
                  {metric.bars.map((height, barIndex) => (
                    <div
                      key={barIndex}
                      className="stats-bar relative flex-1 overflow-hidden rounded-t-[4px] bg-white/[0.055]"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 100 + barIndex * 65}ms`,
                      }}
                    >
                      <div
                        className="absolute inset-0 origin-bottom scale-y-0 rounded-t-[4px] bg-gradient-to-t from-lime-500 to-lime-200 transition-transform duration-700 ease-out group-hover:scale-y-100"
                        style={{
                          transitionDelay: `${barIndex * 35}ms`,
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-4">
                  <span className="text-[10px] text-neutral-600">
                    LAST 10 PERIODS
                  </span>
                  <span className="text-xs text-neutral-400 transition-colors group-hover:text-lime-300">
                    Trend ↗
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom highlight */}
          <div className="grid gap-6 border-t border-white/[0.08] bg-white/[0.02] px-5 py-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium text-white">
                Progress is built one decision at a time.
              </p>
              <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-500">
                Use this layout to showcase verified business metrics,
                campaign performance or product analytics.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              <span>Designed for clarity</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] tracking-[0.16em] text-neutral-600">
            ANALYTICS UI / 002
          </p>
          <p className="text-xs text-neutral-600">
            Data-driven design. Thoughtful motion.
          </p>
        </div>
      </div>
    </section>
  );
}
