import Link from "next/link";

export default function GoMissing() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <p className="text-[11px] font-bold uppercase tracking-wide text-brand-muted">
        Tracked link
      </p>
      <h1 className="mt-2 text-2xl font-extrabold text-brand-charcoal">
        Link missing or expired
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-muted">
        This StayForum referral link is invalid or no longer available. No property is shown
        for safety.
      </p>
      <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
        <Link
          href="/creator-path"
          className="rounded-2xl bg-brand-teal py-3.5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-tealLight"
        >
          Back to Stay Shop
        </Link>
        <Link
          href="/"
          className="rounded-2xl border border-brand-charcoal/10 bg-white py-3 text-sm font-semibold text-brand-charcoal transition-colors hover:border-brand-teal hover:text-brand-teal"
        >
          StayForum home
        </Link>
      </div>
    </main>
  );
}
