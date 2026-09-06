// ============================================================
// CREATORS - shown to hotels in the swipe (hotel) path
// ============================================================
export type Creator = {
  id: string;
  name: string;
  handle: string;
  niche: string;
  followers: number;
  engagement: number;
  tcs: number;
  location: string;
  image: string;
  bio: string;
  audience: { ageRange: string; topLocations: string[]; income: string };
};

export const creators: Creator[] = [
  { id: "c1", name: "Marcus Reid", handle: "@fairwayfinds", niche: "Golf", followers: 48000, engagement: 4.2, tcs: 88, location: "Scottsdale, AZ", image: "/images/creators/c1.jpg", bio: "Golf resort reviews & course architecture deep-dives.", audience: { ageRange: "35-55", topLocations: ["Phoenix", "Dallas", "Atlanta"], income: "$150K+" } },
  { id: "c2", name: "Chloe Bennett", handle: "@saltairdiaries", niche: "Beach & Family", followers: 210000, engagement: 3.1, tcs: 82, location: "San Diego, CA", image: "/images/creators/c2.jpg", bio: "Beach vacations for young families.", audience: { ageRange: "28-45", topLocations: ["Los Angeles", "Miami", "Austin"], income: "$120K+" } },
  { id: "c3", name: "Priya Nair", handle: "@boutiquebliss", niche: "Boutique & Culinary", followers: 35000, engagement: 5.0, tcs: 90, location: "Charleston, SC", image: "/images/creators/c3.jpg", bio: "Historic hotels & the food scenes around them.", audience: { ageRange: "28-45", topLocations: ["Charleston", "Savannah", "Nashville"], income: "$140K+" } },
  { id: "c4", name: "Jordan Ellis", handle: "@urbansuite", niche: "Urban Luxury", followers: 520000, engagement: 2.4, tcs: 76, location: "New York, NY", image: "/images/creators/c4.jpg", bio: "Skyline suites & city escapes.", audience: { ageRange: "22-40", topLocations: ["New York", "Chicago", "London"], income: "$150K+" } },
  { id: "c5", name: "Ava Lindstrom", handle: "@zenroots", niche: "Wellness", followers: 120000, engagement: 4.8, tcs: 84, location: "Sedona, AZ", image: "/images/creators/c5.jpg", bio: "Spa journeys, yoga retreats & slow travel.", audience: { ageRange: "30-50", topLocations: ["Sedona", "Denver", "Portland"], income: "$125K+" } },
  { id: "c6", name: "Tom & Rita Wells", handle: "@familytide", niche: "Family Travel", followers: 88000, engagement: 3.6, tcs: 78, location: "Orlando, FL", image: "/images/creators/c6.jpg", bio: "Honest family resort reviews - kids in tow.", audience: { ageRange: "30-45", topLocations: ["Orlando", "San Diego", "Phoenix"], income: "$110K+" } },
  { id: "c7", name: "Leo Castellanos", handle: "@greengreens", niche: "Golf", followers: 22000, engagement: 5.4, tcs: 86, location: "Palm Springs, CA", image: "/images/creators/c7.jpg", bio: "Course architecture nerd. Resort golf specialist.", audience: { ageRange: "40-60", topLocations: ["Palm Springs", "Hilton Head", "Phoenix"], income: "$160K+" } },
  { id: "c8", name: "Nadia Okafor", handle: "@cliffsandcities", niche: "Adventure", followers: 340000, engagement: 2.8, tcs: 74, location: "Seattle, WA", image: "/images/creators/c8.jpg", bio: "Cliffside hotels & urban basecamps.", audience: { ageRange: "20-38", topLocations: ["Seattle", "Vancouver", "Denver"], income: "$100K+" } },
  { id: "c9", name: "Yuki Tanaka", handle: "@spaandspirit", niche: "Wellness", followers: 65000, engagement: 4.5, tcs: 83, location: "San Francisco, CA", image: "/images/creators/c9.jpg", bio: "Onsen culture, spa rituals & mindful escapes.", audience: { ageRange: "28-48", topLocations: ["San Francisco", "Kyoto", "Sedona"], income: "$135K+" } },
  { id: "c10", name: "Elena Petrova", handle: "@tableforone", niche: "Culinary", followers: 150000, engagement: 3.9, tcs: 80, location: "New York, NY", image: "/images/creators/c10.jpg", bio: "Where to stay for the food - chef interviews & tasting menus.", audience: { ageRange: "25-45", topLocations: ["New York", "Paris", "Chicago"], income: "$120K+" } },
];

