import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import AnudaMartFooter from "./Buyer/componenets/martFooter/AnudaMartFooter";
import AnudaMartHeader from "./Buyer/componenets/martHeader/AnudaMartHeader";
import SideNav from "./Buyer/sideNav/SideNav";
import { toggleNavbar } from "./Buyer/slices/NavBarSlice";
import { useDispatch, useSelector } from "react-redux";
import MobileFooter from "./Buyer/componenets/martFooter/MobileFooter";
import MobileHeader from "./Buyer/componenets/martHeader/MobileHeader";
import { authUserLogin, authUserLogout } from "./Buyer/slices/LoginSlice";
import { FiHome } from "react-icons/fi";
import Notification from "./Admin/components/Notification";
import { hide } from "./Buyer/slices/NotificationSlice";


function App() {
  const [showFooterAndHeader, setShowFooterAndHeader] = useState(true);
  const [lastPath, setLastPath] = useState("");
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const toggleNav = useSelector((state) => state.showNav);
  const dispatch = useDispatch();
  const location = useLocation();
  let navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);


  let isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let token = JSON.parse(localStorage.getItem("authToken"))?.token;


  let ifShowNotify = useSelector((state) => state.notification)


  useEffect(() => {
    if (token) {
      dispatch(authUserLogin());
    }
    // else{
    //   dispatch(authUserLogout())
    // }
    console.log(isUserLoggedIn);
  }, [token, isUserLoggedIn]);


  useEffect(()=>{
    setTimeout(() => {
      dispatch(hide())
    },3000)
    
  },[ifShowNotify])


  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 1024) {
  //       setIsMobileWidth(true);
  //     } else {
  //       setIsMobileWidth(false);
  //     }
  //   }

  //   // Call handleResize initially
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Clean up event listener
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);


  const renderBreadcrumbs = useCallback(() => {
    return pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      return (
        <li key={to} className="flex items-center">
          {isLast ? (
            <span className="text-gray-500 capitalize">{value}</span>
          ) : (
            <Link to={to} className="hover:underline capitalize">
              {value}
            </Link>
          )}
        </li>
      );
    });
  }, [pathnames, navigate]);

  return (
    <>
      <SideNav />

      {/* {!isMobileWidth ? (
        showFooterAndHeader && <AnudaMartHeader />
      ) : (
        showFooterAndHeader && <MobileHeader />
      )} */}
      <AnudaMartHeader />

      {/* to get dynamic breadcrums  */}
      {pathnames?.length > 0 && (
        <>
          <hr />
          <div className="breadcrums  h-12 ">
            <nav className="h-full ">
              <ol className="breadcrumb flex items-center px-5 h-full gap- text-sm ">
                <li
                  className="flex items-center text-[#ec1e25] gap-1 cursor-pointer hover:underline"
                  onClick={() => navigate("/")}
                >
                  <span className="text-lg">
                    <FiHome />
                  </span>{" "}
                  Home
                </li>
                {/* {pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={to} className="flex items-center">
                      {isLast ? (
                        <span className="text-gray-500 capitalize">{value}</span>
                      ) : (
                        <Link to={to} className="hover:underline capitalize">
                          {value}
                        </Link>
                      )}
                    </li>
                  );
                })} */}
                {renderBreadcrumbs()}
              </ol>
            </nav>
          </div>
          <hr />
        </>
      )}
      {ifShowNotify?.showNotification && <div className="notify ">
        <Notification type={ifShowNotify.type} message={ifShowNotify.message}/>
      </div>}
      <div className="md:mx-2">
        <Outlet />
      </div>
      <AnudaMartFooter />
      {/* {  !isMobileWidth ? (
        showFooterAndHeader &&  <AnudaMartFooter />
      ) : (
        showFooterAndHeader &&  <MobileFooter />
      )} */}
    </>
  );
}

export default App;
