import { TopBar } from "../shared"

export function MarketplaceStats() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <TopBar label="The marketplace in motion" />
      <div className="absolute left-[7%] right-[7%] top-[20%] grid grid-cols-2 gap-3">
        {[
          ["10K", "Connections", "bg-[#ff4f18] text-white"],
          ["850", "Local vendors", "bg-[#2d5fff] text-white"],
        ].map(([number, label, style]) => (
          <div key={label} className={`rounded-[1.5rem] p-[10%] ${style}`}>
            <p className="text-[clamp(2.5rem,6cqi,5rem)] font-semibold leading-none tracking-[-0.07em]">
              {number}
            </p>
            <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.15em] opacity-60">
              {label}
            </p>
          </div>
        ))}
        <div className="col-span-2 flex items-end justify-between rounded-[1.5rem] bg-[#16c64f] p-[7%] text-[#141517]">
          <div>
            <p className="text-[clamp(2.5rem,6cqi,5rem)] font-semibold leading-none tracking-[-0.07em]">
              42K+
            </p>
            <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.15em] opacity-55">
              Products discovered
            </p>
          </div>
          <div className="flex h-14 items-end gap-1.5">
            {[30, 45, 38, 62, 76, 94].map((height) => (
              <span
                key={height}
                className="w-2 rounded-t-full bg-[#141517]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="absolute bottom-[6%] left-[7%] text-[8px] text-white/40">
        Sample campaign statistics
      </p>
    </div>
  )
}
