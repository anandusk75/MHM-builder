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

/**
 * Builds the public URL for a photo stored in /public/images.
 * To use a real photo, overwrite the file at that path (keep the name) or
 * change the path here in data.ts.
 */
function photo(path: string) {
  return `/images/${path}`;
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
      src: photo("projects/cedar-ridge-residence/main.jpg"),
      alt: "Modern cedar-clad hillside residence with large glass windows at dusk",
    },
    cardImage: {
      src: photo("projects/cedar-ridge-residence/main.jpg"),
      alt: "Modern cedar-clad hillside residence with large glass windows at dusk",
    },
    gallery: [
      { src: photo("projects/cedar-ridge-residence/gallery-1.jpg"), alt: "Open-plan living room with exposed timber ceiling" },
      { src: photo("projects/cedar-ridge-residence/gallery-2.jpg"), alt: "Kitchen with waterfall stone island" },
      { src: photo("projects/cedar-ridge-residence/gallery-3.jpg"), alt: "Primary bedroom with floor-to-ceiling windows" },
      { src: photo("projects/cedar-ridge-residence/gallery-4.jpg"), alt: "Exterior deck detail with steel railing" },
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
      src: photo("projects/willamette-house/main.jpg"),
      alt: "Contemporary courtyard house with river views and timber cladding",
    },
    cardImage: {
      src: photo("projects/willamette-house/main.jpg"),
      alt: "Contemporary courtyard house with river views and timber cladding",
    },
    gallery: [
      { src: photo("projects/willamette-house/gallery-1.jpg"), alt: "Interior courtyard with sliding glass doors" },
      { src: photo("projects/willamette-house/gallery-2.jpg"), alt: "Dining room with pendant lighting" },
      { src: photo("projects/willamette-house/gallery-3.jpg"), alt: "Poolside pavilion with timber screen" },
      { src: photo("projects/willamette-house/gallery-4.jpg"), alt: "Bathroom with stone-lined shower" },
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
      src: photo("projects/skyline-modern/main.jpg"),
      alt: "Multi-level modern home built into a hillside with expansive glazing",
    },
    cardImage: {
      src: photo("projects/skyline-modern/main.jpg"),
      alt: "Multi-level modern home built into a hillside with expansive glazing",
    },
    gallery: [
      { src: photo("projects/skyline-modern/gallery-1.jpg"), alt: "Living space with city skyline views" },
      { src: photo("projects/skyline-modern/gallery-2.jpg"), alt: "Staircase with steel and timber detailing" },
      { src: photo("projects/skyline-modern/gallery-3.jpg"), alt: "Home office with built-in cabinetry" },
      { src: photo("projects/skyline-modern/gallery-4.jpg"), alt: "Rooftop terrace at dusk" },
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
      src: photo("projects/orchard-lane-residence/main.jpg"),
      alt: "Single-storey farmhouse surrounded by orchard trees",
    },
    cardImage: {
      src: photo("projects/orchard-lane-residence/main.jpg"),
      alt: "Single-storey farmhouse surrounded by orchard trees",
    },
    gallery: [
      { src: photo("projects/orchard-lane-residence/gallery-1.jpg"), alt: "Farmhouse kitchen with open shelving" },
      { src: photo("projects/orchard-lane-residence/gallery-2.jpg"), alt: "Converted barn studio interior" },
      { src: photo("projects/orchard-lane-residence/gallery-3.jpg"), alt: "Exterior porch overlooking the orchard" },
      { src: photo("projects/orchard-lane-residence/gallery-4.jpg"), alt: "Bedroom with exposed timber trusses" },
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
      src: photo("projects/pearl-district-office/main.jpg"),
      alt: "Modern mass-timber office building exterior in an urban setting",
    },
    cardImage: {
      src: photo("projects/pearl-district-office/main.jpg"),
      alt: "Modern mass-timber office building exterior in an urban setting",
    },
    gallery: [
      { src: photo("projects/pearl-district-office/gallery-1.jpg"), alt: "Office lobby with exposed timber columns" },
      { src: photo("projects/pearl-district-office/gallery-2.jpg"), alt: "Open-plan office floor with glazing" },
      { src: photo("projects/pearl-district-office/gallery-3.jpg"), alt: "Rooftop terrace of office building" },
      { src: photo("projects/pearl-district-office/gallery-4.jpg"), alt: "Stairwell with steel balustrade" },
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
      src: photo("projects/northbank-warehouse-conversion/main.jpg"),
      alt: "Industrial warehouse building exterior with large windows",
    },
    cardImage: {
      src: photo("projects/northbank-warehouse-conversion/main.jpg"),
      alt: "Industrial warehouse building exterior with large windows",
    },
    gallery: [
      { src: photo("projects/northbank-warehouse-conversion/gallery-1.jpg"), alt: "Warehouse interior with exposed bowstring trusses" },
      { src: photo("projects/northbank-warehouse-conversion/gallery-2.jpg"), alt: "Open event space inside converted warehouse" },
      { src: photo("projects/northbank-warehouse-conversion/gallery-3.jpg"), alt: "Creative office space with polished concrete floors" },
      { src: photo("projects/northbank-warehouse-conversion/gallery-4.jpg"), alt: "Loading dock converted into building entrance" },
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
      src: photo("projects/riverside-hospitality-pavilion/main.jpg"),
      alt: "Timber-framed event pavilion overlooking a river valley",
    },
    cardImage: {
      src: photo("projects/riverside-hospitality-pavilion/main.jpg"),
      alt: "Timber-framed event pavilion overlooking a river valley",
    },
    gallery: [
      { src: photo("projects/riverside-hospitality-pavilion/gallery-1.jpg"), alt: "Interior of timber-framed pavilion set for an event" },
      { src: photo("projects/riverside-hospitality-pavilion/gallery-2.jpg"), alt: "Commercial kitchen with stainless steel counters" },
      { src: photo("projects/riverside-hospitality-pavilion/gallery-3.jpg"), alt: "Rooftop terrace overlooking the river valley at dusk" },
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
      src: photo("projects/alder-street-retail/main.jpg"),
      alt: "Historic downtown retail block with restored facade",
    },
    cardImage: {
      src: photo("projects/alder-street-retail/main.jpg"),
      alt: "Historic downtown retail block with restored facade",
    },
    gallery: [
      { src: photo("projects/alder-street-retail/gallery-1.jpg"), alt: "Restored retail storefront with large display windows" },
      { src: photo("projects/alder-street-retail/gallery-2.jpg"), alt: "Interior retail fit-out with exposed brick" },
      { src: photo("projects/alder-street-retail/gallery-3.jpg"), alt: "Detail of restored terracotta facade ornamentation" },
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
  { src: photo("renovations/1.jpg"), alt: "Renovated kitchen with new cabinetry and island" },
  { src: photo("renovations/2.jpg"), alt: "Renovated bathroom with stone tile and freestanding tub" },
  { src: photo("renovations/3.jpg"), alt: "Second-storey addition under construction" },
  { src: photo("renovations/4.jpg"), alt: "Renovated living space with restored original windows" },
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
