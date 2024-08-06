import React from 'react'
import InputSearch from "../../components/InputSearch";

export default function ProductsForm(data) {
    

  return (
    <>
<div className=" flex justify-end">
        <div className="bussinessForm w-[80%] flex flex-col gap-3 justify-start">
          <div className="mobile grid gap-2 grid-cols-12 ">
            <div className="col-span-3 ">
              <InputSearch
                searchboxClassname="h-10 rounded"
                inputClassName="h-8 w-28"
                placeholder={"productName"}
                inputValue={data.formData.productName}
                onChange={e => data.updateField({productName : e.target.value})}
              />
            </div>
            <div className="col-span-9">
              <InputSearch
                searchboxClassname="h-10 rounded"
                inputClassName="h-8"
                placeholder={"productType"}
                inputValue={data.formData.productType}
                onChange={e => data.updateField({productType : e.target.value})}
              />
            </div>
          </div>

          <div className="gstNumber">
            <InputSearch
              searchboxClassname="h-10 rounded"
              inputClassName="h-8 w-full"
              placeholder={"productValue"}
              inputValue={data.formData.productValue}
                onChange={e => data.updateField({productValue : e.target.value})}
            />
          </div>

          <div className="gstNumber">
            <InputSearch
              searchboxClassname="h-10 rounded"
              inputClassName="h-8 w-full"
              placeholder={"productSize"}
              inputValue={data.formData.productSize}
                onChange={e => data.updateField({productSize : e.target.value})}
            />
          </div>

          <div className="">
            <textarea
              name=""
              id=""
              className="w-full border-1 border-[#DDE1EF] rounded"
              placeholder="productCreator"
              rows="4"
              value={data.formData.productCreator}
                onChange={e => data.updateField({productCreator : e.target.value})}
            ></textarea>
          </div>

            <div className="communicationAdrs self-start items-center flex">
                <input type="checkbox" name="comAdrs" id="" />
                <label htmlFor="comAdrs" className="text-sm mx-3">Comunication address (Same as above)</label>
            </div>


        </div>
      </div>
      
    </>
  )
}
