import { TopBar } from "../shared"

export function AppAnnouncement() {
  return (
    <div className="relative h-full overflow-hidden bg-[#2d5fff] text-white">
      <TopBar label="App update" />
      <p className="absolute left-[7%] top-[21%] z-10 text-[clamp(2.7rem,6cqi,5.2rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
        Save it.
        <br />
        Find it.
        <br />
        <span className="text-[#16c64f]">Love it later.</span>
      </p>
      <div className="absolute -bottom-[23%] right-[5%] h-[69%] w-[48%] rounded-t-[4rem] bg-[#141517] p-[5%]">
        <div className="h-full rounded-t-[2.4rem] bg-[#f4f0e8] p-[9%]">
          <div className="h-2 w-16 rounded-full bg-[#141517]/15" />
          <div className="mt-5 aspect-square rounded-2xl bg-[#ff4f18]" />
          <div className="mt-3 h-2 w-full rounded-full bg-[#141517]/10" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-[#141517]/10" />
        </div>
      </div>
      <p className="absolute bottom-[8%] left-[7%] max-w-[35%] text-[8px] font-semibold uppercase leading-4 tracking-[0.15em] text-white/60">
        Introducing saved vendors
      </p>
    </div>
  )
}
