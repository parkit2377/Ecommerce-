import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import materialForConstruction from "../../assets/images/newImages/materialForConstruction.png";
import serviceEasyReturn from "../../assets/images/newImages/serviceEasyReturn.png";
import serviceGreatDeals from "../../assets/images/newImages/serviceGreatDeals.png";
import serviceOffers from "../../assets/images/newImages/serviceOffers.png";
import serviceOnTimeDelivery from "../../assets/images/newImages/serviceOnTimeDelivery.png";
import servicePayOnDelivery from "../../assets/images/newImages/servicePayOnDelivery.png";

export default function SubscribeAnudaMart() {
  let services = [
    {
      img: serviceOffers,
      title: "Easy Return",
      description: "Orders or more",
    },
    {
      img: serviceEasyReturn,
      title: "Easy Return",
      description: "Orders or more",
    },
    {
      img: serviceGreatDeals,
      title: "Easy Return",
      description: "Orders or more",
    },

    {
      img: serviceOnTimeDelivery,
      title: "Easy Return",
      description: "Orders or more",
    },
    {
      img: servicePayOnDelivery,
      title: "Easy Return",
      description: "Orders or more",
    },
  ];
  return (
    <>
      <div>
        <div className="subscribeContainer bg-[#D8F0E4] h-80 grid grid-cols-12  overflow-hidden rounded-xl">
          <div className="subscribe md:col-span-6 col-span-12 pt-5 md:px-5 mx-6  ">
            <h1 className="md:text-4xl font-bold mb-4">
              Stay home & get your daily needs from out shop
            </h1>

            <p className="text-[#7e7e7e] ">
              Start Your Daily Shopping with{" "}
              <span className="text-[#ec1e24]">Anuda Mart</span>
            </p>

            <div className="searchbox  ">
              <div className="searboxWrapper flex items-center bg-white   h-[80%] rounded-3xl w-[70%] mt-10">
                <div className="mx-2 text-xl text-[#aaaaaa]">
                  <CiLocationArrow1 />
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  className=" outline-none w-full placeholder:text-[#aaaaaa]"
                  placeholder="Your Email Address"
                />
                <button className=" bg-[#ec1e24] text-white py-2.5 px-4  rounded-3xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="images md:col-span-6 col-span-12 place-items-center flex items-center justify-center relative">
            <div className="imgWrapper  absolute ">
              <img src={materialForConstruction} alt="" className="  " />
            </div>
          </div>
        </div>
        <div className="servicesOffered ">
          <div className="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  py-4 gap-3">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#F4F6FA] rounded-lg flex justify-center gap-4 items-center py-2 sm:flex-row"
                >
                  <div className="image">
                    <img src={item.img} alt="" />
                  </div>

                  <div>
                    <p className="text-lg">{item.title}</p>
                    <p className="text-xs text-[#aaaaaa]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
