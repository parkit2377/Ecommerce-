import React, { useState } from "react";
import aadharImg from "../../../../assets/images/newImages/aadhar.png";
import imgUploadSvg from "../../../../assets/images/newImages/imgUploadSvg.svg";



export default function Document() {

    const [aadharUpdate , setAadharUpdate] = useState(false)
    const [panUpdate , setPanUpdate] = useState(false)


  return (
    <>
      <h2 className="font-bold text-xl pb-5">Document</h2>

      <div className="documents grid grid-cols-12 gap-5">
        <div className="aadhar md:col-span-8 col-span-12 grid grid-cols-12 gap-3 ">
            <div className="title flex col-span-12 justify-between px-2 items-center">
                <p>Aadhar Card</p>
                <button className="text-[#ec1e24] text-sm" onClick={()=> setAadharUpdate(prev => !prev)}>{!aadharUpdate ? 'Edit' : 'Save'}</button>
            </div>
          <div className="aadharFront border-1 border-[#e2e2e2] col-span-6 ">
          {!aadharUpdate && <img
              src={aadharImg}
              alt=""
              className="object-contain w-full pb-2"
            />}

            {aadharUpdate &&  <div className="border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-44">
                <input type="file" name="" id="aadharfrontUpload" hidden/>
                <label htmlFor="aadharfrontUpload">
                <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                  <img src={imgUploadSvg} alt="" className="p-4" />
                </div>
                </label>
                {/* <hr /> */}
              </div>}

            <hr />
            <p className="text-center py-2 text-[#676767] tracking-wider">
              Aadhar Front
            </p>
          </div>

          <div className="aadharBack border-1 border-[#e2e2e2] col-span-6 ">
          {!aadharUpdate && <img
              src={aadharImg}
              alt=""
              className="object-contain w-full pb-2"
            />}

            {aadharUpdate &&  <div className="border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-44">
                <input type="file" name="" id="aadharbackUpload" hidden/>
                <label htmlFor="aadharbackUpload">
                <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                  <img src={imgUploadSvg} alt="" className="p-4" />
                </div>
                </label>
                {/* <hr /> */}
              </div>}

            <hr />
            <p className="text-center py-2 text-[#676767] tracking-wider">
              Aadhar Back
            </p>
          </div>
        </div>

        <div className="panCard col-span-6 lg:col-span-4 grid grid-cols-12 gap-3">
        <div className="title flex col-span-12 justify-between px-2 items-center">
                <p>Pan Card</p>
                <button className="text-[#ec1e24] text-sm" onClick={()=> setPanUpdate(prev => !prev)}>{!panUpdate ? 'Edit' : 'Save'}</button>
            </div>
          <div className="aadharFront border-1 border-[#e2e2e2] col-span-12">
           {!panUpdate && <img
              src={aadharImg}
              alt=""
              className="object-contain w-full pb-2"
            />}

            {panUpdate &&  <div className="border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-44">

                <input type="file" id="panImgUpload" hidden/>
                <label htmlFor="panImgUpload">
                <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                  <img src={imgUploadSvg} alt="" className="p-4" />
                </div>
                </label>
                {/* <hr /> */}
              </div>}

            <hr />
            <p className="text-center py-2 text-[#676767] tracking-wider">
              Pan Card
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
