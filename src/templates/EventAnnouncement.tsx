import { TopBar } from "../shared"

export function EventAnnouncement() {
  return (
    <div className="relative h-full overflow-hidden bg-[#ff4f18] text-white">
      <TopBar label="Groveh pop-up" />
      <p className="absolute left-[7%] top-[20%] text-[clamp(3.2rem,7.3cqi,6.3rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
        Meet.
        <br />
        Shop.
        <br />
        <span className="text-[#141517]">Connect.</span>
      </p>
      <div className="absolute -right-[10%] top-[21%] h-[48%] w-[48%] rounded-full border-[1.4rem] border-[#2d5fff]" />
      <div className="absolute bottom-[7%] left-[7%] right-[7%] grid grid-cols-[auto_1fr] gap-5 border-t border-white/35 pt-5">
        <div className="text-center">
          <p className="text-3xl font-semibold leading-none">24</p>
          <p className="text-[8px] font-bold uppercase tracking-[0.16em]">Aug</p>
        </div>
        <div className="border-l border-white/35 pl-5">
          <p className="text-sm font-semibold">The Local Market</p>
          <p className="mt-1 text-[8px] leading-4 text-white/60">
            12PM · Freedom Park, Lagos
          </p>
        </div>
      </div>
    </div>
  )
}
