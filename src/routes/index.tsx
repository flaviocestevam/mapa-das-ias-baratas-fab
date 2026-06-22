import { createFileRoute } from "@tanstack/react-router";

import "@/components/landing/landing.css";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Calculator } from "@/components/landing/Calculator";
import {
  AlertSection,
  AudienceSection,
  FaqSection,
  PillarsSection,
  ProblemSection,
  SolutionSection,
} from "@/components/landing/Sections";
import { OfferSection } from "@/components/landing/OfferSection";
import { GuaranteeTestimonials } from "@/components/landing/GuaranteeTestimonials";
import { StickyCta } from "@/components/landing/StickyCta";
import { BuyPopup } from "@/components/landing/BuyPopup";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mapa das IAs Baratas 2026" },
      {
        name: "description",
        content:
          "Descubra como economizar R$1.000 ou mais por ano em ferramentas de IA usando marketplaces, licenças e créditos alternativos.",
      },
      { property: "og:title", content: "Mapa das IAs Baratas 2026" },
      {
        property: "og:description",
        content:
          "Descubra como economizar R$1.000 ou mais por ano em ferramentas de IA usando marketplaces, licenças e créditos alternativos.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <Calculator />
        <SolutionSection />
        <PillarsSection />
        <AudienceSection />
        <AlertSection />
        <OfferSection />
        <GuaranteeTestimonials />
        <FaqSection />
      </main>
      <StickyCta />
      <Footer />
      <BuyPopup />
    </>
  );
}
