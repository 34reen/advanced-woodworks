export function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold uppercase tracking-[2px] text-stone-500">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export const inputClasses =
  "w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20";
