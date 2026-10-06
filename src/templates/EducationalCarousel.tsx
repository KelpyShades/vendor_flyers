import { TopBar } from "../shared"

export function EducationalCarousel() {
  return (
    <div className="relative h-full overflow-hidden bg-[#2d5fff] text-white">
      <TopBar label="Seller school · 01/05" />
      <p className="absolute left-[7%] top-[24%] text-[clamp(3rem,7cqi,6rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
        3 ways
        <br />
        to make
        <br />
        <span className="text-[#16c64f]">buyers stop.</span>
      </p>
      <div className="absolute -bottom-[14%] -right-[8%] h-[57%] w-[57%] rounded-full bg-[#ff4f18]" />
      <div className="absolute bottom-[7%] left-[7%] flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-[#141517]">
          1
        </span>
        <p className="text-[9px] font-semibold uppercase leading-4 tracking-[0.14em]">
          Lead with one
          <br />
          clear benefit
        </p>
      </div>
      <div className="absolute bottom-[8%] right-[7%] flex gap-1">
        {[true, false, false, false, false].map((active, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full ${active ? "w-5 bg-white" : "w-1.5 bg-white/35"}`}
          />
        ))}
      </div>
    </div>
  )
}
