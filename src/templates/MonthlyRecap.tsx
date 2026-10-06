import { TopBar } from "../shared"

export function MonthlyRecap() {
  return (
    <div className="relative h-full overflow-hidden bg-[#ff4f18] text-white">
      <TopBar label="July recap" />
      <p className="absolute left-[7%] top-[20%] text-[clamp(3rem,7cqi,6rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
        A good
        <br />
        month in
        <br />
        <span className="text-[#141517]">the Groveh.</span>
      </p>
      <div className="absolute bottom-[8%] left-[7%] right-[7%] grid grid-cols-3 gap-2">
        {[
          ["126", "New vendors", "bg-[#2d5fff]"],
          ["4.8K", "New finds", "bg-[#16c64f] text-[#141517]"],
          ["18", "Events", "bg-[#f4f0e8] text-[#141517]"],
        ].map(([number, label, style]) => (
          <div key={label} className={`rounded-[1.2rem] p-4 ${style}`}>
            <p className="text-xl font-semibold tracking-tight sm:text-2xl">{number}</p>
            <p className="mt-2 text-[6px] font-bold uppercase leading-3 tracking-[0.1em] opacity-60">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
