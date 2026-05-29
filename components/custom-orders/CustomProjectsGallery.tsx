import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Wall-To-Wall Kitchen Cabinetry",
    category: "Kitchen",
    image: "/images/cabinets.jpg",
  },
  {
    title: "Executive Office Storage Suite",
    category: "Office",
    image: "/images/product3.jpg",
  },
  {
    title: "Built-In Bedroom Wardrobe",
    category: "Bedroom",
    image: "/images/product2.jpg",
  },
];

export default function CustomProjectsGallery() {
  return (
    <section className="py-24 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-amber-400 uppercase tracking-[3px] font-medium">
              Custom Project Gallery
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Designs You Can Adapt For Your Space
            </h2>
          </div>

          <a
            href="#custom-request"
            className="inline-flex rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
          >
            Request Similar Design
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              href="#custom-request"
              key={project.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-500/60"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={520}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[3px] text-amber-300">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-4 font-semibold text-stone-300 transition group-hover:text-white">
                  Request similar design
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
