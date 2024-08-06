import React, { useState } from 'react'

export default function BankDetailsUpdate() {


    const [editBankDetail , setEditBankDetail] = useState(false)


  return (
    <>
      <h2 className='text-xl font-semibold py-3'>Bank Details</h2>


      {!editBankDetail && <div className="grid grid-cols-12 savedDetails px-2">
        <div className="details col-span-6">
        <div className="firstName">
            <h4 className='text-sm font-bold py-1'>Account Holder Name</h4>
            <p className='text-xs text-[#676767]'>Dinesh Sharma</p>
        </div>
        <div className="lastName py-2">
            <h4 className=' py-1 text-sm font-bold'>Bank Name</h4>
            <p className='text-xs text-[#676767]'>HDFC Bank</p>
        </div>
        <div className="email py-2">
            <h4 className=' py-1 text-sm font-bold'>IFSC Code</h4>
            <p className='text-xs text-[#676767]'>HDFC0000130</p>
        </div>
        <div className="phone py-2">
            <h4 className='text-sm font-bold py-1'>Account Number</h4>
            <p className='text-xs text-[#676767]'>8147373530</p>
        </div>


        </div>

        <div className="col-span-6">
            <button type='button' className='text-sm text-[#e40f15]' onClick={()=> setEditBankDetail(prev => !prev)}>Edit</button>
        </div>
      </div>}


      {editBankDetail && <div className="UpdateDetails grid grid-cols-12">

        <div className="updateForm col-span-8">
            
        <div className="acc_holder">
            <label htmlFor="acc_holder" className='py-2 text-sm'>Account Holder Name</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Account Holder Name' name="acc_holder" id="" />
        </div>

        <div className="bank_name">
            <label htmlFor="bank_name" className='py-2 text-sm'>Bank Name</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Bank Name' name="bank_name" id="" />
        </div>

        <div className="ifsc">
            <label htmlFor="ifsc" className='py-2 text-sm'>IFSC Code</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='IFSC Code' name="ifsc" id="" />
        </div>

        <div className="acc_number">
            <label htmlFor="acc_number" className='py-2 text-sm'>Account Number</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Account Number' name="acc_number" id="" />
        </div>

        <div className="confirm_acc_holder">
            <label htmlFor="confirm_acc_holder" className='py-2 text-sm'>Confirm Account Number</label>
            <input type="text" className='outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full' placeholder='Confirm Account Number' name="confirm_acc_holder" id="" />
        </div>

    <div className="saveChanges py-3">
        <button type="button" className=' w-32 h-10 bg-red-500 text-white rounded-md' onClick={()=> setEditBankDetail(prev => !prev)}>Save</button>
        </div>

        </div>

      </div>}
    </>
  )
}
