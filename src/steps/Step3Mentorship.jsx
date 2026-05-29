import React from "react";
import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { Star } from "lucide-react";

const Step3Mentorship = ({ onNext, shake }) => {
  const {
    register,
    watch,
    formState: { errors },
    clearErrors,
    setValue,
  } = useFormContext();

  const { showErrors } = useFormUI();

  const mentorRating = watch("mentorRating") || 0;
  const communicationRating = watch("communicationRating") || 0;
  const supportRating = watch("supportRating") || 0;

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">
      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto pt-4 pb-8">
        <div
          className={`bg-[#1a1a1a] rounded-md p-6 shadow-lg ${
            shake ? "shake" : ""
          }`}
        >
          {/* SECTION TITLE */}
          <h1 className="text-2xl font-semibold mb-8">
            Mentorship and Guidance
          </h1>

          {/* MENTOR ACCESS */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Was your mentor accessible and helpful? <span className="text-red-400">*</span>
            </label>

            {["Always", "Usually", "Occasionally", "Rarely"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("mentorAccessibility", {
                    onChange: () => clearErrors("mentorAccessibility"),
                  })}
                />
                {opt}
              </label>
            ))}

            {showErrors && errors.mentorAccessibility && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.mentorAccessibility.message}
              </p>
            )}
          </div>

          {/* FEEDBACK */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you receive constructive feedback on your work? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("feedback", {
                    onChange: () => clearErrors("feedback"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.feedback && (
              <p className="mt-1 text-sm text-red-400">* {errors.feedback.message}</p>
            )}
          </div>

          {/* MENTOR RATING */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Rate your mentor's guidance throughout the internship <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => {
                    setValue("mentorRating", star, { shouldValidate: true });
                    clearErrors("mentorRating");
                  }}
                  className={`cursor-pointer ${
                    star <= mentorRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                  fill={star <= mentorRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.mentorRating && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.mentorRating.message}
              </p>
            )}
          </div>

          {/* COMMUNICATION */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            Communication
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How would you rate communication from our team? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => {
                    setValue("communicationRating", star, { shouldValidate: true });
                    clearErrors("communicationRating");
                  }}
                  className={`cursor-pointer ${
                    star <= communicationRating
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }`}
                  fill={star <= communicationRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.communicationRating && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.communicationRating.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were responses timely? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No", "Sometimes"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("responseTime", {
                    onChange: () => clearErrors("responseTime"),
                  })}
                />
                {opt}
              </label>
            ))}

            {showErrors && errors.responseTime && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.responseTime.message}
              </p>
            )}
          </div>

          {/* SUPPORT */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            Mentor / Supervisor Support
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How supportive was your mentor? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => {
                    setValue("supportRating", star, { shouldValidate: true });
                    clearErrors("supportRating");
                  }}
                  className={`cursor-pointer ${
                    star <= supportRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                  fill={star <= supportRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.supportRating && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.supportRating.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did your mentor provide regular feedback? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("regularFeedback", {
                    onChange: () => clearErrors("regularFeedback"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.regularFeedback && (
              <p className="mt-1 text-sm text-red-400">* {errors.regularFeedback.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were your doubts resolved properly? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No", "Sometimes"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("doubtResolution", {
                    onChange: () => clearErrors("doubtResolution"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.doubtResolution && (
              <p className="mt-1 text-sm text-red-400">* {errors.doubtResolution.message}</p>
            )}
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="mt-5 mb-8">
          <button
            type="button"
            onClick={onNext}
            className="w-full py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3Mentorship;