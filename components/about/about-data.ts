import {
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export type ValueItem = {
  title: string;
  description: string;
  icon: typeof BadgeCheck;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  project: string;
  location: string;
  image?: string;
};

export const values: ValueItem[] = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every piece is measured, joined, sanded, and finished with the discipline of a workshop that cares about long-term use.",
    icon: BadgeCheck,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We shape briefs around how clients live and work, then communicate clearly from consultation to handover.",
    icon: HeartHandshake,
  },
  {
    title: "Reliability",
    description:
      "Schedules, material choices, delivery plans, and installation details are handled with steady accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We combine traditional woodcraft with modern storage ideas, hardware, finishes, and scalable production planning.",
    icon: Lightbulb,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Workshop Leadership",
    role: "Craft and Production",
    bio: "Guides joinery standards, workshop sequencing, material checks, and final quality control.",
    image: "/images/workshop.jpg",
  },
  {
    name: "Design Consultation",
    role: "Client Briefs",
    bio: "Translates room measurements, references, storage needs, and finish direction into practical build plans.",
    image: "/images/cabinets.jpg",
  },
  {
    name: "Installation Team",
    role: "Site Delivery",
    bio: "Handles fitting, alignment, access coordination, touch-ups, and the final room handover.",
    image: "/images/product4.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The kitchen cabinets feel precise, solid, and beautifully finished. The team understood the space before they started building.",
    name: "Grace M.",
    project: "Kitchen cabinetry",
    location: "Kilimani",
  },
  {
    quote:
      "Our office desks and shelving look refined, but they are also practical for daily use. The delivery was handled professionally.",
    name: "Daniel K.",
    project: "Office furniture",
    location: "Westlands",
  },
  {
    quote:
      "Advanced Woodworks helped us turn a rough bedroom idea into a wardrobe system that fits perfectly and feels premium.",
    name: "Amina N.",
    project: "Bedroom wardrobe",
    location: "Karen",
  },
];

export const workshopImages = [
  {
    src: "/images/workshop.jpg",
    alt: "Advanced Woodworks workshop preparation",
    title: "Workshop Preparation",
  },
  {
    src: "/images/cabinets.jpg",
    alt: "Custom cabinetry installation by Advanced Woodworks",
    title: "Cabinetry Detail",
  },
  {
    src: "/images/product3.jpg",
    alt: "Executive desk crafted by Advanced Woodworks",
    title: "Furniture Finish",
  },
];
