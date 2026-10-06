import { TopBar, images } from "../shared"

export function BeforeAfter() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <TopBar label="The transformation" />
      <div className="absolute inset-x-[7%] bottom-[7%] top-[19%] grid grid-cols-2 overflow-hidden rounded-[2rem]">
        <div className="relative overflow-hidden grayscale">
          <img src={images.service} alt="" className="h-full w-full object-cover object-left" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-[#141517]">
            Before
          </span>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={images.service}
            alt=""
            className="h-full w-full scale-110 object-cover object-right saturate-150"
          />
          <span className="absolute bottom-4 right-4 rounded-full bg-[#16c64f] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-[#141517]">
            After
          </span>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />
      </div>
      <p className="absolute left-1/2 top-[48%] z-20 -translate-x-1/2 -rotate-6 rounded-full bg-[#ff4f18] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em]">
        Styled by Zee
      </p>
    </div>
  )
}
