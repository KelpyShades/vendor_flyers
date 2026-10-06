import { GrovehLogo, Arrow } from "../shared"

export function SellerCallout() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between">
        <GrovehLogo />
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
          For vendors
        </p>
      </div>
      <div className="absolute right-[7%] top-[20%] h-[24%] w-[24%] rotate-12 rounded-[1.4rem] bg-[#16c64f]" />
      <div className="absolute right-[20%] top-[31%] h-[18%] w-[18%] -rotate-12 rounded-full bg-[#2d5fff]" />
      <p className="absolute left-[7%] top-[22%] z-10 text-[clamp(3.2rem,7cqi,6rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
        Got
        <br />
        something
        <br />
        <span className="text-[#ff4f18]">good?</span>
      </p>
      <p className="absolute bottom-[19%] left-[7%] max-w-[55%] text-xs font-medium leading-5 text-white/60">
        Bring your products, food or services to people already looking.
      </p>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] flex items-center justify-between border-t border-white/25 pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#16c64f]">
          Start selling on Groveh
        </p>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#141517]">
          <Arrow />
        </span>
      </div>
    </div>
  )
}
