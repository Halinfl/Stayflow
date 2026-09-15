import type { HotelCampaign } from "@/lib/data";
import { getCampaignBySlug, hotelCampaigns } from "@/lib/data";

/** Known CTA sources for /go attribution. */
export type GoSrc = "guide" | "card" | "share" | "stay-detail" | "stay-shop" | "modal";

export type GoAttribution = {
  /** Property / StayPackage slug (token). */
  slug: string;
  /** Optional creator handle (with or without @). */
  creator?: string;
  /** Where the traveler came from. */
  src?: string;
  /** Campaign id (h1…h10). */
  campaignId?: string;
  /**
   * Optional https destination for Continue outbound.
   * Never use as a naked CTA href — only after /go Continue.
   */
  to?: string;
};

export type ResolvedGo = {
  campaign: HotelCampaign;
  creatorHandle?: string;
  src: string;
  backHref: string;
  backLabel: string;
  guideBackHref?: string;
  outboundUrl: string;
};

function one(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

/** Normalize creator handle for display / tracking (strip leading @). */
export function normalizeCreatorHandle(raw?: string): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim().replace(/^@+/, "");
  if (!trimmed || trimmed === "your-handle") return undefined;
  return trimmed;
}

/**
 * Build an internal /go href. All book CTAs must use this (or equivalent)
 * — never point travelers straight at an OTA / hotel.com URL.
 */
export function buildGoHref({
  slug,
  creator,
  src = "stay-detail",
  campaignId,
  to,
}: GoAttribution): string {
  const handle = normalizeCreatorHandle(creator);
  const path = handle ? `/go/${slug}/${encodeURIComponent(handle)}` : `/go/${slug}`;
  const params = new URLSearchParams();
  if (src) params.set("src", src);
  if (campaignId) params.set("campaign", campaignId);
  if (handle) params.set("c", handle);
  if (to) params.set("to", to);
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

/** Query-string form: /go?p=slug&c=creator&src=card */
export function buildGoQueryHref({
  slug,
  creator,
  src = "card",
  campaignId,
  to,
}: GoAttribution): string {
  const params = new URLSearchParams();
  params.set("p", slug);
  if (src) params.set("src", src);
  const handle = normalizeCreatorHandle(creator);
  if (handle) params.set("c", handle);
  if (campaignId) params.set("campaign", campaignId);
  if (to) params.set("to", to);
  return `/go?${params.toString()}`;
}

/** Allow only http(s) absolute URLs for outbound Continue. */
export function sanitizeOutboundUrl(raw: string | undefined | null): string | null {
  if (!raw) return null;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    decoded = raw;
  }
  try {
    const url = new URL(decoded);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    // Block javascript: and stay on absolute http(s) only
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Pilot outbound when no `to` was supplied.
 * Illustrative seller search only — never used as a naked CTA href.
 */
export function pilotOutboundUrl(campaign: HotelCampaign): string {
  const q = encodeURIComponent(`${campaign.name} ${campaign.location} official site`);
  return `https://www.google.com/search?q=${q}`;
}

/** Append StayForum referral params onto an outbound booking URL. */
export function appendTrackingParams(
  destination: string,
  attrs: {
    slug: string;
    creator?: string;
    src?: string;
    campaignId?: string;
  },
): string {
  const url = new URL(destination);
  url.searchParams.set("ref", "stayforum");
  url.searchParams.set("sf_p", attrs.slug);
  if (attrs.creator) url.searchParams.set("sf_c", attrs.creator);
  if (attrs.src) url.searchParams.set("sf_src", attrs.src);
  if (attrs.campaignId) url.searchParams.set("sf_campaign", attrs.campaignId);
  return url.toString();
}

export function parseGoSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): {
  p?: string;
  c?: string;
  src: string;
  campaignId?: string;
  to?: string;
} {
  return {
    p: one(searchParams.p),
    c: normalizeCreatorHandle(one(searchParams.c)),
    src: one(searchParams.src) ?? "share",
    campaignId: one(searchParams.campaign),
    to: one(searchParams.to),
  };
}

/**
 * Resolve /go/[...slug] + query into campaign + outbound + back links.
 * Returns null when token/slug is missing or unknown (expired / invalid).
 */
export function resolveGoContext(input: {
  slugParts?: string[];
  searchParams: Record<string, string | string[] | undefined>;
}): ResolvedGo | null {
  const q = parseGoSearchParams(input.searchParams);
  const parts = input.slugParts?.filter(Boolean) ?? [];
  const slugFromPath = parts[0];
  const creatorFromPath = normalizeCreatorHandle(parts[1]);
  const slug = slugFromPath || q.p;

  if (!slug) return null;

  let campaign =
    getCampaignBySlug(slug) ??
    (q.campaignId ? hotelCampaigns.find((c) => c.id === q.campaignId) : undefined);

  // Token may be campaign id in some share shapes
  if (!campaign && slug.startsWith("h")) {
    campaign = hotelCampaigns.find((c) => c.id === slug);
  }

  if (!campaign) return null;

  const creatorHandle = q.c ?? creatorFromPath;
  const src = q.src;
  const outboundBase = sanitizeOutboundUrl(q.to) ?? pilotOutboundUrl(campaign);
  const outboundUrl = appendTrackingParams(outboundBase, {
    slug: campaign.slug,
    creator: creatorHandle,
    src,
    campaignId: q.campaignId ?? campaign.id,
  });

  const backHref = `/stays/${campaign.slug}`;
  const backLabel = "Back to StayPackage";
  const guideBackHref = src === "guide" ? "/creator-path" : undefined;

  return {
    campaign,
    creatorHandle,
    src,
    backHref,
    backLabel,
    guideBackHref,
    outboundUrl,
  };
}

export function sourceLabel(src: string): string {
  switch (src) {
    case "guide":
      return "Guide";
    case "card":
      return "StayPackage";
    case "stay-shop":
      return "Stay Shop";
    case "stay-detail":
      return "StayPackage";
    case "modal":
      return "StayPackage";
    case "share":
      return "Shared link";
    default:
      return "StayPackage";
  }
}
