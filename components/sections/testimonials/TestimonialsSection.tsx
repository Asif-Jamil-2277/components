
const testimonials = [
  {
    id: "01",
    quote:
      "The entire experience felt considered, from the first conversation to the final delivery.",
    name: "Olivia Bennett",
    role: "Founder, Studio North",
    initials: "OB",
    color: "bg-[#E8DCCB]",
    tag: "BRAND EXPERIENCE",
  },
  {
    id: "02",
    quote:
      "They brought clarity to a complex project and turned our ideas into something genuinely useful.",
    name: "Daniel Carter",
    role: "Product Lead, Form & Co.",
    initials: "DC",
    color: "bg-[#D9E2D5]",
    tag: "PRODUCT DESIGN",
  },
  {
    id: "03",
    quote:
      "A rare combination of thoughtful design, attention to detail and a practical approach to solving problems.",
    name: "Sophia Mitchell",
    role: "Director, Common Ground",
    initials: "SM",
    color: "bg-[#E7DDEB]",
    tag: "DIGITAL STRATEGY",
  },
];

export function TestimonialsSection() {
  return (
    <section className="testimonial-motion overflow-hidden bg-[#F8F6F1] px-5 py-20 font-[Poppins] text-[#25251F] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Editorial heading */}
        <div className="grid gap-8 border-b border-[#DFDDD5] pb-10 md:grid-cols-[1fr_300px] md:items-end lg:pb-14">
          <div>
            <p className="mb-5 text-[10px] font-semibold tracking-[0.23em] text-[#8A7656] sm:text-xs">
              WORDS THAT MATTER / 003
            </p>

            <h2 className="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Good work speaks.
              <span className="block font-normal text-[#99968D]">
                People make it meaningful.
              </span>
            </h2>
          </div>

          <div className="md:pb-2">
            <div className="mb-4 h-px w-12 bg-[#9B7951]" />
            <p className="max-w-sm text-sm leading-7 text-[#77766F]">
              Every successful collaboration starts with listening
              and grows through trust, clear thinking and thoughtful work.
            </p>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <article className="testimonial-card group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#25251F] p-7 text-[#FAF8F2] sm:p-10 lg:col-span-7 lg:min-h-[440px] lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/[0.07] transition duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/[0.08] transition duration-700 group-hover:rotate-12" />

            <div className="relative flex items-center justify-between gap-3">
              <span className="text-[10px] tracking-[0.19em] text-white/55">
                SELECTED TESTIMONIAL
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] text-white/65">
                {testimonials[0].tag}
              </span>
            </div>

            <div className="relative my-12">
              <span
                className="block font-serif text-7xl leading-[0.8] text-[#D5B68D] sm:text-8xl"
                aria-hidden="true"
              >
                “
              </span>

              <blockquote className="mt-5 max-w-2xl text-2xl font-normal leading-[1.4] tracking-[-0.035em] sm:text-3xl lg:text-[38px]">
                {testimonials[0].quote}
              </blockquote>
            </div>

            <div className="relative flex items-center gap-4 border-t border-white/15 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8DCCB] text-sm font-semibold text-[#4A4033]">
                {testimonials[0].initials}
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium">
                  {testimonials[0].name}
                </p>
                <p className="mt-1 text-xs text-white/50">
                  {testimonials[0].role}
                </p>
              </div>

              <span className="ml-auto text-2xl text-[#D5B68D] transition duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </article>

          {/* Supporting testimonials */}
          <div className="grid gap-4 lg:col-span-5">
            {testimonials.slice(1).map((testimonial) => (
              <article
                key={testimonial.id}
                className="testimonial-card group flex min-h-[220px] flex-col justify-between rounded-[28px] border border-[#E4E1D9] bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#C9B89E] hover:shadow-[0_20px_50px_rgba(50,45,35,0.06)] sm:p-8 lg:min-h-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-medium tracking-[0.18em] text-[#A09A8E]">
                    / {testimonial.id}
                  </span>
                  <span className="text-2xl text-[#B29A77] transition duration-300 group-hover:rotate-12">
                    “
                  </span>
                </div>

                <blockquote className="my-6 text-lg leading-[1.6] tracking-[-0.025em] text-[#383831] sm:text-xl">
                  {testimonial.quote}
                </blockquote>

                <div className="flex items-center gap-3 border-t border-[#ECEAE4] pt-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-[#454238] ${testimonial.color}`}
                  >
                    {testimonial.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[#25251F]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-[#929087]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#DFDDD5] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-[#858278]">
            Every perspective adds something worth learning from.
          </p>

          <span className="text-[10px] font-medium tracking-[0.18em] text-[#8A7656]">
            BUILT ON TRUST. BACKED BY PEOPLE.
          </span>
        </div>
      </div>
    </section>
  );
}
