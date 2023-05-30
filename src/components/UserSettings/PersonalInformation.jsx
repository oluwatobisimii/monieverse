import React from "react";
import save from "../../assets/icons/FloppyDiskBack.svg";

import lock from "../../assets/icons/Lock.svg";
import fileCloud from "../../assets/icons/FileCloud.svg";

import CustomInput from "../Inputs/CustomInput";

const PersonalInformation = () => {

  const userDetails = JSON.parse(localStorage.getItem('user'));


  return (
    <>
      <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-10 p-4">
        <div className="flex justify-between items-center">
          <p className="text-d-xs font-clashGrotesk font-medium">
            Business Information
          </p>
          <button className="flex gap-2 px-3 py-2 rounded-lg bg-gray-25 hover:bg-gray-50">
            <img src={save} alt="" />
            <p className="text-sm text-gray500">Save Changes</p>
          </button>
        </div>
        <div className="h-6"></div>
        <div className="h-[1px] w-full bg-gray-100"></div>
        <div className="h-8"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <CustomInput
              label={"Legal first name"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"Emilia"}
              disabled={true}
              value={userDetails?.first_name}
            />
          </div>
          <div className="flex-1">
            <CustomInput
              label={"Middle name"}
              //   labelIcon={<img src={lock} alt="" />}
              placeholder={"Enter your middle name"}
            />
          </div>
          <div className="flex-1">
            <CustomInput
              label={"Legal last name"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"Soroptuchi"}
              disabled={true}
              value={userDetails?.last_name}
            />
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <CustomInput
              label={"Email"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"emilia_sorop@konotal.co"}
              disabled={true}
              value={userDetails?.email}
            />
          </div>
          <div className="flex-1">
            <CustomInput
              label={"Phone number"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"8183 343 3433"}
              disabled={true}
              value={userDetails?.phone}
            />
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <CustomInput
              label={"Business name"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"emilia_sorop@konotal.co"}
              disabled={true}
              value={userDetails?.business_name}
            />
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
        <div className="flex justify-between items-center">
          <p className="text-d-xs font-clashGrotesk font-medium">
          Address Information
          </p>
          <div className="flex gap-2 px-3 py-2 rounded-lg bg-gray-25">
            <img src={fileCloud} alt="" />
            <p className="text-sm text-gray500">
              Your information has been verified hence, cannot be edited
            </p>
          </div>
        </div>
        <div className="h-6"></div>
        <div className="h-[1px] w-full bg-gray-100"></div>
        <div className="h-8"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <CustomInput
              label={"Country"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"Nigeria"}
              disabled={true}
              value={userDetails?.country_code}
            />
          </div>
          <div className="flex-1">
            <CustomInput
              label={"State"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"Lagos State"}
              disabled={true}
              value={userDetails?.state}
            />
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <CustomInput
              label={"Street Address"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={
                "234, Boulevard Springs Palm Avenue, Beside Global World Filling Station, Lekki"
              }
              disabled={true}
              value={userDetails?.address}
            />
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <CustomInput
              label={"City"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"Lekki Phase 1"}
              disabled={true}
            />
          </div>
          <div className="flex-1">
            <CustomInput
              label={"Zip code"}
              labelIcon={<img src={lock} alt="" />}
              placeholder={"102002"}
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </>
  );
};

export default PersonalInformation;
