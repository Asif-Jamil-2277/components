export default function TravelHeroPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#17211d]">
      <section className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Find your next escape</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">The world is closer than you think.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#64716b] sm:text-lg">Thoughtfully planned journeys, unforgettable places, and the freedom to explore at your own pace.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#destinations" className="rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">Explore destinations</a>
            <a href="#about" className="rounded-full border border-[#cbd2cc] px-6 py-3 text-sm font-medium transition hover:bg-white">How it works</a>
          </div>
          <div className="mt-12 flex gap-8 border-t border-[#d8ddd8] pt-6">
            <div><p className="text-2xl font-semibold">120+</p><p className="mt-1 text-xs text-[#64716b]">Curated destinations</p></div>
            <div><p className="text-2xl font-semibold">4.9/5</p><p className="mt-1 text-xs text-[#64716b]">Traveller rating</p></div>
            <div><p className="text-2xl font-semibold">24/7</p><p className="mt-1 text-xs text-[#64716b]">Travel support</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-[#d8e5d8] sm:-right-8 sm:h-40 sm:w-40" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#c6d5c7] shadow-2xl shadow-emerald-950/10">
            <div className="flex aspect-[4/5] flex-col justify-between bg-gradient-to-br from-[#b6d0c3] via-[#d9d9bd] to-[#6d988b] p-7 sm:p-10">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#23483d]"><span>Field notes / 08</span><span>01—06</span></div>
              <div>
                <div className="mb-4 h-1 w-12 bg-[#23483d]" />
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#23483d]">Slow travel collection</p>
                <h2 className="mt-3 max-w-sm text-4xl font-medium leading-tight tracking-tight text-[#18392f] sm:text-5xl">Somewhere worth getting lost.</h2>
                <p className="mt-4 text-sm text-[#23483d]">Mountain air. Quiet mornings. Open roads.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8"><p className="text-xs text-[#64716b]">Featured journey</p><p className="mt-1 font-semibold">The Alpine Escape · 7 days</p></div>
        </div>
      </section>
      <section id="destinations" className="mx-auto max-w-7xl px-6 pb-16 lg:px-12"><p className="text-sm text-[#64716b]">Made for curious minds, not just checklists.</p></section>
    </main>
  );
}
