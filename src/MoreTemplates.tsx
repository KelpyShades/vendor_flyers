import { VendorOfWeek } from "./templates/VendorOfWeek"
import { NewCategory } from "./templates/NewCategory"
import { SeasonalSale } from "./templates/SeasonalSale"
import { LimitedOffer } from "./templates/LimitedOffer"
import { CustomerReview } from "./templates/CustomerReview"
import { AppAnnouncement } from "./templates/AppAnnouncement"
import { Referral } from "./templates/Referral"
import { MarketplaceStats } from "./templates/MarketplaceStats"
import { EventAnnouncement } from "./templates/EventAnnouncement"
import { EducationalCarousel } from "./templates/EducationalCarousel"
import { VendorTips } from "./templates/VendorTips"
import { CommunityStory } from "./templates/CommunityStory"
import { BeforeAfter } from "./templates/BeforeAfter"
import { MonthlyRecap } from "./templates/MonthlyRecap"
import { HolidayCard } from "./templates/HolidayCard"

export const additionalTemplates = [
  { title: "Vendor of the Week", category: "Spotlight" as const, card: <VendorOfWeek /> },
  { title: "New Category Launch", category: "Campaign" as const, card: <NewCategory /> },
  { title: "Seasonal Sale", category: "Campaign" as const, card: <SeasonalSale /> },
  { title: "Limited-Time Offer", category: "Campaign" as const, card: <LimitedOffer /> },
  { title: "Customer Review", category: "Growth" as const, card: <CustomerReview /> },
  { title: "App Feature Announcement", category: "Campaign" as const, card: <AppAnnouncement /> },
  { title: "Referral Campaign", category: "Growth" as const, card: <Referral /> },
  { title: "Marketplace Statistics", category: "Growth" as const, card: <MarketplaceStats /> },
  { title: "Event Announcement", category: "Campaign" as const, card: <EventAnnouncement /> },
  { title: "Educational Carousel", category: "Education" as const, card: <EducationalCarousel /> },
  { title: "Vendor Tips", category: "Education" as const, card: <VendorTips /> },
  { title: "Community Story", category: "Growth" as const, card: <CommunityStory /> },
  { title: "Before & After", category: "Spotlight" as const, card: <BeforeAfter /> },
  { title: "Monthly Recap", category: "Growth" as const, card: <MonthlyRecap /> },
  {
    title: "Holiday — Festive Finds",
    category: "Holiday" as const,
    card: <HolidayCard occasion="Holiday edit" headline="Find joy locally." note="Gifts, food and services from vendors near you" background="#141517" accent="#ff4f18" />,
  },
  {
    title: "Holiday — New Year",
    category: "Holiday" as const,
    card: <HolidayCard occasion="New year" headline="Here’s to good finds." note="Discover more. Offer more. Connect more." background="#2d5fff" accent="#16c64f" />,
  },
  {
    title: "Holiday — Eid",
    category: "Holiday" as const,
    card: <HolidayCard occasion="Eid greetings" headline="Joy, shared." note="Wishing our community a beautiful celebration" background="#16c64f" accent="#f4f0e8" dark />,
  },
  {
    title: "Holiday — Local Love",
    category: "Holiday" as const,
    card: <HolidayCard occasion="Season of love" headline="Love lives locally." note="Share the love. Support a Groveh vendor." background="#ff4f18" accent="#f4f0e8" />,
  },
]
