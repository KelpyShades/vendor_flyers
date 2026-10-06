import { GrovehLogo, photos } from "../shared"

export function CategoryCampaign() {
  return (
    <div className="relative h-full overflow-hidden bg-[#2d5fff] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-20 flex items-center justify-between">
        <GrovehLogo />
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
          All in one place
        </p>
      </div>
      <div className="absolute left-[7%] top-[23%] z-20">
        <p className="text-[clamp(2.8rem,6cqi,5.1rem)] font-semibold leading-[0.83] tracking-[-0.065em]">
          Find what
          <br />
          fits your
          <br />
          <span className="text-[#16c64f]">every day.</span>
        </p>
      </div>
      <div className="absolute -bottom-[18%] -right-[8%] h-[74%] w-[74%] rounded-full bg-[#ff4f18]" />
      <div className="absolute bottom-[8%] right-[6%] grid w-[58%] grid-cols-2 gap-2">
        <div className="aspect-square overflow-hidden rounded-full border-4 border-white">
          <img
            src={photos.food}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-[1.5rem] border-4 border-white">
          <img
            src={photos.product}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-start-2 aspect-square -translate-y-1 overflow-hidden rounded-full border-4 border-white">
          <img
            src={photos.service}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="absolute bottom-[8%] left-[7%] text-[8px] font-semibold uppercase leading-4 tracking-[0.18em]">
        Food
        <br />
        Products
        <br />
        Services
      </p>
    </div>
  )
}
