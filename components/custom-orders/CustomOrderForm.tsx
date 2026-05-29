"use client";

import { useMemo, useState } from "react";
import BudgetStep from "./BudgetStep";
import InspirationUploadStep from "./InspirationUploadStep";
import MeasurementsStep from "./MeasurementsStep";
import ProductTypeStep from "./ProductTypeStep";
import ReviewSubmitStep from "./ReviewSubmitStep";
import StepNavigation from "./StepNavigation";
import StepProgress from "./StepProgress";
import StylePreferencesStep from "./StylePreferencesStep";
import WoodTypeStep from "./WoodTypeStep";
import { CustomOrderData, defaultCustomOrderData } from "./types";

const whatsappNumber = "254795188537";

const steps = [
  "Product",
  "Measurements",
  "Wood",
  "Style",
  "Inspiration",
  "Budget",
  "Review",
];

function buildWhatsAppMessage(data: CustomOrderData) {
  return [
    "Hello Advanced Woodworks, I would like a custom furniture quote.",
    `Product: ${data.productType || "Not selected"}`,
    `Room: ${data.room || "Not selected"}`,
    `Measurements: ${data.dimensions.width || "-"} W x ${data.dimensions.height || "-"} H x ${data.dimensions.depth || "-"} D`,
    `Wood: ${data.woodType || "Not selected"}`,
    `Finish: ${data.finishType || "Not selected"}`,
    `Style: ${data.style || "Not selected"}`,
    `Features: ${data.features.join(", ") || "None selected"}`,
    `Budget: ${data.budget || "Not selected"}`,
    `Timeline: ${data.timeline || "Not selected"}`,
    `Name: ${data.contact.name || "Not provided"}`,
    `Phone: ${data.contact.phone || "Not provided"}`,
  ].join("\n");
}

export default function CustomOrderForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CustomOrderData>(
    defaultCustomOrderData
  );
  const [isPrepared, setIsPrepared] = useState(false);

  const updateData = (updates: Partial<CustomOrderData>) => {
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
    <ProductTypeStep
      key="product"
      data={formData}
      updateData={updateData}
    />,
    <MeasurementsStep
      key="measurements"
      data={formData}
      updateData={updateData}
    />,
    <WoodTypeStep key="wood" data={formData} updateData={updateData} />,
    <StylePreferencesStep
      key="style"
      data={formData}
      updateData={updateData}
    />,
    <InspirationUploadStep
      key="inspiration"
      data={formData}
      updateData={updateData}
    />,
    <BudgetStep key="budget" data={formData} updateData={updateData} />,
    <ReviewSubmitStep key="review" data={formData} updateData={updateData} />,
  ];

  return (
    <section id="custom-request" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-amber-700 uppercase tracking-[3px] font-medium">
            Custom Request Form
          </p>
          <h2 className="mt-3 text-4xl font-bold text-stone-950 md:text-5xl">
            Tell Us What You Want Built
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            A guided request experience helps us understand your furniture,
            dimensions, finish direction, budget, and preferred production
            timeline before we prepare a quote.
          </p>
        </div>

        <StepProgress steps={steps} currentStep={currentStep} />

        <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6 shadow-xl md:p-8">
          {stepComponents[currentStep]}

          {isPrepared && (
            <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-xl font-semibold text-emerald-800">
                Inquiry prepared
              </h3>
              <p className="mt-2 text-emerald-700">
                Your request summary is ready for WhatsApp or future API
                submission.
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

          <StepNavigation
            currentStep={currentStep}
            totalSteps={steps.length}
            onBack={() => setCurrentStep((step) => Math.max(step - 1, 0))}
            onNext={() =>
              setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
            }
            onSubmit={() => setIsPrepared(true)}
          />
        </div>
      </div>
    </section>
  );
}
