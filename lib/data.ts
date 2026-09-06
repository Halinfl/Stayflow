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
  { id: "c1", name: "Marcus Reid", handle: "@fairwayfinds", niche: "Golf", followers: 48000, engagement: 4.2, tcs: 88, location: "Scottsdale, AZ", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", bio: "Golf resort reviews & course architecture deep-dives.", audience: { ageRange: "35-55", topLocations: ["Phoenix", "Dallas", "Atlanta"], income: "$150K+" } },
  { id: "c2", name: "Chloe Bennett", handle: "@saltairdiaries", niche: "Beach & Family", followers: 210000, engagement: 3.1, tcs: 82, location: "San Diego, CA", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", bio: "Beach vacations for young families.", audience: { ageRange: "28-45", topLocations: ["Los Angeles", "Miami", "Austin"], income: "$120K+" } },
  { id: "c3", name: "Priya Nair", handle: "@boutiquebliss", niche: "Boutique & Culinary", followers: 35000, engagement: 5.0, tcs: 90, location: "Charleston, SC", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", bio: "Historic hotels & the food scenes around them.", audience: { ageRange: "28-45", topLocations: ["Charleston", "Savannah", "Nashville"], income: "$140K+" } },
  { id: "c4", name: "Jordan Ellis", handle: "@urbansuite", niche: "Urban Luxury", followers: 520000, engagement: 2.4, tcs: 76, location: "New York, NY", image: "https://images.unsplash.com/photo-1506794778202-cad84cf65f1f?auto=format&fit=crop&w=800&q=80", bio: "Skyline suites & city escapes.", audience: { ageRange: "22-40", topLocations: ["New York", "Chicago", "London"], income: "$150K+" } },
  { id: "c5", name: "Ava Lindstrom", handle: "@zenroots", niche: "Wellness", followers: 120000, engagement: 4.8, tcs: 84, location: "Sedona, AZ", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80", bio: "Spa journeys, yoga retreats & slow travel.", audience: { ageRange: "30-50", topLocations: ["Sedona", "Denver", "Portland"], income: "$125K+" } },
  { id: "c6", name: "Tom & Rita Wells", handle: "@familytide", niche: "Family Travel", followers: 88000, engagement: 3.6, tcs: 78, location: "Orlando, FL", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", bio: "Honest family resort reviews - kids in tow.", audience: { ageRange: "30-45", topLocations: ["Orlando", "San Diego", "Phoenix"], income: "$110K+" } },
  { id: "c7", name: "Leo Castellanos", handle: "@greengreens", niche: "Golf", followers: 22000, engagement: 5.4, tcs: 86, location: "Palm Springs, CA", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", bio: "Course architecture nerd. Resort golf specialist.", audience: { ageRange: "40-60", topLocations: ["Palm Springs", "Hilton Head", "Phoenix"], income: "$160K+" } },
  { id: "c8", name: "Nadia Okafor", handle: "@cliffsandcities", niche: "Adventure", followers: 340000, engagement: 2.8, tcs: 74, location: "Seattle, WA", image: "https://images.unsplash.com/photo-1529626455599-270ff1ede6d7?auto=format&fit=crop&w=800&q=80", bio: "Cliffside hotels & urban basecamps.", audience: { ageRange: "20-38", topLocations: ["Seattle", "Vancouver", "Denver"], income: "$100K+" } },
  { id: "c9", name: "Yuki Tanaka", handle: "@spaandspirit", niche: "Wellness", followers: 65000, engagement: 4.5, tcs: 83, location: "San Francisco, CA", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", bio: "Onsen culture, spa rituals & mindful escapes.", audience: { ageRange: "28-48", topLocations: ["San Francisco", "Kyoto", "Sedona"], income: "$135K+" } },
  { id: "c10", name: "Elena Petrova", handle: "@tableforone", niche: "Culinary", followers: 150000, engagement: 3.9, tcs: 80, location: "New York, NY", image: "https://images.unsplash.com/photo-1580489944761-15f19d654956?auto=format&fit=crop&w=800&q=80", bio: "Where to stay for the food - chef interviews & tasting menus.", audience: { ageRange: "25-45", topLocations: ["New York", "Paris", "Chicago"], income: "$120K+" } },
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
};

export const hotelCampaigns: HotelCampaign[] = [
  { id: "h1", name: "The Fairmont Grand", location: "Scottsdale, AZ", type: "Golf Resort", commission: 20, deliverables: "3 Reels + 5 Stories", compNights: 3, image: "https://images.unsplash.com/photo-1566073771259-6a850609dd5d?auto=format&fit=crop&w=1200&q=80", rating: 4.9, verified: true },
  { id: "h2", name: "Azure Bay Resort", location: "Maui, HI", type: "Beach Resort", commission: 22, deliverables: "2 Reels + 4 Stories + 1 Blog", compNights: 4, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80", rating: 5.0, verified: true },
  { id: "h3", name: "Saffron House", location: "Charleston, SC", type: "Boutique Hotel", commission: 18, deliverables: "1 Reel + 3 Stories", compNights: 2, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80", rating: 4.8, verified: true },
  { id: "h4", name: "Meridian Tower", location: "New York, NY", type: "Urban Luxury", commission: 25, deliverables: "2 Reels + 2 Stories", compNights: 2, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", rating: 4.7, verified: true },
  { id: "h5", name: "Verde Wellness Retreat", location: "Sedona, AZ", type: "Wellness Retreat", commission: 17, deliverables: "3 Reels + 6 Stories + 1 YouTube", compNights: 3, image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80", rating: 4.9, verified: true },
  { id: "h6", name: "Cypress Point Lodge", location: "Pebble Beach, CA", type: "Golf Resort", commission: 21, deliverables: "2 Reels + 5 Stories", compNights: 3, image: "https://images.unsplash.com/photo-1584132967334-10e028bd86f8?auto=format&fit=crop&w=1200&q=80", rating: 4.8, verified: true },
  { id: "h7", name: "The Pearl Atoll", location: "Key West, FL", type: "Beach Resort", commission: 19, deliverables: "4 Stories + 1 Reel", compNights: 2, image: "https://images.unsplash.com/photo-1540541338287-41795e0b5d3b?auto=format&fit=crop&w=1200&q=80", rating: 4.6, verified: false },
  { id: "h8", name: "Marigold & Vine", location: "Napa Valley, CA", type: "Boutique Hotel", commission: 20, deliverables: "1 Reel + 4 Stories + 1 Blog", compNights: 2, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80", rating: 4.9, verified: true },
  { id: "h9", name: "Skyline Metropolitan", location: "Chicago, IL", type: "Urban Luxury", commission: 24, deliverables: "2 Reels + 2 Stories", compNights: 2, image: "https://images.unsplash.com/photo-1549298916-f41d72378268?auto=format&fit=crop&w=1200&q=80", rating: 4.7, verified: true },
  { id: "h10", name: "Stillwater Hot Springs", location: "Aspen, CO", type: "Wellness Retreat", commission: 16, deliverables: "3 Reels + 4 Stories", compNights: 3, image: "https://images.unsplash.com/photo-1615460548296-f59266b1e887?auto=format&fit=crop&w=1200&q=80", rating: 5.0, verified: true },
];
