import { useState, type ReactNode } from "react"
import { additionalTemplates } from "./MoreTemplates"

const photos = {
  food: "https://images.unsplash.com/photo-1664993101841-036f189719b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200",
  product:
    "https://images.unsplash.com/photo-1781687282766-d6df9ef4c7fc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200",
  service:
    "https://images.unsplash.com/photo-1729005732908-de02acdeca5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1200",
}

type Category =
  | "All"
  | "Spotlight"
  | "Growth"
  | "Campaign"
  | "Education"
  | "Holiday"

function GrovehLogo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      src={`https://groveh.app/logos/logo_text_${dark ? "black" : "white"}.png`}
      alt="Groveh"
      className="h-5 w-auto object-contain sm:h-6"
    />
  )
}

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CardFrame({
  title,
  category,
  children,
}: {
  title: string
  category: Category
  children: ReactNode
}) {
  return (
    <article className="template-item">
      <div className="template-card @container relative aspect-square overflow-hidden">
        {children}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#141517]">{title}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#141517]/45">
            {category} · Instagram post
          </p>
        </div>
        <span className="rounded-full border border-[#141517]/15 px-3 py-1 text-[9px] font-semibold text-[#141517]/55">
          1080 × 1080
        </span>
      </div>
    </article>
  )
}

function VendorSpotlight({ type }: { type: "food" | "product" | "service" }) {
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
        <p className="mt-2 text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
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

function NewVendor() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-20 flex items-center justify-between">
        <GrovehLogo />
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Just landed
        </span>
      </div>
      <div className="absolute -right-[16%] top-[17%] h-[58%] w-[58%] rounded-full bg-[#2d5fff]" />
      <div className="absolute -left-[9%] bottom-[3%] h-[37%] w-[37%] rounded-full bg-[#ff4f18]" />
      <div className="absolute right-[8%] top-[22%] h-[56%] w-[45%] rotate-6 overflow-hidden rounded-[44%_44%_8%_8%] border-4 border-white">
        <img
          src={photos.product}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-[7%] top-[25%] z-10 w-[58%]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#16c64f]">
          Meet your new favourite
        </p>
        <p className="mt-4 text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.8] tracking-[-0.07em]">
          New
          <br />
          <span className="text-[#ff4f18]">to the</span>
          <br />
          Groveh.
        </p>
      </div>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] z-20 flex items-center justify-between border-t border-white/25 pt-4">
        <div>
          <p className="text-sm font-semibold">Dew & Co.</p>
          <p className="text-[8px] text-white/50">Intentional skincare</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#16c64f] text-[#141517]">
          <Arrow />
        </span>
      </div>
    </div>
  )
}

function Milestone() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between">
        <GrovehLogo dark />
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
          Growing together
        </span>
      </div>
      <div className="absolute left-1/2 top-[47%] h-[73%] w-[73%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.35rem] border-[#2d5fff]" />
      <div className="absolute left-[7%] top-[27%] z-10">
        <p className="text-[clamp(4.5rem,10vw,8.5rem)] font-semibold leading-[0.72] tracking-[-0.085em] text-[#ff4f18]">
          10K
        </p>
        <p className="mt-5 max-w-[60%] text-[clamp(1.4rem,3vw,2.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          connections
          <br />
          made on Groveh
        </p>
      </div>
      <div className="absolute -right-[10%] bottom-[7%] h-[39%] w-[39%] rounded-full bg-[#16c64f]" />
      <p className="absolute bottom-[7%] left-[7%] z-10 max-w-[50%] text-[9px] font-medium leading-4 text-[#141517]/55">
        Ten thousand reasons to keep discovering, offering and connecting.
      </p>
      <p className="absolute bottom-[13%] right-[5%] z-10 -rotate-12 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.05em]">
        Thank you!
      </p>
    </div>
  )
}

