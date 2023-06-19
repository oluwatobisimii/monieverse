import React, { useEffect, useState } from "react";
import StepperWrapper from "../Wrappers/StepperWrapper";
import identity from "../../assets/icons/IdentificationBadge.svg";
import { useNavigate } from "react-router-dom";
import FileUploader from "../Inputs/FileUploader";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { uploadDocuments } from "./KycApi";
import Spinner from "../Loaders/Spinner";

const KycUpload = ({ optionType, step, setStep }) => {
  const [selectedFileFront, setSelectedFileFront] = useState(null);
  const [selectedFileBack, setSelectedFileBack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (optionType === "passport" && selectedFileFront === null) {
      setIsDisabled(true);
      return;
    } else if (selectedFileFront === null && selectedFileBack === null) {
      console.log('here')
      setIsDisabled(true);
      return
    } else setIsDisabled(false);
  }, [selectedFileFront, selectedFileBack, optionType]);



  return (
    <StepperWrapper>
      <div className="flex items-center gap-3">
        <div className="rounded-lg h-12 w-12 bg-primary-400 flex items-center justify-center">
          <img src={identity} alt="" />
        </div>
        <p className="text-d-xs lg:text-d-sm font-medium font-clashGrotesk">
          Identity Document
        </p>
      </div>
      <div className="h-14" />
      <p className="text-md font-medium text-gray-500">
        Front side of your {optionType}
      </p>
      <div className="h-3" />
      <FileUploader
        selectedFile={selectedFileFront}
        setSelectedFile={setSelectedFileFront}
        id={"front-file"}
      />
      {optionType !== "passport" ? (
        <>
          <div className="h-6" />
          <p className="text-md font-medium text-gray-500">
            Back side of your {optionType}
          </p>
          <div className="h-3" />
          <FileUploader
            selectedFile={selectedFileBack}
            setSelectedFile={setSelectedFileBack}
            id={"back-file"}
          />
        </>
      ) : null}
      <div className="h-6"></div>
      {error && (
        <p className="text-[#ff4646] text-align center rounded-lg mt-4 text-sm px-4 py-3 ">
          {error}, try again
        </p>
      )}
      <div className="h-6"></div>
      <div className="h-14" />
      <div className="flex gap-x-6">
        <button
          className="md:w-[196px] px-5 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
          onClick={() => {
            setStep(step - 1);
            setSelectedFileBack(null);
            setSelectedFileFront(null);
            setIsDisabled(true)
          }}
        >
          <ChevronLeftIcon className="h-6 w-6" />
          <p>Go back</p>
        </button>
        <button
          disabled={isDisabled}
          className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
          onClick={(e) => {
            e.preventDefault();
            uploadDocuments(
              selectedFileFront,
              selectedFileBack,
              optionType,
              setLoading,
              setStep,
              setError,
              navigate
            );
          }}
        >
          {" "}
          {loading ? <Spinner color="#FFFFFF" /> : "Continue"}
        </button>
      </div>{" "}
    </StepperWrapper>
  );
};

export default KycUpload;
