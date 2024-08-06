import React from 'react'
import vendorSubmit from '../../../../assets/images/newImages/vendorSubmit.png'


export default function AfterSubmit() {
  return (
    <>

    <div className="submittedPage flex flex-col justify-center items-center py-5">


        <div className="images">

            <img src={vendorSubmit} alt="" className='w-[90%]'/>
        </div>

        <div className="thankyouText flex flex-col gap-2 items-center justify-center py-4">
            <p className='text-3xl '>Submit your quote request</p>
            <p className='mx-5 text-center font-thin' style={{fontWeight : 100}}>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
        </div>



    </div>

      
    </>
  )
}
