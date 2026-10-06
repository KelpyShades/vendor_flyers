import { GrovehLogo, photos } from "../shared"

export function VendorSpotlight({ type }: { type: "food" | "product" | "service" }) {
  const content = {
    food: {
      bg: "#ff4f18",
      contrast: "#2d5fff",
      kicker: "Food · Surulere",
      name: "Aunty T’s",
      line: "Jollof worth talking about.",
      detail: "From ₦4,500",
      handle: "@auntyts_kitchen",
      object: "object-[50%_55%]",
    },
    product: {
      bg: "#2d5fff",
      contrast: "#16c64f",
      kicker: "Products · Lagos",
      name: "Dew & Co.",
      line: "Good skin, bottled.",
      detail: "Shop the new drop",
      handle: "@dewandco",
      object: "object-center",
    },
    service: {
      bg: "#16c64f",
      contrast: "#ff4f18",
      kicker: "Services · Lekki",
      name: "Styled by Zee",
      line: "Your best hair day.",
      detail: "Bookings open",
      handle: "@styledbyzee",
      object: "object-[50%_48%]",
    },
  }[type]

  return (
    <div
      className="relative h-full text-white"
      style={{ background: content.bg }}
    >
      <div
        className="absolute -right-[12%] -top-[10%] h-[42%] w-[42%] rounded-full"
        style={{ background: content.contrast }}
      />
      <div className="absolute left-[7%] right-[7%] top-[7%] z-10 flex items-center justify-between">
        <GrovehLogo />
        <span className="rounded-full border border-white/40 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em]">
          Vendor spotlight
        </span>
      </div>

      <div className="absolute left-[7%] top-[22%] z-20 w-[53%]">
        <p className="text-[8px] font-semibold uppercase tracking-[0.19em] text-white/70">
          {content.kicker}
        </p>
        <p className="mt-2 text-[clamp(2rem,4cqi,3.65rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
          {content.line}
        </p>
      </div>

      <div className="absolute bottom-[8%] right-[7%] top-[39%] w-[67%] overflow-hidden rounded-[1.6rem] border-4 border-white">
        <img
          src={photos[type]}
          alt=""
          className={`h-full w-full object-cover ${content.object}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
          <div>
            <p className="text-xl font-semibold tracking-tight sm:text-2xl">
              {content.name}
            </p>
            <p className="mt-1 text-[9px] font-medium text-white/70">
              {content.handle}
            </p>
          </div>
          <p className="rounded-full bg-white px-3 py-2 text-[8px] font-bold uppercase tracking-[0.1em] text-[#141517]">
            {content.detail}
          </p>
        </div>
      </div>

      <p className="absolute bottom-[9%] left-[7%] -rotate-90 origin-bottom-left text-[7px] font-semibold uppercase tracking-[0.18em] text-white/60">
        Discover · Offer · Connect
      </p>
    </div>
  )
}