// ============================================================
// HOTEL CAMPAIGNS / StayPackages - creator Stay Shop + /stays/[slug]
// ============================================================
export type StayFaq = {
  question: string;
  answer: string;
};

export type StayAddress = {
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
};

export type HotelCampaign = {
  id: string;
  slug: string;
  name: string;
  location: string;
  type: "Golf Resort" | "Beach Resort" | "Boutique Hotel" | "Urban Luxury" | "Wellness Retreat";
  commission: number;
  deliverables: string;
  compNights: number;
  image: string;
  rating: number;
  verified: boolean;
  /** Why this property books for a creator's audience (Stay Shop story). */
  creatorAngle: string;
  /** Short optional blurb under the hero. */
  blurb?: string;
  /** Demo label for sample content placeholder. */
  sampleContentLabel: string;
  /** Preview of the creator's tracked attribution link. */
  attributionPreview: string;
  /** Optional hint about booking proof in pilot. */
  bookingProofHint?: string;
  faq: StayFaq[];
  address: StayAddress;
  /** When false, never show fabricated dollar rates. */
  priceAccurate: boolean;
  /** Optional tracked booking destination (never naked OTA). */
  bookingHref?: string;
};

function faqSet(
  name: string,
  nights: number,
  deliverables: string,
  type: string,
): StayFaq[] {
  return [
    {
      question: `What does the ${name} StayPackage include?`,
      answer: `A complimentary stay of ${nights} nights for the agreed collaboration, plus tracked commission on bookings you drive. Deliverables: ${deliverables}.`,
    },
    {
      question: "How does tracked commission work?",
      answer:
        "You share a StayFlow attribution link. Traveler clicks map back to you. This demo shows the pattern — rates and payouts are confirmed when you Activate or when the hotel claims the listing. No raw commission % is shown in the pilot UI.",
    },
    {
      question: "Is this live hotel inventory?",
      answer:
        "No. This is sample StayPackage demo inventory for the StayFlow pilot. Properties and tracking are illustrative so creators and hotels can evaluate the flow — not a live booking engine or OTA replacement.",
    },
    {
      question: "What content do I need to deliver?",
      answer: `Agreed deliverables for this package: ${deliverables}. Final creative brief is confirmed after you Activate stay and match with the property.`,
    },
    {
      question: "How can a hotel claim this listing?",
      answer: `Property teams can claim ${name} (${type}) via “I'm a hotel — claim this listing” to verify identity, publish offer terms, and confirm rates. Until claimed, treat this as pilot demo inventory.`,
    },
  ];
}

