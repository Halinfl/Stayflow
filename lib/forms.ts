// Formspree configuration.
// Hardcoded endpoints work on Vercel without env setup; env vars override when set.
export const HOTEL_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_HOTEL ||
  "https://formspree.io/f/mgaelbww";

export const CREATOR_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_CREATOR ||
  "https://formspree.io/f/mwlknjep";

// Preferred landing (/preferred) — dedicated form; do not reuse hotel/creator IDs.
// BLOCKER: create Formspree form named "StayForum Preferred" and replace YOUR_PREFERRED_FORM_ID.
export const PREFERRED_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_PREFERRED ||
  "https://formspree.io/f/YOUR_PREFERRED_FORM_ID";
