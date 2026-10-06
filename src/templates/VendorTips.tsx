import { TopBar } from "../shared"

export function VendorTips() {
  return (
    <div className="relative h-full overflow-hidden bg-[#16c64f] text-[#141517]">
      <TopBar dark label="Vendor notes · 03" />
      <div className="absolute left-[7%] right-[7%] top-[20%] rounded-[2rem] bg-[#f4f0e8] p-[8%] shadow-[12px_12px_0_#141517]">
        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#ff4f18]">
          Quick tip
        </p>
        <p className="mt-5 text-[clamp(2rem,4.6cqi,3.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
          Show the detail buyers can almost feel.
        </p>
        <div className="mt-6 h-px bg-[#141517]/15" />
        <p className="mt-5 text-[9px] leading-4 text-[#141517]/55">
          Texture, scale and natural light turn a product photo into a reason to
          stop scrolling.
        </p>
      </div>
      <p className="absolute bottom-[7%] left-[7%] text-[8px] font-semibold uppercase tracking-[0.17em]">
        Save for later
      </p>
    </div>
  )
}
