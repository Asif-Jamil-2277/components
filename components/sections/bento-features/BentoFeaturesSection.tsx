
const imagePath = "/images/bento";

export function BentoFeaturesSection() {
  return (
    <section className="bg-[#F0F1F2] px-4 py-16 font-[Poppins] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.24em] text-blue-700 sm:text-xs">
              ENGINEERED FOR WHATS NEXT
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#151719] sm:text-5xl lg:text-[58px]">
              Intelligence in motion.
              <span className="block text-neutral-400">
                Designed for tomorrow.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500">
            A closer look at the technology, materials and thinking
            shaping a more intelligent driving experience.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="bento-grid-animate grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[132px] lg:gap-3">

          {/* 01 — Heading tile */}
          <article className="relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-[20px] bg-white p-6 sm:col-span-2 sm:min-h-[175px] lg:col-span-5 lg:row-span-1 lg:min-h-0 lg:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="text-[10px] font-medium tracking-[0.2em] text-neutral-400">
                FUTURE MOBILITY / 01
              </span>
              <span className="text-xs text-neutral-400">2026</span>
            </div>

            <h3 className="max-w-md text-2xl font-medium leading-[1.12] tracking-[-0.055em] text-[#191B1D] sm:text-3xl">
              Technology that moves you forward.
            </h3>
          </article>

          {/* 02 — Sensor detail */}
          <article
            className="group relative min-h-[245px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#E7F2FA] to-[#A9D5F0] bg-cover bg-center p-5 transition duration-500 hover:shadow-lg sm:min-h-[290px] lg:col-span-3 lg:row-span-2 lg:min-h-0"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(240,248,255,.10), rgba(10,30,48,.12)), url('${imagePath}/sensor-detail.jpg')`,
            }}
          >
            <div className="relative z-10 flex items-start justify-between gap-2">
              <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-700">
                SAFETY SYSTEMS
              </span>
              <span className="rounded-full bg-white/80 px-2 py-1 text-[10px] text-slate-700">
                02
              </span>
            </div>

            <div className="absolute inset-x-5 bottom-5 z-10">
              <h3 className="max-w-[190px] text-xl font-semibold leading-tight tracking-tight text-slate-900">
                Precision at every turn.
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-700">
                Smarter sensing. Faster response.
              </p>
            </div>
          </article>

          {/* 03 — Battery / energy visual */}
          <article
            className="group relative min-h-[300px] overflow-hidden rounded-[20px] bg-[#15191D] bg-cover bg-center p-6 transition duration-500 hover:shadow-2xl sm:col-span-2 sm:min-h-[350px] lg:col-span-4 lg:row-span-3 lg:min-h-0"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(12,17,22,.38), rgba(12,17,22,.08) 45%, rgba(12,17,22,.75)), url('${imagePath}/battery-tech.jpg')`,
            }}
          >
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70">
                ENERGY ENGINEERING
              </span>
              <span className="text-xs text-white/60">03 / 06</span>
            </div>

            <div className="absolute inset-x-6 bottom-6 z-10">
              <p className="mb-2 text-xs text-blue-300">
                Built around efficiency
              </p>
              <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                More power. Less compromise.
              </h3>
              <p className="mt-3 max-w-xs text-xs leading-6 text-white/65">
                Explore intelligent energy systems built for the road ahead.
              </p>
            </div>

            <div className="pointer-events-none absolute -right-10 top-1/3 h-40 w-40 rounded-full border border-white/15 transition duration-700 group-hover:scale-125" />
          </article>

          {/* 04 — Main vehicle image */}
          <article
            className="group relative min-h-[340px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#E6EAED] to-[#C7D1D9] bg-cover bg-center transition duration-700 hover:shadow-xl sm:col-span-2 sm:min-h-[430px] lg:col-span-5 lg:row-span-2 lg:min-h-0"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,.02) 35%, rgba(10,18,28,.55)), url('${imagePath}/vehicle-main.jpg')`,
            }}
          >
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[10px] font-medium tracking-wide text-slate-700 backdrop-blur-md">
              INTELLIGENT BY DESIGN
            </div>

            <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-3">
              <div>
                <p className="mb-2 text-[10px] font-medium tracking-[0.18em] text-white/75">
                  FEATURED TECHNOLOGY
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  A new perspective on mobility.
                </h3>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:rotate-45">
                ↗
              </span>
            </div>
          </article>

          {/* 05 — Statistics */}
          <article className="flex min-h-[150px] flex-col justify-between rounded-[20px] bg-[#191B1E] p-6 text-white transition duration-300 hover:bg-[#20242A] sm:min-h-[175px] lg:col-span-3 lg:row-span-1 lg:min-h-0">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.18em] text-white/55">
                EFFICIENCY INDEX
              </span>
              <span className="text-xs text-blue-300">05</span>
            </div>

            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-5xl font-medium tracking-[-0.065em] sm:text-6xl">
                  74<span className="text-blue-400">%</span>
                </p>
                <p className="mt-1 text-xs text-white/55">
                  Illustrative concept metric
                </p>
              </div>
              <div className="mb-2 flex h-10 items-end gap-1">
                {[30, 48, 37, 65, 52, 80].map((height, index) => (
                  <span
                    key={index}
                    className="w-1.5 rounded-full bg-blue-400/80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </article>

          {/* 06 — Brand / identity tile */}
          <article className="flex min-h-[140px] items-center justify-center gap-3 rounded-[20px] bg-white p-6 sm:min-h-[160px] lg:col-span-4 lg:row-span-1 lg:min-h-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#197BC0] text-xl font-semibold text-white">
              N
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-[-0.07em] text-[#181B1F] sm:text-3xl">
                NEXORA
              </p>
              <p className="mt-1 text-[9px] tracking-[0.22em] text-neutral-400">
                MOBILITY SYSTEMS
              </p>
            </div>
          </article>

          {/* 07 — Technical instrument */}
          <article className="flex min-h-[180px] flex-col justify-between rounded-[20px] bg-white p-5 sm:min-h-[210px] lg:col-span-3 lg:row-span-1 lg:min-h-0">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.16em] text-neutral-400">
                PERFORMANCE
              </span>
              <span className="text-xs text-neutral-400">07</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="relative flex h-20 w-28 items-center justify-center overflow-hidden">
                <div className="absolute top-4 h-20 w-20 rounded-full border-[7px] border-neutral-100 border-b-blue-600 border-l-blue-300 rotate-[-35deg]" />
                <span className="relative mt-5 text-lg font-semibold tracking-tight text-slate-800">
                  4.8
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">Response</p>
                <p className="mt-1 text-[10px] text-neutral-400">
                  Concept reading
                </p>
              </div>
            </div>
          </article>

          {/* 08 — Abstract material palette */}
          <article className="relative flex min-h-[140px] overflow-hidden rounded-[20px] bg-white sm:min-h-[160px] lg:col-span-3 lg:row-span-1 lg:min-h-0">
            <div className="w-1/3 bg-gradient-to-br from-[#178AC7] to-[#1662A0] transition duration-500 group-hover:scale-105" />
            <div className="w-1/3 bg-[#7E8DA2]" />
            <div className="w-1/3 bg-[#E1E4E5]" />
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium text-slate-700">
              Material / 08
            </div>
          </article>

          {/* 09 — Engine detail image */}
          <article
            className="group relative min-h-[200px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#D8E9F3] to-[#9AB8C8] bg-cover bg-center transition duration-500 hover:shadow-lg sm:col-span-2 sm:min-h-[240px] lg:col-span-2 lg:row-span-1 lg:min-h-0"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(10,20,30,.04), rgba(10,20,30,.25)), url('${imagePath}/engine-detail.jpg')`,
            }}
          >
            <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-slate-800 backdrop-blur-md">
              ENGINEERING / 09
            </div>
          </article>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-300/80 pt-5">
          <p className="text-[10px] font-medium tracking-[0.18em] text-neutral-500">
            NEXORA / DESIGN EXPLORATION
          </p>
          <p className="text-xs text-neutral-500">
            Form follows function.
          </p>
        </div>
      </div>
    </section>
  );
}
