import { GrovehLogo, Arrow, photos } from "../shared"

export function SeasonalPromo() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-20 flex items-center justify-between">
        <GrovehLogo dark />
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em]">
          Weekend picks
        </p>
      </div>
      <div className="absolute left-[7%] right-[7%] top-[19%] h-[44%] overflow-hidden rounded-[1.8rem]">
        <img src={photos.food} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent" />
        <p className="absolute bottom-[10%] left-[7%] text-[clamp(2rem,4.8cqi,4rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white">
          Good finds.
          <br />
          Better weekend.
        </p>
      </div>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] grid grid-cols-[1fr_auto] items-end gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#ff4f18]">
            This week only
          </p>
          <p className="mt-2 max-w-[80%] text-sm font-semibold leading-tight sm:text-base">
            Explore fresh offers from vendors around you.
          </p>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#2d5fff] text-white">
          <Arrow />
        </span>
      </div>
      <div className="absolute -bottom-[15%] -left-[10%] h-[35%] w-[35%] rounded-full bg-[#16c64f]" />
    </div>
  )
}
