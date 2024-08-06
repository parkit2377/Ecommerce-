import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import ToggleBtn from "../../../Admin/components/ToggleBtn";


export default function VendorProductPriceForm() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div>
      <div className="form">
        <div className="unitPrice">
          <label htmlFor="price" className="text-sm ">
            Unit Price
          </label>
          <input
            type="text"
            className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
            placeholder="Unit Price"
          />
        </div>
        <div className="specialDiscount grid grid-cols-12 gap-3 py-2">
          <div className="discountType col-span-6">
            <label htmlFor="price" className="text-sm px-1">
              Special Discount Type
            </label>
            <input
              type="text"
              className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
              placeholder="Select discount Type"
            />
          </div>

          <div className="discount col-span-6">
            <label htmlFor="price" className="text-sm px-1">
              Special Discount
            </label>
            <input
              type="text"
              className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
              placeholder="Enter Price"
            />
          </div>
        </div>

        <div className="discountRangeDate">
          {/* <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          /> */}
          
        </div>

        <div className="productStock pt-5 ">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <h2 className="uppercase font-bold tracking-wide">
                Product stock
              </h2>
            </div>
            <div className="toggle col-span-6 flex items-center gap-2">
              <ToggleBtn label={""} />
              <p className="text-xs">Has Varient</p>
            </div>
          </div>

          <div className="specialDiscount grid grid-cols-12 gap-3 py-3">
          <div className="discountType col-span-6">
            <label htmlFor="price" className="text-sm px-1 py-1">
              Minimum Stock Warning
            </label>
            <input
              type="text"
              className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
              placeholder="Enter Minimun Stock"
            />
          </div>

          <div className="discount col-span-6">
            <label htmlFor="price" className="text-sm px-1 py-1">
              Stock Visibility
            </label>
            <input
              type="text"
              className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
              placeholder="Stock Visibility"
            />
          </div>
        </div>

        <div className="specialDiscount grid grid-cols-12 gap-3 py-2">
          <div className="discountType col-span-6">
            <label htmlFor="price" className="text-sm px-1">
              SKU
            </label>
            <input
              type="text"
              className="w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md"
              placeholder="Select discount Type"
            />
          </div>

        </div>

          
        </div>
      </div>
    </div>
  );
}
