import React from "react";
import { useForm } from "react-hook-form";
import locationSvg from "../../../assets/images/newImages/location.svg";
import mailSvg from "../../../assets/images/newImages/mailSvg.svg";
import phoneSvg from "../../../assets/images/newImages/phoneSvg.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let handleFormChange = () => {};

  return (
    <>
      <div className="contactUs flex items-center justify-center h-full bg-[#F5F5F5] ">
        <div className="layout gap-3 sm:w-[80vw] grid grid-cols-12 bg-white rounded-md my-16 ">
          <div className=" md:col-span-8 p-3 col-span-12">
            <h1 className="text-xl font-semibold pb-8">
              READY TO WORK WITH US
            </h1>

            <p className="text-[#666666] text-sm pb-4">
              Contact us for all your questions and opinions
            </p>

            <div className="contactForm">
              <form onSubmit={handleSubmit(handleFormChange)}>
                <div className="name grid grid-cols-12 gap-2 py-2">
                  <div className="firstName flex flex-col w-full gap-2 md:col-span-6 col-span-12">
                    <label htmlFor="firstName" className="text-sm">
                      First Name <span className="text-[#EC1E24]">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id="firstName"
                      {...register("firstName")}
                      onChange={handleFormChange}
                      className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="lastName flex flex-col w-full gap-2 md:col-span-6 col-span-12">
                    <label htmlFor="lastName" className="text-sm">
                      Last Name <span className="text-[#EC1E24]">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id="lastName"
                      {...register("lastName")}
                      onChange={handleFormChange}
                      className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                      placeholder="Last Name"
                    />
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
                      onChange={handleFormChange}
                      id="lastName"
                      className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="phone py-2">
                  <div className="phone flex flex-col w-full gap-2">
                    <label htmlFor="phone" className="text-sm">
                      Phone Number{" "}
                      <span className="text-sm text-[#666666]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      {...register("phone")}
                      onChange={handleFormChange}
                      id="phone"
                      className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="phone py-2">
                  <div className="phone flex flex-col w-full gap-2">
                    <label htmlFor="phone" className="text-sm">
                      Country / Region
                      <span className="text-[#EC1E24]"> *</span>
                    </label>

                    <select
                      name=""
                      id=""
                      className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                    >
                      <option value="rajasthan">Rajashtan</option>
                      <option value="punjab">Punjab</option>
                      <option value="harayana">Harayana</option>
                      <option value="himachal">Himachal Pradesh</option>
                    </select>
                  </div>
                </div>

                <div className="subject py-2">
                  <div className=" flex flex-col w-full gap-2">
                    <label htmlFor="subject" className="text-sm">
                      Subject
                      <span className="text-sm text-[#666666]">
                        {" "}
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name=""
                      {...register("subject")}
                      onChange={handleFormChange}
                      id="subject"
                      className=" border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="message py-2">
                  <div className=" flex flex-col w-full gap-2">
                    <label htmlFor="message" className="text-sm">
                      Message
                      <span className="text-sm text-[#666666]">
                        {" "}
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      className="border-1 border-[#CCCCCC] outline-none h-10 rounded-md pl-2 pt-1"
                      {...register("message")}
                      id="message"
                      placeholder="Note about your order, e.g. special note for delivery"
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <div className="termsCondition flex gap-2 items-center py-2">
                  <input type="checkbox" name="" id="termsConditionCheck" />
                  <label htmlFor="termsConditionCheck ">
                    <p className="text-xs">
                      I want to recieve news and updates once in a while. By
                      submitting, I am agreed to the{" "}
                      <span className="underline text-[#E01C22]">
                        Terms & Conditions
                      </span>
                    </p>
                  </label>
                </div>

                <div className="sendMsgBtn py-2">
                  <button className=" text-white px-3 py-2 bg-[#EC1E24] rounded-md ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-12  md:col-span-4 p-3 flex flex-col gap-3 ">
            <div className="addressAndContact bg-[#EDEFF6] p-3 rounded-md">
              <h1>HEADQUATER OFFICE</h1>
              <div className="sm:mx-2">
                <div className="location flex items-center text-xs gap-3 py-3 leading-5 ">
                  <img src={locationSvg} alt="" className="w-[25px]" />

                  <p className="">
                    F 37-38, Govindam Tower, Kardhani,Govindpura Kalwar Road,
                    Jaipur, Rajasthan India - 302012
                  </p>
                </div>

                <div className="location flex items-center text-xs gap-3 py-3 leading-5">
                  <img src={mailSvg} alt="" />

                  <p className="">info@anudarealty.com</p>
                </div>

                <div className="location flex items-center text-xs gap-3 py-3 leading-5">
                  <img src={phoneSvg} alt="" />

                  <p className="">+91 900 160 2012</p>
                </div>

                <div className="socialLinks py-3 text-lg flex gap-4 items-center text-white">
                  <div className="bg-[#EC1E24] rounded-full p-2 w-8 h-8">
                    <FaTwitter className="" />
                  </div>
                  <div className="bg-[#EC1E24] rounded-full p-2 w-8 h-8 flex items-center">
                    <FaFacebookF />
                  </div>
                  <div className="bg-[#EC1E24] rounded-full p-2 w-8 h-8 flex items-center">
                    <FaInstagram />
                  </div>
                  <div className="bg-[#EC1E24] rounded-full p-2 w-8 h-8 flex items-center">
                    <FaYoutube />
                  </div>
                  <div className="bg-[#EC1E24] rounded-full p-2 w-8 h-8 flex items-center">
                    <FaPinterest />
                  </div>
                </div>
              </div>
            </div>

            <div className="map w-full h-64 md:h-full overflow-hidden relative rounded-md ">
              <iframe
                className="w-full  absolute border-0 top-0 left-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.054200667216!2d75.80575567514138!3d26.80640276465164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7861b3c687b%3A0x9040e87ebab82198!2sBytonic%20Web%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1718268761933!5m2!1sen!2sin"
                width=""
                height="330"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
