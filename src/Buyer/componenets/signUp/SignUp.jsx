import React, { useState } from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../../assets/images/newImages/register.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import api from "../../../services/api";
import axios from "axios";


export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [formData, setFormData] = useState({
    first_name : '',
    last_name : '',
    email : '',
    password : '',
    confirm_password : ''
  });

  const navigate = useNavigate();

  const [passHidden, setPassHidden] = useState({
    password: true,
    confirmPassword: true,
  });

  let onSubmit = (data) => {
    console.log(data);
    setFormData(prev => {
      const updatedFormData = { ...prev, ...data };
      registerUser(updatedFormData);  // Call registerUser with updated form data
      return updatedFormData;  // Return updated state
  });
    reset();
  };

  const togglePasswordVisibility = (field) => {
    setPassHidden((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };


  const registerUser = async (formData) =>{
    console.log(formData);
      try {
        let response = await api.post('/web/user/register' , formData,{
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        
        console.log(response);
        
        navigate('/sign-in')

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <div className="loginWrapper min-h-screen flex items-center justify-center bg-[#F5F5F5]">
        <div className="loginForm w-[80vw] min-h-[80vh] grid grid-cols-12 bg-white rounded-md items-start">
          <div className="loginImg h-full col-span-6 sm:flex justify-center items-center mx-4 hidden">
            <img src={signUpImg} alt="" className="md:h-[70%] h-[50%]" />
          </div>

          <div className="login col-span-12 sm:col-span-6 px-4 flex flex-col justify-center h-full py-4">
            <h1 className="text-2xl text-[#EC1E24] font-semibold pb-2">Register</h1>
            <p className="text-xs text-[#aaaaaa] tracking-widest">JOIN TO US</p>
            <div className="py-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 gap-3">
                <div className="firstName flex flex-col gap-2 pb-2 col-span-6">
                  <label htmlFor="firstName" className="text-sm">Your Name</label>
                  <input
                    type="text"
                    name=""
                    {...register("first_name", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    id="firstName"
                    className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10"
                    placeholder="First Name"
                  />
                  {errors.first_name && (
                    <p className="text-red-500 mx-1 mt-1">{errors.first_name?.message}</p>
                  )}
                </div>


                <div className="lastName flex flex-col gap-2 pb-2 col-span-6">
                  <label htmlFor="lastName" className="text-sm">Your Name</label>
                  <input
                    type="text"
                    name=""
                    {...register("last_name", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    id="lastName"
                    className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10"
                    placeholder="Last Name"
                  />
                  {errors.last_name && (
                    <p className="text-red-500 mx-1 mt-1">{errors.last_name?.message}</p>
                  )}
                </div>
                </div>

                <div className="email flex flex-col gap-2 py-2">
                  <label htmlFor="emailAdrs" className="text-sm">Email Address</label>
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
                    <p className="text-red-500 mx-1 mt-1">{errors.email?.message}</p>
                  )}
                </div>

                <div className="password flex flex-col gap-2 py-2">
                  <label htmlFor="password" className="text-sm">Password</label>
                  <div>
                    <div className="px-2 border-1 border-[#aaaaaa] rounded-md pl-2 h-10 flex items-center">
                      <input
                        type={passHidden.password ? "password" : "text"}
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
                      <div onClick={() => togglePasswordVisibility("password")}>
                        {passHidden.password ? <FaRegEyeSlash /> : <FaRegEye />}
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 mx-1 mt-1">{errors.password?.message}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <label htmlFor="password" className="text-sm">Confirm Password</label>
                  <div className="px-2 border-1 border-[#aaaaaa] rounded-md pl-2 h-10 flex items-center">
                    <input
                      type={passHidden.confirmPassword ? "password" : "text"}
                      name=""
                      {...register("confirm_password", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      id="confirmPassword"
                      className="outline-none w-full"
                      placeholder="Confirm Password"
                    />
                    <div onClick={() => togglePasswordVisibility("confirmPassword")}>
                      {passHidden.confirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 mx-1 mt-1">{errors.confirmPassword?.message}</p>
                  )}
                </div>

                <div className="loginBtn py-3">
                  <button type="submit" className="px-3 py-2 bg-[#EC1E24] text-white font-semibold rounded-md w-40">
                    REGISTER
                  </button>
                </div>

                <div className="socialLoginLinks flex items-center gap-3 py-2 ml-2">
                    <button className="text-white bg-[#EC1E24] p-2 rounded-full"><FaGoogle /></button>
                    <button className="text-white bg-[#EC1E24] p-2 rounded-full"><FaFacebookF /></button>
                  </div>

                <div className="newUser pt-2">
                  <p className="text-xs tracking-wider text-[#aaaaaa]">
                    ALREADY USER ? <Link to={'/sign-in'}><span className="text-[#ec1e24]">LOGIN</span></Link> 
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
