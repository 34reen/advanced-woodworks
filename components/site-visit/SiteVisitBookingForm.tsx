"use client";

import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Upload } from "lucide-react";
import {
  defaultSiteVisitData,
  SiteVisitData,
  SiteVisitStepProps,
} from "./site-visit-types";

const whatsappNumber = "254795188537";
const steps = ["Project", "Location", "Date", "Photos", "Review"];
const projectTypes = [
  "Kitchen cabinetry",
  "Wardrobe or closet",
  "Custom furniture",
  "Office or commercial fit-out",
  "Repair or refinishing",
  "Full home woodwork",
];

const inputClasses =
  "w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-200";

function buildWhatsAppMessage(data: SiteVisitData) {
  return [
    "Hello Advanced Woodworks, I would like to book a site visit.",
    `Project type: ${data.projectType || "Not selected"}`,
    `Location: ${data.location || "Not provided"}`,
    `Preferred date: ${data.preferredDate || "Not selected"}`,
    `Photo/reference: ${data.photo.fileName || "No file selected"}`,
    `Notes: ${data.photo.notes || "None"}`,
    `Name: ${data.contact.name || "Not provided"}`,
    `Phone: ${data.contact.phone || "Not provided"}`,
    `Email: ${data.contact.email || "Not provided"}`,
  ].join("\n");
}

function StepShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">{title}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-stone-600">
        {description}
      </p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function ProjectTypeStep({ data, updateData }: SiteVisitStepProps) {
  return (
    <StepShell
      title="What type of project needs a visit?"
      description="Choose the closest category so the visiting team can prepare the right measuring notes and material questions."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => updateData({ projectType: type })}
            className={`rounded-lg border p-5 text-left font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              data.projectType === type
                ? "border-amber-700 bg-amber-50 text-amber-800"
                : "border-stone-200 bg-white text-stone-900"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </StepShell>
  );
}

function LocationStep({ data, updateData }: SiteVisitStepProps) {
  return (
    <StepShell
      title="Where is the project located?"
      description="Add the area, estate, building, or access notes that will help us plan travel and arrival."
    >
      <label className="block">
        <span className="mb-2 flex items-center gap-2 font-semibold text-stone-800">
          <MapPin size={18} />
          Project location
        </span>
        <textarea
          value={data.location}
          onChange={(event) => updateData({ location: event.target.value })}
          rows={5}
          placeholder="Example: Kilimani, near Yaya Centre. Apartment on 4th floor, lift available."
          className={inputClasses}
        />
      </label>
    </StepShell>
  );
}

function DateStep({ data, updateData }: SiteVisitStepProps) {
  return (
    <StepShell
      title="Select a preferred site visit date"
      description="Pick the date that works best. The team can confirm availability and adjust the time after receiving the inquiry."
    >
      <label className="block max-w-md">
        <span className="mb-2 flex items-center gap-2 font-semibold text-stone-800">
          <CalendarDays size={18} />
          Preferred date
        </span>
        <input
          type="date"
          value={data.preferredDate}
          onChange={(event) =>
            updateData({ preferredDate: event.target.value })
          }
          className={inputClasses}
        />
      </label>
    </StepShell>
  );
}

function PhotoStep({ data, updateData }: SiteVisitStepProps) {
  return (
    <StepShell
      title="Add optional photos or reference notes"
      description="A photo is optional, but it helps the workshop understand the current space before the visit."
    >
      <div className="rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/60 p-8 text-center">
        <input
          id="site-photo"
          type="file"
          accept="image/*,.pdf"
          onChange={(event) =>
            updateData({
              photo: {
                ...data.photo,
                fileName: event.target.files?.[0]?.name ?? "",
              },
            })
          }
          className="sr-only"
        />
        <label
          htmlFor="site-photo"
          className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          <Upload size={18} />
          Choose File
        </label>
        <p className="mt-4 font-semibold text-stone-950">
          {data.photo.fileName || "No file selected yet"}
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Images and PDFs are accepted for planning.
        </p>
      </div>

      <label className="mt-6 block">
        <span className="mb-2 block font-semibold text-stone-800">
          Photo or project notes
        </span>
        <textarea
          value={data.photo.notes}
          onChange={(event) =>
            updateData({
              photo: {
                ...data.photo,
                notes: event.target.value,
              },
            })
          }
          rows={4}
          placeholder="Mention current condition, measurements you already know, parking, access, or urgency."
          className={inputClasses}
        />
      </label>
    </StepShell>
  );
}

function ReviewStep({ data, updateData }: SiteVisitStepProps) {
  const reviewItems = [
    ["Project type", data.projectType || "Not selected"],
    ["Location", data.location || "Not provided"],
    ["Preferred date", data.preferredDate || "Not selected"],
    ["Photo/reference", data.photo.fileName || "No file selected"],
    ["Notes", data.photo.notes || "None"],
  ];

  return (
    <StepShell
      title="Review and submit your booking request"
      description="Add contact details and review the prepared site visit brief before sending."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-semibold text-stone-800">Name</span>
          <input
            value={data.contact.name}
            onChange={(event) =>
              updateData({
                contact: { ...data.contact, name: event.target.value },
              })
            }
            className={inputClasses}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-semibold text-stone-800">Phone</span>
          <input
            value={data.contact.phone}
            onChange={(event) =>
              updateData({
                contact: { ...data.contact, phone: event.target.value },
              })
            }
            className={inputClasses}
            placeholder="+254..."
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-2 block font-semibold text-stone-800">Email</span>
          <input
            type="email"
            value={data.contact.email}
            onChange={(event) =>
              updateData({
                contact: { ...data.contact, email: event.target.value },
              })
            }
            className={inputClasses}
            placeholder="name@example.com"
          />
        </label>
      </div>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-50 p-5">
        <h3 className="text-xl font-bold text-stone-950">Booking Summary</h3>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2">
          {reviewItems.map(([label, value]) => (
            <div key={label}>
              <dt className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
                {label}
              </dt>
              <dd className="mt-1 font-semibold text-stone-900">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </StepShell>
  );
}

export default function SiteVisitBookingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<SiteVisitData>(
    defaultSiteVisitData
  );
  const [isPrepared, setIsPrepared] = useState(false);

  const updateData = (updates: Partial<SiteVisitData>) => {
    setFormData((current) => ({
      ...current,
      ...updates,
    }));
    setIsPrepared(false);
  };

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(buildWhatsAppMessage(formData));

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }, [formData]);

  const stepComponents = [
    <ProjectTypeStep key="project" data={formData} updateData={updateData} />,
    <LocationStep key="location" data={formData} updateData={updateData} />,
    <DateStep key="date" data={formData} updateData={updateData} />,
    <PhotoStep key="photos" data={formData} updateData={updateData} />,
    <ReviewStep key="review" data={formData} updateData={updateData} />,
  ];

  const isFinalStep = currentStep === steps.length - 1;

  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Visit Details
          </p>
          <h2 className="mt-3 text-4xl font-bold text-stone-950 md:text-5xl">
            Prepare A Clear Measurement Visit
          </h2>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-700">
              Site Visit Request
            </p>
            <p className="text-sm text-stone-500">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-stone-200">
            <div
              className="h-full rounded-full bg-amber-700 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-5">
            {steps.map((step, index) => (
              <button
                key={step}
                type="button"
                onClick={() => setCurrentStep(index)}
                className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                  index === currentStep
                    ? "border-amber-700 bg-amber-50 text-amber-800"
                    : index < currentStep
                      ? "border-stone-300 bg-stone-100 text-stone-700"
                      : "border-stone-200 text-stone-400"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-stone-200 bg-white p-6 shadow-xl md:p-8">
          {stepComponents[currentStep]}

          {isPrepared && (
            <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-xl font-semibold text-emerald-800">
                Site visit request prepared
              </h3>
              <p className="mt-2 text-emerald-700">
                Your structured booking brief is ready for WhatsApp or future
                API submission.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Send Via WhatsApp
              </a>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
              disabled={currentStep === 0}
              className="rounded-md border border-stone-300 px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() =>
                isFinalStep
                  ? setIsPrepared(true)
                  : setCurrentStep((step) =>
                      Math.min(step + 1, steps.length - 1)
                    )
              }
              className="rounded-md bg-amber-700 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              {isFinalStep ? "Prepare Booking" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
