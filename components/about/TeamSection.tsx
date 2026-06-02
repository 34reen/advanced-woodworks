import Image from "next/image";
import { teamMembers } from "./about-data";

export default function TeamSection() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Team
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-950 md:text-5xl">
            A Practical Team Structure Ready To Grow
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            The About page is prepared for future team profiles from a CMS or
            staff API while keeping today&apos;s presentation focused on the
            roles that shape every project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
            >
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-700">
                  {member.role}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-stone-950">
                  {member.name}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
