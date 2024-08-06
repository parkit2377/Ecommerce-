import React, { useState } from "react";
import idSvg from "../../../../assets/images/newImages/idSvg.svg";
import { IoCameraSharp } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";

export default function GstForm(data) {

  const [sign , setSign] = useState()

  let handleSignUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setSign(selectedFile);
        data.updateField({ signature: selectedFile });
      };
      reader.readAsDataURL(selectedFile);
      
    }
  }



  return (
    <>
      <div className="gst">
        <div className="pb-3">
          <div className="title flex items-center gap-3 pt-3 pb-">
            <img src={idSvg} alt="" />
            <span className="text-[#EC1E24] font-semibold">GST</span>
          </div>

          <div className="panNmbr flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="panNmbr" className="text-sm">
              GST Number
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.gst_no}
              onChange={e => data.updateField({gst_no : e.target.value})}
              id="panNmbr"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="00 00 00 00 00 00 "
            />
          </div>
        </div>

        <div>
          <div className="title flex items-center gap-3 pt-3 pb-2">
            <img src={idSvg} alt="" />
            <span className="text-[#EC1E24] font-semibold">SIGNATURE</span>
          </div>

          <div className="uploadOption grid grid-cols-12 gap-4 pb-5 pt-3">
            <input type="file" name="" id="signature" hidden/>
            
            <div className="camera col-span-6 border-2 border-[#AAAAAA] flex items-center justify-center h-12 text-lg rounded-md border-dashed text-[#AAAAAA]">
            <label htmlFor="signature" className="w-full flex items-center justify-center gap-2">
              <IoCameraSharp />
              <span>Camera</span>
              </label>
            </div>
           
            <div className="camera col-span-6 border-2 border-[#AAAAAA] flex items-center justify-center h-12 text-lg rounded-md border-dashed text-[#AAAAAA]">
              <input type="file" name="" id="gallery"  hidden onChange={handleSignUpload}/>
              <label htmlFor="gallery" className="flex items-center justify-center w-full gap-2">
              {sign ? '' : <BsGrid3X3GapFill />}
              <span>{sign ? sign.name : 'Gallery'}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
