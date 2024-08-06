import React, { useEffect, useState } from "react";
import PanCardForm from "../../signUp/vendor/PanCardForm";
import GstForm from "../../signUp/vendor/GstForm";
import BankDetails from "../../signUp/vendor/BankDetails";
import api from "../../../../services/api";
import PersonalInfo from "./PersonalInfo";
import Document from "./Document";
import ShopInfo from "./ShopInfo";
import BankDetailsUpdate from "./BankDetailsUpdate";

export default function VendorAccountInfo(userDetails) {
  const [selectedForm, setSelectedForm] = useState('personal');


//   let INITIAL_VAL = {
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     password: "",
//     aadhar_front_photo: "",
//     aadhar_back_photo: "",
//     aadhar_no: "",
//     pan_no: "",
//     gst_no: "",
//     signature: "",
//     account_holder_name: "",
//     bank_name: "",
//     ifsc_code: "",
//     account_no: "",
//     confirmAccNumber: "",
//     token : ""
//   };

  let [vendorDetails , setVendorDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    aadhar_front_photo: "",
    aadhar_back_photo: "",
    aadhar_no: "",
    pan_no: "",
    gst_no: "",
    signature: "",
    account_holder_name: "",
    bank_name: "",
    ifsc_code: "",
    account_no: "",
    confirmAccNumber: "",
    token : ""
  })



  let toggleForm = (param) => {
    setSelectedForm(param);
  };


  let updatePrevFields = (fields) => {
    let updatedDetails = { ...vendorDetails };
    Object.keys(fields).forEach(key => {
        if (updatedDetails.hasOwnProperty(key)) {
            updatedDetails[key] = fields[key];
        }
    });
    console.log(updatedDetails);
    // Update state using functional update
    setVendorDetails(updatedDetails);

};

  useEffect(() => {
    updatePrevFields(userDetails.userDetails)
    let vendorData = JSON.parse(localStorage.getItem("vendorData"))
    console.log(vendorData);
    if (vendorData !== null && vendorData !== undefined){
        console.log(vendorData);
        setVendorDetails(vendorData)
    }

    },[])

  let updateFields = (fields) => {
    setVendorDetails((prev) => {
      return { ...prev, ...fields };
    });
  };

  console.log(vendorDetails);
//   const updateFields = (field, value) => {
//     setVendorDetails(prevDetails => ({
//       ...prevDetails,
//       [field]: value,
//     }));
//   };


  let handleUpdateVendor = async () => {
    let token = JSON.parse(localStorage.getItem('authToken')).token
    console.log(token);
    // updateFields({token : token})
    vendorDetails ={
        ...vendorDetails, 'token' : token
    }
    console.log(vendorDetails);
    try {
        let response = api.post('web/vendor/update-profile' , vendorDetails,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
  }

  return (
    <>
      <h1 className="font-bold text-2xl text-[#e40f15]">Vendor Account Info</h1>

      <div className="toggleForms flex gap-2 py-3 flex-wrap">
        <div className="relative">
        <button
          className={`text-sm w-32 h-9 ${
            selectedForm === "personal" ? "text-white" : ""
          }   ${selectedForm === "personal" ? "bg-[#e40f15]" : "bg-[#e9e9e9]"} `}
          onClick={() => toggleForm("personal")}
        >
          Personal Info
        </button>

         {selectedForm === 'personal' &&< div className="absolute top-full left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}

        </div>


          <div className="relative">
        <button
          className={`text-sm w-32 h-9 ${
            selectedForm === "documents" ? "text-white" : ""
          }   ${selectedForm === "documents" ? "bg-[#e40f15]" : "bg-[#e9e9e9]"} `}
          onClick={() => toggleForm("documents")}
        >
          Document
        </button>
        {selectedForm === 'documents' &&< div className="absolute top-full left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}

        </div>

        <div className="relative">
        <button
          className={`text-sm w-32 h-9 ${
            selectedForm === "shopInfo" ? "text-white" : ""
          }   ${selectedForm === "shopInfo" ? "bg-[#e40f15]" : "bg-[#e9e9e9]"} `}
          onClick={() => toggleForm("shopInfo")}
        >
          Shop Info
        </button>

        {selectedForm === 'shopInfo' &&< div className="absolute top-full left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
        </div>


        <div className="relative">
        <button
          className={`text-sm w-32 h-9 ${
            selectedForm === "bank" ? "text-white" : ""
          }   ${selectedForm === "bank" ? "bg-[#e40f15]" : "bg-[#e9e9e9]"} `}
          onClick={() => toggleForm("bank")}
        >
          Bank Details
        </button>

        {selectedForm === 'bank' &&< div className="absolute top-full left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}

        </div>
      </div>

      <div className="forms">
          {selectedForm === 'personal' && <PersonalInfo vendorFormData = {vendorDetails} updateField = { updateFields}/>}
          {selectedForm === 'documents' && <Document vendorFormData={vendorDetails} updateField={updateFields}/>}
          {selectedForm === 'shopInfo' && <ShopInfo vendorFormData={vendorDetails} updateField={updateFields}/>}
          {selectedForm === 'bank' && <BankDetailsUpdate vendorFormData={vendorDetails} updateField={updateFields}/>}
      </div>


    </>
  );
}
