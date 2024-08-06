import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import ChangePassword from "./ChangePassword";
import { useDispatch } from "react-redux";
import { show } from "../../slices/NotificationSlice";


export default function AccountInfo(userDetails) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [notification , setNotification] = useState()


  let dispatch = useDispatch();
  // const [changePassword , setChangePassword] = useState(false)
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    userDetails.updateUserDetails(name, value);
  };

  useEffect(()=>{
    console.log(userDetails.userDetails);
  },[])



  let handleUpdateProfile = async () => {
    // let token = JSON.parse(localStorage.getItem("authToken"))?.token;
    // console.log(token );
    // console.log(userDetails);
    // userDetails.updateUserDetails('token' , token)
      try {

       
    console.log(userDetails.userDetails);
        
        console.log(userDetails.userDetails);
        let response = await api.post('web/user/update-profile', userDetails.userDetails , {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        dispatch(show({type : 'success' , message : 'Details updated Successfully...'}))

        console.log(response);
      } catch (error) {
        dispatch(show({type : 'error' , message : 'There was some issue updating your details'}))

        throw(error);
      }
  }

  return (
    <>
    <div>
    
      {/* {!changePassword ? <> */}


      <h1 className="text-[#EC1E24] font-semibold text-2xl">Account Info</h1><div className="form py-5 flex justify-center ">
          <form className="w-full" onSubmit={handleSubmit(handleUpdateProfile)}>
            <div className="name  gap-2 py-2 grid-cols-12 ">
              <div className="firstName flex flex-col w-full gap-2 col-span-12 md:col-span-6">
                <label htmlFor="firstName" className="text-sm">
                  First Name <span className="text-[#EC1E24]">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="firstName"
                  {...register("first_name")}
                  // value={userDetails.userDetails?.first_name}
                  defaultValue={userDetails.userDetails?.first_name || ""}
                  onChange={handleFormChange}
                  className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2 capitalize"
                  placeholder="First Name" />
              </div>

              <div className="lastName flex flex-col w-full gap-2 col-span-12 md:col-span-6 pt-2 md:pt-0">
                <label htmlFor="lastName" className="text-sm">
                  Last Name <span className="text-[#EC1E24]">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="lastName"
                  {...register("last_name")}
                  // value={userDetails.userDetails?.last_name}
                  defaultValue={userDetails.userDetails?.last_name || ""}
                  onChange={handleFormChange}
                  className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2 capitalize"
                  placeholder="Last Name" />
              </div>
            </div>

            <div className="email py-2">
              <div className="email flex flex-col w-full gap-2">
                <label htmlFor="email" className="text-sm">
                  Email Address <span className="text-[#EC1E24]">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  {...register("email")}
                  // value={userDetails.userDetails?.email}
                  defaultValue={userDetails.userDetails?.email || ""}
                  onChange={handleFormChange}
                  id="lastName"
                  className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                  placeholder="Email" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3">
              <div className="phone py-2 col-span-6">
                <div className="phone flex flex-col w-full gap-2">
                  <label htmlFor="phone" className="text-sm">
                    Phone Number{" "}
                    <span className="text-sm text-[#666666]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    {...register("phone")}
                    // value={userDetails.userDetails?.phone}
                    defaultValue={userDetails.userDetails?.phone || ""}
                    onChange={handleFormChange}
                    id="phone"
                    className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                    placeholder="Phone" />
                </div>
              </div>

              <div className="dob py-2 col-span-6">
                <div className="dob flex flex-col w-full gap-2">
                  <label htmlFor="dob" className="text-sm">
                    Date Of Birth{" "}
                    <span className="text-sm text-[#666666]">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    name=""
                    // value={userDetails.userDetails?.dob}
                    defaultValue={userDetails.userDetails?.dob || ""}
                    {...register("dob")}

                    onChange={handleFormChange}
                    id="phone"
                    className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md px-2"
                    placeholder="Phone" />
                </div>
              </div>
            </div>

            {/* <div className="changePassword">
              <button type="button" className="text-sm hover:underline pl-2 text-[#7e7e7e]" onClick={()=>setChangePassword(true)}>Change Password</button>
            </div> */}

            <div className="saveBtn py-4">
              <button type="submit" className="px-5 py-2 bg-[#EC1E24] rounded-md text-white ">
                Save
              </button>
            </div>
          </form>
        </div>
        {/* </>  */}
      {/* // : <ChangePassword setChangePassword={setChangePassword} />} */}

</div>
    </>
  );
}
