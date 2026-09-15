export default function GoLoading() {
  return (
    <main className="min-h-svh bg-brand-cream">
      <div className="sticky top-0 z-30 border-b border-brand-charcoal/5 bg-brand-cream/95">
        <div className="mx-auto flex max-w-lg items-center gap-3 px-4 py-3">
          <div className="h-9 w-9 animate-pulse rounded-full bg-brand-creamDark" />
          <div className="flex-1 space-y-2">
            <div className="h-2.5 w-24 animate-pulse rounded bg-brand-creamDark" />
            <div className="h-3.5 w-40 animate-pulse rounded bg-brand-creamDark" />
          </div>
          <div className="h-6 w-20 animate-pulse rounded-full bg-brand-creamDark" />
        </div>
      </div>
      <div className="mx-auto max-w-lg space-y-5 px-4 pt-5">
        <div className="overflow-hidden rounded-3xl border border-brand-charcoal/5 bg-white p-3 shadow-soft">
          <div className="flex gap-3">
            <div className="h-20 w-20 animate-pulse rounded-2xl bg-brand-creamDark" />
            <div className="flex-1 space-y-2 py-1">
              <div className="h-2.5 w-20 animate-pulse rounded bg-brand-creamDark" />
              <div className="h-5 w-48 animate-pulse rounded bg-brand-creamDark" />
              <div className="h-3.5 w-32 animate-pulse rounded bg-brand-creamDark" />
            </div>
          </div>
          <div className="mt-3 h-10 animate-pulse rounded-2xl bg-brand-creamDark/80" />
        </div>
        <div className="h-24 animate-pulse rounded-3xl bg-white shadow-soft" />
        <div className="h-14 animate-pulse rounded-2xl bg-brand-teal/30" />
        <div className="mx-auto h-3 w-64 animate-pulse rounded bg-brand-creamDark" />
      </div>
    </main>
  );
}
