import { GrovehLogo } from "../shared"

export function Testimonial() {
  return (
    <div className="relative h-full overflow-hidden bg-[#ff4f18] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-10 flex items-center justify-between">
        <GrovehLogo />
        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Found on Groveh
        </span>
      </div>
      <div className="absolute -left-[16%] top-[15%] h-[55%] w-[55%] rounded-full border-[1.3rem] border-[#16c64f]" />
      <p className="absolute left-[7%] top-[21%] text-[clamp(5rem,12cqi,9.5rem)] font-semibold leading-none text-[#2d5fff]">
        “
      </p>
      <p className="absolute left-[12%] right-[8%] top-[39%] z-10 text-[clamp(1.7rem,3.8cqi,3.2rem)] font-medium leading-[1.02] tracking-[-0.045em]">
        I found the perfect caterer in ten minutes. The food? Even better.
      </p>
      <div className="absolute bottom-[8%] left-[7%] right-[7%] flex items-center justify-between border-t border-white/30 pt-4">
        <div>
          <p className="text-xs font-semibold">Nana A.</p>
          <p className="mt-1 text-[8px] text-white/60">Groveh community</p>
        </div>
        <div className="flex gap-1 text-[#f4f0e8]">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="h-2 w-2 rotate-45 bg-[#f4f0e8]" />
          ))}
        </div>
      </div>
    </div>
  )
}
