import { TopBar } from "../shared"

export function CustomerReview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#16c64f] text-[#141517]">
      <TopBar dark label="Customer review" />
      <p className="absolute left-[7%] top-[18%] text-[clamp(5rem,12cqi,10rem)] font-semibold leading-none text-white">
        “
      </p>
      <p className="absolute left-[11%] right-[8%] top-[37%] text-[clamp(1.7rem,3.9cqi,3.25rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
        Fast, easy and full of vendors I actually want to buy from.
      </p>
      <div className="absolute bottom-[8%] left-[7%] right-[7%] flex items-center justify-between border-t border-[#141517]/20 pt-5">
        <div>
          <p className="text-xs font-bold">Morenike O.</p>
          <p className="mt-1 text-[8px] text-[#141517]/50">Verified buyer</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="h-2 w-2 rotate-45 bg-[#141517]" />
          ))}
        </div>
      </div>
    </div>
  )
}
