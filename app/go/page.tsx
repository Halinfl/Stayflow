import type { Metadata } from "next";
import { redirect } from "next/navigation";
import GoMissing from "@/components/go/GoMissing";
import GoTunnel from "@/components/go/GoTunnel";
import { buildGoHref, parseGoSearchParams, resolveGoContext } from "@/lib/go";

type GoQueryPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: GoQueryPageProps): Promise<Metadata> {
  const query = await searchParams;
  const resolved = resolveGoContext({ searchParams: query });
  if (!resolved) {
    return { title: "Link missing · StayForum", robots: { index: false, follow: false } };
  }
  return {
    title: `Continue to book · ${resolved.campaign.name} · StayForum`,
    description: "StayForum tracks this referral. Booking completes with the property or their seller.",
    robots: { index: false, follow: false },
  };
}

/**
 * Query pattern: /go?p=[slug]&c=[creator]&src=[guide|card|share]
 * Canonicalizes to /go/[token] when p is present so token + query shapes share one tunnel.
 */
export default async function GoQueryPage({ searchParams }: GoQueryPageProps) {
  const query = await searchParams;
  const parsed = parseGoSearchParams(query);

  if (parsed.p) {
    redirect(
      buildGoHref({
        slug: parsed.p,
        creator: parsed.c,
        src: parsed.src,
        campaignId: parsed.campaignId,
        to: parsed.to,
      }),
    );
  }

  const resolved = resolveGoContext({ searchParams: query });
  if (!resolved) {
    return <GoMissing />;
  }

  return (
    <GoTunnel
      campaign={resolved.campaign}
      creatorHandle={resolved.creatorHandle}
      src={resolved.src}
      outboundUrl={resolved.outboundUrl}
      backHref={resolved.backHref}
      backLabel={resolved.backLabel}
      guideBackHref={resolved.guideBackHref}
    />
  );
}
