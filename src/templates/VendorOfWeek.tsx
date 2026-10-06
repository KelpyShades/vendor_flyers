import { TopBar, images } from "../shared"

export function VendorOfWeek() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <TopBar dark label="Vendor of the week · 07" />
      <div className="absolute left-[7%] top-[21%] h-[67%] w-[55%] overflow-hidden rounded-t-[10rem]">
        <img src={images.food} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute -right-[13%] top-[18%] h-[43%] w-[43%] rounded-full bg-[#ff4f18]" />
      <div className="absolute bottom-[9%] right-[7%] z-10 w-[43%] bg-[#2d5fff] p-[6%] text-white">
        <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#16c64f]">
          This week’s pick
        </p>
        <p className="mt-3 text-[clamp(1.6rem,3.5cqi,2.8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
          Aunty T’s Kitchen
        </p>
        <p className="mt-4 text-[8px] leading-4 text-white/60">
          Big flavour. Bigger portions. Made in Lagos.
        </p>
      </div>
      <p className="absolute bottom-[7%] left-[7%] -rotate-90 origin-bottom-left text-[7px] font-semibold uppercase tracking-[0.2em]">
        Meet the makers
      </p>
    </div>
  )
}
