import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/images/workshop.jpg"
          alt="Woodwork shop"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Advanced Woodworks specializes in custom-made furniture,
            cabinetry, interior fittings, and premium wood craftsmanship.
          </p>

          <Link
            href="/about"
            className="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-800"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}