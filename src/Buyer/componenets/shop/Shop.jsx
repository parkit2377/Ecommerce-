import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FaIndianRupeeSign } from "react-icons/fa6";
import Rating from '@mui/material/Rating';
import Products from "./Products";
import SubscribeAnudaMart from "../SubscribeAnudaMart";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../services/api";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import ProductsByCategory from "./ProductsByCategory";
import { IoSearch } from "react-icons/io5";
import { changeCategory } from "../../slices/CategorySlice";


function valuetext(value) {
    return `${value}°C`;
  }

export default function Shop() {


  const [allBrands , setAllBrands] = useState()
  const [fiterBrandInput , setFilterBrandInput] = useState()
  const [childProducts , setChildProducts] = useState(null);
  const [value, setValue] = useState([20, 100]);
  const [sidenavItems , setSidenavItems] = useState();
  const [selectedChild , setSelectedChild] = useState()
  const [ifFilterSelected , setIfFilterSelected] = useState([])
  // let itemInCart = useSelector(state => state.cartItems.itemInCart)

  // let allCategories = useSelector(state => state.category?.allCategories)

  let navigate = useNavigate();
  let dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pathnames = location.pathname.split("/").filter((x) => x);

  console.log(pathnames);
  let selectedCategory = useSelector(state => state.category.selectedCategory)
  console.log(selectedCategory);
  var rating = [
    {
        rating :1,
        quantity : 56 

    },
    {
        rating :2,
        quantity : 100

    },
    {
        rating :3,
        quantity : 200 

    },
    {
        rating :4,
        quantity : 250 

    },
    {
        rating :5,
        quantity : 506 

    },
  ]

  let getBrands = async() => {
    try {
      let response = await api.post("api/get_all_brands")
      setAllBrands(response.data)
    } catch (error) {
      throw error
    }
  }


  let getSidenavItems = async() => {
    try {
      let response = await api.post("api/filter",{} ,{
        params: {category_id : '6683ec75ba830f224ccf20f3'}
      })
      console.log(response.data);
      setSidenavItems(response.data)
    } catch (error) {
        throw(error);
    }
  }

  useEffect(() => {
    getSidenavItems()
    getBrands();
    
  },[])


  useEffect(()=>{
    if (allBrands){
      setFilterBrandInput(allBrands?.data)
    }
  },[allBrands])


 

  const handleInputChange = (index, event) => {
    const newValue = [...value];
    newValue[index] = event.target.value === '' ? '' : Number(event.target.value);
    setValue(newValue);
  };



  const filterBrand = (val) => {
    console.log(val);
    if(val === '' ) setFilterBrandInput(allBrands)

      let filterBySearch = allBrands?.data?.filter((item) => {
        if (item?.name?.toLowerCase()
            .includes(val?.toLowerCase())) { return item }
    })
    setFilterBrandInput(filterBySearch);
  }


  const handleCheckboxChange = (e , id) => {
    const {value , checked} = e.target

    if (checked){
      setIfFilterSelected([...ifFilterSelected , {checked : checked , id : id}])
    }else{
      let removeFilter = ifFilterSelected.filter((i) => {
        if (i.id !== id){
          return i
        }

      })
      setIfFilterSelected(removeFilter);
    }

  }


  let handleChildProducts = async(item , parent) => {
    console.log(parent);
    console.log(item);
    let parentName = parent.name.split(' ');
    let parentSlug = parentName.join('-')
    setSelectedChild(item.name)
    // try {
    //   let response = await api.post("api/products_by_category" , {} , {
    //       params : {
    //         _id : item._id
    //       }
    //   })
    //   console.log(response);
      let itemName = item.name.split(' ')
      let slug = itemName.join('-')
      dispatch(changeCategory( parent))
      navigate(`/shop/${parentSlug}/${slug}` , {state : {childProduct : item}})
      // setChildProducts(response.data)
    // } catch (error) {
    //     throw error
    // }
  }
  return (
    <>
      



      <div className="shop mx-2 md:mx-5">
        <div className="layout grid grid-cols-12 items-start">
          <div className="sideNavigation col-span-12 lg:col-span-3 px-5 pb-3 flex flex-col gap-3 mt-3 md:-mt-0">
            <div className="categories p-4 bg-[#F4F6FA] rounded-md h-[500px] overflow-y-scroll">
              <h1 className="font-semibold mt-3 text-xl uppercase tracking-wide">Categories</h1>

              <ul>
                {sidenavItems?.data?.category?.map((i, index) => {
                  return (
                    <div key={index} className="text-sm">
                      <li className="flex justify-between py-3 cursor-pointer font-bold text-sm">
                        <p>{i.name}</p>
                       {i.child && <FaChevronDown />}

                      </li>
                      <div className="subcatergory px-2.5 text-xs ">
                        {i?.child?.map((sub, index)=> {

                          // to check if an child category is active at a time and to hightlight in sidenav 
                          const path = location.pathname.split('/')
                          const activePath = path[path.length - 1] 
                          
                          const childName = sub.name.split(' ');
                          const childSlug = childName.join('-');
                          // console.log(activePath , childSlug);
                          return <p key={index} className={`py-2.5 cursor-pointer hover:text-[#ef4444] ${activePath === childSlug ? 'text-[#ef4444]' : ''}`} onClick={() => handleChildProducts(sub , i)}>{sub.name}</p>
                          
                        })}
                      </div>
                      {index < sidenavItems?.data?.category?.length - 1 && <hr />}
                    </div>
                  );
                })}
              </ul >
            </div>

            <div className="brands">
              <div className="br p-4 bg-[#F4F6FA] rounded-md">
                <h1 className="font-semibold mt-3 text-xl ">Brands</h1>
                <div className="py-2">
                <input type="text" name="" id=""  onChange={(e) => filterBrand(e.target.value)} className="bg-white outline-none w-full h-10 rounded-md pl-2"/>
                </div>
                <ul className="pb-4 h-60 overflow-y-auto">
                  {fiterBrandInput?.map((i, index) => {
                    return (
                      <div key={index} className="text-sm">
                        <li className="flex justify-start py-2 gap-3">
                            <input type="checkbox" name=""  onChange={(e) => handleCheckboxChange(e , i._id)} id={i._id}/>
                            {i?.name}
                        </li>
                      </div>
                    );
                  })}
                </ul>
                   <hr /> 
                <div className="priceRange pb-6">

                <h1 className="font-semibold mt-3 text-xl ">By Price</h1>
                  <div className="rangeSelector flex justify-center items-center mt-2">
                <Box sx={{ width: 250 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    size="small"
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                />
                </Box>
                </div>
                <div className="sliderValues  flex gap-8 justify-between">
                    <div className="startRange bg-white flex w-20 overflow-hidden items-center py-1 rounded-md text-sm">

                    <FaIndianRupeeSign className=""/>
                    <input type="text" className="w-16 outline-none pl-1" value={value[0]} onChange={(e) => handleInputChange(0, e)}/>

                    </div>

                    <div className="startRange bg-white flex w-20 overflow-hidden items-center rounded-md text-sm">

                    <FaIndianRupeeSign className=""/>
                    <input type="text" className="w-16 outline-none pl-1" value={value[1]} onChange={(e) => handleInputChange(1, e)}/>

                    </div>

                    <button className=" bg-red-500 py-1 px-2 text-white rounded-md">Go</button>
                </div>




                </div>
                <hr />

                <div className="rating">

                  <h1 className="font-semibold mt-3 text-xl">Rating</h1>
                
                <ul>
                    {rating.map((i , index) =>{
                        return <li key={index} className="flex gap-3 gap-y-2 items-center">
                          <input type="checkbox" name="" id="" />
                            <Rating
                                size="small"
                                name="half-rating"
                                value={i.rating}
                                precision={0.5}
                            />
                            <p className="text-sm">({i.quantity})</p>
                        </li>
                    })}
                </ul>



                </div>
              </div>
            </div>
            <div className="bydistance bg-[#F4F6FA] px-3 rounded-md">
            <div className="priceRange pb-6 ">

                <h1 className="font-semibold mt-3 text-xl ">By Distance</h1>
                  <div className="rangeSelector flex justify-center items-center mt-2">
                <Box sx={{ width: 250 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    size="small"
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="secondary"
                />
                </Box>
                </div>
                <div className="sliderValues  flex gap-8 justify-between">
                    <div className="startRange bg-white flex w-20 overflow-hidden items-center py-1 rounded-md text-sm">

                    <FaIndianRupeeSign className=""/>
                    <input type="text" className="w-16 outline-none pl-1" value={value[0]} onChange={(e) => handleInputChange(0, e)}/>

                    </div>

                    <div className="startRange bg-white flex w-20 overflow-hidden items-center rounded-md text-sm">

                    <FaIndianRupeeSign className=""/>
                    <input type="text" className="w-16 outline-none pl-1" value={value[1]} onChange={(e) => handleInputChange(1, e)}/>

                    </div>

                    <button className=" bg-red-500 py-1 px-2 text-white rounded-md">Go</button>
                </div>




                </div>
          </div>
          </div>


          

          <div className="shopItems col-span-12 lg:col-span-9 pb-10">
            { pathnames.length === 1 &&
            <Products filterSelected = {ifFilterSelected} />
            }
            {
              pathnames.length >1 &&
              <ProductsByCategory filterSelected = {ifFilterSelected}/>
            }
          </div>
        </div>

        <div>
            <SubscribeAnudaMart/>
        </div>
      </div>
    </>
  );
}
