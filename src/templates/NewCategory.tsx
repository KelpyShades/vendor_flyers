import { TopBar, images } from "../shared"

export function NewCategory() {
  return (
    <div className="relative h-full overflow-hidden bg-[#2d5fff] text-white">
      <TopBar label="New category" />
      <div className="absolute -left-[17%] top-[19%] h-[48%] w-[48%] rounded-full border-[1.4rem] border-[#16c64f]" />
      <p className="absolute left-[7%] top-[23%] z-10 text-[clamp(3.5rem,8cqi,7rem)] font-semibold leading-[0.74] tracking-[-0.08em]">
        Home
        <br />
        <span className="text-[#ff4f18]">& living.</span>
      </p>
      <div className="absolute bottom-[8%] right-[7%] h-[45%] w-[46%] rotate-3 overflow-hidden rounded-[1.8rem] border-4 border-white">
        <img src={images.product} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="absolute bottom-[9%] left-[7%] max-w-[34%] text-[9px] font-medium leading-4 text-white/60">
        Fresh finds for every corner of your space.
      </p>
    </div>
  )
}
