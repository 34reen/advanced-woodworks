import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      {/* Background image */}
      <Image
        src="/images/ctabg.jpg"
        alt="Premium custom woodwork interior"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content - reduced vertical padding */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left column: title and subtitle */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white">
              Stay Updated
            </h2>
            <p className="mt-2 text-base text-stone-200 leading-relaxed">
              Be the first to know about our exclusive deals, discounts, and news.
            </p>
          </div>

          {/* Right column: email form */}
          <div>
            <form
              action="/api/subscribe" // replace with your actual endpoint
              method="POST"
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-stone-300 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="rounded-md bg-amber-700 px-5 py-2 font-medium text-white transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-stone-300">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}