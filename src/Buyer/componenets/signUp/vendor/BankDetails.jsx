import React from 'react';
import idSvg from '../../../../assets/images/newImages/idSvg.svg'


export default function BankDetails(data) {
  return (
    <>

    <div className="bankDetails">

    <div className="title flex items-center gap-3 pt-3 pb-">
                    <img src={idSvg} alt="" />
                    <span className='text-[#EC1E24] font-semibold'>BANK DETAILS</span>
                </div>

                <div className="bankForm">
                <div className="accHolderName flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="accHolderName" className="text-sm">
              Account Holder Name
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.account_holder_name}
              onChange={e => data.updateField({account_holder_name : e.target.value})}
              id="accHolderName"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="Account Holder Name "
            />
          </div>



          <div className="bankName flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="bankName" className="text-sm">
              Bank Name
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.bank_name}
              onChange={e => data.updateField({bank_name : e.target.value})}
              id="bankName"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="Bank Name "
            />
          </div>




          <div className="ifsc flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="ifsc" className="text-sm">
              IFSC Code
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.ifsc_code}
              onChange={e => data.updateField({ifsc_code : e.target.value})}
              id="ifsc"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="IFSC code"
            />
          </div>



          <div className="accNo flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="accNo" className="text-sm">
              Account Number
            </label>
            <input
              type="text"
              value={data.vendorFormData?.account_no}
              onChange={e => data.updateField({account_no : e.target.value})}
              name=""
              id="accNo"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="Account Number "
            />
          </div>




          <div className="confirmAccNo flex flex-col gap-2 pt-3 pb-2">
            <label htmlFor="confirmAccNo" className="text-sm">
              Confirm Account Number
            </label>
            <input
              type="text"
              value={data.vendorFormData?.confirmAccNumber}
              onChange={e => data.updateField({confirmAccNumber : e.target.value})}
              name=""
              id="confirmAccNo"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="00 00 00 00 00 00 "
            />
          </div>
                </div>


    </div>
      
    </>
  )
}
