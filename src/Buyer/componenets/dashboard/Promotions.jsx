import React from 'react'
import bolts from '../../../assets/images/newImages/bolts.png'
import pipes from '../../../assets/images/newImages/pipes.png'
import electricalConduit from '../../../assets/images/newImages/electricalConduit.png'



export default function Promotions() {

    let data = [
        {
            heading : 'Up to 65% off',
            title : 'Clearance Store',
            img : pipes,
            backgroundColor : 'bg-[#F0E8D5]'
        },
        {
            heading : 'Design your home',
            title : 'Anuda Mart',
            img : bolts,
            backgroundColor : 'bg-[#F3E8E8]'
        },
        {
            heading : 'Up to 30% off',
            title : 'Electronic pipe',
            img : electricalConduit,
            backgroundColor : 'bg-[#E7EAF3]'
        },
    ]


  return (
    <>


    <div className='grid grid-cols-12 gap-4 '>

           {data.map((i , index)=>{
            return <div key={index} className={`${i.backgroundColor} md:col-span-4 col-span-12  h-64 rounded-lg grid grid-cols-12`}>
                 <div className="text mx-4 col-span-6 py-3">
                        <p className='text-sm py-2 font-semibold mt-3'>{i.heading}</p>

                        <p className='text-xl font-semibold py-2'>{i.title}</p>

                        <button className='bg-[#EC1E24] px-3 py-2 md:text-sm text-white font-semibold rounded-lg mt-3'>Shop Now</button>
                    </div>  


                    <div className="images col-span-6 relative  overflow-hidden">
                        <div className="circle shadow-lg h-60 w-60 rounded-full absolute bottom-[-50px]">
                            
                        </div>
                        <img src={i.img} alt="" className='absolute bottom-0'/>

                        
                        </div> 

            </div>
           })} 

        
    </div>
      



    </>
  )
}
