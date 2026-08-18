import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/hero/Hero";
import HousesHero from "@/components/houses/HousesHero";
import HousesSection from "@/components/houses/HousesSection";
import StorySection from "@/components/story/StorySection";
import CurriculumSection from "@/components/curriculum/CurriculumSection";
import MethodSection from "@/components/method/MethodSection";
import EditorialBreak from "@/components/shared/EditorialBreak";
import EditionToggle from "@/components/shared/EditionToggle";
import DubaiOpportunitySection from "@/components/dubai/DubaiOpportunitySection";
import DubaiAreasSection from "@/components/dubai/DubaiAreasSection";
import OwnershipModelsSection from "@/components/dubai/OwnershipModelsSection";
import DubaiPlatformSection from "@/components/dubai/DubaiPlatformSection";
import DubaiResponsibilitySection from "@/components/dubai/DubaiResponsibilitySection";
import DubaiConsiderationsSection from "@/components/dubai/DubaiConsiderationsSection";

const title = "Little Elly Dubai — FOCO & FOFO Centre Ownership";
const description =
  "Own a Little Elly centre in Dubai under FOCO or FOFO: one platform, KHDA-aligned operations, and 20+ years of India's most admired happy preschool.";

export const Route = createFileRoute("/dubai")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DubaiDeck,
});

function DubaiDeck() {
  return (
    <main className="bg-cream">
      <EditionToggle />
      <HousesHero />
      <HousesSection />
      <Hero />
      <CurriculumSection />
      <MethodSection />

      <DubaiOpportunitySection />

      {/* conjunction: from the sector to our own story */}
      <EditorialBreak
        kicker="Section two"
        lines={["The invisible", "asset."]}
        accentIndex={1}
        note="Twenty years of doing it the hard way — so you don't have to."
      />

      <StorySection />
      <DubaiAreasSection />
      <OwnershipModelsSection />
      <DubaiPlatformSection />
      <DubaiResponsibilitySection />
      <DubaiConsiderationsSection />
    </main>
  );
}