function CategoryCampaign() {
  return (
    <div className="relative h-full overflow-hidden bg-[#2d5fff] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-20 flex items-center justify-between">
        <GrovehLogo />
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
          All in one place
        </p>
      </div>
      <div className="absolute left-[7%] top-[23%] z-20">
        <p className="text-[clamp(2.8rem,6vw,5.1rem)] font-semibold leading-[0.83] tracking-[-0.065em]">
          Find what
          <br />
          fits your
          <br />
          <span className="text-[#16c64f]">every day.</span>
        </p>
      </div>
      <div className="absolute -bottom-[18%] -right-[8%] h-[74%] w-[74%] rounded-full bg-[#ff4f18]" />
      <div className="absolute bottom-[8%] right-[6%] grid w-[58%] grid-cols-2 gap-2">
        <div className="aspect-square overflow-hidden rounded-full border-4 border-white">
          <img
            src={photos.food}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-[1.5rem] border-4 border-white">
          <img
            src={photos.product}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-start-2 aspect-square -translate-y-1 overflow-hidden rounded-full border-4 border-white">
          <img
            src={photos.service}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="absolute bottom-[8%] left-[7%] text-[8px] font-semibold uppercase leading-4 tracking-[0.18em]">
        Food
        <br />
        Products
        <br />
        Services
      </p>
    </div>
  )
}

function PlatformFeature() {
  return (
    <div className="relative h-full overflow-hidden bg-[#16c64f] text-[#141517]">
      <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between">
        <GrovehLogo dark />
        <span className="rounded-full bg-[#141517] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
          Feature drop
        </span>
      </div>
      <p className="absolute left-[7%] top-[22%] text-[clamp(2.6rem,5.7vw,5rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
        Your store.
        <br />
        Your link.
        <br />
        <span className="text-white">Your moment.</span>
      </p>
      <div className="absolute -bottom-[26%] left-1/2 h-[68%] w-[68%] -translate-x-1/2 rounded-t-[6rem] bg-[#141517] p-[6%]">
        <div className="h-full rounded-t-[3.5rem] bg-[#f4f0e8] p-[9%]">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-[#ff4f18]" />
            <div>
              <p className="text-[8px] font-bold">Aunty T’s Kitchen</p>
              <p className="text-[6px] text-[#141517]/45">Food · Lagos</p>
            </div>
          </div>
          <div className="mt-4 h-16 rounded-xl bg-[#2d5fff]" />
        </div>
      </div>
      <p className="absolute bottom-[7%] left-[7%] z-20 text-[8px] font-semibold uppercase tracking-[0.17em] text-white">
        Set up. Share. Sell.
      </p>
    </div>
  )
}

function Testimonial() {
  return (
    <div className="relative h-full overflow-hidden bg-[#ff4f18] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-10 flex items-center justify-between">
        <GrovehLogo />
        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Found on Groveh
        </span>
      </div>
      <div className="absolute -left-[16%] top-[15%] h-[55%] w-[55%] rounded-full border-[1.3rem] border-[#16c64f]" />
      <p className="absolute left-[7%] top-[21%] text-[clamp(5rem,12vw,9.5rem)] font-semibold leading-none text-[#2d5fff]">
        “
      </p>
      <p className="absolute left-[12%] right-[8%] top-[39%] z-10 text-[clamp(1.7rem,3.8vw,3.2rem)] font-medium leading-[1.02] tracking-[-0.045em]">
        I found the perfect caterer in ten minutes. The food? Even better.
      </p>
      <div className="absolute bottom-[8%] left-[7%] right-[7%] flex items-center justify-between border-t border-white/30 pt-4">
        <div>
          <p className="text-xs font-semibold">Nana A.</p>
          <p className="mt-1 text-[8px] text-white/60">Groveh community</p>
        </div>
        <div className="flex gap-1 text-[#f4f0e8]">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="h-2 w-2 rotate-45 bg-[#f4f0e8]" />
          ))}
        </div>
      </div>
    </div>
  )
}

function SeasonalPromo() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-20 flex items-center justify-between">
        <GrovehLogo dark />
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em]">
          Weekend picks
        </p>
      </div>
      <div className="absolute left-[7%] right-[7%] top-[19%] h-[44%] overflow-hidden rounded-[1.8rem]">
        <img src={photos.food} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent" />
        <p className="absolute bottom-[10%] left-[7%] text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white">
          Good finds.
          <br />
          Better weekend.
        </p>
      </div>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] grid grid-cols-[1fr_auto] items-end gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#ff4f18]">
            This week only
          </p>
          <p className="mt-2 max-w-[80%] text-sm font-semibold leading-tight sm:text-base">
            Explore fresh offers from vendors around you.
          </p>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#2d5fff] text-white">
          <Arrow />
        </span>
      </div>
      <div className="absolute -bottom-[15%] -left-[10%] h-[35%] w-[35%] rounded-full bg-[#16c64f]" />
    </div>
  )
}

