import React from 'react'
import cement from "../../../assets/images/newImages/ultratechCement.png";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function TrackOrder() {


    let starSvg = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18" fill="none">
    <path d="M17.3039 7.97262L13.7882 11.0062L14.8593 15.5429C14.9184 15.7892 14.9032 16.0475 14.8156 16.2851C14.728 16.5227 14.5719 16.7291 14.3671 16.8781C14.1623 17.027 13.9179 17.112 13.6648 17.1221C13.4118 17.1323 13.1614 17.0672 12.9453 16.9351L8.99995 14.507L5.0523 16.9351C4.83622 17.0664 4.58613 17.1309 4.3335 17.1204C4.08087 17.1098 3.837 17.0248 3.63261 16.8759C3.42822 16.7271 3.27243 16.5211 3.18488 16.2839C3.09732 16.0467 3.08191 15.7889 3.14058 15.5429L4.21558 11.0062L0.699951 7.97262C0.508778 7.80739 0.370518 7.58951 0.302438 7.34617C0.234358 7.10284 0.239475 6.84484 0.317151 6.60439C0.394826 6.36395 0.541618 6.15172 0.739193 5.9942C0.936768 5.83669 1.17637 5.74087 1.42808 5.71871L6.03745 5.34684L7.81558 1.04371C7.91182 0.809197 8.07563 0.608596 8.28618 0.467416C8.49673 0.326236 8.7445 0.250854 8.998 0.250854C9.2515 0.250854 9.49927 0.326236 9.70982 0.467416C9.92036 0.608596 10.0842 0.809197 10.1804 1.04371L11.9578 5.34684L16.5671 5.71871C16.8193 5.74004 17.0596 5.83533 17.2579 5.99263C17.4562 6.14992 17.6037 6.36224 17.6819 6.60298C17.76 6.84371 17.7654 7.10216 17.6973 7.34594C17.6292 7.58972 17.4907 7.80799 17.2992 7.9734L17.3039 7.97262Z" fill="#EC1E24"/>
    </svg>

    let ordersList = [
        {
          productName: "Cement making filtration by removing dustings",
          lastReturnDate: "28-May-2024",
          productImg: cement,
          dileverdDate: "20-May-2024",
          price : 500
        },
        // {
        //     productName : 'Cement making filtration by removing dustings',
        //     lastReturnDate : '28-May-2024',
        //     productImg : bricks,
        //     dileverdDate : '20-May-2024'
    
        // },
    ]
  return (
    <>
        <h2 className="py-3 font-bold text-lg">Track Order</h2>

        <ul className="overflow-auto h-[30rem]">
        {ordersList.map((order, index) => {
          return (
            <div
              key={index}
              className="products w-full shadow-md p-3 rounded-md"
            >
              <h2 className="font-bold">Delivered {order.dileverdDate}</h2>
              <p className="text-sm text-[#999999] py-1">
                Package was handed to resident.
              </p>

              <div className="productDetails border-2 border-[#E9E9E9] grid grid-cols-12 p-2 items-start">
                <div className="ProductImg border-r-2 border-[#e9e9e9] col-span-2">
                  <img src={order.productImg} alt="" className="h-36 object-contain" />
                </div>

                <div className="productDetails col-span-10 pl-3 flex justify-between h-auto ">

                    <div className='w-[60%]'>
                    <h1 className="pb-2 font-bold text-[#253D4E]">{order.productName}</h1>

                    <p className="text-xs text-[#999999]">Return window closed on {order.lastReturnDate}</p>
                    </div>

                    <div className='flex flex-col text-[#EC1E24] gap-1'>
                        <div className='flex items-center self-end'>
                    <FaIndianRupeeSign />
                    <p className='font-semibold'>{order.price}</p>
                    </div>

                    <div className='flex gap-1 items-center'>
                        <span className=''>{starSvg}</span>
                        <p className='text-[#999999] text-sm'>Rate & Review Product</p>
                    </div>

                    <div>

                    </div>
                    </div>
                    

                </div>

               
              </div>
            </div>
          );
        })}
        </ul>


    </>
  )
}
