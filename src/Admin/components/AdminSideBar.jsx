import React, { useState } from "react";
import {
  CiAirportSign1,
  CiTimer,
  CiBank,
  CiUser,
  CiViewList,
  CiCoinInsert,
  CiLogout,
} from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./AdminSideBar.css";
import { useSelector } from "react-redux";
import logoImg from "../../assets/images/big-logo.png";

export default function AdminSideBar() {
  let sidebarItems = [
    {
      name: "Get Started",
      icon: <CiAirportSign1 />,
      link: "/admin/getting-started",
    },
    {
      name: "Dashboard",
      icon: <CiTimer />,
      link: "/admin/dashboard",
    },
    {
      name: "Products",
      icon: <CiBank />,
      link: "/sell-on-anuda",
    },
    {
      name: "Profile",
      icon: <CiUser />,
      link: "/dashboard",
    },
    {
      name: "Customers",
      icon: <PiUsersLight />,
      // link: "/sign-out",
      subitems: [
        {
          name: "Subitem 1",
          link: "/invoices/subitem1",
        },
        {
          name: "Subitem 2",
          link: "/invoices/subitem2",
        },
      ],
    },
    {
      name: "Invoices",
      icon: <CiViewList />,
      // link: "/sign-in",
      subitems: [
        {
          name: "Subitem 3",
          link: "/invoices/subitem1",
        },
        {
          name: "Subitem 4",
          link: '/admin/dashboard'
        },
      ],
    },
    {
      name: "Transactions",
      icon: <CiCoinInsert />,
      link: "/dashboard",
    },
    {
      name: "Logout",
      icon: <CiLogout />,
      link: "/sign-out",
    },
  ];

  let isSidenavOpen = useSelector(
    (state) => state.adminToggleSidenav.showAdminSidenav
  );
  console.log(isSidenavOpen);
  const [showSubitems, setShowSubitems] = useState({});

  const handleToggleSubitems = (index) => {
    setShowSubitems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state of the specific item
    }));
  };
  return (
    <>
      <aside
        className={`bg-white w-64 h-screen border-r-2 border-[#DDE1EF] sideNav  ${
          isSidenavOpen ? "show" : ""
        }`}
      >
        <div className="logo flex justify-center items-center h-20 ">
          <img src={logoImg} alt="logo" className="h-10 " />
        </div>


        <div className="navlinks pt-2 mx-3">
      <ul className="flex justify-center items-center gap-2 flex-col">
        {sidebarItems.map((item, index) => (
          <div key={index} className="w-full">
            <div className="w-full">
              {item.link ? (
                <NavLink
                  to={item.link}
                  className={({ isActive, isPending }) =>
                    `w-full block ${isPending ? '' : isActive ? 'bg-[#E40F15] text-white' : 'hover:text-[#E40F15]'}`
                  }
                >
                  <li className="grid grid-cols-12 w-full p-2.5 text-sm" onClick={() => setShowSubitems({})}>
                    <div className="col-span-2 flex justify-end items-center text-lg">
                      <span className="">{item.icon}</span>
                    </div>
                    <div className="col-span-10 flex justify-start px-3 flex-col">
                      <p>{item.name}</p>
                    </div>
                  </li>
                </NavLink>
              ) : (
                <div
                  className={`w-full cursor-pointer ${showSubitems[index] ? 'bg-[#E40F15] text-[#ffffff]' : 'hover:text-[#E40F15]'}`}
                  onClick={() => handleToggleSubitems(index)}
                >
                  <li className="grid grid-cols-12 w-full p-2.5 text-sm">
                    <div className="col-span-2 flex justify-end items-center text-lg">
                      <span className="">{item.icon}</span>
                    </div>
                    <div className="col-span-10 flex justify-start px-3 flex-col">
                      <p>{item.name}</p>
                    </div>
                  </li>
                </div>
              )}
            </div>
            {item.subitems && (
              <div
                className={`overflow-hidden transition-max-height duration-300 ${
                  showSubitems[index] ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <ul className="list-disc flex flex-col gap-3 mx-4 ">
                  {item.subitems.map((sub, subIndex) => (
                    <li key={subIndex} className="text-xs mx-4 w-full">
                      <NavLink
                        to={sub.link}
                        className={({ isActive, isPending }) =>
                          `block w-full ${isPending ? '' : isActive ? ' text-[#E40F15]' : 'hover:text-[#E40F15]'}`
                        }
                       
                      >
                        <p className="p-2 ">{sub.name}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>

        
      </aside>
    </>
  );
}




{/* <div className="navlinks pt-2 mx-3">
          <ul className="flex justify-center items-center gap-2 flex-col">
            {sidebarItems.map((item, index) => (
              <>
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive, isPending }) =>
                    `w-full  ${
                      isPending
                        ? ""
                        : isActive
                        ? "bg-[#E40F15] text-white"
                        : "hover:text-[#E40F15]"
                    } `
                  }
                >
                  <li
                    className="grid grid-cols-12 w-full p-2.5 text-sm"
                    onClick={() => handleToggleSubitems(index)}
                  >
                    <div className="col-span-2 flex justify-end items-center text-lg">
                      <span className="">{item.icon}</span>
                    </div>
                    <div className="col-span-10 flex justify-start px-3 flex-col">
                      <p>{item.name}</p>
                      <div className="w-full  flex gap-2 flex-col submenu">
                  {item.subitems &&
                    showSubitems[index] &&
                    item.subitems.map((sub) => {
                      return (
                        <li className="text-sm mx-4 ">
                          <p>{sub.name}</p>
                        </li>
                      );
                    })}
                </div>
                    </div>
                  </li>
                </NavLink>

                
              </>
            ))}
          </ul>
        </div> */}