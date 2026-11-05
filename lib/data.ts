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
  // Optional details — only the ones that are filled in are shown on the
  // project page. TODO: add location / year / duration for each job.
  location?: string;
  year?: string;
  duration?: string;
  architect?: string;
  status?: string;
  scope: string[];
  summary: string;
  description: string[];
  heroImage: GalleryImage;
  cardImage: GalleryImage;
  gallery: GalleryImage[];
}

/** Builds the hero / card / gallery image set for a project folder. */
function projectImages(slug: string, heroAlt: string, cardAlt: string, galleryAlts: string[]) {
  const dir = `projects/${slug}`;
  return {
    heroImage: { src: photo(`${dir}/hero.jpg`), alt: heroAlt },
    cardImage: { src: photo(`${dir}/card.jpg`), alt: cardAlt },
    gallery: galleryAlts.map((alt, i) => ({
      src: photo(`${dir}/${String(i + 1).padStart(2, "0")}.jpg`),
      alt,
    })),
  };
}

export const residentialProjects: Project[] = [
  {
    slug: "grand-double-staircase",
    category: "residential",
    title: "Grand Double Staircase",
    scope: ["Curved stairs", "Custom ironwork", "Balcony railing"],
    summary:
      "Twin curved staircases rising to a shared balcony, wrapped in a custom black-iron balustrade.",
    description: [
      "The centerpiece of this home's double-height foyer is a pair of sweeping curved staircases that meet at a bridge balcony. Each stringer was laid out to follow the curve of the walls, so the treads stay even from the first step to the last.",
      "The balustrade is a custom arched pattern in matte black steel, run continuously along both flights and across the balcony so the whole entry reads as one piece of work.",
    ],
    ...projectImages(
      "grand-double-staircase",
      "Twin curved staircases with black ornamental iron railings meeting at a balcony",
      "Curved staircase with a black ornamental iron railing in a bright foyer",
      [
        "Twin curved staircases with black iron railings in a double-height foyer",
        "Curved staircase with arched black iron balustrade and balcony railing",
      ],
    ),
  },
  {
    slug: "two-storey-home-addition",
    category: "residential",
    title: "Two-Storey Home Addition",
    scope: ["Foundation", "Framing & sheathing", "Roofing & skylights", "Landscape steps"],
    summary:
      "A full two-storey addition built off the side of an existing home, from footings to weather-tight shell.",
    description: [
      "This addition started with excavation, formed footings and a stone base tied into the existing house. From there our crew framed and sheathed two full storeys, set the roof structure and flashed new skylights into the shingle roof.",
      "With the shell wrapped and windows installed, we finished the outside with pressure-treated timber steps and planters that step down the yard to the existing deck.",
    ],
    ...projectImages(
      "two-storey-home-addition",
      "Crew on ladders framing a two-storey addition beside a brick chimney",
      "Two-storey addition wrapped in house wrap with new windows and skylight",
      [
        "Formwork and stone base for the addition's foundation",
        "Crew member setting forms for the addition footings",
        "Crew sheathing the second storey of the addition",
        "Sheathed two-storey addition with a ladder against the wall",
        "Three crew members working on the addition's sheathing",
        "Corner of the sheathed addition with window and door openings",
        "Roofer flashing a new skylight into the shingle roof",
        "Pressure-treated timber steps and planters stepping down the yard",
        "Finished addition shell in house wrap with new windows",
      ],
    ),
  },
  {
    slug: "modern-deck-cable-railing",
    category: "residential",
    title: "Modern Deck & Cable Railing",
    scope: ["Composite decking", "Cable railing", "Entry stairs"],
    summary:
      "A wraparound composite deck with black posts and stainless cable infill that keeps the view open.",
    description: [
      "The owners wanted a deck that matched the clean lines of the house without boxing in the windows. We built it in charcoal composite decking with matching fascia, then ran black square posts with stainless-steel cables between them.",
      "The same railing continues down the entry stairs, with each cable set to follow the angle of the stair.",
    ],
    ...projectImages(
      "modern-deck-cable-railing",
      "Composite deck with black posts and stainless cable railing along a modern home",
      "Entry stairs with black posts and angled stainless cable railing",
      [
        "Wraparound composite deck with black posts and cable railing",
        "Cable railing running the length of the deck beside large windows",
        "Entry stairs with an angled cable railing",
      ],
    ),
  },
  {
    slug: "floating-staircase",
    category: "residential",
    title: "Open-Riser Floating Staircase",
    scope: ["Steel stringer", "Timber treads", "Loft railing"],
    summary:
      "A steel-stringer staircase with open timber treads, climbing to a loft lined with matching railing.",
    description: [
      "This staircase runs on a single black steel stringer, fabricated and set first so the open treads could be fixed to it one by one. Leaving out the risers keeps the room bright and lets light pass straight through.",
      "The slim black balustrade continues around the loft edge, tying the stair to the exposed timber beams overhead.",
    ],
    ...projectImages(
      "floating-staircase",
      "Loft with black steel railing above an open-riser staircase",
      "Open-riser staircase with timber treads and black steel railing",
      [
        "Open-riser staircase with timber treads and black steel railing",
        "Floating staircase rising beside a tall window",
        "Staircase and loft railing under exposed timber beams",
        "Crew installing the loft railing",
        "Steel stringer and treads set before the timber was installed",
      ],
    ),
  },
  {
    slug: "new-townhome-development",
    category: "residential",
    title: "New Townhome Development",
    scope: ["New build", "Framing", "Exterior finishes"],
    summary:
      "Ground-up townhomes with attached garages and stone-accent fronts, built from foundation to finish.",
    description: [
      "Starting from a cleared, graded lot, our crew set the block foundations and framed each townhome with a telehandler lifting wall panels into place.",
      "The finished homes pair gray siding with a stacked-stone gable, arched upper windows and attached two-car garages.",
    ],
    ...projectImages(
      "new-townhome-development",
      "New townhomes with stone gable fronts and attached garages",
      "Telehandler lifting wall framing on a new townhome build",
      [
        "Telehandler setting wall framing on the new foundation",
        "Wall framing going up beside a finished townhome",
        "Completed townhome fronts with garages and stone accents",
      ],
    ),
  },
  {
    slug: "front-entry-railings",
    category: "residential",
    title: "Front Entry Steps & Railings",
    scope: ["Stair refinishing", "Steel railings", "Painting"],
    summary:
      "Refinished entry steps and new black steel railings that make a front entrance safer and sharper.",
    description: [
      "We resurfaced the concrete entry stairs and landing, then installed new black steel railings along both flights and around the porch.",
      "Every railing is anchored into the stairs and finished on site so the coating stays even right down to the posts.",
    ],
    ...projectImages(
      "front-entry-railings",
      "Crew member finishing black steel railings on white entry stairs",
      "Black steel railings on refinished white entry stairs",
      [
        "Black steel railings on refinished white entry stairs",
        "Crew installing new railings at a brick home's front entry",
        "Black steel handrails and safety-striped steps at a storefront entry",
      ],
    ),
  },
  {
    slug: "custom-entry-doors",
    category: "residential",
    title: "Custom Entry Doors",
    scope: ["Stainless steel doors", "Ornamental ironwork", "Installation"],
    summary:
      "Stainless-steel security doors and ornamental metal doors, fitted to existing brick openings.",
    description: [
      "Each of these doors was sized to an existing masonry opening. Stainless-steel security doors get decorative grillework over the glass, so they're strong without looking heavy.",
      "For clients who wanted something warmer, we supplied and hung embossed copper-finish and scrollwork doors.",
    ],
    ...projectImages(
      "custom-entry-doors",
      "Stainless steel security door with decorative grille in a brick entry",
      "Ornamental scrollwork entry door in a brick wall",
      [
        "Ornamental scrollwork door over glass in a brick entry",
        "Stainless steel security door with decorative grilles behind a stainless railing",
        "Stainless steel door with grillework between black stair railings",
        "Embossed copper-finish door before installation",
      ],
    ),
  },
  {
    slug: "wrought-iron-gates",
    category: "residential",
    title: "Wrought-Iron Gates",
    scope: ["Driveway gates", "Garden gates", "Ornamental ironwork"],
    summary:
      "Driveway and garden gates in scrolled wrought iron, built to fit the property they guard.",
    description: [
      "From a wide double driveway gate with an arched crown to a garden gate set between brick piers, each gate is laid out to suit its opening and hung to swing true.",
      "Scrollwork panels and decorative crests are finished in black for a clean, lasting look.",
    ],
    ...projectImages(
      "wrought-iron-gates",
      "Arched wrought-iron garden gate between brick piers",
      "Ornamental wrought-iron gate with scrollwork panels",
      [
        "Double wrought-iron driveway gate with an arched crown",
        "Arched wrought-iron garden gate between brick piers",
        "Ornamental wrought-iron gate with scrollwork and a decorative crest",
      ],
    ),
  },
  {
    slug: "stucco-exterior-refresh",
    category: "residential",
    title: "Stucco Exterior Refresh",
    scope: ["Stucco", "Trim & moldings", "Exterior painting"],
    summary:
      "A three-storey home refinished in gray stucco with bold dark trim around every window.",
    description: [
      "This home's exterior was refinished in a textured gray stucco, with raised moldings framing each window and a quoined corner running up the full height of the house.",
      "The darker trim color gives the facade depth and pulls the whole elevation together.",
    ],
    ...projectImages(
      "stucco-exterior-refresh",
      "Three-storey home with gray stucco and dark window trim at dusk",
      "Gray stucco home with dark trim and red roses in front",
      ["Three-storey home with gray stucco and dark window trim at dusk"],
    ),
  },
];

