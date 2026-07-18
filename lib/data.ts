/**
 * Central content store.
 *
 * Every page reads its copy and imagery from this file instead of hard-coding
 * strings in components. Swapping this out for a CMS (Sanity, Contentful,
 * etc.) later means replacing the exported functions/constants below with
 * fetch calls that return the same shapes — nothing in /app or /components
 * should need to change.
 */

// ---------------------------------------------------------------------------
// Image helper
// ---------------------------------------------------------------------------

/** Builds a consistent Unsplash source URL from a photo id. */
function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

// ---------------------------------------------------------------------------
// Site / company info
// ---------------------------------------------------------------------------

// TODO: `url` is a guessed domain, not confirmed — replace once MHM's real
// website domain is known. Everything else below is now real client info.
export const siteConfig = {
  name: "MHM Custom Home Builders",
  shortName: "MHM",
  legalSuffix: "General Contractor",
  tagline: "We build for people who think long-term.",
  // Physical HQ location — not a service-area limit. MHM builds nationwide;
  // use `serviceArea` for copy describing who they serve.
  region: "Tobyhanna, Pennsylvania",
  serviceArea: "across the country",
  foundedYear: 1980,
  description:
    "MHM Custom Home Builders is a general contractor headquartered in Tobyhanna, Pennsylvania, delivering considered residential and commercial projects for homeowners and architects across the country who value craft over shortcuts.",
  phone: "(570) 998-1909",
  phoneHref: "tel:+15709981909",
  email: "mhmgcbuilders@gmail.com",
  address: {
    line1: "5640 Pembrook Dr",
    line2: "Tobyhanna, PA 18466",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  url: "https://www.mhmcustomhomebuilders.com",
};

export const navLinks = [
  { label: "Alterations & Renovations", href: "/alterations-renovations" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Alterations & Renovations", href: "/alterations-renovations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type ProjectCategory = "residential" | "commercial";

export interface Project {
  slug: string;
  category: ProjectCategory;
  title: string;
  location: string;
  year: string;
  duration: string;
  architect: string;
  scope: string[];
  summary: string;
  description: string[];
  heroImage: GalleryImage;
  cardImage: GalleryImage;
  gallery: GalleryImage[];
}

export const residentialProjects: Project[] = [
  {
    slug: "cedar-ridge-residence",
    category: "residential",
    title: "Cedar Ridge Residence",
    location: "Portland, Oregon",
    year: "2023",
    duration: "14 months",
    architect: "Holt & Munro Architecture",
    scope: ["New build", "Custom millwork", "Landscape hardscape"],
    summary:
      "A four-bedroom hillside home built around a cantilevered great room and a wall of glass facing the Tualatin Valley.",
    description: [
      "Cedar Ridge Residence sits on a steep, heavily treed lot that ruled out a conventional foundation. Our crew worked with the structural engineer through three rounds of pier-and-grade-beam design before pouring a single yard of concrete.",
      "The result is a home that reads as effortless from the street and complex only when you understand what it took to keep the cantilever level through two Oregon winters.",
    ],
    heroImage: {
      src: unsplash("1600585154340-be6161a56a0c"),
      alt: "Modern cedar-clad hillside residence with large glass windows at dusk",
    },
    cardImage: {
      src: unsplash("1600585154340-be6161a56a0c"),
      alt: "Modern cedar-clad hillside residence with large glass windows at dusk",
    },
    gallery: [
      { src: unsplash("1600566753086-00f18fb6b3ea"), alt: "Open-plan living room with exposed timber ceiling" },
      { src: unsplash("1600585152220-90363fe7e115"), alt: "Kitchen with waterfall stone island" },
      { src: unsplash("1600210492486-724fe5c67fb0"), alt: "Primary bedroom with floor-to-ceiling windows" },
      { src: unsplash("1600607687920-4e2a09cf159d"), alt: "Exterior deck detail with steel railing" },
    ],
  },
  {
    slug: "willamette-house",
    category: "residential",
    title: "The Willamette House",
    location: "West Linn, Oregon",
    year: "2022",
    duration: "11 months",
    architect: "Fenwick Design Studio",
    scope: ["New build", "Interior joinery", "Pool & pavilion"],
    summary:
      "A riverside family home organized around a central courtyard that pulls light into every room on the ground floor.",
    description: [
      "The brief asked for a house that felt like one continuous space even with five bedrooms on the plan. We built the courtyard glazing as a single structural steel frame, fabricated off-site in three sections to hold tolerances tight enough for the sliding doors to disappear into the walls.",
      "Eighteen months on, the client's only request for the next project is 'more of that.'",
    ],
    heroImage: {
      src: unsplash("1486406146926-c627a92ad1ab"),
      alt: "Contemporary courtyard house with river views and timber cladding",
    },
    cardImage: {
      src: unsplash("1486406146926-c627a92ad1ab"),
      alt: "Contemporary courtyard house with river views and timber cladding",
    },
    gallery: [
      { src: unsplash("1600607687939-ce8a6c25118c"), alt: "Interior courtyard with sliding glass doors" },
      { src: unsplash("1497366216548-37526070297c"), alt: "Dining room with pendant lighting" },
      { src: unsplash("1600210491892-03d54c0aaf87"), alt: "Poolside pavilion with timber screen" },
      { src: unsplash("1531973576160-7125cd663d86"), alt: "Bathroom with stone-lined shower" },
    ],
  },
  {
    slug: "skyline-modern",
    category: "residential",
    title: "Skyline Modern",
    location: "Portland, Oregon",
    year: "2021",
    duration: "16 months",
    architect: "Brandt Weiss Architects",
    scope: ["New build", "Structural steel", "Smart-home integration"],
    summary:
      "A three-level home stepped into a west hills slope, engineered around a full-height steel moment frame.",
    description: [
      "Skyline Modern demanded a structural approach more common in mid-rise commercial work than single-family homes. We brought our commercial steel-erection crew onto a residential job for the first time to get the moment frame plumb within an eighth of an inch across three storeys.",
      "The owners moved in during a January storm and told us afterwards they never felt the wind.",
    ],
    heroImage: {
      src: unsplash("1449844908441-8829872d2607"),
      alt: "Multi-level modern home built into a hillside with expansive glazing",
    },
    cardImage: {
      src: unsplash("1449844908441-8829872d2607"),
      alt: "Multi-level modern home built into a hillside with expansive glazing",
    },
    gallery: [
      { src: unsplash("1503174971373-b1f69850bded"), alt: "Living space with city skyline views" },
      { src: unsplash("1541123356219-284ebe98ae3b"), alt: "Staircase with steel and timber detailing" },
      { src: unsplash("1503387837-b154d5074bd2"), alt: "Home office with built-in cabinetry" },
      { src: unsplash("1441974231531-c6227db76b6e"), alt: "Rooftop terrace at dusk" },
    ],
  },
  {
    slug: "orchard-lane-residence",
    category: "residential",
    title: "Orchard Lane Residence",
    location: "Hood River, Oregon",
    year: "2020",
    duration: "9 months",
    architect: "In-house design",
    scope: ["New build", "Barn conversion", "Solar array"],
    summary:
      "A single-storey farmhouse and converted barn studio for a client relocating from the city to five acres of orchard.",
    description: [
      "The existing barn on the property was structurally sound but had been used for equipment storage for forty years. Rather than demolish it, we stripped it to the frame, sistered the posts that needed it, and turned it into a detached studio that now gets more use than the house.",
      "Roughly sixty percent of the framing lumber on the main house was reclaimed from a decommissioned orchard outbuilding on the same lot.",
    ],
    heroImage: {
      src: unsplash("1416331108676-a22ccb276e35"),
      alt: "Single-storey farmhouse surrounded by orchard trees",
    },
    cardImage: {
      src: unsplash("1416331108676-a22ccb276e35"),
      alt: "Single-storey farmhouse surrounded by orchard trees",
    },
    gallery: [
      { src: unsplash("1493809842364-78817add7ffb"), alt: "Farmhouse kitchen with open shelving" },
      { src: unsplash("1433832597046-4f10e10ac764"), alt: "Converted barn studio interior" },
      { src: unsplash("1465447142348-e9952c393450"), alt: "Exterior porch overlooking the orchard" },
      { src: unsplash("1481253127861-534498168948"), alt: "Bedroom with exposed timber trusses" },
    ],
  },
];

export const commercialProjects: Project[] = [
  {
    slug: "pearl-district-office",
    category: "commercial",
    title: "Pearl District Office Building",
    location: "Portland, Oregon",
    year: "2023",
    duration: "18 months",
    architect: "Corrigan Bloom Partners",
    scope: ["Ground-up construction", "Curtain wall", "Core & shell"],
    summary:
      "A five-storey mass-timber office building delivered on a tight urban infill site with zero lay-down space.",
    description: [
      "With no room on site to stage materials, we sequenced deliveries to the hour for fourteen months straight. The mass-timber structure arrived pre-cut from the fabricator and was closed in before the first rain of the season, a schedule the developer's insurer had called 'optimistic.'",
      "It came in four days ahead of the revised schedule and under the contingency budget.",
    ],
    heroImage: {
      src: unsplash("1517581177682-a085bb7ffb15"),
      alt: "Modern mass-timber office building exterior in an urban setting",
    },
    cardImage: {
      src: unsplash("1517581177682-a085bb7ffb15"),
      alt: "Modern mass-timber office building exterior in an urban setting",
    },
    gallery: [
      { src: unsplash("1512917774080-9991f1c4c750"), alt: "Office lobby with exposed timber columns" },
      { src: unsplash("1523217582562-09d0def993a6"), alt: "Open-plan office floor with glazing" },
      { src: unsplash("1580587771525-78b9dba3b914"), alt: "Rooftop terrace of office building" },
      { src: unsplash("1519345182560-3f2917c472ef"), alt: "Stairwell with steel balustrade" },
    ],
  },
  {
    slug: "northbank-warehouse-conversion",
    category: "commercial",
    title: "Northbank Warehouse Conversion",
    location: "Portland, Oregon",
    year: "2022",
    duration: "12 months",
    architect: "Fenwick Design Studio",
    scope: ["Adaptive reuse", "Seismic retrofit", "Tenant build-out"],
    summary:
      "A 1940s cold-storage warehouse converted into creative office and event space while preserving its original bowstring trusses.",
    description: [
      "The building's timber bowstring trusses were the whole reason the client bought it, and the whole reason the seismic engineer lost sleep over it. We designed and installed a steel moment-frame retrofit that meets current code without touching a single visible truss.",
      "Every weld on the retrofit is hidden behind original material — nothing about the seismic work is visible from the floor.",
    ],
    heroImage: {
      src: unsplash("1541976590-713941681591"),
      alt: "Industrial warehouse building exterior with large windows",
    },
    cardImage: {
      src: unsplash("1541976590-713941681591"),
      alt: "Industrial warehouse building exterior with large windows",
    },
    gallery: [
      { src: unsplash("1544005313-94ddf0286df2"), alt: "Warehouse interior with exposed bowstring trusses" },
      { src: unsplash("1552058544-f2b08422138a"), alt: "Open event space inside converted warehouse" },
      { src: unsplash("1560250097-0b93528c311a"), alt: "Creative office space with polished concrete floors" },
      { src: unsplash("1600566752355-35792bedcfea"), alt: "Loading dock converted into building entrance" },
    ],
  },
  {
    slug: "riverside-hospitality-pavilion",
    category: "commercial",
    title: "Riverside Hospitality Pavilion",
    location: "Hood River, Oregon",
    year: "2021",
    duration: "10 months",
    architect: "Brandt Weiss Architects",
    scope: ["New build", "Timber frame", "Commercial kitchen fit-out"],
    summary:
      "A post-and-beam event pavilion and restaurant kitchen built for a riverside winery on a compressed pre-harvest schedule.",
    description: [
      "The client needed a working commercial kitchen and 2,400 square feet of event space ready before that year's harvest — a six-month window from permit to occupancy. We ran the timber frame and kitchen build-out crews in parallel rather than in sequence to hit the date.",
      "The pavilion hosted its first harvest dinner on schedule, four days after final inspection.",
    ],
    heroImage: {
      src: unsplash("1600607688066-890987f18a86"),
      alt: "Timber-framed event pavilion overlooking a river valley",
    },
    cardImage: {
      src: unsplash("1600607688066-890987f18a86"),
      alt: "Timber-framed event pavilion overlooking a river valley",
    },
    gallery: [
      { src: unsplash("1600047509807-ba8f99d2cdde"), alt: "Interior of timber-framed pavilion set for an event" },
      { src: unsplash("1421789665209-c9b2a435e3dc"), alt: "Commercial kitchen with stainless steel counters" },
      { src: unsplash("1541888946425-d81bb19240f5"), alt: "Rooftop terrace overlooking the river valley at dusk" },
    ],
  },
  {
    slug: "alder-street-retail",
    category: "commercial",
    title: "Alder Street Retail Block",
    location: "Portland, Oregon",
    year: "2020",
    duration: "8 months",
    architect: "Corrigan Bloom Partners",
    scope: ["Tenant improvement", "Facade restoration", "ADA upgrade"],
    summary:
      "Facade restoration and full tenant build-out across three ground-floor retail spaces in a historic downtown block.",
    description: [
      "The 1920s terracotta facade had been painted over and partially covered by decades of signage. We uncovered, cleaned, and repaired the original ornamentation while bringing the building up to current ADA and seismic standards behind it.",
      "Two of the three original tenants who signed on before construction started are still in the building today.",
    ],
    heroImage: {
      src: unsplash("1580489944761-15a19d654956"),
      alt: "Historic downtown retail block with restored facade",
    },
    cardImage: {
      src: unsplash("1580489944761-15a19d654956"),
      alt: "Historic downtown retail block with restored facade",
    },
    gallery: [
      { src: unsplash("1489980557514-251d61e3eeb6"), alt: "Restored retail storefront with large display windows" },
      { src: unsplash("1615109398623-88346a601842"), alt: "Interior retail fit-out with exposed brick" },
      { src: unsplash("1544723795-3fb6469f5b39"), alt: "Detail of restored terracotta facade ornamentation" },
    ],
  },
];

export const projects: Project[] = [...residentialProjects, ...commercialProjects];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return category === "residential" ? residentialProjects : commercialProjects;
}

export function getProjectBySlug(category: ProjectCategory, slug: string): Project | undefined {
  return getProjectsByCategory(category).find((p) => p.slug === slug);
}

export function getAdjacentProject(category: ProjectCategory, slug: string): Project {
  const list = getProjectsByCategory(category);
  const index = list.findIndex((p) => p.slug === slug);
  return list[(index + 1) % list.length];
}

export const featuredProjectSlug = "cedar-ridge-residence";
export const featuredProjectCategory: ProjectCategory = "residential";

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "MHM treated our budget like it was their own money. Every change order came with a real conversation, not a markup.",
    author: "Dana Whitfield",
    role: "Homeowner, Cedar Ridge Residence",
  },
  {
    quote:
      "We've run four projects through MHM in six years. They're the only contractor I've stopped shopping around against.",
    author: "Marcus Hale",
    role: "Principal, Corrigan Bloom Partners",
  },
  {
    quote:
      "They found problems in our existing structure we didn't know we had, told us before it cost us anything, and fixed it inside the original schedule.",
    author: "Priya Anand",
    role: "Developer, Northbank Warehouse Conversion",
  },
];

