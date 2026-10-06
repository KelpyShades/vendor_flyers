import { GrovehLogo, Arrow, photos } from "../shared"

export function NewVendor() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-20 flex items-center justify-between">
        <GrovehLogo />
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Just landed
        </span>
      </div>
      <div className="absolute -right-[16%] top-[17%] h-[58%] w-[58%] rounded-full bg-[#2d5fff]" />
      <div className="absolute -left-[9%] bottom-[3%] h-[37%] w-[37%] rounded-full bg-[#ff4f18]" />
      <div className="absolute right-[8%] top-[22%] h-[56%] w-[45%] rotate-6 overflow-hidden rounded-[44%_44%_8%_8%] border-4 border-white">
        <img
          src={photos.product}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-[7%] top-[25%] z-10 w-[58%]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#16c64f]">
          Meet your new favourite
        </p>
        <p className="mt-4 text-[clamp(2.8rem,6cqi,5.4rem)] font-semibold leading-[0.8] tracking-[-0.07em]">
          New
          <br />
          <span className="text-[#ff4f18]">to the</span>
          <br />
          Groveh.
        </p>
      </div>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] z-20 flex items-center justify-between border-t border-white/25 pt-4">
        <div>
          <p className="text-sm font-semibold">Dew & Co.</p>
          <p className="text-[8px] text-white/50">Intentional skincare</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#16c64f] text-[#141517]">
          <Arrow />
        </span>
      </div>
    </div>
  )
}
