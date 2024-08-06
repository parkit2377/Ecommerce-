import React, { useEffect, useState } from 'react'
import idSvg from '../../../../assets/images/newImages/idSvg.svg'
import imgUploadSvg from '../../../../assets/images/newImages/imgUploadSvg.svg'

export default function PanCardForm(data) {

  const [panFront , setPanFront] = useState(null)


  useEffect(() => {
    if (data.vendorFormData?.pan_front_photo) setPanFront(data.vendorFormData?.pan_front_photo)
  })

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPanFront(selectedFile);
        data.updateField({ pan_front_photo: selectedFile });
      };
      reader.readAsDataURL(selectedFile);
      
    }
  };

  console.log(panFront);

  
  return (
    <>

<div className="">
            <div className="panCard">
                <div className="title flex items-center gap-3 pt-3 pb-4">
                    <img src={idSvg} alt="" />
                    <span className='text-[#EC1E24] font-semibold'>PAN CARD</span>
                </div>

                <div className="imageUpload grid grid-cols-12 gap-10">

                    <div className='col-span-6 '>
                    <input type="file" name="" 
              onChange={handleFileChange} id="panFront" hidden />
              <label htmlFor="panFront" className='w-full'>
                    <div className='border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-56  '>
                        <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                        <img src={imgUploadSvg} alt="" className='p-4'/>
                        </div>
                        <hr />
                    </div>
                    </label>
                    <div className="h-10  flex items-center justify-center  border-[#E2E2E2] border-1 border-t-0">
                      {panFront ? panFront.name : 'PAN FRONT'}  
                    </div>
                    </div>



                    {/* <div className='col-span-6 '>
                    <div className='border-1 border-[#E2E2E2] flex flex-col items-center justify-center h-56  '>
                        <div className="imgWrapper border-[#E2E2E2] rounded-md border-2 border-dashed">
                        <img src={imgUploadSvg} alt="" className='p-4'/>
                        </div>
                        <hr />
                    </div>
                    <div className="h-10  flex items-center justify-center  border-[#E2E2E2] border-1 border-t-0">
                        PAN BACK
                    </div>
                    </div> */}
                </div>

                <div className="pan_no flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="pan_no" className="text-sm">
              Pan Card Number
            </label>
            <input
              type="text"
              value={data.vendorFormData?.pan_no}
              onChange={e => data.updateField({pan_no : e.target.value})}
              name=""
              id="pan_no"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="DRVAA093L"
            />
          </div>


            </div>
        </div>
      
    </>
  )
}
