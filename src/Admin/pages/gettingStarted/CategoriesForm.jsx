import React from 'react'
import InputSearch from "../../components/InputSearch";

export default function CategoriesForm(data) {

  return (
    <>
<div className=" flex justify-end">
        <div className="bussinessForm w-[80%] flex flex-col gap-3 justify-start">
          <div className="mobile grid gap-2 grid-cols-12 ">
            <div className="col-span-3 ">
              <InputSearch
                searchboxClassname="h-10 rounded"
                inputClassName="h-8 w-28"
                placeholder={"categoryCreator"}
                inputValue={data.formData.categoryCreator}
                onChange={e => data.updateField({categoryCreator : e.target.value})}
              />
            </div>
            <div className="col-span-9">
              <InputSearch
                searchboxClassname="h-10 rounded"
                inputClassName="h-8"
                placeholder={"categoryItems"}
                inputValue={data.formData.categoryItems}
                onChange={e => data.updateField({categoryItems : e.target.value})}
              />
            </div>
          </div>

          <div className="gstNumber">
            <InputSearch
              searchboxClassname="h-10 rounded"
              inputClassName="h-8 w-full"
              placeholder={"categoryName"}
              inputValue={data.formData.categoryName}
                onChange={e => data.updateField({categoryName : e.target.value})}
            />
          </div>

          <div className="gstNumber">
            <InputSearch
              searchboxClassname="h-10 rounded"
              inputClassName="h-8 w-full"
              placeholder={"categoryType"}
              inputValue={data.formData.categoryType}
                onChange={e => data.updateField({categoryType : e.target.value})}
            />
          </div>

          <div className="">
            <textarea
              name=""
              id=""
              className="w-full border-1 border-[#DDE1EF] rounded"
              placeholder="categoryValue"
              rows="4"
              value={data.formData.categoryValue}
                onChange={e => data.updateField({categoryValue : e.target.value})}
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
