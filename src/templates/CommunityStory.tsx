import { TopBar, images } from "../shared"

export function CommunityStory() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f0e8] text-[#141517]">
      <TopBar dark label="Community story" />
      <div className="absolute left-[7%] top-[20%] h-[61%] w-[45%] overflow-hidden rounded-[6rem_6rem_1.5rem_1.5rem]">
        <img src={images.service} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute right-[7%] top-[25%] w-[42%]">
        <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#2d5fff]">
          How she built it
        </p>
        <p className="mt-4 text-[clamp(1.8rem,4cqi,3.3rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          From one chair to a full studio.
        </p>
        <p className="mt-5 text-[8px] leading-4 text-[#141517]/50">
          Zee turned referrals into a thriving beauty business.
        </p>
      </div>
      <div className="absolute -bottom-[15%] -right-[9%] h-[36%] w-[36%] rounded-full bg-[#ff4f18]" />
      <p className="absolute bottom-[7%] right-[7%] z-10 text-[8px] font-semibold uppercase tracking-[0.16em]">
        Read her story
      </p>
    </div>
  )
}
