import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    label: "Workshop Location",
    value: "Nairobi, Kenya",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+254 7XX XXX XXX",
    icon: Phone,
  },
  {
    label: "Email",
    value: "sales@woodcraft.co.ke",
    icon: Mail,
  },
];

export default function LocationContact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Visit And Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            Talk To The Workshop Before Your Next Build
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Share your room, drawings, cut list, site location, or preferred
            material direction. We will help turn the idea into a practical
            next step.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-amber-700 px-7 py-4 font-semibold text-white transition hover:bg-amber-800"
          >
            Contact The Team
          </Link>
        </div>

        <div className="grid gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex gap-4 rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-amber-700 text-white">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xl font-bold text-stone-950">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
