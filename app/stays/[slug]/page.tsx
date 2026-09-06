import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Camera,
  MapPin,
  Moon,
  Sparkles,
  Star,
} from "lucide-react";
import {
  getAllCampaignSlugs,
  getCampaignBySlug,
  type HotelCampaign,
} from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import { VerifiedBadge } from "@/components/badges";
import StayFaqAccordion from "@/components/stays/StayFaqAccordion";
import StayPackageActions from "@/components/stays/StayPackageActions";

type StayPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCampaignSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) {
    return { title: "StayPackage not found · StayForum" };
  }
  return {
    title: `${campaign.name} · StayPackage · StayForum`,
    description: campaign.blurb ?? campaign.creatorAngle,
  };
}

function buildJsonLd(campaign: HotelCampaign) {
  const description = campaign.blurb ?? campaign.creatorAngle;
  const hotel: Record<string, unknown> = {
    "@type": "Hotel",
    "@id": `https://stayforum.com/stays/${campaign.slug}#hotel`,
    name: campaign.name,
    description,
    image: campaign.image,
    url: `https://stayforum.com/stays/${campaign.slug}`,
    address: {
      "@type": "PostalAddress",
      ...(campaign.address.streetAddress
        ? { streetAddress: campaign.address.streetAddress }
        : {}),
      addressLocality: campaign.address.addressLocality,
      addressRegion: campaign.address.addressRegion,
      ...(campaign.address.postalCode ? { postalCode: campaign.address.postalCode } : {}),
      addressCountry: campaign.address.addressCountry,
    },
    starRating: {
      "@type": "Rating",
      ratingValue: campaign.rating,
    },
  };

  const offer: Record<string, unknown> = {
    "@type": "Offer",
    "@id": `https://stayforum.com/stays/${campaign.slug}#offer`,
    name: `Complimentary stay · ${campaign.compNights} nights`,
    description: `Complimentary stay of ${campaign.compNights} nights with tracked commission on bookings you drive. Deliverables: ${campaign.deliverables}. Sample StayPackage · pilot — rates confirmed on Activate / hotel claim.`,
    category: campaign.type,
    url: `https://stayforum.com/stays/${campaign.slug}`,
    availability: "https://schema.org/LimitedAvailability",
    itemOffered: { "@id": `https://stayforum.com/stays/${campaign.slug}#hotel` },
  };

  // Never fabricate prices — omit price / priceCurrency when not accurate
  if (campaign.priceAccurate) {
    // Reserved for claimed listings with confirmed rates only
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `https://stayforum.com/stays/${campaign.slug}#faq`,
    mainEntity: campaign.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [hotel, offer, faqPage],
  };
}

