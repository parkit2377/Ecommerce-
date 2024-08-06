import React from "react";
import InputSearch from "../../components/InputSearch";

export default function BusinessDetailsForm(data ) {

  return (
    <>
      <div className=" flex justify-end">
        <div className="bussinessForm w-[80%] flex flex-col gap-3 justify-start">
          <div className="mobile grid gap-2 grid-cols-12 ">
            <div className="col-span-3 ">
              <InputSearch
                searchboxClassname="h-10 rounded"
                inputClassName="h-8 w-28"
                placeholder={"+91"}
                inputValue={data.formData.countryCode}
                onChange={e => data.updateField({countryCode : e.target.value})}
              />
            </div>
            <div className="col-span-9">
              <InputSearch
                searchboxClassname="h-10 rounded"
                inputClassName="h-8"
                placeholder={"Enter Mobile Number..."}
                inputValue={data.formData.contactNum}
                onChange={e => data.updateField({contactNum : e.target.value})}
              />
            </div>
          </div>

          <div className="gstNumber">
            <InputSearch
              searchboxClassname="h-10 rounded"
              inputClassName="h-8 w-full"
              placeholder={"Shop/Business GST Number"}
              inputValue={data.formData.gstNumber}
              onChange={e => data.updateField({gstNumber : e.target.value})}
            />
          </div>

          <div className="bussinessName">
            <InputSearch
              searchboxClassname="h-10 rounded"
              inputClassName="h-8 w-full"
              placeholder={"Business Name"}
              inputValue={data.formData.bussinessName}
              onChange={e => data.updateField({bussinessName : e.target.value})}
            />
          </div>

          <div className="">
            <textarea
              name=""
              id=""
              className="w-full border-1 border-[#DDE1EF] rounded"
              placeholder="Business Address"
              rows="4"
              onChange={e => data.updateField({businessAddress : e.target.value})}
              value={data.formData.businessAddress}
            ></textarea>
          </div>

            <div className="communicationAdrs self-start items-center flex">
                <input type="checkbox" name="comAdrs" id="" />
                <label htmlFor="comAdrs" className="text-sm mx-2">Comunication address (Same as above)</label>
            </div>


        </div>
      </div>
    </>
  );
}
