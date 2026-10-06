import { TopBar } from "../shared"

export function HolidayCard({
  occasion,
  headline,
  note,
  background,
  accent,
  dark = false,
}: {
  occasion: string
  headline: string
  note: string
  background: string
  accent: string
  dark?: boolean
}) {
  return (
    <div
      className={`relative h-full overflow-hidden ${dark ? "text-[#141517]" : "text-white"}`}
      style={{ background }}
    >
      <TopBar dark={dark} label={occasion} />
      <div
        className="absolute left-1/2 top-[46%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5rem]"
        style={{ borderColor: accent }}
      />
      <div
        className="absolute -right-[12%] bottom-[3%] h-[35%] w-[35%] rotate-12 rounded-4xl"
        style={{ background: accent }}
      />
      <p className="absolute left-[7%] right-[7%] top-[30%] z-10 text-center text-[clamp(3rem,7cqi,6rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
        {headline}
      </p>
      <p
        className={`absolute bottom-[8%] left-[7%] max-w-[52%] text-[8px] font-semibold uppercase leading-4 tracking-[0.16em] ${
          dark ? "text-[#141517]/55" : "text-white/60"
        }`}
      >
        {note}
      </p>
    </div>
  )
}
