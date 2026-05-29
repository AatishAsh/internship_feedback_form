import React from "react";
import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Step5Management = ({ onNext, shake, isSubmitting }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const { showErrors } = useFormUI();

  const structureRating = watch("internshipStructure") || 0;
  const taskRating = watch("taskMeaningful") || 0;
  const [openTerms, setOpenTerms] = React.useState(false);

  const isDeclared = watch("declaration");

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto pt-4 pb-8">

        {/* TITLE */}
        <h1 className="text-2xl font-semibold mb-6">
          Internship Management
        </h1>

        <div className={`bg-[#1a1a1a] rounded-md p-6 shadow-lg ${shake ? "shake" : ""}`}>

          {/* STRUCTURE RATING */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How well-structured was the internship program? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => {
                    setValue("internshipStructure", star, { shouldValidate: true });
                    clearErrors("internshipStructure");
                  }}
                  className={`cursor-pointer ${
                    star <= structureRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                  fill={star <= structureRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.internshipStructure && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.internshipStructure.message}
              </p>
            )}
          </div>

          {/* DEADLINES */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you meet deadlines and expectations for tasks? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No", "Partially"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("deadlines", {
                    onChange: () => clearErrors("deadlines"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.deadlines && (
              <p className="mt-1 text-sm text-red-400">* {errors.deadlines.message}</p>
            )}
          </div>

          {/* GOALS */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were the project goals clearly defined? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No", "Somewhat"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("projectGoals", {
                    onChange: () => clearErrors("projectGoals"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.projectGoals && (
              <p className="mt-1 text-sm text-red-400">* {errors.projectGoals.message}</p>
            )}
          </div>

          {/* GITHUB */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you maintain Github and Documentation as required? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("github", {
                    onChange: () => clearErrors("github"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.github && (
              <p className="mt-1 text-sm text-red-400">* {errors.github.message}</p>
            )}
          </div>

          {/* TASK EXPERIENCE */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            Task Experience
          </h2>

          {/* TASK CLEAR */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were tasks clearly explained? <span className="text-red-400">*</span>
            </label>

            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio" className="accent-white"
                  value={opt}
                  {...register("taskClarity", {
                    onChange: () => clearErrors("taskClarity"),
                  })}
                />
                {opt}
              </label>
            ))}
            {showErrors && errors.taskClarity && (
              <p className="mt-1 text-sm text-red-400">* {errors.taskClarity.message}</p>
            )}
          </div>

          {/* TASK DIFFICULTY */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How would you rate the difficulty level of assigned tasks? <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-col gap-2">
              {["Beginner Friendly", "Moderate", "Challenging", "Very Advanced"].map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="accent-white"
                    value={opt}
                    {...register("taskDifficulty", {
                      onChange: () => clearErrors("taskDifficulty"),
                    })}
                  />
                  {opt}
                </label>
              ))}
            </div>
            {showErrors && errors.taskDifficulty && (
              <p className="mt-1 text-sm text-red-400">* {errors.taskDifficulty.message}</p>
            )}
          </div>

          {/* TASK MEANINGFUL */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were tasks meaningful? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => {
                    setValue("taskMeaningful", star, { shouldValidate: true });
                    clearErrors("taskMeaningful");
                  }}
                  className={`cursor-pointer ${
                    star <= taskRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                  fill={star <= taskRating ? "currentColor" : "none"}
                />
              ))}
            </div>
            {showErrors && errors.taskMeaningful && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.taskMeaningful.message}
              </p>
            )}
          </div>

          {/* CHALLENGES */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you face any challenges? <span className="text-red-400">*</span>
            </label>

            <textarea
              {...register("challenges", {
                onChange: () => clearErrors("challenges"),
              })}
              placeholder="Write your answer..."
              rows={3}
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
            {showErrors && errors.challenges && (
              <p className="mt-1 text-sm text-red-400">* {errors.challenges.message}</p>
            )}
          </div>

        </div>

        {/* NEXT BUTTON (UPDATED) */}
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

export default Step5Management;