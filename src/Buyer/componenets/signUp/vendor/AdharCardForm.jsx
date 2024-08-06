import React, { useEffect, useState } from "react";
import adharSvg from "../../../../assets/images/newImages/adharSvg.svg";
import imgUploadSvg from "../../../../assets/images/newImages/imgUploadSvg.svg";

export default function AdharCardForm(data) {
    const [aadharFront , setAadharFront] = useState();
    const [aadharBack , setAadharBack] = useState();




    useEffect(()=>{

      // settingNames for file if exists 
      if (data.vendorFormData?.aadhar_front_photo) setAadharFront(data.vendorFormData?.aadhar_front_photo)

      if (data.vendorFormData?.aadhar_back_photo) setAadharBack(data.vendorFormData?.aadhar_back_photo) 
    })

    const handleAadharFront = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        
        const reader = new FileReader();
        reader.onloadend = () => {
          setAadharFront(selectedFile);
          data.updateField({ aadhar_front_photo: selectedFile });
        };
        reader.readAsDataURL(selectedFile);
        
      }
      };


      const handleAadharBack = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          
          const reader = new FileReader();
          reader.onloadend = () => {
            setAadharBack(selectedFile);
            data.updateField({ aadhar_back_photo: selectedFile });
          };
          reader.readAsDataURL(selectedFile);
          
        }
        };

  return (
    <>
      <div className="">
        <div className="adhar">
          <div className="title flex items-center gap-3 pt-3 pb-4">
            <img src={adharSvg} alt="" />
            <span className="text-[#EC1E24] font-semibold">AADHAR CARD</span>
          </div>

          <div className="imageUpload grid grid-cols-12 gap-10">
            <div className="col-span-6 ">
            <input type="file" name="" 
              onChange={handleAadharFront} id="aadharFront" hidden />
              <label htmlFor="aadharFront" className="w-full">
              <div className="border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-56  ">
                <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                  <img src={imgUploadSvg} alt="" className="p-4" />
                </div>
                <hr />
              </div>
              </label>
              <div className="h-10  flex items-center justify-center  border-[#E2E2E2] border-1 border-t-0">
              {aadharFront ? aadharFront.name : 'AADHAR FRONT'}  
              </div>
            </div>

            <div className="col-span-6 ">
              <input type="file" name="" 
              onChange={handleAadharBack} id="aadharBack" hidden />
              <label htmlFor="aadharBack" className="w-full">
                <div className="border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-56  ">
                  <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                    <img src={imgUploadSvg} alt="" className="p-4" />
                  </div>
                  <hr />
                </div>
              </label>
              <div className="h-10  flex items-center justify-center  border-[#E2E2E2] border-1 border-t-0">
               {aadharBack ? aadharBack.name : 'AADHAR BACK'} 
              </div>
            </div>
          </div>

          <div className="aadhar_no flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="aadhar_no" className="text-sm">
              Aadhar Number
            </label>
            <input
            value={data.vendorFormData?.aadhar_no}
            onChange={e => data.updateField({aadhar_no : e.target.value})}
              type="text"
              name=""
              id="aadhar_no"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="00 00 00 00 00"
            />
          </div>
        </div>
      </div>
    </>
  );
}
