import React, { useState, useRef, useEffect } from "react";
import useMultiStepFormHook from "../../../../Admin/hooks/UseMultiStepFormHook";
import BasicDetailForm from "./BasicDetailForm";
import AdharCardForm from "./AdharCardForm";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import PanCardForm from "./PanCardForm";
import GstForm from "./GstForm";
import BankDetails from "./BankDetails";
import AfterSubmit from "./AfterSubmit";
import "./vendor.css";
import api from "../../../../services/api";

export default function Vendor() {
  let INITIAL_VAL = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    aadhar_front_photo: "",
    aadhar_back_photo: "",
    aadhar_no: "",
    pan_no: "",
    gst_no: "",
    signature: "",
    account_holder_name: "",
    bank_name: "",
    ifsc_code: "",
    account_no: "",
    confirmAccNumber: "",
  };

  let updateFields = (fields) => {
    setVendorFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const [vendorFormData, setVendorFormData] = useState(INITIAL_VAL);

  const {
    formSteps,
    currentStepIndex,
    prev,
    next,
    setCurrentStepIndex,
    isFirstStep,
    isLastStep,
  } = useMultiStepFormHook([
    <BasicDetailForm
      vendorFormData={vendorFormData}
      updateField={updateFields}
    />,
    <AdharCardForm
      vendorFormData={vendorFormData}
      updateField={updateFields}
    />,
    <PanCardForm vendorFormData={vendorFormData} updateField={updateFields} />,
    <GstForm vendorFormData={vendorFormData} updateField={updateFields} />,
    <BankDetails vendorFormData={vendorFormData} updateField={updateFields} />,
    <AfterSubmit vendorFormData={vendorFormData} updateField={updateFields} />,
  ]);

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[formSteps.length - 1].offsetWidth / 2,
    });
  }, [stepRef, formSteps.length]);

  if (!formSteps.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === formSteps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (formSteps.length - 1)) * 100;
  };

  let handlePrev = () => {
    setCurrentStep(currentStep - 1);
    prev();
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
      return next();
    } else {
      // Extract values of all fields into an array
      const values = Object.values(vendorFormData);

      // Check if every value is not an empty string
      let isFormFilled = values.every((value) => value !== "");
      if (!isFormFilled) {
        alert("Form is not Completed.");
      } else {
        let formData = new FormData();
        console.log(vendorFormData);
        for (let key in vendorFormData) {
          if (vendorFormData.hasOwnProperty(key)) {
            formData.append(key, vendorFormData[key]);
          }
        }
        // localStorage.setItem('vendorData' , JSON.stringify(vendorFormData))
        let registerVendor = async () => {
          try {
            let response = await api.post("/web/vendor/register", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response);
            localStorage.setItem('vendorData' , JSON.stringify(formData))
          } catch (error) {
            console.log(error);
          }
        };
        registerVendor();
      }
    }
  };

  return (
    <>
      <div className="loginWrapper min-h-screen  flex flex-col gap-3 items-center justify-center bg-[#F5F5F5]">
        <div className="formTitle text-center pt-4">
          <h2 className="text-xl font-bold text-[#ec1e24] tracking-wider pb-1">
            Create A Vendor Account
          </h2>
          <p className="text-sm text-[#7e7e7e]">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>
        <div className="loginForm w-[70vw]   bg-white rounded-md">
          {/* <div className="h-20 "> */}

          <div className="stepper h-20 overflow-x-hidden mx-8">
            {formSteps.map((step, index) => {
              return (
                <div
                  key={step.name}
                  ref={(el) => (stepRef.current[index] = el)}
                  className={`step ${
                    currentStep > index + 1 || isComplete ? "complete" : ""
                  } ${currentStep === index + 1 ? "active" : ""} `}
                >
                  <div className="step-number">
                    {currentStep > index + 1 || isComplete ? (
                      <span>&#10003;</span>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="step-name">{step.name}</div>
                </div>
              );
            })}
            <div
              className="progress-bar w-full"
              style={{
                width: `calc(100%-${
                  margins.marginLeft + margins.marginRight
                }px)`,
                marginLeft: margins.marginLeft,
                marginRight: margins.marginRight,
              }}
            >
              <div
                className="progress"
                style={{ width: `${calculateProgressBarWidth()}%` }}
              ></div>
            </div>
          </div>
          {/* </div> */}
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="forms flex items-center justify-center">
              <div className="w-[60%]">
                {formSteps[currentStepIndex]}

                <div className="navigationBtn flex justify-between">
                  {!isFirstStep && (
                    <div className="nextBtn pt-4 pb-5">
                      <button
                        type="button"
                        className="px-4 py-2 text-white bg-[#AAAAAA] font-semibold rounded-md flex gap-2 items-center justify-center "
                        onClick={handlePrev}
                      >
                        <FaArrowLeftLong />
                        <span>Previous Step </span>
                      </button>
                    </div>
                  )}
                  <div className="nextBtn pt-4 pb-5">
                    <button
                      type={`${isLastStep ? "submit" : "button"}`}
                      className="px-4 py-2 text-white bg-[#EC1E24] font-semibold rounded-md flex gap-2 items-center justify-center "
                      onClick={handleSubmit}
                    >
                      {" "}
                      <span>{!isLastStep ? "Next Step" : "Submit"}</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="existingUser text-sm pb-4">
          <p className="text-[#7e7e7e]">
            ALREADY A USER ? <span className="text-[#ec1e24]">LOGIN</span>
          </p>
        </div>
      </div>
    </>
  );
}
