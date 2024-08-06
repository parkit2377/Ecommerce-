import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./dashboard.css";
import "react-multi-carousel/lib/styles.css";
import constructionMaterial from "../../../assets/images/newImages/constructionMaterial.png";
import bricks from "../../../assets/images/newImages/bricks.png";
import Categories from "./Categories";
import TodayDeal from "./TodayDeal";
import Promotions from "./Promotions";
import SubscribeAnudaMart from "../SubscribeAnudaMart";
import { useDispatch, useSelector } from "react-redux";
import { authUserLogin } from "../../slices/LoginSlice";
import api from "../../../services/api";
import { setAllCategories } from "../../slices/CategorySlice";

export default function Dashboard() {

  let dispatch = useDispatch();
  
  // let allCategories = useSelector(state => state.category.allCategories);

  // useEffect(() => {
  //   let token = JSON.parse(localStorage.getItem('authToken'))?.token;
  //       if (token) {
  //         console.log('token found');
  //         dispatch(authUserLogin())
  //       }
  //   setCategories(allCategories)
  // },[])
  
 
  

  // let buySellCarousel = [
  //   {
  //     color: "bg-[#C5EAD9]",
  //     class: "carousel-item-active",
  //   },

  //   {
  //     color: "bg-blue-300",
  //     class: "carousel-item",
  //   },
  //   {
  //     color: "bg-red-300",
  //     class: "carousel-item",
  //   },
  // ];


  const buySellCarousel = useMemo(() => [
    { color: "bg-[#C5EAD9]", class: "carousel-item-active" },
    { color: "bg-blue-300", class: "carousel-item" },
    { color: "bg-red-300", class: "carousel-item" },
  ], []);

  

//   useEffect(()=>{
//     console.log('loaded');

//     let categoriesFunc = async () => {
      
//         try {
//           let token = JSON.parse(localStorage.getItem('authToken')).token;
//     console.log(token);

//            let response = await api.get("website/category/66752b8f3d96152bc0470753",{
//             headers:{
//                 'Authorization' : `Bearer ${token}`
//             }
//            }) 

//            console.log(response);
            
//         } catch (error) {
//             console.log(error);
//         }

//         categoriesFunc()
//       console.log('categories');  
//     }
// },[])

// useEffect(() => {


  
//   const fetchData = async () => {
//     try {
 

//       let response = await api.get("website/category", {
//         headers: {
//         }
//       });

//       console.log(response.data); 
//       dispatch(setAllCategories(response.data))
//       setCategories(response.data)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData(); 

// }, []);

  return (
    <>
      <div className="buyAndSell pt-2">
        <div className="layout grid grid-cols-12 mx-2 md:mx-5 gap-3">
          <div className="md:col-span-8 col-span-12">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {buySellCarousel.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="background p-6 bg-[#C5EAD9] grid grid-cols-12 rounded-xl  md:h-[20.344rem] overflow-hidden pb-12">
                        <div className="text col-span-12 md:col-span-7">
                          <p className="text-lg md:text-2xl lg:text-[40px] font-bold md:leading-10 md:py-2">
                            Buy & Sell Construction Material At{" "}
                            <span className="text-[#ec1e25]">Best Price</span>
                          </p>
                          <p className="text-md md:text-lg lg:text-xl font-[500] text-[#7E7E7E]">
                            Save up to 50% on your first order
                          </p>
                          <button className="text-white bg-[#ec1e25] font-semibold py-2 px-4 my-8 rounded-[5px]">
                            Shop Now
                          </button>
                        </div>
                        <div className="col-span-12 md:col-span-5 relative">
                        <div className="circle w-36 h-36 lg:h-96 lg:w-96 md:h-60 md:w-60 bg-[#C5EAD9] flex items-center justify-center shadow-lg rounded-full absolute top-0 md:top-24  ">
                        
                        <img src={constructionMaterial} alt="" />
                      </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            <div className="bg-[#FFF2D9] p-6 h-[20.344rem] rounded-xl relative overflow-hidden">
              <div className="textInfo">
                <p className="text-[25px] md:text-[30px] font-bold">
                  Buy & Sell Construction Materials
                </p>

                <button className="text-white font-semibold bg-[#ec1e25] py-1.5 px-3 my-8 rounded-[5px]">
                  Shop Now
                </button>
              </div>

              <div className="circle shadow-lg h-[17rem] w-[17rem] rounded-full absolute right-0 top-36">
                <img src={bricks} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="categories md:mx-5 mx-2 my-4">
        <Categories />
      </div>

      <div className="TodaysDeal md:mx-5 mx-2 my-4">
        
        <TodayDeal title ={'Today\'s Deal'} />
      </div>

      <div className="md:mx-5 mx-2 my-4">
        <Promotions />
      </div>

      <div className="md:mx-5 mx-2 my-4">
        <SubscribeAnudaMart />
      </div>
    </>
  );
}
