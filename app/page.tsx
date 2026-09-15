import Hero from "@/components/Hero";
import PathCards from "@/components/PathCards";
import HowItWorks from "@/components/HowItWorks";
import HomeFaq from "@/components/HomeFaq";
import TrustBar from "@/components/TrustBar";
import { HOME_FAQ_ITEMS } from "@/lib/homeFaq";

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function LandingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <PathCards />
      <HowItWorks />
      <HomeFaq />
      <TrustBar />
    </main>
  );
}
