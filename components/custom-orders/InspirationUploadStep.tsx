import { FormField, inputClasses } from "./FormField";
import { StepProps } from "./types";

export default function InspirationUploadStep({ data, updateData }: StepProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-stone-950">
        Add inspiration references
      </h2>
      <p className="mt-3 leading-relaxed text-stone-600">
        Upload or name a reference image, then describe what you like about it.
        The form stores file metadata for now and can later send uploads to an
        API endpoint.
      </p>

      <div className="mt-8 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-8 text-center">
        <input
          id="inspiration-file"
          type="file"
          accept="image/*,.pdf"
          onChange={(event) =>
            updateData({
              inspiration: {
                ...data.inspiration,
                fileName: event.target.files?.[0]?.name ?? "",
              },
            })
          }
          className="sr-only"
        />
        <label
          htmlFor="inspiration-file"
          className="inline-flex cursor-pointer rounded-md bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          Choose Inspiration File
        </label>
        <p className="mt-4 font-semibold text-stone-950">
          {data.inspiration.fileName || "No file selected yet"}
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Images and PDFs are accepted for planning.
        </p>
      </div>

      <div className="mt-6">
        <FormField label="Inspiration Notes">
          <textarea
            value={data.inspiration.notes}
            onChange={(event) =>
              updateData({
                inspiration: {
                  ...data.inspiration,
                  notes: event.target.value,
                },
              })
            }
            placeholder="Tell us what to borrow from the reference: shape, finish, handles, layout, mood, or storage idea."
            rows={5}
            className={inputClasses}
          />
        </FormField>
      </div>
    </div>
  );
}
