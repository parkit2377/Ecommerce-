import React from 'react'

export default function InputSearch({
    height=2,
    width=10,
    searchboxClassname = '',
    inputClassName = '',
    icon,
    paddingY=0,
    paddingX=0,
    inputValue,
    onChange,
    ...props 
}) {
  return (
    <div className={`border-1 border-[#DDE1EF] h-[${height}] w-[${width}]  py-[${paddingY}] px-[${paddingX}] ${searchboxClassname} flex items-center gap-2` }>
        <span className='text-lg'>{icon}</span>
      <input type="text" className={` ${inputClassName} outline-none`}  {...props} value={inputValue} onChange={onChange}/>
    </div>
  )
}
