"use client";

import StayFaqAccordion from "@/components/stays/StayFaqAccordion";
import type { StayFaq } from "@/lib/data";

const FAQ_ITEMS: StayFaq[] = [
  {
    question: "Do guests book on StayForum?",
    answer:
      "No. Guests book on your site (or your chosen seller). Preferred is built so bookings stay with you — hotel remains merchant of record.",
  },
  {
    question: "Is StayForum an OTA?",
    answer:
      "No. We are not an OTA. Preferred helps you match creators and attribute stays without taking the guest relationship.",
  },
  {
    question: "Who pays creators?",
    answer:
      "Creators earn commission from attributed bookings under Preferred terms. We’ll walk you through those terms — no raw percentage promises on this page.",
  },
  {
    question: "What about soft nights vs peak?",
    answer:
      "Preferred targets soft and need nights for creator stays. Peak inventory handling is covered in Preferred terms.",
  },
  {
    question: "When is remittance?",
    answer: "Remittance is typically ~30 days after checkout.",
  },
];

export default function PreferredFaq() {
  return <StayFaqAccordion items={FAQ_ITEMS} />;
}
