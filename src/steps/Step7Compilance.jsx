import React from "react";
import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { Heart, Star } from "lucide-react";

const Step7Compilance = ({ onNext, shake }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const { showErrors } = useFormUI();

  const enjoyRating = watch("enjoyment") || 0;
  const overallRating = watch("overallExperience") || 0;

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto pt-4 pb-8">

        <h1 className="text-2xl font-semibold mb-6">Compliance and Exit</h1>

        <div className={`bg-[#1a1a1a] rounded-md p-6 shadow-lg ${shake ? "shake" : ""}`}>

          {/* DOCUMENT HANDOVER */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you hand over all required documents and login credentials? <span className="text-red-400">*</span>
            </label>
            {["Yes", "No", "Not Yet"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("handover", {
                    onChange: () => clearErrors("handover"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.handover && (
              <p className="mt-1 text-sm text-red-400">* {errors.handover.message}</p>
            )}
          </div>

          {/* KNOWLEDGE SHARE */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Do you agree to share the knowledge gained with future team members? <span className="text-red-400">*</span>
            </label>
            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("knowledgeShare", {
                    onChange: () => clearErrors("knowledgeShare"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.knowledgeShare && (
              <p className="mt-1 text-sm text-red-400">* {errors.knowledgeShare.message}</p>
            )}
          </div>

          {/* CERTIFICATE */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Do you need a recommendation letter or certificate? <span className="text-red-400">*</span>
            </label>
            {["Yes", "No", "Both"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("certificate", {
                    onChange: () => clearErrors("certificate"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.certificate && (
              <p className="mt-1 text-sm text-red-400">* {errors.certificate.message}</p>
            )}
          </div>

          {/* GENERAL SUGGESTIONS — ✅ Fixed: was "improvements" (conflicts with Step 6) */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Any general suggestions or improvements? <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("generalSuggestions", {
                onChange: () => clearErrors("generalSuggestions"),
              })}
              placeholder="Share your suggestions..."
              rows={3}
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
            {showErrors && errors.generalSuggestions && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.generalSuggestions.message}
              </p>
            )}
          </div>

          {/* ENJOYMENT — Heart rating */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How much did you enjoy being part of our team? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((heart) => (
                <Heart
                  key={heart}
                  onClick={() => {
                    setValue("enjoyment", heart, { shouldValidate: true });
                    clearErrors("enjoyment");
                  }}
                  className={`cursor-pointer ${
                    heart <= enjoyRating ? "text-red-500" : "text-gray-500"
                  }`}
                  fill={heart <= enjoyRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.enjoyment && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.enjoyment.message}
              </p>
            )}
          </div>

          {/* OVERALL RATING */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Overall internship experience <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => {
                    setValue("overallExperience", star, { shouldValidate: true });
                    clearErrors("overallExperience");
                  }}
                  className={`cursor-pointer ${
                    star <= overallRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                  fill={star <= overallRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.overallExperience && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.overallExperience.message}
              </p>
            )}
          </div>

          {/* LIKED MOST */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              What did you like most? <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("likedMost", {
                onChange: () => clearErrors("likedMost"),
              })}
              placeholder="Write here..."
              rows={3}
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
            {showErrors && errors.likedMost && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.likedMost.message}
              </p>
            )}
          </div>
        </div>

        {/* NEXT */}
        <div className="mt-7 mb-8">
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

export default Step7Compilance;
