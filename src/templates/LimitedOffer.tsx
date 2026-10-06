import { TopBar, images } from "../shared"

export function LimitedOffer() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <TopBar label="Limited-time offer" />
      <div className="absolute right-[6%] top-[21%] h-[54%] w-[51%] overflow-hidden rounded-[2rem]">
        <img src={images.food} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute -left-[11%] bottom-[4%] h-[42%] w-[42%] rounded-full bg-[#2d5fff]" />
      <p className="absolute left-[7%] top-[26%] z-10 text-[clamp(3.4rem,8cqi,6.8rem)] font-semibold leading-[0.75] tracking-[-0.08em]">
        24
        <br />
        <span className="text-[#ff4f18]">hours</span>
        <br />
        only.
      </p>
      <div className="absolute bottom-[7%] right-[7%] z-20 rounded-full bg-[#16c64f] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-[#141517]">
        Order now
      </div>
    </div>
  )
}