export default async function StayPackagePage({ params }: StayPageProps) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  const jsonLd = buildJsonLd(campaign);
  const heroCopy = campaign.blurb ?? campaign.creatorAngle;

  return (
    <main className="min-h-screen bg-brand-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* A. Shell */}
      <header className="sticky top-0 z-40 border-b border-brand-charcoal/5 bg-brand-cream/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link
            href="/creator-path"
            className="flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-charcoal"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <span className="text-sm font-extrabold tracking-[0.15em] text-brand-teal uppercase">
            StayForum
          </span>
          <Link
            href="/trust"
            className="text-sm font-semibold text-brand-teal underline-offset-2 hover:underline"
          >
            Trust
          </Link>
        </div>
      </header>

      <div className="border-b border-brand-charcoal/5 bg-brand-cream">
        <div className="mx-auto max-w-3xl px-6 py-2.5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
            Sample StayPackage · pilot
          </p>
        </div>
      </div>

      {/* B. Hero — hotel-first */}
      <section className="relative">
        <div className="relative mx-auto max-w-3xl overflow-hidden sm:rounded-b-3xl">
          <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
            <SafeImage
              src={campaign.image}
              alt={campaign.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              fallbackLabel={campaign.type}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/75 via-brand-charcoal/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-teal px-3 py-1 text-xs font-bold text-white">
                  Stay Shop
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {campaign.type}
                </span>
                {campaign.verified && <VerifiedBadge />}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {campaign.name}
              </h1>
              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/90">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} /> {campaign.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star size={14} className="text-brand-gold" fill="currentColor" />
                  {campaign.rating}
                </span>
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                {heroCopy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-6 px-6 py-8">
        {/* C. Offer — visible facts match JSON-LD Offer */}
        <section className="rounded-3xl bg-white p-6 shadow-soft">
          <p className="mb-4 text-xs font-bold uppercase tracking-wide text-brand-muted">The Offer</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-2.5">
              <Moon size={18} className="mt-0.5 shrink-0 text-brand-teal" />
              <div>
                <p className="font-extrabold text-brand-charcoal">
                  Complimentary stay · {campaign.compNights} nights
                </p>
                <p className="text-xs text-brand-muted">Agreed nights for the collaboration</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand-teal" />
              <div>
                <p className="font-extrabold text-brand-charcoal">Tracked commission</p>
                <p className="text-xs text-brand-muted">On bookings you drive — no raw % in demo</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-brand-cream p-4">
            <Camera size={18} className="shrink-0 text-brand-teal" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">Deliverables</p>
              <p className="text-sm font-semibold text-brand-charcoal">{campaign.deliverables}</p>
            </div>
          </div>
          {!campaign.priceAccurate && (
            <p className="mt-4 rounded-2xl border border-dashed border-brand-charcoal/15 bg-brand-cream/60 px-4 py-3 text-sm font-medium text-brand-charcoal">
              Rates confirmed on Activate / hotel claim
            </p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-brand-muted">
            Demo StayPackage — sample property &amp; illustrative tracking. No revenue guarantees. Not an
            OTA replacement.
          </p>
        </section>

        {/* D. Why this books */}
        <section className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 shadow-soft">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-muted">
            <Sparkles size={14} className="text-brand-gold" /> Why this books
          </p>
          <p className="text-sm leading-relaxed text-brand-charcoal sm:text-base">{campaign.creatorAngle}</p>
          {campaign.bookingProofHint && (
            <p className="mt-2 text-xs text-brand-muted">{campaign.bookingProofHint}</p>
          )}
        </section>

        {/* E. Attribution + dual CTAs + book stub */}
        <StayPackageActions
          name={campaign.name}
          attributionPreview={campaign.attributionPreview}
          bookingHref={campaign.bookingHref}
          bookingProofHint={campaign.bookingProofHint}
        />

        {/* Sample content placeholder */}
        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-muted">Sample content</p>
          <div className="flex aspect-video items-center justify-center rounded-3xl border border-dashed border-brand-charcoal/15 bg-white">
            <div className="px-4 text-center">
              <Camera size={28} className="mx-auto text-brand-teal/60" />
              <p className="mt-2 text-sm font-semibold text-brand-charcoal">{campaign.sampleContentLabel}</p>
              <p className="mt-1 text-xs text-brand-muted">Placeholder for demo — not live property media</p>
            </div>
          </div>
        </section>

        {/* F. FAQ accordion */}
        <section>
          <h2 className="mb-3 text-lg font-extrabold text-brand-charcoal">FAQ</h2>
          <StayFaqAccordion items={campaign.faq} />
        </section>

        {/* G. Footer trust teaser */}
        <footer className="rounded-3xl border border-brand-charcoal/5 bg-white p-6 text-center shadow-soft">
          <p className="text-sm font-semibold text-brand-charcoal">
            Verification &amp; tracked attribution — pilot criteria only.
          </p>
          <p className="mt-1 text-xs text-brand-muted">No revenue guarantees. No live ML underwriting.</p>
          <Link
            href="/trust"
            className="mt-3 inline-flex text-sm font-semibold text-brand-teal underline-offset-2 hover:underline"
          >
            How StayForum builds trust
          </Link>
        </footer>
      </div>
    </main>
  );
}
