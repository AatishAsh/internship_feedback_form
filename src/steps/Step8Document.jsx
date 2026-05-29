import React from "react";
import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { Upload, X } from "lucide-react";

const Step8Document = ({ onNext, shake }) => {
  const {
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const { showErrors } = useFormUI();

  const files = watch("finalDocuments") || [];
  const hasFiles = files.length > 0;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 10) {
      alert("You can upload up to 10 files only.");
      return;
    }
    clearErrors("finalDocuments");
    setValue("finalDocuments", [...files, ...selectedFiles], { shouldValidate: false });
  };

  const removeFile = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    clearErrors("finalDocuments");
    setValue("finalDocuments", updated, { shouldValidate: false });
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden relative">

      {/* ── PAGE CONTENT ──────────────────────────────────── */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto pt-4 pb-8">

        <h1 className="text-2xl font-semibold mb-6">
          Upload Internship Documents <span className="text-red-400">*</span>
        </h1>

        <div className={`bg-[#1a1a1a] rounded-md p-6 shadow-lg ${shake ? "shake" : ""}`}>

          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Kindly upload any final presentation, reports, flow diagrams,
            handing over documents, or related files for our records.
          </p>

          <label
            className="w-full p-6 border-2 border-dashed rounded-md bg-[#0f0f0f] flex flex-col items-center justify-center gap-2 transition-all duration-200 text-gray-300 cursor-pointer hover:border-gray-400 hover:bg-[#161616]"
          >
            <Upload size={28} />
            <span>Add Files</span>
            <span className="text-xs text-gray-400">Max 10 files • 100MB each</span>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {showErrors && errors.finalDocuments && (
            <p className="mt-3 text-sm text-red-400">
              * {errors.finalDocuments.message}
            </p>
          )}

          {/* FILE LIST */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 rounded-md text-sm bg-black/40"
                >
                  <span className="truncate text-gray-200">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-400 hover:text-red-300 ml-2 shrink-0 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NEXT BUTTON */}
        <div className="mt-7 mb-8">
          <button
            type="button"
            onClick={onNext}
            disabled={!hasFiles}
            className={`w-full py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 select-none ${
              !hasFiles
                ? "bg-[#1c1c1c] text-[#555] cursor-not-allowed border border-[#2a2a2a]"
                : "bg-white text-black hover:bg-gray-200 active:scale-[0.98] shadow-md"
            }`}
          >
            Next
          </button>

          {!hasFiles && (
            <p className="text-center text-xs text-[#888] mt-3">
              Upload at least one document to enable next step.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Step8Document;