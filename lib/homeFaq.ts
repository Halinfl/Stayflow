import type { StayFaq } from "@/lib/data";

/** Home platform FAQ — plain answers for UI + FAQPage JSON-LD. No invented metrics. */
export const HOME_FAQ_ITEMS: StayFaq[] = [
  {
    question: "What is StayForum?",
    answer:
      "StayForum is a marketplace that matches hotels and creators. Hotels offer stays with clear deliverables. Earn tracked bookings on the property’s own site. StayForum is not an OTA — the hotel remains merchant of record.",
  },
  {
    question: "What do hotels get?",
    answer:
      "Soft-night matches with creators, agreed deliverables, and attributed bookings via StayForum links — so comps turn into measurable production, not just content.",
  },
  {
    question: "How do creators earn?",
    answer:
      "Creators receive a complimentary stay plus commission on tracked bookings they drive. Earnings can grow with performance over time — we don’t put a flat percentage on cards here.",
  },
  {
    question: "Is everything live inventory?",
    answer:
      "Some StayPackages are sample or pilot offers and are labeled that way. Talk with us to activate a real property and live inventory.",
  },
  {
    question: "How is this different from barter or pay-for-posts?",
    answer:
      "StayForum combines match → stay → tracked bookings. Not barter-only, and not pay-for-posts-only — complimentary stays with deliverables plus attributed bookings on the hotel’s site.",
  },
];
