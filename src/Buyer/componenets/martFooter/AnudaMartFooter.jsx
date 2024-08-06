import React from "react";
import logo from "../../../assets/images/big-logo.png";
import addressIcon from '../../../assets/images/newImages/addressIcon.png'
import contactNmbr from '../../../assets/images/newImages/contactNmbr.png'
import contactMail from '../../../assets/images/newImages/contactMail.png'
export default function AnudaMartFooter() {
  let footerItems = [
    {
      title: "Find it easy",
      items: [
        "Bricks",
        "Cement",
        "Stone",
        "Steel & Iron",
        "Bajri",
        "Rodi",
        "Plumbing and Sanitary",
        "Electronics",
        "Flooring",
        "Railing",
      ],
      gridCol : 'col-span-2'
    },

    {
      title : 'Information',
      items: [
        'Find a Store',
          'About Us',
          'Contact Us',
          'Delivery information',
          'Privacy Policy',
          'Terms & Conditions',
          'Gift Cards',
      ],
      gridCol : 'col-span-2'
    },
    {
      title : 'Make Money With Us',
      items : [
        'Sell on Anuda Mart',
        'Sell under Anuda mart Accelerator',
        'Protect and Build Your Brand',
        'Become an Affiliate',
        'Fulfilment by Anuda Mart',
        'Advertise Your Products',
        'Anuda Mart Pay on Merchan',
      ],
      gridCol : 'col-span-3'
    },
    {
      title : 'Let Us Help You',
      items : [
        'My Account',
        'Order History',
        'Wish List',
        'Customer Service',
        'Returns / Exchange',
        'FAQs',
        'Product Support',
      ],
      gridCol : 'col-span-2'
    }
  ];

  return (
    <>
      <footer >
        <div className="grid grid-cols-12 mx-5 my-3">
        <div className="contactInfo col-span-3 flex flex-col gap-8">
          <div className="logo ">
            <img src={logo} alt="" className="h-10 "/>
          </div>
          <div className="contactInfo flex flex-wrap gap-4">
            <div className="adrs flex gap-3">
              <img src={addressIcon} alt="" className="object-contain"/>
              <span className="text-xs font-semibold tracking-wider mx-4">F 37-38, Govindam Tower, 
                    Kardhani,Govindpura Kalwar
                    Road, Jaipur, Rajasthan 
                    India - 302012
            </span>
            </div>

            <div className="adrs flex gap-3">
              <img src={contactNmbr} alt="" className="object-contain"/>
              <span className="text-xs font-semibold tracking-wider mx-4">
                +91 9001602012
            </span>
            </div>


            <div className="adrs flex gap-3">
              <img src={contactMail} alt="" className="object-contain"/>
              <span className="text-xs font-semibold tracking-wider mx-4">
                  anudalive@gmail.com
            </span>
            </div>


          </div>
          </div>

        {footerItems.map((item)=>{
          return (
            <div key={item.title} className= { `${item.gridCol}`}>
              <h2 className="text-lg font-semibold tracking-wider pb-2.5">{item.title}</h2>
              {item.items.map((i, index) => {
                return <p className="text-sm  py-1 tracking-wide" key={index}>{i}</p>
              })}
            </div>
          )
        })}
 </div>
        {/* <hr className=" h-[2px]"/>  */}
        <hr className="text-[#e40f15]"/>
        <hr className="text-[#e40f15]"/> 

        <div className="copyRight ">
          <div className="content py-4 flex items-center justify-center">
            <p className="font-semibold text-sm">Copyright © 2024, <span className="text-[#e40f15]">Anuda Construction </span>All Rights Reserved. </p>
          </div>
        </div>
       
      </footer>

   
    </>
  );
}
