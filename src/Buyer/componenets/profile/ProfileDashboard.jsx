import React, { useEffect } from "react";
import api from "../../../services/api";

export default function ProfileDashboard(userDetails) {



  

  return (
    <>
    
      <div className="dashboard py-3 ">
        <h2 className="text-xl capitalize">Hello, {userDetails?.userDetails?.first_name} </h2>
        <p className="text-xs my-2 text-[#475156]">
          From your account dashboard. you can easily check & view your <span className="text-[#EC1E24]">Recent
          Orders</span>, manage your <span className="text-[#EC1E24]">Shipping and Billing Addresses</span> and edit your
          <span className="text-[#EC1E24]"> Password</span> and <span className="text-[#EC1E24]">Account Details</span>.
        </p>

        <div className="userDetails grid grid-cols-12 gap-3 py-5 ">
            <div className="lg:col-span-6 col-span-12 border-2 border-[#E4E7E9] rounded-t-md">
                <div className="flex items-center ">
                    <p className="bg-[#EC1E24] text-white py-3 text-xs px-3 tracking-wider w-full rounded-t-md">ACCOUNT INFO</p>
                </div>
                < div className="profile flex gap-2 items-center py-3 px-3">
                    <div className="profilepic">
                        <img src={userDetails.userDetails.image} alt="" className="h-12 w-12 rounded-full object-cover"/>
                    </div>
                    <div className="profileDetails flex flex-col gap-1">
                        <p className="capitalize text-sm">{userDetails?.userDetails?.first_name} {userDetails?.userDetails?.last_name}</p>
                        <p className="text-xs text-[#5F6C72]">{userDetails?.userDetails?.user?.address}</p>
                    </div>
                    

                </div>

                {/* Contact Details */}

                <div className="contactDetails px-3 flex flex-col gap-3">
                        <div className="email grid grid-cols-12">
                            <p className="text-sm col-span-4 md:col-span-5">Email</p>
                            <p className="col-span-1">:</p>
                            <p className="text-sm text-[#5F6C72] col-span-7 md:col-span-6 sm:break-words">{userDetails?.userDetails?.email}</p>
                        </div>

                        <div className="secondaryEmail grid grid-cols-12">
                            <p className="text-sm col-span-4 md:col-span-5">Date Of Birth</p>
                            <p className="col-span-1">:</p>
                            <p className="text-sm text-[#5F6C72] col-span-7 md:col-span-6 sm:break-words">{userDetails?.userDetails?.dob}</p>
                        </div>

                        <div className="phone  grid grid-cols-12">
                            <p className="text-sm col-span-4 md:col-span-5">Phone</p>
                            <p className="col-span-1">:</p>
                            <p className="text-sm text-[#5F6C72] col-span-7 md:col-span-6">{userDetails?.userDetails?.phone}</p>
                        </div>


                    </div>

                    <div className="editAcc px-3 py-3">

                        <button className="px-3 py-2.5 border-3 border-[#EC1E24] text-sm text-[#EC1E24] font-bold hover:text-white hover:bg-[#ec1e24] duration-500">EDIT ACCOUNT</button>


                    </div>


            </div>
            
            <div className="lg:col-span-6 col-span-12 border-2 border-[#E4E7E9] rounded-t-md">
                <div className="flex items-center ">
                    <p className="bg-[#EC1E24] text-white py-3 text-xs px-3 tracking-wider w-full rounded-t-md">BILLING ADDRESS</p>
                </div>


                {/* Billing Address */}
                
                <div className="billingAdrs px-3 py-2">
                    <div>
                    <p className="capitalize text-sm pt-3 pb-2">{userDetails?.userDetails?.first_name} {userDetails?.userDetails?.last_name}</p>
                    <p className="text-xs text-[#5F6C72]">{userDetails?.userDetails?.user?.billingAddress}</p>
                    </div>


                    <div className="pt-4 text-sm flex flex-col gap-3">
                    <div className="phone grid grid-cols-12">
                            <p className="text-sm col-span-4 md:col-span-5">Phone</p>
                            <p className="col-span-1">:</p>
                            <p className="text-sm text-[#5F6C72] col-span-7 md:col-span-6 sm:break-words">{userDetails?.userDetails?.phone}</p>
                        </div>

                        <div className="email  grid grid-cols-12">
                            <p className="text-sm col-span-4 md:col-span-5">Email</p>
                            <p className=" col-span-1">:</p>
                            <p className="text-sm text-[#5F6C72] col-span-7 md:col-span-6 sm:break-words">{userDetails?.userDetails?.email}</p>
                        </div>
                        </div>

                    <div className="editAddress pt-[2rem]">
                    <button className="px-3 py-2.5 border-3 border-[#EC1E24] text-sm text-[#EC1E24] font-bold hover:text-white hover:bg-[#ec1e24] duration-500">EDIT ADDRESS</button>
                    </div>
                </div>


            </div>


        </div>
      </div>
    </>
  );
}
