import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import api from '../../../services/api';
import { useDispatch } from 'react-redux';

export default function ChangePassword(setToggleSections) {


    let dispatch = useDispatch();
    const [error , setError] = useState('')
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      

      const [passHidden, setPassHidden] = useState({
        password: true,
        new_password: true,
        confirm_new_password : true,
      });

      const togglePasswordVisibility = (field) => {
        setPassHidden((prevState) => ({
          ...prevState,
          [field]: !prevState[field],
        }));
      };



    // User Password Change Api call   
    let onSubmit = (data)=> {
        console.log(data);
        if(data.new_password !== data.confirm_new_password){
            setError("Password does not match")

            setTimeout(()=>{
                setError("")
            },3000)
        }
        else{
            let token = JSON.parse(localStorage.getItem("authToken")).token
            let changeRequestData = {
                'password' : data.curr_password,
                "new_password" : data.new_password
            }

            console.log(changeRequestData);
            let passwordChange = async () => {
                try {
                    
                    let response = await api.post('web/user/change-password' , changeRequestData , {
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded',
                            'Authorization' : `Bearer ${token}`
                        }
                    })
                    console.log(response);
                    // alert("Password Changed SuccessFully")
                    
                    setToggleSections.setToggleSections('dashboard')

                } catch (error) {
                    console.log(error);
                    alert(error.response.data.message)
                }
            }

            passwordChange()
            
        }
        console.log(error);
    }


  return (
    <>
      <h2 className='text-[#EC1E24] font-semibold text-2xl'>Change Password</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="passwordFields py-4 flex flex-col gap-3">


      <div className="pt-2 flex flex-col gap-2">
                  <label htmlFor="oldPassword" className="text-sm">Password</label>
                  <div className="px-2 border-1 border-[#aaaaaa] rounded-md pl-2 h-10 flex items-center">
                    <input
                      type={passHidden.password ? "password" : "text"}
                      name=""
                      {...register("curr_password", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      id="oldPassword"
                      className="outline-none w-full"
                      placeholder="Password"
                    />
                    <div onClick={() => togglePasswordVisibility("password")}>
                      {passHidden.password ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  {errors.curr_password && (
                    <p className="text-red-500 mx-1 mt-1">{errors.curr_password?.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <label htmlFor="newPassword" className="text-sm">New Password</label>
                  <div className="px-2 border-1 border-[#aaaaaa] rounded-md pl-2 h-10 flex items-center">
                    <input
                      type={passHidden.new_password ? "password" : "text"}
                      name=""
                      {...register("new_password", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      id="newPassword"
                      className="outline-none w-full"
                      placeholder="New Password"
                    />
                    <div onClick={() => togglePasswordVisibility("new_password")}>
                      {passHidden.new_password ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  {errors.new_password && (
                    <p className="text-red-500 mx-1 mt-1">{errors.new_password?.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <label htmlFor="confirmpassword" className="text-sm">Confirm Password</label>
                  <div className="px-2 border-1 border-[#aaaaaa] rounded-md pl-2 h-10 flex items-center">
                    <input
                      type={passHidden.confirm_new_password ? "password" : "text"}
                      name=""
                      {...register("confirm_new_password", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      id="confirmPassword"
                      className="outline-none w-full"
                      placeholder="Confirm Password"
                    />
                    <div onClick={() => togglePasswordVisibility("confirm_new_password")}>
                      {passHidden.confirm_new_password ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                  </div>
                  {errors.confirm_new_password && (
                    <p className="text-red-500 mx-1 mt-1">{errors.confirm_new_password?.message}</p>
                  )}
                </div>
              {error && <p className='text-sm text-[#EC1E24]'>{error}</p>}

              <div className="actionBtns pl-3 py-3 flex gap-3">

                <button type='button' className='w-32 h-10 bg-red-500 text-white rounded-lg' onClick={() => setChangePassword.setChangePassword(false)}>Cancel</button>
                <button type='submit' className='w-32 h-10 bg-green-500 text-white rounded-lg' >Save</button>
              </div>
              

      </div>
      </form>
    </>
  )
}
