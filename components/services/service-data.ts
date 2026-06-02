export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceProject = {
  title: string;
  location: string;
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  eyebrow: string;
  idealFor: string[];
  process: ServiceProcessStep[];
  benefits: string[];
  gallery: ServiceProject[];
};

export const installationProcess: ServiceProcessStep[] = [
  {
    title: "Site measure",
    description:
      "We confirm wall lines, levels, access, utilities, and practical constraints before production begins.",
  },
  {
    title: "Workshop preparation",
    description:
      "Components are cut, finished, labelled, and dry-fitted so the installation day runs with precision.",
  },
  {
    title: "On-site fitting",
    description:
      "Our team installs, aligns, secures, and adjusts every piece around the room's actual conditions.",
  },
  {
    title: "Handover",
    description:
      "We review finish quality, hardware movement, care guidance, and final corrections before sign-off.",
  },
];

export const services: Service[] = [
  {
    slug: "custom-cabinetry",
    title: "Custom Cabinetry",
    eyebrow: "Kitchens, wardrobes, storage",
    summary:
      "Measured cabinetry for kitchens, bedrooms, offices, and living spaces where storage needs to feel architectural.",
    description:
      "Our custom cabinetry service covers layout planning, material guidance, fabrication, finishing, and installation. Each cabinet run is designed around the room, the client's storage habits, and the level of finish expected in a refined interior.",
    image: "/images/cabinets.jpg",
    idealFor: ["Kitchen storage", "Built-in wardrobes", "TV walls", "Pantries"],
    process: [
      {
        title: "Layout consultation",
        description:
          "We map the room, appliance positions, storage zones, access needs, and the desired visual weight.",
      },
      {
        title: "Material and finish selection",
        description:
          "Samples, hardware direction, edge details, and finish durability are agreed before fabrication.",
      },
      {
        title: "Fabrication",
        description:
          "Cabinet boxes, doors, shelves, and trims are produced with labelled parts for efficient installation.",
      },
      {
        title: "Installation and adjustment",
        description:
          "We fit, level, secure, align hinges and runners, then complete final touch-ups on site.",
      },
    ],
    benefits: [
      "Better use of awkward spaces",
      "Coordinated hardware and finishes",
      "Cleaner installation around real site conditions",
      "Scalable layouts for future upgrades",
    ],
    gallery: [
      {
        title: "Walnut kitchen wall",
        location: "Nairobi apartment",
        image: "/images/cabinets.jpg",
      },
      {
        title: "Sliding bedroom storage",
        location: "Karen residence",
        image: "/images/product2.jpg",
      },
      {
        title: "Media and display unit",
        location: "Westlands home",
        image: "/images/product4.jpg",
      },
    ],
  },
  {
    slug: "bespoke-furniture",
    title: "Bespoke Furniture",
    eyebrow: "Signature pieces",
    summary:
      "Purpose-built tables, beds, desks, sofas, and display pieces crafted to match the proportions of your space.",
    description:
      "Bespoke furniture is for clients who need the right scale, finish, material, and function in one considered piece. We develop the brief, build with durable joinery, and finish each item for everyday use and long-term presence.",
    image: "/images/blueberry sofa.jpg",
    idealFor: ["Dining tables", "Bed frames", "Executive desks", "Lounge pieces"],
    process: [
      {
        title: "Brief development",
        description:
          "We clarify the room, usage, style references, preferred wood, and critical dimensions.",
      },
      {
        title: "Design confirmation",
        description:
          "Proportions, finish direction, and functional details are reviewed before work begins.",
      },
      {
        title: "Workshop build",
        description:
          "The piece is produced with strong joinery, careful sanding, and consistent finishing.",
      },
      {
        title: "Delivery placement",
        description:
          "We deliver, position, inspect, and provide care notes so the piece settles into the room properly.",
      },
    ],
    benefits: [
      "Correct sizing for your room",
      "Material choices matched to daily use",
      "One-off character without sacrificing durability",
      "Coordinated finish with existing interiors",
    ],
    gallery: [
      {
        title: "Modern lounge sofa",
        location: "Runda family home",
        image: "/images/blueberry sofa.jpg",
      },
      {
        title: "Solid timber bed",
        location: "Lavington residence",
        image: "/images/bedframe.jpg",
      },
      {
        title: "Executive office desk",
        location: "Upper Hill office",
        image: "/images/product3.jpg",
      },
    ],
  },
  {
    slug: "interior-fit-outs",
    title: "Interior Fit-Outs",
    eyebrow: "Full room woodwork",
    summary:
      "Coordinated woodwork packages for homes, offices, shops, and hospitality interiors that need a complete finish.",
    description:
      "Our fit-out service brings several woodwork scopes into one managed workflow. We coordinate site measurements, shop drawings, workshop production, installation sequencing, and final finishing for spaces that need a consistent woodcraft language.",
    image: "/images/workshop.jpg",
    idealFor: ["Retail counters", "Office interiors", "Feature walls", "Reception areas"],
    process: [
      {
        title: "Scope audit",
        description:
          "We identify every woodwork element, site constraint, deadline, and dependency with other trades.",
      },
      {
        title: "Production planning",
        description:
          "Layouts, materials, finishes, and installation sequence are organized before fabrication.",
      },
      {
        title: "Batch fabrication",
        description:
          "Components are produced in coordinated batches to keep finish quality consistent across the space.",
      },
      {
        title: "Sequenced installation",
        description:
          "Installation is staged around access, site readiness, and other trades to reduce disruption.",
      },
    ],
    benefits: [
      "One coordinated workshop team",
      "Consistent finish across multiple rooms",
      "Clear site sequence before installation",
      "Ready for phased commercial projects",
    ],
    gallery: [
      {
        title: "Workshop preparation",
        location: "Advanced Woodworks studio",
        image: "/images/workshop.jpg",
      },
      {
        title: "Built-in work surface",
        location: "Kilimani office",
        image: "/images/product5.jpg",
      },
      {
        title: "Display shelving",
        location: "Nairobi retail space",
        image: "/images/product6.jpg",
      },
    ],
  },
  {
    slug: "repairs-refinishing",
    title: "Repairs And Refinishing",
    eyebrow: "Restore, adjust, upgrade",
    summary:
      "Careful repair and finish renewal for valued furniture, cabinetry, doors, and interior wood elements.",
    description:
      "Repair and refinishing work is handled with respect for the original piece. We assess structure, surface condition, hardware, and finish compatibility before recommending restoration, replacement, or selective upgrades.",
    image: "/images/product6.jpg",
    idealFor: ["Surface refinishing", "Hardware replacement", "Door alignment", "Furniture repairs"],
    process: [
      {
        title: "Condition assessment",
        description:
          "We inspect wear, movement, cracks, joints, hardware, and finish damage before quoting.",
      },
      {
        title: "Repair plan",
        description:
          "The right repair method is selected, from sanding and resealing to part replacement.",
      },
      {
        title: "Workshop or site work",
        description:
          "Small repairs can happen on site while detailed restoration may move through the workshop.",
      },
      {
        title: "Finish blending",
        description:
          "We blend tone, sheen, and touch points so repaired areas feel considered and complete.",
      },
    ],
    benefits: [
      "Extends the life of quality pieces",
      "Improves hardware movement and alignment",
      "Refreshes surfaces without full replacement",
      "Practical recommendations before major spend",
    ],
    gallery: [
      {
        title: "Refinished cabinet face",
        location: "Parklands home",
        image: "/images/product6.jpg",
      },
      {
        title: "Restored table surface",
        location: "Muthaiga residence",
        image: "/images/product5.jpg",
      },
      {
        title: "Hardware refresh",
        location: "Nairobi townhouse",
        image: "/images/product4.jpg",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const featuredServiceProjects = services.flatMap((service) =>
  service.gallery.slice(0, 1).map((project) => ({
    ...project,
    serviceTitle: service.title,
    serviceSlug: service.slug,
  }))
);
