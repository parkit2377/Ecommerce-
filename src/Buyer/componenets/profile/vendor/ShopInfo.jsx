import React, { useState } from 'react'
import signatureImg from '../../../../assets/images/newImages/signature.png'
import { IoCameraSharp } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";



export default function ShopInfo() {

    const [gstUpdate , setGstUpdate] = useState(false)

    const [signUpdate , setSignUpdate] = useState(false)
  return (
    <>
      <h2 className='font-bold text-xl'>Shop</h2>

      <div className="shopDetails grid grid-cols-12 gap-5">

            <div className="gstNumber col-span-6 py-3">
                <div className="edit flex justify-between items-center">
                    <p className='text-sm'>GST Number</p>
                    <button className='text-[#ec1e24] text-sm' onClick={()=> setGstUpdate(prev => !prev)}>{!gstUpdate ? 'Edit' : 'Save'}</button>
                </div>
                {!gstUpdate && <p className='text-xs py-2 px-1 text-[#676767]'>22 AAAAA0000A1Z5</p>}
                <div className="gstInput py-2">
                {gstUpdate &&<input type="text" name="" id="" placeholder='GST Number' className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full'/>}
                </div>
            </div>
            <div className="gstNumber col-span-6 py-3">
                <div className="edit flex justify-between items-center">
                    <p className='text-sm'>Signature</p>
                    <button className='text-[#ec1e24] text-sm' onClick={()=> setSignUpdate(prev => !prev)}>{!   signUpdate ? 'Edit' : 'Save'}</button>
                </div>

                {!signUpdate && <div className="signature py-2">
                    <img src={signatureImg} alt="" />
                </div>}

               {signUpdate && <div className='updateSign flex gap-3 py-3'>

                    <div className="camera border-1 border-dashed border-[#aaaaaa] flex items-center justify-center w-1/2 h-10 rounded-md text-[#aaaaaa] gap-2">

                    <IoCameraSharp />
                        <p>Camera</p>
                    </div>
                    <div className="gallery border-1 border-dashed border-[#aaaaaa] flex items-center justify-center w-1/2 h-10 rounded-md text-[#aaaaaa] gap-2">
                        <input type="file" name="" id="gallery" hidden/>
                        <label htmlFor="gallery" className='flex items-center justify-center gap-2 cursor-pointer'>
                    <BsGrid3X3GapFill />
                        <p>Gallery</p>
                        </label>
                    </div>

                </div>}
            </div>
      </div>
    </>
  )
}
