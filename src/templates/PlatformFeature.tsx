import { GrovehLogo } from "../shared"

export function PlatformFeature() {
  return (
    <div className="relative h-full overflow-hidden bg-[#16c64f] text-[#141517]">
      <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between">
        <GrovehLogo dark />
        <span className="rounded-full bg-[#141517] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
          Feature drop
        </span>
      </div>
      <p className="absolute left-[7%] top-[22%] text-[clamp(2.6rem,5.7cqi,5rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
        Your store.
        <br />
        Your link.
        <br />
        <span className="text-white">Your moment.</span>
      </p>
      <div className="absolute -bottom-[26%] left-1/2 h-[68%] w-[68%] -translate-x-1/2 rounded-t-[6rem] bg-[#141517] p-[6%]">
        <div className="h-full rounded-t-[3.5rem] bg-[#f4f0e8] p-[9%]">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-[#ff4f18]" />
            <div>
              <p className="text-[8px] font-bold">Aunty T’s Kitchen</p>
              <p className="text-[6px] text-[#141517]/45">Food · Lagos</p>
            </div>
          </div>
          <div className="mt-4 h-16 rounded-xl bg-[#2d5fff]" />
        </div>
      </div>
      <p className="absolute bottom-[7%] left-[7%] z-20 text-[8px] font-semibold uppercase tracking-[0.17em] text-white">
        Set up. Share. Sell.
      </p>
    </div>
  )
}
