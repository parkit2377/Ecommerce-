import React from "react";
import cement from "../../../assets/images/newImages/ultratechCement.png";
import bricks from '../../../assets/images/newImages/bricks.png'
export default function MyOrders() {
  let ordersList = [
    {
      productName: "Cement making filtration by removing dustings",
      lastReturnDate: "28-May-2024",
      productImg: cement,
      dileverdDate: "20-May-2024",
    },
    {
        productName : 'Cement making filtration by removing dustings',
        lastReturnDate : '28-May-2024',
        productImg : bricks,
        dileverdDate : '20-May-2024'

    },
    {
        productName : 'Cement making filtration by removing dustings',
        lastReturnDate : '28-May-2024',
        productImg : bricks,
        dileverdDate : '20-May-2024'

    },
    {
        productName : 'Cement making filtration by removing dustings',
        lastReturnDate : '28-May-2024',
        productImg : bricks,
        dileverdDate : '20-May-2024'

    },
  ];

  return (
    <>
      <h2 className="py-3 font-bold text-lg">Orders</h2>

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

              <div className="productDetails border-2 border-[#E9E9E9] grid grid-cols-12 p-2">
                <div className="ProductImg border-r-2 border-[#e9e9e9] col-span-2">
                  <img src={order.productImg} alt="" className="h-36 object-contain" />
                </div>

                <div className="productDetails col-span-6 pl-3 flex flex-col">
                    <h1 className="pb-2 font-bold text-[#253D4E]">{order.productName}</h1>

                    <p className="text-xs text-[#999999]">Return window closed on {order.lastReturnDate}</p>

                    <div className="returnBtns pt-5 flex gap-4 ">
                        <button className="px-3 py-2 text-white bg-[#EC1E24] text-xs rounded-lg">
                            Buy it again
                        </button>
                        <button className="px-3 py-2 text-[#253D4E] bg-[#e9e9e9] text-xs rounded-lg ">
                            View your item
                        </button>
                    </div>

                </div>

                <div className="getSupport col-span-4 flex justify-end items-center">
                    <div className="supportBtns flex flex-col gap-3 items-center justify-end">
                        <button className="w-40 py-2 bg-[#EC1E24] text-white rounded-lg text-xs">
                            Get product support
                        </button>

                        <button className="w-40 py-2 bg-[#e9e9e9] text-[#253D4E] rounded-lg text-xs">
                            Write a product review
                        </button>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}
