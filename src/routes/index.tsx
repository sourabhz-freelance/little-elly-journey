import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/hero/Hero";
import StorySection from "@/components/story/StorySection";

import MarketSection from "@/components/sector/MarketSection";
import DemographicsSection from "@/components/sector/DemographicsSection";
import ModelSection from "@/components/sector/ModelSection";
import CurriculumSection from "@/components/curriculum/CurriculumSection";
import MethodSection from "@/components/method/MethodSection";
import EditorialBreak from "@/components/shared/EditorialBreak";
import GiftMapSection from "@/components/gift/GiftMapSection";
import PartnerFrameworkSection from "@/components/partner/PartnerFrameworkSection";
import MasterLifeSection from "@/components/partner/MasterLifeSection";
import RequirementsSection from "@/components/requirements/RequirementsSection";
import TermsSection from "@/components/terms/TermsSection";

const title = "Little Elly Master Franchise — Our Family Is Growing";
const description =
  "Become a Little Elly master franchise partner: 172+ centres, 19 cities, 20+ years of India's most admired happy preschool.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream">
      <Hero />
      <CurriculumSection />
      <MethodSection />


      <MarketSection />
      <DemographicsSection />
      <ModelSection />

      {/* conjunction: from the sector to our own story */}
      <EditorialBreak
        kicker="Section two"
        lines={["The invisible", "asset."]}
        accentIndex={1}
        note="Twenty years of doing it the hard way — so you don't have to."
      />

      <StorySection />
      <GiftMapSection />
      <RequirementsSection />
      <TermsSection />
      <PartnerFrameworkSection />
      <MasterLifeSection />

      
    </main>
  );
}
