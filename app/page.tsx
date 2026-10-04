import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileText,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UploadCloud,
  UserPlus,
  Workflow,
} from "lucide-react";

const components = [
  {
    title: "Auth Form",
    description: "Sign in and sign up authentication experience.",
    href: "/forms/auth",
    icon: LockKeyhole,
    category: "Authentication",
    status: "Ready",
    accent: "#2563eb",
  },
  {
    title: "Contact Form",
    description: "Clean contact and enquiry form for modern websites.",
    href: "/forms/contact",
    icon: Mail,
    category: "Communication",
    status: "Ready",
    accent: "#7c3aed",
  },
  {
    title: "Registration Form",
    description:
      "Modern account creation form with validation-ready fields.",
    href: "/forms/registration",
    icon: UserPlus,
    category: "Authentication",
    status: "Ready",
    accent: "#059669",
  },
  {
    title: "Forgot Password",
    description:
      "Secure password recovery and reset-link experience.",
    href: "/forms/forgot-password",
    icon: KeyRound,
    category: "Authentication",
    status: "Ready",
    accent: "#ea580c",
  },
  {
    title: "OTP Verification",
    description:
      "Secure one-time password verification with resend and countdown.",
    href: "/forms/otp",
    icon: ShieldCheck,
    category: "Authentication",
    status: "Ready",
    accent: "#2563eb",
  },
  {
    title: "Checkout Form",
    description:
      "Professional payment and order checkout experience.",
    href: "/forms/checkout",
    icon: CreditCard,
    category: "Commerce",
    status: "Ready",
    accent: "#0f766e",
  },
  {
    title: "Multi-Step Wizard",
    description:
      "Guided multi-step form with progress tracking and review.",
    href: "/forms/wizard",
    icon: Workflow,
    category: "Forms",
    status: "Ready",
    accent: "#7c3aed",
  },
  {
    title: "File Upload",
    description:
      "Drag-and-drop document upload with validation and progress.",
    href: "/forms/file-upload",
    icon: UploadCloud,
    category: "Utility",
    status: "Ready",
    accent: "#0891b2",
  },
  {
    title: "Booking Form",
    description:
      "Premium appointment scheduling with date and time selection.",
    href: "/forms/booking",
    icon: CalendarDays,
    category: "Scheduling",
    status: "Ready",
    accent: "#2563eb",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <FileText className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950">
                Form Library
              </p>

              <p className="hidden text-[11px] text-slate-400 sm:block">
                Reusable UI Components
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="hidden sm:inline">
              Component Collection
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span>Active</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Modern Form Components
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            A reusable library of
            <span className="block text-slate-400">
              professional forms.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Production-ready form experiences designed for modern
            websites and applications. Responsive, accessible,
            animated and easy to customize.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat
            value={components.length.toString().padStart(2, "0")}
            label="Components"
          />

          <Stat
            value="100%"
            label="Responsive"
          />

          <Stat
            value="TS"
            label="Type Safe"
          />
        </div>
      </section>

      {/* Components */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Components
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Browse the collection
            </h2>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            {components.length} available
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => {
            const Icon = component.icon;

            return (
              <Link
                key={component.href}
                href={component.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                {/* Accent */}
                <div
                  className="absolute left-0 top-0 h-full w-[2px] opacity-70 transition-all duration-300 group-hover:w-1"
                  style={{
                    backgroundColor: component.accent,
                  }}
                />

                <div className="flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${component.accent}10`,
                      color: component.accent,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700" />
                </div>

                <div className="mt-7">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-950">
                      {component.title}
                    </h3>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="text-[11px] font-medium text-slate-400">
                      {component.category}
                    </span>
                  </div>

                  <p className="min-h-[48px] text-sm leading-6 text-slate-500">
                    {component.description}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />

                    <span className="text-xs font-medium text-slate-400">
                      {component.status}
                    </span>
                  </div>

                  <span
                    className="text-xs font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      color: component.accent,
                    }}
                  >
                    Preview
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            Form Library — Reusable UI Components
          </p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-l border-slate-200 pl-4">
      <p className="text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-400">
        {label}
      </p>
    </div>
  );
}