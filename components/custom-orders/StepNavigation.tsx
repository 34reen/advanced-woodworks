export default function StepNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit,
}: {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  const isFinalStep = currentStep === totalSteps - 1;

  return (
    <div className="mt-8 flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:justify-between">
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 0}
        className="rounded-md border border-stone-300 px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Back
      </button>

      <button
        type="button"
        onClick={isFinalStep ? onSubmit : onNext}
        className="rounded-md bg-amber-700 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800"
      >
        {isFinalStep ? "Prepare Inquiry" : "Continue"}
      </button>
    </div>
  );
}