export const hotelCampaigns: HotelCampaign[] = [
  {
    id: "h1",
    slug: "fairmont-grand",
    name: "The Fairmont Grand",
    location: "Scottsdale, AZ",
    type: "Golf Resort",
    commission: 20,
    deliverables: "3 Reels + 5 Stories",
    compNights: 3,
    image: "/images/hotels/h1.jpg",
    rating: 4.9,
    verified: true,
    creatorAngle:
      "Course-first storytelling with sunset tee times — golf travelers book the stay they just watched.",
    blurb: "Desert golf resort built for fairway storytelling and multi-night golf trips.",
    sampleContentLabel: "Demo sample · fairway sunrise Reel",
    attributionPreview: "stayflow.app/go/fairmont-grand/your-handle",
    bookingProofHint: "Pilot tracks clicks to booking pages you share.",
    faq: faqSet("The Fairmont Grand", 3, "3 Reels + 5 Stories", "Golf Resort"),
    address: {
      streetAddress: "2400 E Camelback Rd",
      addressLocality: "Scottsdale",
      addressRegion: "AZ",
      postalCode: "85251",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/fairmont-grand?src=stay-detail&campaign=h1",
  },
  {
    id: "h2",
    slug: "azure-bay",
    name: "Azure Bay Resort",
    location: "Maui, HI",
    type: "Beach Resort",
    commission: 22,
    deliverables: "2 Reels + 4 Stories + 1 Blog",
    compNights: 4,
    image: "/images/hotels/h2.jpg",
    rating: 5.0,
    verified: true,
    creatorAngle:
      "Family beach weeks with kid-friendly pools — parents save the link after the Stories sequence.",
    blurb: "Maui beach resort for family weeks, lagoon mornings, and Stories-driven saves.",
    sampleContentLabel: "Demo sample · lagoon morning Stories",
    attributionPreview: "stayflow.app/go/azure-bay/your-handle",
    bookingProofHint: "Demo shows how traveler clicks map back to you.",
    faq: faqSet("Azure Bay Resort", 4, "2 Reels + 4 Stories + 1 Blog", "Beach Resort"),
    address: {
      streetAddress: "3850 Wailea Alanui Dr",
      addressLocality: "Maui",
      addressRegion: "HI",
      postalCode: "96753",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/azure-bay?src=stay-detail&campaign=h2",
  },
  {
    id: "h3",
    slug: "saffron-house",
    name: "Saffron House",
    location: "Charleston, SC",
    type: "Boutique Hotel",
    commission: 18,
    deliverables: "1 Reel + 3 Stories",
    compNights: 2,
    image: "/images/hotels/h3.jpg",
    rating: 4.8,
    verified: true,
    creatorAngle:
      "Historic porch + chef's table nights — culinary travelers book the boutique they tasted on camera.",
    blurb: "Charleston boutique with porch evenings and chef-led tasting nights.",
    sampleContentLabel: "Demo sample · courtyard dinner Reel",
    attributionPreview: "stayflow.app/go/saffron-house/your-handle",
    faq: faqSet("Saffron House", 2, "1 Reel + 3 Stories", "Boutique Hotel"),
    address: {
      streetAddress: "112 Meeting St",
      addressLocality: "Charleston",
      addressRegion: "SC",
      postalCode: "29401",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/saffron-house?src=stay-detail&campaign=h3",
  },
  {
    id: "h4",
    slug: "meridian-tower",
    name: "Meridian Tower",
    location: "New York, NY",
    type: "Urban Luxury",
    commission: 25,
    deliverables: "2 Reels + 2 Stories",
    compNights: 2,
    image: "/images/hotels/h4.jpg",
    rating: 4.7,
    verified: true,
    creatorAngle:
      "Skyline suites for city-weekend getaways — your audience books the view they paused on.",
    blurb: "Manhattan skyline suites made for city-weekend Reels and bio-link bookings.",
    sampleContentLabel: "Demo sample · penthouse golden-hour Reel",
    attributionPreview: "stayflow.app/go/meridian-tower/your-handle",
    bookingProofHint: "Tracked link works for Stories stickers and bio links.",
    faq: faqSet("Meridian Tower", 2, "2 Reels + 2 Stories", "Urban Luxury"),
    address: {
      streetAddress: "45 W 44th St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10036",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/meridian-tower?src=stay-detail&campaign=h4",
  },
  {
    id: "h5",
    slug: "verde-wellness",
    name: "Verde Wellness Retreat",
    location: "Sedona, AZ",
    type: "Wellness Retreat",
    commission: 17,
    deliverables: "3 Reels + 6 Stories + 1 YouTube",
    compNights: 3,
    image: "/images/hotels/h5.jpg",
    rating: 4.9,
    verified: true,
    creatorAngle:
      "Spa mornings and red-rock trails — wellness followers convert when the reset feels real.",
    blurb: "Sedona wellness retreat for spa mornings, trails, and slow-travel audiences.",
    sampleContentLabel: "Demo sample · sunrise yoga Reel",
    attributionPreview: "stayflow.app/go/verde-wellness/your-handle",
    faq: faqSet("Verde Wellness Retreat", 3, "3 Reels + 6 Stories + 1 YouTube", "Wellness Retreat"),
    address: {
      streetAddress: "90 Ridge Trail",
      addressLocality: "Sedona",
      addressRegion: "AZ",
      postalCode: "86336",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/verde-wellness?src=stay-detail&campaign=h5",
  },
  {
    id: "h6",
    slug: "cypress-point",
    name: "Cypress Point Lodge",
    location: "Pebble Beach, CA",
    type: "Golf Resort",
    commission: 21,
    deliverables: "2 Reels + 5 Stories",
    compNights: 3,
    image: "/images/hotels/h6.jpg",
    rating: 4.8,
    verified: true,
    creatorAngle:
      "Coastal links with lodge fireplaces — golf pairs book multi-night trips from one strong Reel.",
    blurb: "Pebble Beach coastal links lodge for cliffside holes and fireplace evenings.",
    sampleContentLabel: "Demo sample · cliffside 18th Stories",
    attributionPreview: "stayflow.app/go/cypress-point/your-handle",
    bookingProofHint: "Illustrative tracking only in this demo.",
    faq: faqSet("Cypress Point Lodge", 3, "2 Reels + 5 Stories", "Golf Resort"),
    address: {
      streetAddress: "17 Mile Dr",
      addressLocality: "Pebble Beach",
      addressRegion: "CA",
      postalCode: "93953",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/cypress-point?src=stay-detail&campaign=h6",
  },
  {
    id: "h7",
    slug: "pearl-atoll",
    name: "The Pearl Atoll",
    location: "Key West, FL",
    type: "Beach Resort",
    commission: 19,
    deliverables: "4 Stories + 1 Reel",
    compNights: 2,
    image: "/images/hotels/h7.jpg",
    rating: 4.6,
    verified: false,
    creatorAngle:
      "Keys sunset docks and waterfront cabanas — weekend travelers save the stay from your Stories.",
    blurb: "Key West waterfront resort for dock sunsets and weekend Stories saves.",
    sampleContentLabel: "Demo sample · dock sunset Stories",
    attributionPreview: "stayflow.app/go/pearl-atoll/your-handle",
    faq: faqSet("The Pearl Atoll", 2, "4 Stories + 1 Reel", "Beach Resort"),
    address: {
      streetAddress: "2401 N Roosevelt Blvd",
      addressLocality: "Key West",
      addressRegion: "FL",
      postalCode: "33040",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/pearl-atoll?src=stay-detail&campaign=h7",
  },
  {
    id: "h8",
    slug: "marigold-vine",
    name: "Marigold & Vine",
    location: "Napa Valley, CA",
    type: "Boutique Hotel",
    commission: 20,
    deliverables: "1 Reel + 4 Stories + 1 Blog",
    compNights: 2,
    image: "/images/hotels/h8.jpg",
    rating: 4.9,
    verified: true,
    creatorAngle:
      "Vineyard mornings and tasting rooms — food-and-wine creators drive midweek boutique stays.",
    blurb: "Napa boutique for vineyard mornings, tasting rooms, and midweek culinary stays.",
    sampleContentLabel: "Demo sample · vineyard picnic Reel",
    attributionPreview: "stayflow.app/go/marigold-vine/your-handle",
    bookingProofHint: "Pilot criteria — not a live earnings guarantee.",
    faq: faqSet("Marigold & Vine", 2, "1 Reel + 4 Stories + 1 Blog", "Boutique Hotel"),
    address: {
      streetAddress: "6480 Washington St",
      addressLocality: "Yountville",
      addressRegion: "CA",
      postalCode: "94599",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/marigold-vine?src=stay-detail&campaign=h8",
  },
  {
    id: "h9",
    slug: "skyline-metro",
    name: "Skyline Metropolitan",
    location: "Chicago, IL",
    type: "Urban Luxury",
    commission: 24,
    deliverables: "2 Reels + 2 Stories",
    compNights: 2,
    image: "/images/hotels/h9.jpg",
    rating: 4.7,
    verified: true,
    creatorAngle:
      "River views and rooftop dinners — urban creators turn city weekends into tracked bookings.",
    blurb: "Chicago river-view luxury for rooftop dinners and city-weekend Reels.",
    sampleContentLabel: "Demo sample · rooftop night Reel",
    attributionPreview: "stayflow.app/go/skyline-metro/your-handle",
    faq: faqSet("Skyline Metropolitan", 2, "2 Reels + 2 Stories", "Urban Luxury"),
    address: {
      streetAddress: "301 E North Water St",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60611",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/skyline-metro?src=stay-detail&campaign=h9",
  },
  {
    id: "h10",
    slug: "stillwater-springs",
    name: "Stillwater Hot Springs",
    location: "Aspen, CO",
    type: "Wellness Retreat",
    commission: 16,
    deliverables: "3 Reels + 4 Stories",
    compNights: 3,
    image: "/images/hotels/h10.jpg",
    rating: 5.0,
    verified: true,
    creatorAngle:
      "Mountain soaks and quiet cabins — slow-travel audiences book restorative midweek escapes.",
    blurb: "Aspen hot springs retreat for mountain soaks and restorative midweek escapes.",
    sampleContentLabel: "Demo sample · steam-and-snow Reel",
    attributionPreview: "stayflow.app/go/stillwater-springs/your-handle",
    bookingProofHint: "Demo honesty: sample property, illustrative tracking.",
    faq: faqSet("Stillwater Hot Springs", 3, "3 Reels + 4 Stories", "Wellness Retreat"),
    address: {
      streetAddress: "300 Hot Springs Rd",
      addressLocality: "Aspen",
      addressRegion: "CO",
      postalCode: "81611",
      addressCountry: "US",
    },
    priceAccurate: false,
    bookingHref: "/go/stillwater-springs?src=stay-detail&campaign=h10",
  },
];

export function getCampaignBySlug(slug: string): HotelCampaign | undefined {
  return hotelCampaigns.find((campaign) => campaign.slug === slug);
}

export function getAllCampaignSlugs(): string[] {
  return hotelCampaigns.map((campaign) => campaign.slug);
}
