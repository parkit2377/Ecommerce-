import React from "react";


export default function BasicDetailForm(data) {
    console.log(data);
  return (
    <>
      <div className="w-full">
        <div className="basicDetails">
          <div className="name grid grid-cols-12 gap-3">
          <div className="firstName flex flex-col gap-2 pt-3 pb-2 col-span-6">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.first_name}
              onChange={e => data.updateField({first_name : e.target.value})}
              id="firstName"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="First Name"
            />
          </div>

          <div className="lastName flex flex-col gap-2 pt-3 pb-2 col-span-6">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.last_name}
              onChange={e => data.updateField({last_name : e.target.value})}
              id="lastName"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="Second Name"
            />
          </div>
          </div>

          <div className="email flex flex-col gap-2 py-2">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>
            <input
              type="text"
              name=""
              id="email"
              value={data.vendorFormData?.email}
              onChange={e => data.updateField({email : e.target.value})}
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="phone flex flex-col gap-2 py-2">
            <label htmlFor="phone" className="text-sm">
              Mobile Number
            </label>
            <input
              type="text"
              name=""
              value={data.vendorFormData?.phone}
              onChange={e => data.updateField({phone : e.target.value})}
              id="phone"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="Mobile Number"
            />
          </div>

          <div className="password flex flex-col gap-2 py-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              value={data.vendorFormData?.password}
              onChange={e => data.updateField({password : e.target.value})}
              name=""
              id="password"
              className="outline-none border-1 border-[#aaaaaa] rounded-md pl-2 h-10 w-full"
              placeholder="Password"
            />
          </div>
        
        </div>
      </div>
    </>
  );
}
