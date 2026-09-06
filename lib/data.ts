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
// HOTEL CAMPAIGNS - shown to creators in the grid (creator) path
// ============================================================
export type HotelCampaign = {
  id: string;
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
  /** Demo label for sample content placeholder. */
  sampleContentLabel: string;
  /** Preview of the creator's tracked attribution link. */
  attributionPreview: string;
  /** Optional hint about booking proof in pilot. */
  bookingProofHint?: string;
};

export const hotelCampaigns: HotelCampaign[] = [
  {
    id: "h1",
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
    sampleContentLabel: "Demo sample · fairway sunrise Reel",
    attributionPreview: "stayflow.app/go/fairmont-grand/your-handle",
    bookingProofHint: "Pilot tracks clicks to booking pages you share.",
  },
  {
    id: "h2",
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
    sampleContentLabel: "Demo sample · lagoon morning Stories",
    attributionPreview: "stayflow.app/go/azure-bay/your-handle",
    bookingProofHint: "Demo shows how traveler clicks map back to you.",
  },
  {
    id: "h3",
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
    sampleContentLabel: "Demo sample · courtyard dinner Reel",
    attributionPreview: "stayflow.app/go/saffron-house/your-handle",
  },
  {
    id: "h4",
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
    sampleContentLabel: "Demo sample · penthouse golden-hour Reel",
    attributionPreview: "stayflow.app/go/meridian-tower/your-handle",
    bookingProofHint: "Tracked link works for Stories stickers and bio links.",
  },
  {
    id: "h5",
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
    sampleContentLabel: "Demo sample · sunrise yoga Reel",
    attributionPreview: "stayflow.app/go/verde-wellness/your-handle",
  },
  {
    id: "h6",
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
    sampleContentLabel: "Demo sample · cliffside 18th Stories",
    attributionPreview: "stayflow.app/go/cypress-point/your-handle",
    bookingProofHint: "Illustrative tracking only in this demo.",
  },
  {
    id: "h7",
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
    sampleContentLabel: "Demo sample · dock sunset Stories",
    attributionPreview: "stayflow.app/go/pearl-atoll/your-handle",
  },
  {
    id: "h8",
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
    sampleContentLabel: "Demo sample · vineyard picnic Reel",
    attributionPreview: "stayflow.app/go/marigold-vine/your-handle",
    bookingProofHint: "Pilot criteria — not a live earnings guarantee.",
  },
  {
    id: "h9",
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
    sampleContentLabel: "Demo sample · rooftop night Reel",
    attributionPreview: "stayflow.app/go/skyline-metro/your-handle",
  },
  {
    id: "h10",
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
    sampleContentLabel: "Demo sample · steam-and-snow Reel",
    attributionPreview: "stayflow.app/go/stillwater-springs/your-handle",
    bookingProofHint: "Demo honesty: sample property, illustrative tracking.",
  },
];
