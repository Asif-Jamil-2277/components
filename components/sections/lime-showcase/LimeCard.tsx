import Image from "next/image"
import { LimeItem } from "./lime.data"

interface LimeCardProps {
  item: LimeItem
  active: boolean
  position: number
}

export function LimeCard({ item, active, position }: LimeCardProps) {
  return (
    <div
      className={`
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[32px]
        bg-slate-900
        shadow-2xl
        transition-all
        duration-700
        ${active ? "scale-105 shadow-[0_30px_70px_rgba(0,0,0,0.3)] ring-2 ring-black/10" : "scale-95 opacity-85 blur-[0.5px]"}
      `}
    >
      {/* Background Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 260px, 320px"
        priority
      />

      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Bottom Glassmorphic Content Card */}
      <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/75 p-4 backdrop-blur-md border border-white/40 shadow-lg">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            {item.title}
          </h3>
          <span className="text-xs font-mono font-bold text-slate-500">
            {item.number}
          </span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-600 line-clamp-2">
          {item.subtitle}
        </p>
      </div>
    </div>
  )
}