function SellerCallout() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141517] text-white">
      <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between">
        <GrovehLogo />
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
          For vendors
        </p>
      </div>
      <div className="absolute right-[7%] top-[20%] h-[24%] w-[24%] rotate-12 rounded-[1.4rem] bg-[#16c64f]" />
      <div className="absolute right-[20%] top-[31%] h-[18%] w-[18%] -rotate-12 rounded-full bg-[#2d5fff]" />
      <p className="absolute left-[7%] top-[22%] z-10 text-[clamp(3.2rem,7vw,6rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
        Got
        <br />
        something
        <br />
        <span className="text-[#ff4f18]">good?</span>
      </p>
      <p className="absolute bottom-[19%] left-[7%] max-w-[55%] text-xs font-medium leading-5 text-white/60">
        Bring your products, food or services to people already looking.
      </p>
      <div className="absolute bottom-[7%] left-[7%] right-[7%] flex items-center justify-between border-t border-white/25 pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#16c64f]">
          Start selling on Groveh
        </p>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#141517]">
          <Arrow />
        </span>
      </div>
    </div>
  )
}

const templates: Array<{
  title: string
  category: Category
  card: ReactNode
}> = [
  {
    title: "Vendor Spotlight — Food",
    category: "Spotlight",
    card: <VendorSpotlight type="food" />,
  },
  {
    title: "Vendor Spotlight — Products",
    category: "Spotlight",
    card: <VendorSpotlight type="product" />,
  },
  {
    title: "Vendor Spotlight — Services",
    category: "Spotlight",
    card: <VendorSpotlight type="service" />,
  },
  { title: "New Vendor Welcome", category: "Growth", card: <NewVendor /> },
  { title: "Community Milestone", category: "Growth", card: <Milestone /> },
  {
    title: "Browse All Categories",
    category: "Campaign",
    card: <CategoryCampaign />,
  },
  {
    title: "Platform Feature Drop",
    category: "Campaign",
    card: <PlatformFeature />,
  },
  {
    title: "Community Testimonial",
    category: "Growth",
    card: <Testimonial />,
  },
  {
    title: "Weekly Vendor Picks",
    category: "Campaign",
    card: <SeasonalPromo />,
  },
  {
    title: "Vendor Acquisition",
    category: "Campaign",
    card: <SellerCallout />,
  },
  ...additionalTemplates,
]

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const categories: Category[] = [
    "All",
    "Spotlight",
    "Growth",
    "Campaign",
    "Education",
    "Holiday",
  ]
  const visibleTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((template) => template.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#141517]">
      <header className="border-b border-[#141517]/10 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <GrovehLogo dark />
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#141517]/50">
            Social campaign system · 2025
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid items-end gap-8 border-b border-[#141517]/15 pb-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff4f18]">
              Instagram template library
            </p>
            <h1 className="max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
              Every post,
              <br />
              <span className="text-[#2d5fff]">distinctly Groveh.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm font-medium leading-6 text-[#141517]/55 sm:text-base">
              A flexible campaign system for vendors, milestones, launches and
              the everyday moments that keep the marketplace moving.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-[#141517] text-white"
                    : "border border-[#141517]/15 text-[#141517]/55 hover:border-[#141517]/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-x-7 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {visibleTemplates.map((template) => (
            <CardFrame
              key={template.title}
              title={template.title}
              category={template.category}
            >
              {template.card}
            </CardFrame>
          ))}
        </div>

        <footer className="mt-24 flex flex-col justify-between gap-5 border-t border-[#141517]/15 pt-8 text-[9px] font-medium uppercase tracking-[0.15em] text-[#141517]/40 sm:flex-row">
          <p>Groveh social toolkit · 1080 × 1080 master format</p>
          <p>Photography sourced from Unsplash</p>
        </footer>
      </section>
    </main>
  )
}
