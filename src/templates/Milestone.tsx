import { GrovehLogo } from "../shared"

export function Milestone() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between">
        <GrovehLogo dark />
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
          Growing together
        </span>
      </div>
      <div className="absolute left-1/2 top-[47%] h-[73%] w-[73%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.35rem] border-[#2d5fff]" />
      <div className="absolute left-[7%] top-[27%] z-10">
        <p className="text-[clamp(4.5rem,10cqi,8.5rem)] font-semibold leading-[0.72] tracking-[-0.085em] text-[#ff4f18]">
          10K
        </p>
        <p className="mt-5 max-w-[60%] text-[clamp(1.4rem,3cqi,2.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          connections
          <br />
          made on Groveh
        </p>
      </div>
      <div className="absolute -right-[10%] bottom-[7%] h-[39%] w-[39%] rounded-full bg-[#16c64f]" />
      <p className="absolute bottom-[7%] left-[7%] z-10 max-w-[50%] text-[9px] font-medium leading-4 text-[#141517]/55">
        Ten thousand reasons to keep discovering, offering and connecting.
      </p>
      <p className="absolute bottom-[13%] right-[5%] z-10 -rotate-12 text-[clamp(2rem,4cqi,3.5rem)] font-semibold tracking-[-0.05em]">
        Thank you!
      </p>
    </div>
  )
}
