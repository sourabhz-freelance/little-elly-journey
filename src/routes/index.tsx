import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/hero/Hero";
import StorySection from "@/components/story/StorySection";
import HappySection from "@/components/happy/HappySection";
import MarketSection from "@/components/sector/MarketSection";
import DemographicsSection from "@/components/sector/DemographicsSection";
import ModelSection from "@/components/sector/ModelSection";

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
      <StorySection />
      <MarketSection />
      <DemographicsSection />
      <ModelSection />
      <HappySection />
    </main>
  );
}