export const homeTestimonial = testimonials[0];

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: "Quality",
    description:
      "We staff crews the way we'd want them staffed if it were our own house — with people who've done the specific detail before, not just the trade.",
  },
  {
    title: "On-Time",
    description:
      "Schedules are commitments, not estimates. We build float into the plan up front instead of apologizing for it later.",
  },
  {
    title: "On-Budget",
    description:
      "Open-book pricing on every job. If something changes, you hear the number and the reason before it hits an invoice.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: GalleryImage;
}

export const team: TeamMember[] = [
  {
    name: "Francis Sloan",
    role: "Architect",
    image: { src: "/images/team/francis-sloan.jpg", alt: "Portrait of Francis Sloan, Architect, reviewing building plans" },
  },
  {
    name: "Dante",
    role: "Chief Morale Officer",
    image: { src: "/images/team/dante.jpg", alt: "Portrait of Dante, Chief Morale Officer" },
  },
];

export const certifications: string[] = [
  "Licensed & Bonded General Contractor", // TODO: add real state license number once available
  "OSHA-30 Certified Site Safety Program",
  "EPA Lead-Safe Certified Firm",
  "Member, Associated General Contractors of America",
  "Certified Aging-in-Place Specialist (CAPS) on staff",
];

// ---------------------------------------------------------------------------
// Alterations & Renovations page
// ---------------------------------------------------------------------------

