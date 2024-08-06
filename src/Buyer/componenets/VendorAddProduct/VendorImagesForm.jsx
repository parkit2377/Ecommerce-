import React, { useState } from 'react'
import FilePicker from '../../../Admin/components/FilePicker';

export default function VendorImagesForm() {

    const [thumbnailName , setThumbnailName] = useState()
    const [gallery , setGallery] = useState()

    let handleThumbnail = (e) => {
        setThumbnailName(e.target.files[0]);
    }

    let handleGalleryImg = (e) => {
        setGallery(e.target.files[0]);
    }
  return (
    <div>
      <h2 className='font-bold py-3 text-lg'>Product Images</h2>

      <div className="uploads flex flex-col gap-3">
        {/* <div className="thumbanil">
            <label htmlFor="thumbnailUpload" className='py-2 px-2'>Thumbnail</label>
            <input type="file" id='thumbnailImg' hidden onChange={handleThumbnail}/>
            <label htmlFor="thumbnailImg" className='w-full'>
            <div className='w-full h-12 rounded-md border-1 border-[#dde1ef] flex '>
                <div className="choseFile bg-[#f3f6f9] h-full flex items-center px-3">Choose File</div>
                <div className="fileName h-full flex-grow flex items-center pl-2">{thumbnailName?.name}</div>
            </div>
            </label>
        </div> */}
        <FilePicker label={'Thumbnail'} id={'thumbnail'}/>

        <FilePicker label={'Gallery Images'} id={'gallery'}/>



      </div>


      <div className="productVideo">
        <h2 className='font-bold pt-5 text-lg'>Product Video</h2>

        <div className="inputVideo py-2">
            <input type="text" className='w-full h-12 rounded-md border-1 border-[#dde1ef] pl-2' placeholder='Enter Video Url'/>
        </div>
      </div>
    </div>
  )
}
