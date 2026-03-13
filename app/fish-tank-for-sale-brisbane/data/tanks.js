export const tanksData = [
  {
    id: 1,
    slug: "con",
    title: "AquaSys 315 Tropical/Plant Aquarium — Complete Setup",
    description: `
      <h3>Tank &amp; Stand — AquaSys 315 Tropical/Plant Aquarium</h3>
      <ul>
        <li>Frameless glass tank</li>
        <li>High quality low iron opti-clear glass</li>
        <li>Removable lids — open top setup</li>
        <li>Foam base included</li>
        <li>Extra depth for endless aquascaping possibilities</li>
        <li>Cabinet: 120L x 55D x 80cm H — concrete finish</li>
      </ul>
      <h3>Filter — Nautilus 1400</h3>
      <ul>
        <li>300–400L tank capacity</li>
        <li>1400L/hr flow rate</li>
        <li>Upgraded with Seachem Matrix media and ceramic noodles</li>
      </ul>
      <h3>Chiller — Hailea HC-150A</h3>
      <ul>
        <li>Tank recommendation: 50–400L</li>
        <li>Min flow rate: 250L/H</li>
        <li>Max flow rate: 1200L/H</li>
        <li>Aqua One circulation pump included</li>
      </ul>
      <h3>Light — Chihiros A Series II 120cm LED with Bluetooth</h3>
      <ul>
        <li>Full white light spectrum for planted aquariums</li>
      </ul>
    `,
    location: "Mt Gravatt, Brisbane",
    locationArea: "Brisbane South",
    tankSize: "120cm L x 55cm W x 55cm H",
    volume: 315,
    type: "Planted",
    price: null,
    negotiable: true,
    status: "available",
    condition: "excellent",
    thumbnail:
      "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1749469954/best-place-to-buy-bucephalandra-kedagang-v0-5fhaw341fkjc1_ujrt6m",
    images: [
      "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1749469954/best-place-to-buy-bucephalandra-kedagang-v0-5fhaw341fkjc1_ujrt6m",
    ],
    features: [
      "AquaSys 315 frameless opti-clear glass tank",
      "Cabinet 120L x 55D x 80cm H — concrete finish",
      "Nautilus 1400 canister filter (upgraded media)",
      "Hailea HC-150A chiller",
      "Aqua One circulation pump",
      "Chihiros A Series II 120cm LED light with Bluetooth",
    ],
    cloudinaryFolder: "AquaticSwan/Fishtank/Con",
    datePosted: "2026-03-13",
  },
];

export const tankTypes = [
  { id: "all", name: "All Types", count: tanksData.length },
  {
    id: "Reef",
    name: "Reef",
    count: tanksData.filter((t) => t.type === "Reef").length,
  },
  {
    id: "Marine",
    name: "Marine",
    count: tanksData.filter((t) => t.type === "Marine").length,
  },
  {
    id: "Freshwater",
    name: "Freshwater",
    count: tanksData.filter((t) => t.type === "Freshwater").length,
  },
  {
    id: "Planted",
    name: "Planted",
    count: tanksData.filter((t) => t.type === "Planted").length,
  },
  {
    id: "Cichlid",
    name: "Cichlid",
    count: tanksData.filter((t) => t.type === "Cichlid").length,
  },
];

export const locationAreas = [
  { id: "all", name: "All Locations" },
  { id: "Brisbane North", name: "Brisbane North" },
  { id: "Brisbane South", name: "Brisbane South" },
  { id: "Brisbane Inner", name: "Brisbane Inner" },
  { id: "Brisbane East", name: "Brisbane East" },
  { id: "Brisbane West", name: "Brisbane West" },
  { id: "Gold Coast", name: "Gold Coast" },
  { id: "Logan", name: "Logan" },
  { id: "Ipswich", name: "Ipswich" },
];

export function getTankById(id) {
  return tanksData.find((t) => t.id === Number(id)) || null;
}

export function getTankBySlug(slug) {
  return tanksData.find((t) => t.slug === slug) || null;
}

export function getAllTankIds() {
  return tanksData.map((t) => t.id);
}

export function getAllTankSlugs() {
  return tanksData.map((t) => t.slug);
}

export function getAvailableTanks() {
  return tanksData.filter((t) => t.status === "available");
}
