import React from "react";
import FilePicker from "../../../Admin/components/FilePicker";

export default function VendorProductDescriptionForm() {
  return (
    <>
      <div className="shortDesc">
        <label htmlFor="" className="text-sm p-1">
          Short Description
        </label>
        <textarea
          type="text"
          name=""
          id=""
          className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
          placeholder="Enter Short Description"
        />
      </div>

      <div className="longDesc">
        <label htmlFor="" className="text-sm p-1">
          Long Description
        </label>
        <textarea
          type="text"
          name=""
          id=""
          className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
          placeholder="Enter Long Description"
        />
      </div>


      <FilePicker label={'Description Image'} id={'descImg'}/>


      <div className="pdfSpecification pb-2 pt-5">
            <h2 className="uppercase font-bold tracking-tight py-2">pdf specification</h2>

            <FilePicker label={'PDF Specification'} id={'pdf'}/>
      </div>

    </>
  );
}
