import React, { useState } from 'react'
import FilePicker from '../../../Admin/components/FilePicker'

 function VendorSeoForm() {

    const [metaImg , setMetaImg] = useState()




      return (
    <>
    <form>
    <div className="metaTitle flex flex-col">
        <label htmlFor="" className='text-sm p-1'>Meta Title</label>
        <input type="text" name="" id="" className='w-[70%] outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Enter Meta Title'/>
    </div>

    <div className="metaTitle">
        <label htmlFor="" className='text-sm p-1'>Meta Description</label>
        <textarea type="text" name="" id="" className='w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Enter Meta Description'/>
    </div>


    <div className="metaTitle flex flex-col">
        <label htmlFor="" className='text-sm p-1'>Meta Keywords</label>
        <input type="text" name="" id="" className='w-[70%] outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Enter Meta Keywords'/>
    </div>


    {/* <div className="image flex flex-col py-1">
            <label htmlFor="metaImg" className='p-1 text-sm'>Meta Image</label>
            <input type="file" id='metaImg' hidden onChange={e => setMetaImg(e.target.files[0])}/>
            <label htmlFor="metaImg" className='w-[70%]'>
            <div className='w-full h-12 rounded-md border-1 border-[#dde1ef] flex '>
                <div className="choseFile bg-[#f3f6f9] h-full flex items-center px-3">Choose File</div>
                <div className="fileName h-full flex-grow flex items-center pl-2">{metaImg.name}</div>
            </div>
            </label>
        </div> */}
        <FilePicker label={'Meta Image'} className={'w-[70%]'} id={'metaImg'}/>
    </form>
    </>
  )
}


export default VendorSeoForm
