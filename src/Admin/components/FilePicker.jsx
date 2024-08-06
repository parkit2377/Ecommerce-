import React, { useState } from 'react'

export default function FilePicker({label , className , id}) {

    const [file , setFile] = useState()
  return (
    <>
      <div className="image flex flex-col py-1">
            <label htmlFor="metaImg" className='p-1 text-sm'>{label}</label>
            <input type="file" id={id} hidden onChange={e => setFile(e.target.files[0])}/>
            <label htmlFor={id} className={`${className}`} >
            <div className='w-full h-12 rounded-md border-1 border-[#dde1ef] flex '>
                <div className="choseFile bg-[#f3f6f9] h-full flex items-center px-3">Choose File</div>
                <div className="fileName h-full flex-grow flex items-center pl-2">{file?.name}</div>
            </div>
            </label>
        </div>
    </>
  )
}
