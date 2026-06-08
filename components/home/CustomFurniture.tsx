import Image from "next/image";
import Link from "next/link";

const furnitureServices = [
  {
    title: "Custom Cabinets",
    description: "Built‑in or freestanding, perfectly fitted to your kitchen or living space.",
    image: "/images/furniture/custom-cabinet.jpg",
  },
  {
    title: "Furniture Repair",
    description: "Restore heirloom pieces or refresh modern furniture with expert craftsmanship.",
    image: "/images/furniture/repair.jpg",
  },
  {
    title: "Refinishing",
    description: "Change the colour or finish of any wooden piece to match your new decor.",
    image: "/images/furniture/refinishing.jpg",
  },
  {
    title: "Bespoke Sizing",
    description: "Tables, desks, or storage units made to your exact dimensions.",
    image: "/images/furniture/bespoke-sizing.jpg",
  },
  {
    title: "Premium Finishes",
    description: "Hand‑rubbed oils, durable lacquers, or natural wax – your choice.",
    image: "/images/furniture/premium-finish.jpg",
  },
  {
    title: "Installation",
    description: "Professional delivery and fitting, so your furniture is ready to enjoy.",
    image: "/images/furniture/installation.jpg",
  },
];

export default function CustomFurniture() {
  return (
    <section className="py-24 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered heading and description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-amber-400 uppercase tracking-[3px] font-medium">
            Custom Furniture
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            What We Can Do For You
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-300">
            From design to installation, we provide quality furniture solutions
            tailored to your needs.
          </p>
        </div>

        {/* 6 cards grid with images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureServices.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-white/10 bg-white/[0.04] overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-amber-500/10"
            >
              {/* Image placeholder */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <div className="mb-3 h-1 w-12 rounded-full bg-amber-600" />
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-stone-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button linking to custom orders page */}
        <div className="mt-12 text-center">
          <Link
            href="/custom-orders"
            className="inline-flex items-center justify-center rounded-md border border-amber-400 bg-transparent px-6 py-3 font-semibold text-amber-400 transition duration-300 hover:bg-amber-400 hover:text-stone-950"
          >
            Customs Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}