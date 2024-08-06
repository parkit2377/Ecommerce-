import React, { useState } from 'react'

export default function PersonalInfo(data) {

    const [editDetails , setEditDetails] = useState(false)

    console.log(data);
  return (
    <>
      <h2 className='font-bold text-xl py-2 '>Personal Informations</h2>


     {!editDetails && <div className="grid grid-cols-12 savedDetails px-2">
        <div className="details col-span-6">
        <div className="firstName">
            <h4 className='text-sm font-bold py-1'>First Name</h4>
            <p className='text-xs text-[#676767]'>{data.vendorFormData?.first_name ? data.vendorFormData.first_name : 'Dinesh'} </p>
        </div>
        <div className="lastName py-2">
            <h4 className=' py-1 text-sm font-bold'>Last Name</h4>
            <p className='text-xs text-[#676767]'>Sharma</p>
        </div>
        <div className="email py-2">
            <h4 className=' py-1 text-sm font-bold'>Email Address</h4>
            <p className='text-xs text-[#676767]'>dinesh@gmail.com</p>
        </div>
        <div className="phone py-2">
            <h4 className='text-sm font-bold py-1'>Phone Number</h4>
            <p className='text-xs text-[#676767]'>8147373530</p>
        </div>

        <div className="dob py-2">
            <h4 className=' py-1 text-sm font-bold'>Date Of Birth</h4>
            <p className='text-xs text-[#676767]'>07-02-1994</p>
        </div>
        </div>

        <div className="col-span-6">
            <button type='button' className='text-sm text-[#e40f15]' onClick={()=> setEditDetails(prev => !prev)}>Edit</button>
        </div>
      </div>}


      {editDetails && <div className="editDetails grid grid-cols-12 gap-3">
        <div className="firstName col-span-6">
            <label htmlFor="first_name" className='py-2 text-sm'>First Name</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='First Name' name="first_name" id="" />
        </div>
        <div className="lastName col-span-6">
            <label htmlFor="last_name" className='py-2 text-sm'>Last Name</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Last Name' name="last_name" id="" />
        </div>

        <div className="email col-span-12">
            <label htmlFor="email" className='py-2 text-sm'>Email Address</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Email Address' name="email" id="" />
        </div>


        <div className="phone col-span-6">
            <label htmlFor="phone" className='py-2 text-sm'>Phone Number <span className='text-[#676767] text-xs'>(Optional)</span></label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Phone Number' name="phone" id="" />
        </div>
        <div className="dob col-span-6">
            <label htmlFor="dob" className='py-2 text-sm'>Date Of Birth <span className='text-[#676767] text-xs'>(Optional)</span></label>
            <input type="date" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Date Of Birth' name="dob" id="" />
        </div>

        <div className="saveBtn col-span-12 py-2 px-2">
            <button type='button' className='text-white bg-[#e40f15] h-10 w-32 rounded-md' onClick={()=> setEditDetails(prev => !prev)}>Save</button>
        </div>
      </div>}
    </>
  )
}
