import type { ReactNode } from "react"

export const photos = {
  food: "https://images.unsplash.com/photo-1664993101841-036f189719b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200",
  product: "https://images.unsplash.com/photo-1781687282766-d6df9ef4c7fc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200",
  service: "https://images.unsplash.com/photo-1729005732908-de02acdeca5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200",
}
export const images = photos;

export function GrovehLogo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      src={`https://groveh.app/logos/logo_text_${dark ? "black" : "white"}.png`}
      alt="Groveh"
      className="h-5 w-auto object-contain sm:h-6"
    />
  )
}
export const Logo = GrovehLogo;

export function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TopBar({
  dark = false,
  label,
}: {
  dark?: boolean
  label: string
}) {
  return (
    <div className="absolute left-[7%] right-[7%] top-[7%] z-30 flex items-center justify-between">
      <GrovehLogo dark={dark} />
      <p
        className={`text-[8px] font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#141517]/50" : "text-white/60"
        }`}
      >
        {label}
      </p>
    </div>
  )
}

export type Category =
  | "All"
  | "Spotlight"
  | "Growth"
  | "Campaign"
  | "Education"
  | "Holiday"

export function CardFrame({
  title,
  category,
  children,
}: {
  title: string
  category: Category
  children: ReactNode
}) {
  return (
    <article className="template-item">
      <div className="template-card @container relative aspect-square overflow-hidden">
        {children}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#141517]">{title}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#141517]/45">
            {category} · Instagram post
          </p>
        </div>
        <span className="rounded-full border border-[#141517]/15 px-3 py-1 text-[9px] font-semibold text-[#141517]/55">
          1080 × 1080
        </span>
      </div>
    </article>
  )
}