export const renovationProcess = [
  {
    step: "01",
    title: "Walkthrough & feasibility",
    description:
      "We assess the existing structure on site before any design work starts, so the plan is grounded in what's actually behind the walls.",
  },
  {
    step: "02",
    title: "Design & scope development",
    description:
      "Working alongside your architect or ours, we cost the design in parallel with drafting so surprises show up on paper, not on site.",
  },
  {
    step: "03",
    title: "Permitting & pre-construction",
    description:
      "We hold long-lead items and pull permits before demolition, keeping the gap between teardown and rebuild as short as possible.",
  },
  {
    step: "04",
    title: "Construction",
    description:
      "A dedicated project manager runs a weekly site walk with you, so you're never finding out about a decision after it's been made.",
  },
  {
    step: "05",
    title: "Walkthrough & handover",
    description:
      "A punch list you sign off on, a binder of warranties and finish specs, and a crew that still picks up the phone a year later.",
  },
];

export const renovationGallery: GalleryImage[] = [
  { src: unsplash("1600585154526-990dced4db0d"), alt: "Renovated kitchen with new cabinetry and island" },
  { src: unsplash("1531973576160-7125cd663d86"), alt: "Renovated bathroom with stone tile and freestanding tub" },
  { src: unsplash("1600210491892-03d54c0aaf87"), alt: "Second-storey addition under construction" },
  { src: unsplash("1497366216548-37526070297c"), alt: "Renovated living space with restored original windows" },
];

// ---------------------------------------------------------------------------
// Contact / careers
// ---------------------------------------------------------------------------

export const projectTypeOptions = [
  "Residential — New Build",
  "Residential — Renovation",
  "Commercial — New Build",
  "Commercial — Tenant Improvement",
  "Not sure yet",
];

export const careerOptions = [
  "General Application",
  "Carpenter",
  "Project Manager",
  "Estimator",
  "Site Superintendent",
  "Site Safety",
  "Office / Administration",
];
