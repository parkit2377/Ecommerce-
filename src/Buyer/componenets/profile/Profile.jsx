import React, { useEffect, useState } from "react";
import defaultImg from "../../../assets/images/newImages/defalutProfileImg.png";
import AccountInfo from "./AccountInfo";
import ProfileDashboard from "./ProfileDashboard";
import MyOrders from "./MyOrders";
import TrackOrder from "./TrackOrder";
import logoutSvg from "../../../assets/images/newImages/logoutSvg.svg";
import api from "../../../services/api";
import { IoCamera } from "react-icons/io5";
import ChangePassword from "./ChangePassword";
import Vendor from "../signUp/vendor/Vendor";
import VendorAccountInfo from "./vendor/VendorAccountInfo";
import { useDispatch } from "react-redux";
import { authUserLogout } from "../../slices/LoginSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";
import { show } from "../../slices/NotificationSlice";

export default function Profile() {
  const [toggleSections, setToggleSections] = useState("accountInfo");
  const [isUser, setIsUser] = useState(true);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  const [file, setFile] = useState();


  // api call to get user details 
  useEffect(() => {
    const userDetail = async () => {
      let token = JSON.parse(localStorage.getItem("authToken"))?.token;
      if (token) {
        try {
          let response = await api.post("/web/user/profile", { token: token });
          console.log(response.data);
          setUserDetails(response.data?.user);
          updateUserDetails('token' , token)
          setFile(response.data.user.image)
        } catch (error) {
          console.log(error);
        }
      }
    };

    userDetail();
  }, []);


    // update userDetail fields and add other fields 

  const updateUserDetails = (field, value) => {
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [field]: value,
    }));
  };



  // toggle between different profile sections 
  
  let toggleClick = (param) => {
    setToggleSections(param);
  };


  let logoutUser = async () => {
    let token = JSON.parse(localStorage.getItem('authToken'))?.token
    if (token){
      try {
        let response = await api.post("/web/user/logout" , {} ,{
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        }
        )
      
        dispatch(authUserLogout())
        console.log(response);
        localStorage.removeItem("authToken")
        dispatch(show({type : 'success' , message : 'Logged out successfully'}))
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    }
  }


  let changeRole = async() => {
    setIsUser((prev) => !prev)
    let token = JSON.parse(localStorage.getItem('authToken'))?.token

    if (token) {
      try {
        let response = await api.post("web/user/switch-account" , {
          token : token,
          switch_account : 'v'
        })
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

  }



  let handleProfilePicChange = (e) => {
    updateUserDetails('image' , e.target.files[0])
  
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
    
      <div className="min-h-screen  bg-[#FAFAFA] p-3 md:flex justify-center md:items-center">
      {!userDetails ? <Loader/> :  
        <div className="profile grid grid-cols-12 gap-3 h-auto md:min-h-[75vh] md:w-[70vw]  items-start mb-5 md:my-0">
          <div className=" profileDetailOptions md:col-span-3 col-span-12 ">
            <div className="  bg-white rounded-lg md:p-3 flex  md:flex-col items-center justify-between px-3">
              <div className="profilePic flex justify-center relative">
                <img
                
                  src={file ? file : defaultImg}
                  alt=""
                  className="  object-cover  md:w-60 md:h-60 h-20 w-20 rounded-full"
                />
                <div className="changeImg absolute bottom-0 right-0 lg:text-2xl bg-white p-1 flex items-center rounded-full lg:right-10 lg:bottom-4">
                  <label htmlFor="profilePic">
                    <IoCamera />
                  </label>
                  <input
                    type="file"
                    name=""
                    id="profilePic"
                    className="hidden"
                    onChange={handleProfilePicChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="profileDetails py-4 text-center">
                  <h4 className="md:text-lg font-semibold">
                    {userDetails?.user?.first_name}{" "}
                    {userDetails?.user?.last_name}
                  </h4>

                  <p className="text-[#666666] text-xs py-2">
                    {userDetails?.user?.email}
                  </p>
                </div>

                <div
                  className={`switchRole h-10 sm:h-12 md:y-0 my-2  flex items-center w-36 sm:w-48 text-xs sm:text-sm border-2 border-red-500 rounded-lg cursor-pointer`}
                  onClick={changeRole}
                >
                  <div
                    className={`toggleBtn w-[70%] bg-red-500 h-full flex items-center text-white  duration-500 ${
                      isUser ? "" : "translate-x-[43%]"
                    } rounded-md justify-center`}
                  >
                    Switch To {isUser ? "Seller" : "User"}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          
            <div className="detailOptions flex md:flex-col gap-1 text-sm flex-wrap sm:flex-nowrap bg-white md:py-3 md:rounded-lg">
              <button
                onClick={() => toggleClick("dashboard")}
                className={`grid grid-cols-12  md:text-sm lg:text-md border-[#666666]  gap-3 px-3 ${
                  toggleSections === "dashboard" ? "bg-[#EC1E24]" : "bg-white"
                } ${
                  toggleSections === "dashboard"
                    ? "text-white"
                    : "text-[#5F6C72]"
                }  py-2 w-full `}
              >
                <span className="col-span-2 place-self-end mb-0.5 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
                      fill="#7E7E7E"
                    />
                    <path
                      d="M3 16.5L12 21.75L21 16.5"
                      stroke={`${
                        toggleSections === "dashboard" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12L12 17.25L21 12"
                      stroke={`${
                        toggleSections === "dashboard" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z"
                      stroke={`${
                        toggleSections === "dashboard" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="col-span-10 place-self-start ">Dashboard</span>
              </button>

              <button
                onClick={() => toggleClick("accountInfo")}
                className={`grid grid-cols-12  md:text-sm lg:text-md border-[#666666] px-3 gap-3 ${
                  toggleSections === "accountInfo" ? "bg-[#EC1E24]" : "bg-white"
                } ${
                  toggleSections === "accountInfo"
                    ? "text-white"
                    : "text-[#5F6C72]"
                }  py-2 w-full `}
              >
                <span className="col-span-2 place-self-end mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 21C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5C21 21 19.5 21 19.5 21H4.5ZM12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12Z"
                      fill={`${
                        toggleSections === "accountInfo" ? "white" : "#5F6C72"
                      }`}
                    />
                  </svg>
                </span>
                <span className="col-span-10 place-self-start ">
                  Account Setting
                </span>
              </button>


              <button
                onClick={() => toggleClick("changePassword")}
                className={`grid grid-cols-12  md:text-sm lg:text-md border-[#666666] px-3 gap-3 ${
                  toggleSections === "changePassword" ? "bg-[#EC1E24]" : "bg-white"
                } ${
                  toggleSections === "changePassword"
                    ? "text-white"
                    : "text-[#5F6C72]"
                }  py-2 w-full `}
              >
                <span className="col-span-2 place-self-end mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 21C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5C21 21 19.5 21 19.5 21H4.5ZM12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12Z"
                      fill={`${
                        toggleSections === "changePassword" ? "white" : "#5F6C72"
                      }`}
                    />
                  </svg>
                </span>
                <span className="col-span-10 place-self-start ">
                  Change Password
                </span>
              </button>

              <button
                onClick={() => toggleClick("myOrder")}
                className={`grid grid-cols-12 md:text-sm lg:text-md px-3 gap-3 ${
                  toggleSections === "myOrder" ? "bg-[#EC1E24]" : "bg-white"
                } ${
                  toggleSections === "myOrder" ? "text-white" : "text-[#5F6C72]"
                }  py-2 w-full `}
              >
                <span className="col-span-2 place-self-end mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 13.0875V19.5C4.5 19.6989 4.57902 19.8897 4.71967 20.0304C4.86032 20.171 5.05109 20.25 5.25 20.25H18.75C18.9489 20.25 19.1397 20.171 19.2803 20.0304C19.421 19.8897 19.5 19.6989 19.5 19.5V13.0875"
                      stroke={`${
                        toggleSections === "myOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.0625 3.75H18.9375C19.1002 3.75134 19.2582 3.8049 19.3881 3.9028C19.5181 4.00069 19.6132 4.13774 19.6594 4.29375L21 9H3L4.34062 4.29375C4.38682 4.13774 4.4819 4.00069 4.61187 3.9028C4.74183 3.8049 4.8998 3.75134 5.0625 3.75V3.75Z"
                      stroke={`${
                        toggleSections === "myOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9V10.5C9 11.2956 8.68393 12.0587 8.12132 12.6213C7.55871 13.1839 6.79565 13.5 6 13.5C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2956 3 10.5V9"
                      stroke={`${
                        toggleSections === "myOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9V10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5V9"
                      stroke={`${
                        toggleSections === "myOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5V9"
                      stroke={`${
                        toggleSections === "myOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="col-span-10 place-self-start ">My order</span>
              </button>
              <button
                onClick={() => toggleClick("trackOrder")}
                className={`grid grid-cols-12 md:text-sm lg:text-md px-3 gap-3 ${
                  toggleSections === "trackOrder" ? "bg-[#EC1E24]" : "bg-white"
                } ${
                  toggleSections === "trackOrder"
                    ? "text-white"
                    : "text-[#5F6C72]"
                }  py-2 w-full `}
              >
                <span className="col-span-2 place-self-end mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.25 21.75H18.75"
                      stroke={`${
                        toggleSections === "trackOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                      stroke={`${
                        toggleSections === "trackOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                      stroke={`${
                        toggleSections === "trackOrder" ? "white" : "#5F6C72"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="col-span-10 place-self-start ">
                  Track Order
                </span>
                
              </button>
              <button
                onClick={logoutUser}
                className={`grid grid-cols-12 md:text-sm lg:text-md px-3 gap-3 ${
                  toggleSections === "logOut" ? "bg-[#EC1E24]" : "bg-white"
                } ${
                  toggleSections === "logOut" ? "text-white" : "text-[#5F6C72]"
                }  py-2 w-full `}
              >
                <span className="col-span-2 place-self-end mb-1">
                  <img src={logoutSvg} alt="" />
                </span>
                <span className="col-span-10 place-self-start text-[#EC1E24]">
                  Log Out
                </span>
              </button>
            </div>
            
            
              
            
          </div>
          {isUser ?
          <div className="optionDetails col-span-12 md:col-span-9 p-3 bg-white rounded-md">
            {toggleSections === "dashboard" && (
              <ProfileDashboard userDetails={userDetails} updateUserDetails = {updateUserDetails}/>
            )}
            {toggleSections === "accountInfo" && (
              <AccountInfo userDetails={userDetails} updateUserDetails = {updateUserDetails}/>
            )}
            {toggleSections === "changePassword" && (
              <ChangePassword userDetails={userDetails} setToggleSections = {setToggleSections}/>
            )}

            {toggleSections === "myOrder" && <MyOrders />}
            {toggleSections === "trackOrder" && <TrackOrder />}
          </div>
              : 
              <div className="optionDetails col-span-12 md:col-span-9 p-3 bg-white rounded-md">
              <VendorAccountInfo userDetails={userDetails}/>
              </div>
              }
        </div>
      }
      </div>
    </>
  );
}
