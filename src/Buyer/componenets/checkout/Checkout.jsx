import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import SubscribeAnudaMart from "../SubscribeAnudaMart";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./checkout.css";
import paypalImg from "../../../assets/images/newImages/paypal.png";
import visaImg from "../../../assets/images/newImages/visa.png";
import masterCardImg from "../../../assets/images/newImages/masterCard.png";
import zapperImg from "../../../assets/images/newImages/zapper.png";
import { FiLogOut } from "react-icons/fi";
import BillForm from "./BillForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBilling } from "../../slices/BillingAmountSlice";
import api from "../../../services/api";
import { show } from "../../slices/NotificationSlice";

export default function Checkout() {
  let bankImgs = [paypalImg, visaImg, masterCardImg, zapperImg];

  const [coupon , setCoupon] = useState('')
  const [billingDetails , setBillingDetails] = useState()

  let dispatch = useDispatch()

  // get cart items
  let itemsInCart = useSelector(state => state.cartItems.itemInCart)

  // get cart billing details
  let billingAmount = useSelector(state => state.billingAmountDetails)



  const handleEnterCoupon = () => {
    console.log(coupon);
    if (coupon === 'AAAE'){
      // console.log();
      let discountPrice = billingAmount.totalAmount * 0.4
      let updatePrice = billingAmount.totalAmount - discountPrice
      dispatch(updateBilling({totalAmount : updatePrice}))
    }
  }


 


  return (
    <>
      <div className="mx-5 ">
        <h1 className="text-3xl font-semibold py-2">Checkout</h1>

        <p className="text-[#7E7E7E]">
          There are <span className="text-[#EC1E24]">{itemsInCart.length}</span> products in your
          cart
        </p>

        <div className="billingInfo grid grid-cols-12 gap-5 py-5 items-start">
          <div className="lg:col-span-8 col-span-12 ">
            <div className="login  items-center gap-5 grid grid-cols-12">
              <div className=" flex items-center rounded-lg shadow-md h-32 border-1 border-[#ECECEC] md:col-span-6 col-span-12 justify-center">
                <FaRegUserCircle />
                &nbsp;<span className="sm:text-xs xl:text-base ">
                  Already have an account?  
                  <Link to={"/sign-in"}>
                  &nbsp;<span className="text-[#EC1E24] cursor-pointer">
                       Click here to login
                    </span>
                  </Link>
                </span>
              </div>

              <div className="searchbar rounded-lg md:col-span-6 col-span-12 flex  px-3 items-center justify-center h-32  gap-3 shadow-md border-1 border-[#ECECEC]">
                <input
                  type="text"
                  value={coupon}
                  onChange={((e)=> setCoupon(e.target.value))}
                  className="w-[80%] border-[#EC1E24] ml-2 rounded-lg border-1 h-10 outline-none placeholder:text-[#aaaaaa] pl-2"
                  placeholder="Enter Your Coupon..."
                />
                <button onClick={handleEnterCoupon} className=" py- bg-[#EC1E24] text-white mr-2 flex items-center px-3 py-2 justify-center gap-2 rounded-md ">
                  <GoGift className="text-lg" />
                  <span className="whitespace-nowrap cursor-pointer" >Apply Now</span>
                </button>
              </div>
            </div>
            <BillForm setBillingDetails={setBillingDetails}/>
          </div>
          <div className="lg:col-span-4 col-span-12 p-4 border-1 border-[#aaaaaa] rounded-lg flex flex-col  ">
            <div className="">
              <div className="orderItems flex items-center justify-between pb-3">
                <h1 className="text-xl font-semibold">Your Order</h1>

                <p className="text-[#aaaaaa]">
                  <span className="text-[#EC1E24]">{itemsInCart.length}</span> items
                </p>
              </div>

              <hr />

              <div className="totalAmount py-6 flex justify-between items-center">
                <h1 className="text-lg font-semibold">Total</h1>
                <p className="flex items-center gap-2 text-[#ec1e24]">
                  <FaIndianRupeeSign /> {billingAmount.totalAmount}
                </p>
              </div>
              <hr />

              <div className="paymentMode py-4">
                <h1 className="text-xl font-semibold pb-4">Payment</h1>

                <div className="paymentOptions">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      // value={value}
                      // onChange={handleChange}
                    >
                      <FormControlLabel
                        value="bankTransfer"
                        control={<Radio />}
                        label="Direct Bank Transfer"
                      />
                      <FormControlLabel
                        value="cashOnDelivery"
                        control={<Radio />}
                        label="Cash On Delivery"
                      />
                      <FormControlLabel
                        value="onlineGetway"
                        control={<Radio />}
                        label="Online Getway"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className="bankImg py-4">
                  <div className="flex gap-2">
                    {bankImgs.map((img, index) => {
                      return <img src={img} alt="" key={index} />;
                    })}
                  </div>
                </div>
              </div>

              <div className="placeOrder py-3">
                <button
                  type="submit"
                  form="billingForm"
                  // onClick={handleCheckout}
                  className=" bg-[#ec1e24] text-white font-semibold py-2 w-full rounded-lg flex items-center justify-center gap-3"
                >
                  <span>Place an Order</span>
                  <FiLogOut className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-">
          <SubscribeAnudaMart />
        </div>
      </div>
    </>
  );
}
