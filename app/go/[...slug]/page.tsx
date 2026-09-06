import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type GoPageProps = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function GoStubPage({ params, searchParams }: GoPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const path = slug.join("/");
  const src = typeof query.src === "string" ? query.src : "unknown";
  const campaign = typeof query.campaign === "string" ? query.campaign : undefined;

  return (
    <main className="min-h-screen bg-brand-cream">
      <header className="border-b border-brand-charcoal/5 bg-brand-cream/90">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link
            href={campaign ? `/stays/${path.split("/")[0]}` : "/creator-path"}
            className="flex items-center gap-2 text-brand-muted transition-colors hover:text-brand-charcoal"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <span className="text-sm font-extrabold tracking-[0.15em] text-brand-teal uppercase">
            StayForum
          </span>
          <div className="w-16" />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
          Tracked link stub · pilot
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-charcoal">Attribution handoff</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-brand-muted">
          Full /go interstitial is out of scope for this pilot. Your click was recorded with StayForum
          tracked query params — never a naked hotel.com URL.
        </p>
        <div className="mx-auto mt-8 max-w-md rounded-3xl border border-brand-charcoal/5 bg-white p-6 text-left shadow-soft">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">Tracked path</p>
          <p className="mt-1 break-all font-mono text-sm font-semibold text-brand-teal">/go/{path}</p>
          <p className="mt-3 text-xs text-brand-muted">src={src}{campaign ? ` · campaign=${campaign}` : ""}</p>
        </div>
        <Link
          href="/creator-path"
          className="mt-8 inline-flex rounded-2xl bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight"
        >
          Back to Stay Shop
        </Link>
      </div>
    </main>
  );
}
