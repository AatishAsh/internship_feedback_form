import React from "react";

const steps = [1, 2, 3, 4, 5,6,7,8];

const ProgressBar = ({ currentStep, setStep }) => {
  return (
    <div className="flex items-center justify-center gap-0.5 sm:gap-1 px-4 py-7 pb-7 bg-[#000001]">
      {steps.map((step, index) => {
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;
       const canNavigate = step <= currentStep;
       const isClickable = step === currentStep || step < currentStep;

        return (
          <React.Fragment key={step}>
            {/* STEP CIRCLE */}
            <div
              onClick={() => {
                 if (isClickable) setStep(step);
              }}

              className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors
              ${
                isCompleted
                  ? "bg-[#4c1d95] shadow-[0_0_10px_rgba(139,92,246,0.75),0_0_22px_rgba(139,92,246,0.9)] transition-shadow duration-300 text-white cursor-pointer"
                  : isActive
                    ? "bg-[#8b5cf6] border border-[#a78bfa] shadow-[0_0_8px_rgba(139,92,246,0.7),0_0_18px_rgba(139,92,246,0.85)] text-white cursor-pointer"
                    : "bg-gray-200 text-gray-500"
              }
             `}
            >
              {step}
            </div>

            {/* CONNECTING LINE */}
            {index < steps.length - 1 && (
              <div
                className={`w-6 sm:w-10 md:w-12 h-0.5 mx-1 transition-colors
                  ${
                    step < currentStep
                      ? "bg-linear-to-r from-[#8b5cf6] to-[#4c1d95]"
                      : "bg-gray-700"
                  }
                `}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
