import { useState } from "react";
import { FormProvider } from "react-hook-form";
import useEnrollmentForm from "./form/useEnrollmentForm";

import Step1Personal from "./steps/Step1Personal";
import Step2Activities from "./steps/Step2Activities";
import Step3Mentorship from "./steps/Step3Mentorship";
import Step4Communication from "./steps/Step4Communication";
import Step5Management from "./steps/Step5Management";

// 👉 NEW STEPS
import Step6Feedback from "./steps/Step6Feedback";
import Step7Compilance from "./steps/Step7Compilance";
import Step8Document from "./steps/Step8Document";
import Step9TC from "./steps/Step9TC";

import SuccessCompletion from "./steps/SuccessCompletion";

import TopBar from "./components/navigations/TopBar";
import ProgressBar from "./components/navigations/ProgressBar";
import { FormUIContext } from "./context/FormUIContext";
import BackgroundFileUploader from "./components/fileupload/BackgroundFileUploader";
import { Toaster } from "./components/ui/toaster";

const stepFields = {
  1: [
    "fullName",
    "mobileNumber",
    "collegeName",
    "department",
    "startDate",
    "endDate",
    "mode",
    "internshipLevel",
  ],

  2: [
    "projects",
    "roles",
    "technologies",
    "support",
    "rating",
    "attendanceConsistency",
  ],

  3: [
    "mentorAccessibility",
    "feedback",
    "mentorRating",
    "communicationRating",
    "responseTime",
    "supportRating",
    "regularFeedback",
    "doubtResolution",
  ],

  4: [
    "ideaCommunication",
    "teamFeeling",
    "teamCoordination",
    "practicalKnowledge",
    "industryUnderstanding",
    "learningRating",
    "skills",
    "growthAreas",
    "careerAlignment",
  ],

  5: [
    "internshipStructure",
    "deadlines",
    "projectGoals",
    "github",
    "taskClarity",
    "taskDifficulty",
    "taskMeaningful",
    "challenges",
  ],

  6: [
    "takeaway",
    "challengesOvercome",
    "improvementAreas",
    "improvements",
    "joinFuture",
    "recommend",
    "source",
    "postedPlatform",
    "environment",
    "comfortable",
    "teamwork",
  ],

  7: [
    "handover",
    "knowledgeShare",
    "certificate",
    "generalSuggestions",
    "enjoyment",
    "overallExperience",
    "likedMost",
    "improveMore",
  ],

  8: [
    "finalDocuments"
  ],

  9: [
    "agreedToTerms"
  ]
};

function App() {
  const [step, setStep] = useState(1);
  const form = useEnrollmentForm(setStep);
  const [shakeForm, setShakeForm] = useState(false);

  const nextStep = async () => {
    form.setShowErrors(true);

    const fieldsToValidate = stepFields[step];

    const valid = await form.trigger(fieldsToValidate, {
      shouldFocus: false,
    });

    if (!valid) {
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 400);
      return;
    }

    form.setShowErrors(false);

    // ✅ FINAL SUBMIT AFTER PAGE 9
    if (step === 9) {
      await form.onSubmit(form.getValues());
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <FormUIContext.Provider value={{ showErrors: form.showErrors }}>
        <FormProvider {...form}>

          {/* ✅ TOP BAR (NOW UPTO STEP 9) */}
          {step > 1 && step < 10 && (
            <TopBar onBack={() => setStep(step - 1)} />
          )}

          {/* ✅ PROGRESS BAR (NOW UPTO STEP 9) */}
          {step > 1 && step < 10 && (
            <ProgressBar currentStep={step} setStep={setStep} />
          )}

          <BackgroundFileUploader currentStep={step} />

          <form
            onSubmit={form.handleSubmit(form.onSubmit)}
            onPaste={(e) => e.preventDefault()}
          >

            {step === 1 && (
              <Step1Personal onNext={nextStep} shake={shakeForm} />
            )}

            {step === 2 && (
              <Step2Activities onNext={nextStep} shake={shakeForm} />
            )}

            {step === 3 && (
              <Step3Mentorship onNext={nextStep} shake={shakeForm} />
            )}

            {step === 4 && (
              <Step4Communication onNext={nextStep} shake={shakeForm} />
            )}

            {step === 5 && (
              <Step5Management
                onNext={nextStep}
                shake={shakeForm}
                isSubmitting={form.isSubmitting}
              />
            )}

            {/* ✅ NEW PAGES */}
            {step === 6 && (
              <Step6Feedback onNext={nextStep} shake={shakeForm} />
            )}

            {step === 7 && (
              <Step7Compilance onNext={nextStep} shake={shakeForm} />
            )}

            {step === 8 && (
              <Step8Document onNext={nextStep} shake={shakeForm} />
            )}

            {/* ✅ T&C PAGE */}
            {step === 9 && (
              <Step9TC
                onNext={nextStep}
                shake={shakeForm}
                isSubmitting={form.isSubmitting}
              />
            )}

            {/* SUCCESS PAGE */}
            {step === 10 && <SuccessCompletion />}

          </form>
        </FormProvider>
      </FormUIContext.Provider>

      <Toaster />
    </div>
  );
}

export default App;