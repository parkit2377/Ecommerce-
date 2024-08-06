import React, { useCallback, useEffect, useState } from "react";
import "./AnudaMartHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../slices/NavBarSlice";
import logo from "../../../assets/images/big-logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Badge from '@mui/material/Badge';
import toggle from "../../../assets/images/newImages/toggle.png";
import customerSupport from "../../../assets/images/newImages/customerSupport.png";
import api from "../../../services/api";
import { changeCategory, setAllCategories } from "../../slices/CategorySlice";
import { authUserLogin } from "../../slices/LoginSlice";
import usePreviousPath from "../../../Admin/hooks/UsePreviousPath";

export default function AnudaMartHeader() {


  const [categories , setCategories] = useState();
  const [limitedCategories , setLimitedCategories] = useState()

  const [selectedCategory , setSelectedCategory] = useState()
  const [searchValue , setSearchValue] = useState()
  const [itemsInCart, setItemsInCart] = useState();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  let isUserLoggedIn = useSelector(state => state.auth.isLoggedIn)


  // fetch All Categories 
  const fetchData = useCallback( async () => {
    try {
 

      let response = await api.get("api/category", {
        headers: {
        },
        params : {
          
        }
      });

      console.log(response.data); 
      dispatch(setAllCategories(response.data))
      setCategories(response.data)
    } catch (error) {
      console.log(error);
    }
  },[]);


  // fetch Categories via limit
  const filteredCategory = useCallback( async () => {
    try {
 

      let response = await api.get("api/category", {
        headers: {
        },
        params : {
          limit : 6
        }
      });

      console.log(response.data); 
      setLimitedCategories(response.data)
    } catch (error) {
      console.log(error);
    }
  },[]);


  useEffect(() => {

  
    fetchData();
    filteredCategory()
  }, []);


  // Update cart Items
  let cartItems = useSelector(state => state.cartItems.itemInCart.length)
  useEffect(()=>{
    setItemsInCart(cartItems)
    
  },[cartItems])




  let redirectLoginBased = ()=> {
    console.log(isUserLoggedIn);
    if(isUserLoggedIn){
      navigate('/profile')    
    }else{
    // let {navigateToNewRoute} = usePreviousPath();
    let path = window.location.pathname
    console.log(path);
    navigate('/sign-in' , {state : {previousPath : path}})
  }
}

let searchProduct = async() => {
  console.log(selectedCategory);
  let category = categories?.data[selectedCategory]
  console.log(category._id);
  try {
      let response = await api.post("api/search_products",{
        category_id : category?._id,
        product_name : searchValue
      })

      console.log(response);
      let catName = category?.name.split(' ');
      let slug = catName.join('-')
      console.log(searchValue);
      if (searchValue === undefined || searchValue ==='' || searchValue === null){
      navigate(`/shop/${slug}` , {state : {searchedProducts : response.data}})
      }else{
        navigate(`/shop/${slug}?${searchValue}` , {state : {searchedProducts : response.data}})
      }
  } catch (error) {
    console.log(error);
  }
}

let productsByCategory = (item)=> {

    // localStorage.setItem("selectedCategory" , JSON.stringify(item));
    let name = item.name.split(' ');
    let slug = name.join('-')
    dispatch(changeCategory(item))
    navigate(`/shop/${slug}` , {state: {productsByCategory : item}})
}



  return (
    <>
      <div className="topHeader mx-5 ">
        <div className="gridItems grid grid-cols-12 h-[5rem]   border-[#CCCCCC]">
          <Link to={'/'} className="col-span-2 flex justify-start items-center ">
          <div className="logo ">
            <img src={logo} alt="logo" className="h-10" />
          </div>
          </Link>
          <div className="searchbox col-span-6 my-auto  ">
            <div className="searboxWrapper flex items-center mx-3 py-1.5 h-[80%] border-red-500 border-1 rounded">
              <select name="" id="" className="p-2 text-sm outline-none w-[25%]" onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">All Categories</option>
                {categories?.data?.map((category , index) => {
                  return <option key={index} value={index}>{category.name}</option>
                })}
              </select>

              <div className="verticalDivider border-l border-[#CCCCCC] h-5 mx-2"></div>

              <input
                type="text"
                name=""
                id=""
                className=" w-[90%] h-full outline-none"
                placeholder="Search for items..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="searchIcon mx-3 text-3xl text-[#CCCCCC] cursor-pointer" onClick={searchProduct}>
                <IoIosSearch />
              </button>
            </div>
          </div>

          <div className="location col-span-2 flex justify-center items-center ">
            <div className="locationWrapper flex justify-center items-center px- gap-1  w-[80%] h-[50%]">
              <div className="shadow elementShadow flex items-center h-[90%] px-2 border-1 border-[#CCCCCC]">
                <div className="text-2xl text-[#CCCCCC]">
                  <CiLocationOn />
                </div>
                <select
                  name=""
                  id=""
                  className="text-xs outline-none text-red-500 font-semibold"
                >
                  {/* {locationOptions.map((item)=>{
                    return <option value={item}>{item}</option>
                  })} */}
                  <option value="Your Location">Your Location</option>
                  <option value="asd">asd</option>
                  <option value="asd">asd</option>
                  <option value="asd">asd</option>
                  <option value="asd">asd</option>
                </select>
              </div>
            </div>
          </div>

          <div className="actions col-span-2 ">
            <div className="actionWrapper  flex justify-center items-center h-full gap-4 mx-2">
              <div className="flex items-end">
                <div className="text-xl">
                <Badge badgeContent={0} color="warning">
                  <FaRegHeart />
                  </Badge>
                </div>
                <span className="text-xs font-semibold text-[#7e7e7e]">
                  Wishlist
                </span>
              </div>
              <Link to={'/cart'}>
              <div className="flex items-end">
                <div className="text-xl">
                <Badge badgeContent={itemsInCart} color="warning">
                  <BsHandbag />
                  </Badge>
                </div>
                <span className="text-xs font-semibold text-[#7e7e7e]">
                  Cart
                </span>
              </div>
              </Link>
              {/* <Link to={'/profile'} className="mt-1"> */}
              <div className="flex items-end cursor-pointer" onClick={redirectLoginBased}>
                <div className="text-xl">
                  <FiUser />
                </div>
                <span className="text-xs font-semibold text-[#7e7e7e]">
                  Account
                </span>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="bottomHeader mx-5 grid grid-cols-12 h-16">
        <div className="links flex col-span-9 justify-start gap-5 items-center">
        <Link to={'/shop'}>
        {/* onClick={()=>dispatch(toggleNavbar())} */}
          <div className="toggle cursor-pointer" >
            <img src={toggle} alt="toggle" />
          </div>
          </Link>
          {limitedCategories?.data?.map((i, index) => {
            return (
              <p key={index} className="text-sm cursor-pointer hover:text-[#ec1e25]" onClick={()=>productsByCategory(i)}>
                {i.name}
              </p>
            );
          })}
        </div>

        <div className="supportCenter col-span-3 flex justify-end gap-3 items-center">
          <div className="supportImg " >
            <img src={customerSupport} alt="" className="h-8" />
          </div>
          
          <div className="supportContact flex flex-col ">
            <span className="text-md font-semibold text-[#e40f15]">
              1900-888-888
            </span>
            <span className="text-xs">24/7 Support Center</span>
          </div>
          
        </div>
      </div>
    </>
  );
}
