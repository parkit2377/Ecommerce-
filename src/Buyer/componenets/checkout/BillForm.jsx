import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../../slices/NotificationSlice';
import api from '../../../services/api';

export default function BillForm(setBillingDetails) {
    

    // get cart items
  let itemsInCart = useSelector(state => state.cartItems.itemInCart)

  let dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm();

      let onSubmit = (data) => {
        console.log(setBillingDetails);
        console.log(data);
        setBillingDetails?.setBillingDetails(prev => ({...prev , ...data}))
        // reset();
      };

      let handleCheckout = async(data) => {
        let token = JSON.parse(localStorage.getItem('authToken')).token;
    
        if (token) {
          console.log(data);
          console.log(itemsInCart);
          let orderItems = itemsInCart.map((i , index) => ({
            quantity : i?.quantity,
            product_id : i?.product?.productToAdd?._id
          }))
          console.log(orderItems);
    
          try {
            let response = await api.post("api/create-order",{
              token : token ,
              items : orderItems,
              billingAddress : data 
            },{
              headers :{
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
              }
            })
    
            console.log(response.data);
          } catch (error) {
            dispatch(show({
              type : 'error',
              message : error?.response?.data?.message
            }))
            console.log(error);
          }
    
    
        }
    
      }



      const [selectState, setSelectState] = useState("Select a state");

      let states = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry",
      ];
  return (
    <>
       <div className="billing py-5">
              <h1 className="text-2xl font-semibold">Billing Details</h1>

              <form
                id="billingForm"
                className="py-4"
                onSubmit={handleSubmit(handleCheckout)}
              >
                <div className="name flex  flex-col md:flex-row gap-4 pb-3">
                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      className="border-[#C7C0C0]  border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.firstName?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      className="border-[#C7C0C0]  border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.lastName?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="address flex gap-4 pb-3">
                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      className="border-[#C7C0C0]  border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Address"
                    />
                    {errors.address && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.address?.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      {...register("addressLineSecond", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      id=""
                      className="border-[#C7C0C0]  border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Adress Line 2"
                    />
                    {errors.addressLineSecond && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.addressLineSecond?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="cityTown flex gap-4 pb-3">
                  <div className="w-full">
                    <select
                      name=""
                      id=""
                      {...register("state", {
                        required: selectState !== "Select a state",
                        message: "please select a state",
                      })}
                      onChange={(e) => setSelectState(e.target.value)}
                      className={`border-[#C7C0C0]  border-1  w-full py-2 pl-2 rounded-md outline-none ${
                        selectState === "Select a state"
                          ? "text-[#aaaaaa]"
                          : "text-black"
                      }`}
                    >
                      <option value="Select a state" hidden className="">
                        Select a state
                      </option>

                      {states.map((state, index) => {
                        return (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        );
                      })}
                    </select>
                    {errors.state && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.state?.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("cityTown", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      className="border-[#C7C0C0]  border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="City / Town"
                    />
                    {errors.cityTown && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.cityTown?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="postcode flex gap-4 pb-3">
                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("postcode", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                      })}
                      className="border-[#C7C0C0]  border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Postcode / ZIP"
                    />
                    {errors.postcode && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.postcode?.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                        maxLength: {
                          value: 10,
                          message: "Cannot enter more than 10 digits",
                        },
                        minLength: {
                          value: 10,
                          message: "Mobile number must be of 10 digits",
                        },
                      })}
                      className="border-[#C7C0C0] border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Phone *"
                    />
                    {errors.phone && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.phone?.message}
                      </p>
                    )}

                    {errors.phone?.maxLength && <p>{errors.phone.maxLength}</p>}
                    {errors.phone?.minLength && <p>{errors.phone.minLength}</p>}
                  </div>
                </div>

                <div className="companyDetails flex gap-4 pb-3">
                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("companyName")}
                      className="border-[#C7C0C0] border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name=""
                      id=""
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Field is required",
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className="border-[#C7C0C0] border-1 w-full py-2 pl-2 rounded-md placeholder:text-[#aaaaaa] outline-none"
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p className="text-red-500 mx-1 mt-1">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="additionalInfo ">
                  <textarea
                    name=""
                    id=""
                    {...register("additionalInfo")}
                    className="w-full outline-none border-[#C7C0C0] border-1 rounded-md pl-2 pt-1"
                    rows="4"
                    placeholder="Additional Information"
                  ></textarea>
                </div>

                <div className="shippingOptions text-sm flex flex-col gap-3">
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id="createAcc"
                      {...register("createAcc")}
                      className="mr-3"
                    />
                    <label htmlFor="createAcc" className="">
                      Create an account?
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id="shipDifferentAdrs"
                      {...register("shipDifferentAdrs")}
                      className="mr-3"
                    />
                    <label htmlFor="shipDifferentAdrs">
                      Ship to a different address
                    </label>
                  </div>
                </div>
              </form>
            </div>
    </>
  )
}
