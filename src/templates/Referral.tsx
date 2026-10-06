import { TopBar, Arrow } from "../shared"

export function Referral() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <TopBar dark label="Groveh rewards" />
      <div className="absolute -left-[12%] top-[23%] h-[54%] w-[54%] rounded-full bg-[#ff4f18]" />
      <div className="absolute -right-[9%] top-[38%] h-[47%] w-[47%] rounded-full bg-[#2d5fff]" />
      <p className="absolute left-[7%] right-[7%] top-[25%] z-10 text-center text-[clamp(3rem,7cqi,6rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
        Good finds
        <br />
        are better
        <br />
        <span className="text-white">shared.</span>
      </p>
      <div className="absolute bottom-[7%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#16c64f] px-5 py-3 whitespace-nowrap">
        <p className="text-[9px] font-bold uppercase tracking-[0.13em]">
          Invite a friend · Earn rewards
        </p>
        <Arrow />
      </div>
    </div>
  )
}
