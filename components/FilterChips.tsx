"use client";

const FILTERS = ["All", "Golf", "Beach", "Boutique", "Urban", "Wellness"];

type FilterChipsProps = {
  active: string;
  onChange: (filter: string) => void;
};

export default function FilterChips({ active, onChange }: FilterChipsProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
            active === filter
              ? "bg-brand-charcoal text-white"
              : "bg-brand-cream text-brand-charcoal/70 hover:bg-brand-creamDark"
          }`}
        >
          {filter === "All" ? "All Properties" : `${filter} Resorts`}
        </button>
      ))}
    </div>
  );
}
