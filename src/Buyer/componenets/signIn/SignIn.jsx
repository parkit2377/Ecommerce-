import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./signIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/newImages/loginImage.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import api from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { authUserLogin } from "../../slices/LoginSlice";
import usePreviousPath from "../../../Admin/hooks/UsePreviousPath";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { show } from "../../slices/NotificationSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [passHidden, setPassHidden] = useState(true);
  let location = useLocation()
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [errorMsg , setErrorMsg] = useState();
  
  let prevPath = location.state?.previousPath

  console.log(prevPath);
  let itemsInCart = useSelector(state => state.cartItems.itemInCart)
  console.log(itemsInCart);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    try {
      setFormData((prev) => {
        const updatedFormData = { ...prev, ...data };
        loginUser(updatedFormData); // Call registerUser with updated form data
        return updatedFormData; // Return updated state
      });
      reset();
    } catch (error) {
      console.log(error);
    }
    
  };



  console.log(itemsInCart?.length);
  let loginUser = async (formData) => {
    try {
      let response = await api.post("/web/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(response.data.token) {
        localStorage.setItem('authToken' , JSON.stringify(response.data))
        dispatch(show({type : 'success' , message : 'Logged In Successfully'}))
        if (prevPath === '/sign-in' || prevPath ==='/sign-up') navigate('/')
       else  navigate(prevPath)
  }
  if(response.data.message){
    dispatch(show({type : 'error' , message : response.data?.message}))
  }
    } catch (error) {
      dispatch(show({type : 'error' , message : error.response?.data?.message}))
      console.log(error);
    }
  };



  return (
    <>
      {/* <div className="topContainer  flex justify-center items-center overflow-auto h-screen">
        <div className="containerBox m-auto ">
          <div className="images  h-full w-3/6 flex flex-col justify-center items-center">
            <Link to={'/'}>
            <img
              src="src/assets/images/big-logo.png"
              alt=""
              className="anudaLogo "
            />
             </Link> 
            <img
              src="src/assets/images/Mobile-login.jpg"
              alt=""
              className="mobileImg mt-6"
            />
          </div>

          <div className="signupForm h-full w-3/6 flex  items-center flex-col px-4">
            <h1 className="text-3xl self-start mb-3 font-semibold">Sign In</h1>

            <form className="w-full" onSubmit={handleSubmit(signIn)}>
              <div className="mb-3">
                <input
                  type="text"
                  name=""
                  id=""
                  {...register("emailOrMob", {
                     pattern: {value: /^\d{10}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:'Enter a valid email or number'}
                })}
                  placeholder="Email Or Mobile Number"
                  className="form-control "
                />

                {errors.emailOrMob && <p className="text-red-500 mt-1 mx-1">{errors.emailOrMob?.message}</p>}

              </div>

              <button
                type="submit"
                className="bg-red-500 rounded-3xl transition ease-in-out delay-100  hover:bg-black  text-white w-full h-10"
              >
                Sign In
              </button>
            </form>
            <div className="termsAndCondition self-start mt-5 font-medium">
              <p className="text-sm">
                By creating an account or logging in, you agree
              </p>
              <p className="text-sm">
                to Anuda Mart{" "}
                <a className="text-red-500 cursor-pointer">Conditions of Use</a>{" "}
                and <a className="text-red-500 cursor-pointer">Privacy</a>
              </p>
              <p className="text-sm">
                <a className="text-red-500 cursor-pointer">Policy.</a>
              </p>
            </div>

            <div className="createAnudaMart mt-3 flex flex-col w-full justify-center items-center">

              <div className="container">
                <div className="line"></div>
                <div className="text">New To Anuda Mart</div>
                <div className="line"></div>
              </div>
              <Link to={'/sign-up'} className="w-full">
              <button  className="rounded-3xl mt-3 transition ease-in-out delay-100 bg-black font-bold text-white w-full h-10">
                Create Your Anuda Mart Account
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}


    

      <div className="loginWrapper min-h-screen flex items-center justify-center bg-[#F5F5F5]">
        
        <div className="loginForm w-[70vw] min-h-[70vh] grid grid-cols-12 bg-white rounded-md">
          <div className="loginImg h-full  col-span-6 sm:flex justify-center items-center hidden ">
            <img src={loginImage} alt="" className="h-[80%]" />
          </div>

          <div className="login md:col-span-6 col-span-12  px-5 flex  flex-col justify-center">
            <h1 className="text-2xl text-[#EC1E24] font-semibold pb-3">
              Welcome Back
            </h1>
            <p className="text-xs text-[#aaaaaa] tracking-widest">
              LOGIN TO CONTINUE
            </p>
            <div className="py-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="email flex flex-col gap-2 py-3">
                  <label htmlFor="emailAdrs" className="text-sm">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name=""
                    {...register("email", {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    id="emailAdrs"
                    className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 mx-1 mt-1">
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <div className="password flex flex-col gap-2 py-3">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <div className="px-2 border-1 border-[#aaaaaa] rounded-md pl-2 h-10 flex items-center">
                    <input
                      type={passHidden ? "password" : "text"}
                      name=""
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      id="password"
                      className="outline-none w-full"
                      placeholder="Password"
                    />

                    <div onClick={() => setPassHidden((prev) => !prev)}>
                      {passHidden ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 mx-1 mt-1">
                      {errors.password?.message}
                    </p>
                  )}
                  <div className="forgetPass cursor-pointer">
                    <p className="text-xs underline text-[#999999]">
                      Forget Password ?
                    </p>
                  </div>

                  <div className="loginBtn py-2.5">
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#EC1E24] text-white font-semibold rounded-md w-40 "
                    >
                      LOGIN
                    </button>
                  </div>

                  <div className="socialLoginLinks flex items-center gap-3 py-2 ml-2">
                    <button className="text-white bg-[#EC1E24] p-2 rounded-full">
                      <FaGoogle />
                    </button>
                    <button className="text-white bg-[#EC1E24] p-2 rounded-full">
                      <FaFacebookF />
                    </button>
                  </div>

                  <div className="newUser">
                    <p className="text-xs tracking-wider text-[#aaaaaa]">
                      NEW USER ? <Link to={'/sign-up'}><span className="text-[#ec1e24]">SIGN UP</span></Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