export const commercialProjects: Project[] = [
  {
    slug: "inti-peru-village",
    category: "commercial",
    title: "Inti Perú Village",
    location: "Bear Creek Township, PA",
    status: "Planned — Phases A, B & C",
    scope: ["24 apartments", "Office", "Restaurant", "Site development"],
    summary:
      "A planned ten-acre community with 24 apartments, the MHM office and the Inti Perú restaurant.",
    description: [
      "Inti Perú Village is a planned community of about ten acres on Route 115 in Bear Creek Township, Pennsylvania. Phase A is 12 two-storey apartments with three bedrooms and one and a half baths. Phase B is 12 single-level apartments with two bedrooms and one bath. Every apartment has its own private garage.",
      "Phase C brings the new MHM GC Builder office and the Inti Perú chicken-and-grill restaurant, with outdoor dining under a pergola. Throughout, the buildings share a modern cabin style: maple-natural siding, metal roofs, landscaped green space, walking paths and visitor parking.",
    ],
    ...projectImages(
      "inti-peru-village",
      "Rendering of the two-storey Phase A apartment building at Inti Perú Village",
      "Aerial rendering of the Inti Perú Village site plan",
      [
        "Rendering of the Phase A two-storey apartments with private garages",
        "Rendering of the Phase B single-level apartments",
        "Rendering of the MHM GC Builder office and Inti Perú restaurant",
        "Inti Perú Village site plan showing Phases A, B and C",
        "Phase A building overview with floor plans and features",
        "Phase B building overview with floor plan and features",
        "Phase C office and restaurant overview with floor plans",
      ],
    ),
  },
  {
    slug: "commercial-facade-renovation",
    category: "commercial",
    title: "Commercial Facade Renovation",
    scope: ["Facade renovation", "Storefront", "Exterior lighting", "Planters"],
    summary:
      "A single-storey commercial building refaced in smooth stucco with built-in planters and new lighting.",
    description: [
      "We refinished this commercial frontage in smooth stucco, added built-in planter boxes between the piers and lit the walkway with recessed and wall-mounted fixtures.",
      "The next phase adds warm timber slat cladding above the entry canopy and along the fascia, shown in the concept rendering.",
    ],
    ...projectImages(
      "commercial-facade-renovation",
      "Stucco commercial building frontage with glass entry doors and lit planters",
      "Commercial entry with glass doors, potted olive trees and stucco piers",
      [
        "Stucco commercial building frontage with glass entry doors and lit planters",
        "Concept rendering of the facade with timber slat cladding",
      ],
    ),
  },
  {
    slug: "structural-steel-and-stairs",
    category: "commercial",
    title: "Structural Steel & Stairs",
    scope: ["Structural steel", "Steel erection", "Fabricated stairs"],
    summary:
      "Steel beam erection for a masonry building, plus fabricated steel exit and access stairs.",
    description: [
      "Working from scaffolding along the block walls, our crew set and connected the structural steel beams that carry the building's upper floors and roof.",
      "We also fabricate and install steel stairs, from painted exterior exit stairs to diamond-plate access stairs.",
    ],
    ...projectImages(
      "structural-steel-and-stairs",
      "Structural steel beams set across a masonry building against a blue sky",
      "Ironworker setting steel beams from scaffolding",
      [
        "Scaffolding and steel beams along the building's block wall",
        "Structural steel beams spanning the building",
        "Ironworker setting steel beams from scaffolding",
        "Red-painted steel exterior exit stairs",
        "Diamond-plate steel access stairs",
      ],
    ),
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

export const featuredProjectSlug = "grand-double-staircase";
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
    role: "Homeowner",
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
    role: "Developer",
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
