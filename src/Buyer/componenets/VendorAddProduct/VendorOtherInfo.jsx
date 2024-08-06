import React from "react";
import ToggleBtn from "../../../Admin/components/ToggleBtn";

export default function VendorOtherInfo() {
  return (
    <div>
      <h2 className="font-bold uppercase text-lg">Statuses</h2>

      <div className="features py-5 px-3 shadow-md mt-3">
        <div className="featured grid grid-cols-12 text-sm gap-y-3">
          <div className="title col-span-6">
            <p>Featured</p>
          </div>
          <div className="col-span-6 flex items-center gap-2">
            <ToggleBtn />
            <p>Add to Featured</p>
          </div>



          <div className="todaysDeal col-span-6">
            <p>Today's Deal</p>
          </div>
          <div className="col-span-6 flex items-center gap-2">
            <ToggleBtn />
            <p>Add to Today's Deal</p>
          </div>


          
        </div>
      </div>
    </div>
  );
}
