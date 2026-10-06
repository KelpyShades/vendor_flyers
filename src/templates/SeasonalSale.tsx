import { TopBar, images } from "../shared"

export function SeasonalSale() {
  return (
    <div className="relative h-full overflow-hidden bg-[#ff4f18] text-white">
      <TopBar label="Seasonal sale" />
      <div className="absolute left-1/2 top-[23%] h-[45%] w-[45%] -translate-x-1/2 overflow-hidden rounded-full border-[0.7rem] border-[#f4f0e8]">
        <img src={images.product} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="absolute left-[5%] right-[5%] top-[57%] text-center text-[clamp(3rem,7cqi,6.3rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
        Fresh finds,
        <br />
        <span className="text-[#141517]">less spend.</span>
      </p>
      <p className="absolute bottom-[7%] left-[7%] rounded-full bg-[#16c64f] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#141517]">
        Up to 30% off
      </p>
      <p className="absolute bottom-[8%] right-[7%] text-[8px] font-semibold uppercase tracking-[0.15em] text-white/60">
        This week only
      </p>
    </div>
  )
}
