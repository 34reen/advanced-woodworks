"use client";

import { useMemo, useState } from "react";
import { FormField, inputClasses } from "@/components/custom-orders/FormField";
import { materials } from "@/components/materials/material-data";
import { BulkOrderData, defaultBulkOrderData } from "./bulk-order-types";

const useCases = [
  "Kitchen cabinetry",
  "Wardrobes and storage",
  "Furniture production",
  "Commercial fit-out",
  "Repairs and refinishing",
  "Resale or contractor supply",
];

function buildPayload(data: BulkOrderData) {
  return {
    customer: data.customer,
    materialSlug: data.materialSlug,
    quantity: data.quantity,
    deliveryLocation: data.deliveryLocation,
    useCase: data.useCase,
    notes: data.notes,
    source: "materials_store_bulk_order",
  };
}

export default function BulkOrderForm() {
  const [formData, setFormData] = useState<BulkOrderData>(
    defaultBulkOrderData
  );
  const [isPrepared, setIsPrepared] = useState(false);

  const payload = useMemo(() => buildPayload(formData), [formData]);

  const updateData = (updates: Partial<BulkOrderData>) => {
    setFormData((current) => ({
      ...current,
      ...updates,
    }));
    setIsPrepared(false);
  };

  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="font-medium uppercase tracking-[3px] text-amber-700">
            Inquiry Form
          </p>
          <h2 className="mt-3 text-4xl font-bold text-stone-950 md:text-5xl">
            Tell Us What Materials You Need
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            This form keeps the request structured for a future API endpoint
            and MySQL order table while showing a clear customer summary today.
          </p>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-xl md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Customer Name">
              <input
                value={formData.customer.name}
                onChange={(event) =>
                  updateData({
                    customer: {
                      ...formData.customer,
                      name: event.target.value,
                    },
                  })
                }
                placeholder="Your name"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Company">
              <input
                value={formData.customer.company}
                onChange={(event) =>
                  updateData({
                    customer: {
                      ...formData.customer,
                      company: event.target.value,
                    },
                  })
                }
                placeholder="Company or project name"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Phone">
              <input
                value={formData.customer.phone}
                onChange={(event) =>
                  updateData({
                    customer: {
                      ...formData.customer,
                      phone: event.target.value,
                    },
                  })
                }
                placeholder="+254..."
                className={inputClasses}
              />
            </FormField>

            <FormField label="Email">
              <input
                type="email"
                value={formData.customer.email}
                onChange={(event) =>
                  updateData({
                    customer: {
                      ...formData.customer,
                      email: event.target.value,
                    },
                  })
                }
                placeholder="name@example.com"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Material Selection">
              <select
                value={formData.materialSlug}
                onChange={(event) =>
                  updateData({ materialSlug: event.target.value })
                }
                className={inputClasses}
              >
                <option value="">Select material</option>
                {materials.map((material) => (
                  <option key={material.slug} value={material.slug}>
                    {material.name}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Quantity">
              <input
                value={formData.quantity}
                onChange={(event) => updateData({ quantity: event.target.value })}
                placeholder="Example: 20 sheets, 120 running feet, 4 litres"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Delivery Location">
              <textarea
                value={formData.deliveryLocation}
                onChange={(event) =>
                  updateData({ deliveryLocation: event.target.value })
                }
                rows={4}
                placeholder="Area, site name, access notes, delivery timing"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Use Case">
              <select
                value={formData.useCase}
                onChange={(event) => updateData({ useCase: event.target.value })}
                className={inputClasses}
              >
                <option value="">Select use case</option>
                {useCases.map((useCase) => (
                  <option key={useCase}>{useCase}</option>
                ))}
              </select>
            </FormField>

            <div className="md:col-span-2">
              <FormField label="Notes">
                <textarea
                  value={formData.notes}
                  onChange={(event) => updateData({ notes: event.target.value })}
                  rows={5}
                  placeholder="Add cut-list notes, preferred grade, finish requirements, delivery deadline, or substitution options."
                  className={inputClasses}
                />
              </FormField>
            </div>
          </div>

          {isPrepared && (
            <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-xl font-semibold text-emerald-800">
                Bulk order inquiry prepared
              </h3>
              <p className="mt-2 text-emerald-700">
                Submit action placeholder is ready for an API route and MySQL
                persistence layer.
              </p>
              <pre className="mt-4 max-h-64 overflow-auto rounded-md bg-white p-4 text-sm text-stone-700">
                {JSON.stringify(payload, null, 2)}
              </pre>
            </div>
          )}

          <div className="mt-8 flex justify-end border-t border-stone-200 pt-6">
            <button
              type="button"
              onClick={() => setIsPrepared(true)}
              className="rounded-md bg-amber-700 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Prepare Bulk Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
