import React, { useCallback, useEffect, useState } from "react";
import ultratechCement from "../../../assets/images/newImages/ultratechCement.png";
import cementSvg from "../../../assets/images/newImages/cementSvg.svg";
import Rating from "@mui/material/Rating";
import { FaIndianRupeeSign } from "react-icons/fa6";
import QuantitySelector from "../../../Admin/components/QuantitySelector";
import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { TbArrowsShuffle } from "react-icons/tb";
import ProductSideBar from "./ProductSideBar";
import TodayDeal from "../dashboard/TodayDeal";
import SubscribeAnudaMart from "../SubscribeAnudaMart";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateProductQuantity } from "../../slices/CartItemsSlice";
import api from "../../../services/api";
import ProductReviews from "./ProductReviews";
import { show } from "../../slices/NotificationSlice";


export default function ProductDetail() {
  let location = useLocation();

  const [activeBtn, setActiveBtn] = useState("description");
  const [productToShow, setProductToShow] = useState([]);
  const [productRating, setProductRating] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const [ifNoVarientSelected , setIfnoVarientSelected] = useState(false)
  const [selectedVariant , setSelectedVariant] = useState()


  let itemInCart = useSelector((state) => state.cartItems.itemInCart);

  let product = location.state?.product;
  const [productToAdd, setProductToAdd] = useState();
  console.log(product);
  console.log(itemInCart);



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.state !== null && location.state.product) {
      // let token = JSON.parse(localStorage.getItem("authToken"))?.token
      let productDetail = async () => {
        try {
          let response = await api.post(
            "api/get_product_details",
            { product_id: product?._id },
            {
              headers: {},
            }
          );
          console.log(response);
          setProductToShow([response.data]);
          setProductToAdd(response.data?.data);
        } catch (error) {
          console.log(error);
        }
      };

      productDetail();
      console.log(itemInCart);
      const cartItem = itemInCart.filter((i) => i?.product?.productToAdd?._id === product._id);
      console.log(cartItem);
      if (cartItem) {
        

      let totalQuantity = cartItem?.reduce((acc , i) => {
          return acc + i?.quantity
        }, 0)
        
        setProductQuantity(totalQuantity);
      }

      // setProductToShow([product]);
      setProductRating(product.rating);
    } else {
      setProductToShow([
        {
          productImg: ultratechCement,
          otherImages: [cementSvg, cementSvg, cementSvg, cementSvg],
          discount: 20,
          rating: 4,
          price: 250,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem  officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore  impedit fuga eum eligendi.",
          title: "Cement making filtration by removing dustings",
          totalReviews: 32,
          discountedPrice: 200,
          sizeWeight: ["50 Kg", "60 Kg", "70 Kg", "80 Kg"],
        },
      ]);
    }
  }, [location.state, itemInCart]);

  let dispatch = useDispatch();

  let handleRatingChange = (e, newVal) => {
    setProductRating(newVal);
  };


  
  // let addItemToCart = () => {
  //     console.log(itemInCart);
  //   if (productToAdd?.variant === true && productToAdd?.prodVarient === undefined) {
  //     dispatch(show({type : 'info' , message : 'Please Select a Product Type.'}))
  //   }else{
  //     let existingItemIndex = itemInCart.findIndex((i) =>i.product._id === productToAdd._id && i.product?.prodVarient?._id === productToAdd?.prodVarient?._id)

  //     console.log(existingItemIndex);

  //     let productDetail = {
  //       productToAdd : productToAdd,
  //       quantity : productQuantity
  //     }

  //     // if (existingItemIndex === -1){
  //     dispatch(addItem(productDetail ))
  //   // }
  //   // else{
  //   //   console.log(productToAdd);
  //   //   console.log(productQuantity);
  //   //   dispatch(updateProductQuantity(productToAdd , productQuantity))
  //   // }
  // }
    
  // };

  let addItemToCart = () => {
    console.log(productToAdd);
    if (productToAdd?.prodVarient === undefined && productToAdd.variant) {
      dispatch(show({type : 'info' , message : 'Please Select a Product Type.'}))
    }else{
      // to make default none varient selected 
      setSelectedVariant(null)
      console.log(productQuantity);
      // add item to cart 
      dispatch(addItem({productToAdd , productQuantity}))
      dispatch(show({type : 'success' , message : 'Product Added Successfully...'}))
    }

    
  };
 
  let selectVarient = (varient) => {
    console.log(varient);
    setSelectedVariant(varient)
    setProductToAdd((prev) => ({ ...prev, prodVarient: varient }));
  };



  const handleQuantityChange = (newQuantity) => {
    console.log(newQuantity);
    setProductQuantity(newQuantity);
    
};
  console.log(productToShow[0]);
  return (
    <>
      <div className="productDetail mx-5">

        <div className="grid grid-cols-12 gap-5 items-start">
          <div className="col-span-12 grid grid-cols-12 gap-5 p-3 items-start">
            <div className="col-span-6 ">
              {productToShow.map((prod, index) => {
                return (
                  <div key={index}>
                    <div className="productImg flex items-center justify-center  border-2 border-[#ECECEC] rounded-3xl mx-2">
                      <img
                        src={prod?.mediaUrl + prod.data?.thumbnail}
                        alt=""
                        className="h-[50%] w-[70%] max-w-96 max-h-96 object-contain py-3"
                      />
                    </div>
                    <div className="flex gap-4 py-3 mx-2 ">
                      {prod.data?.gallery_image &&
                        prod.data?.gallery_image.map((i, index) => {
                          return (
                            <div
                              key={index}
                              className="MoreImages  bg-[#F7F8FA] rounded-2xl"
                            >
                              <img
                                src={prod?.mediaUrl + i}
                                alt={index}
                                className="max-h-20 rounded-md"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-span-6 flex flex-col justify-center  ">
              {productToShow[0]?.data?.special_discount && (
                <div className="discount py-3 ">
                  <span className="bg-[#FBD2D3] p-2 rounded-lg text-sm text-center font-semibold text-[#EC1E24]">
                    {productToShow[0]?.data?.special_discount}{productToShow[0]?.data?.special_discount_type === 'flat' ? '/-' : '%'} off
                  </span>
                </div>
              )}
              <div className="productTitle py-3">
                <span className=" text-3xl leading-10 tracking-wide font-semibold ">
                  {productToShow[0]?.data?.product_name}
                </span>
              </div>

              <div className="rating  flex items-center gap-2 ">
                <Rating
                  size="small"
                  name="half-rating"
                  value={productRating}
                  precision={0.5}
                  className="text-start mt-1"
                  onChange={handleRatingChange}
                />
                <span className="text-sm text-[#B6B6B6]">
                  ({productToShow[0]?.totalReviews} reviews)
                </span>
              </div>

              <div className="price flex items-center gap-2 py-2">
             {   <div className="discountedPrice flex items-center gap-1 text-2xl text-[#EC1E24] font-semibold">
                  <FaIndianRupeeSign />
                 {productToShow[0]?.data?.special_discount_type ? <span>{productToShow[0]?.data?.special_price}</span> : <span>{productToShow[0]?.data?.unit_price}</span>}
                </div>}

                {productToShow[0]?.data?.special_discount_type && (
                  <div className="discountedPrice flex items-center gap- text-md line-through self-end text-[#B6B6B6]">
                    <FaIndianRupeeSign />
                    <span>{productToShow[0]?.data?.unit_price}</span>
                  </div>
                )}
              </div>

              <div className="productDetails py-2">
                <p className="text-[#7E7E7E] text-sm">
                  {/* need to be changed and set properly */}
                  {productToShow[0]?.data?.short_description}
                  {/*  */}
                </p>
              </div>

             {productToShow[0]?.data?.variant && <div className="sizeWeight py-2 text-sm text-[#7E7E7E] flex gap-3 items-center">
                <p className="font-semibold">Size / Weight :</p>
                <ul className="flex items-center gap-3">

                  {productToShow[0]?.productStock?.map((stock, stockIndex) =>
                    stock?.attribute_value_id?.map((i, iIndex) => (
                      <li
                        key={`${stockIndex}-${iIndex}`}
                        onClick={() => selectVarient(i)}
                        className={`cursor-pointer hover:text-[#ec1e24] ${selectedVariant?._id === i?._id ? 'text-white bg-[#ec1e24]' : '' } hover:underline px-1.5 py-1 border-2 border-[#7e7e7e] rounded-lg`}
                      >
                        {i.value}
                      </li>
                    ))
                  )}
                </ul>
              </div>}

              <div className="addToCart py-3 flex gap-3 items-center">
                <QuantitySelector inputQuantity={productQuantity} rowData={productToShow[0]?.data} onChange={handleQuantityChange} setProductQuantity = {setProductQuantity}/>

                <button
                  className="flex items-center justify-center gap-2 bg-[#EC1E24] h-10 w-36 rounded-md text-white"
                  onClick={addItemToCart}
                >
                  <BsHandbag /> Add to cart
                </button>

                <button
                  type="button"
                  className="bg-[#EC1E24] h-10 w-36 rounded-md text-white"
                >
                  Buy Now
                </button>
                <Link to={"/shop"}>
                  {" "}
                  <div className=" text-3xl flex items-center rounded-md px-2 text-[#6D6D6D] border-2 border-[#F1F1F1]">
                    <CiHeart />
                  </div>
                </Link>

                <div className=" text-3xl flex items-center rounded-md px-2 text-[#6D6D6D] border-2 border-[#F1F1F1]">
                  <TbArrowsShuffle />
                </div>
              </div>
            </div>

            <div className="productDetails p-3 border-2 border-[#ECECEC] col-span-12 rounded-lg">
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => setActiveBtn("description")}
                  className={`py-2 px-3 border-2 border-[#ECECEC] rounded-3xl text-sm  font-semibold ${
                    activeBtn === "description"
                      ? "text-[#EC1E24]"
                      : "text-[#7E7E7E]"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveBtn("additionalInfo")}
                  className={`py-2 px-3 border-2 border-[#ECECEC] rounded-3xl text-sm  font-semibold ${
                    activeBtn === "additionalInfo"
                      ? "text-[#EC1E24]"
                      : "text-[#7E7E7E]"
                  }`}
                >
                  Addition Info
                </button>
                <button
                  onClick={() => setActiveBtn("vender")}
                  className={`py-2 px-3 border-2 border-[#ECECEC] rounded-3xl text-sm  font-semibold ${
                    activeBtn === "vender" ? "text-[#EC1E24]" : "text-[#7E7E7E]"
                  }`}
                >
                  Vender
                </button>
                <button
                  onClick={() => setActiveBtn("reviews")}
                  className={`py-2 px-3 border-2 border-[#ECECEC] rounded-3xl text-sm  font-semibold ${
                    activeBtn === "reviews"
                      ? "text-[#EC1E24]"
                      : "text-[#7E7E7E]"
                  }`}
                >
                  Reviews
                </button>
              </div>

              <div className="text pt-5 pb-3 text-[#7e7e7e]">
                {activeBtn === "description" && (
                  <p>{productToShow[0]?.data?.long_description}</p>
                )}
                {activeBtn === "additionalInfo" && (
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quisquam mollitia nisi placeat, consectetur eveniet,
                    voluptates accusantium quod, illum reprehenderit deleniti
                    ipsa totam voluptatum tenetur ea perspiciatis exercitationem
                    blanditiis tempora doloribus. Minus tenetur minima fuga
                    aperiam velit molestiae, magni ea ducimus aspernatur aut,
                    qui reprehenderit incidunt aliquam debitis odio consequuntur
                    cum eveniet! Laboriosam, quos. Odio accusamus incidunt
                    pariatur illo exercitationem iste! Labore itaque officiis
                    eveniet fugit voluptatem adipisci, nobis optio provident,
                    facilis doloremque explicabo! Amet quos et obcaecati magnam
                    deleniti, quibusdam omnis ab mollitia tempora modi delectus
                    consequatur aperiam eum sunt. Adipisci nisi reiciendis
                    aperiam officia voluptate molestias iusto. Ullam quasi modi
                    id facilis. Quo, sequi natus. Temporibus doloribus nam
                    eligendi fugit impedit. Nobis sit maxime incidunt sequi
                    inventore porro in? Iusto animi minima a neque reprehenderit
                    excepturi nulla ducimus enim quaerat libero exercitationem
                    rerum esse nam nihil fugit, rem amet voluptatibus totam
                    similique velit ut est nemo. Nobis, omnis aliquam?
                  </p>
                )}
                {activeBtn === "vender" && (
                <div className="vendorDetails flex gap-3 flex-col">
                  <div className="name flex gap-5 items-center">
                    <h3 className="text-lg font-bold">Vendor Name :</h3>
                    <p className="text-lg text-black ">Rajan Singh</p>
                  </div>

                  <div className="name flex gap-5 items-center">
                    <h3 className="text-lg font-bold">Vendor Address :</h3>
                    <p className="text-lg text-black ">SCO 177 Bapu Bazar , Chandpol , Jaipir ,pincode-887878 </p>
                  </div>

                  <div className="name flex gap-5 items-center">
                    <h3 className="text-lg font-bold">Vendor Contact :</h3>
                    <p className="text-lg text-black ">+91 8146515975</p>
                  </div>
                </div>
                )}
                {activeBtn === "reviews" && <ProductReviews />}
              </div>
            </div>
          </div>

          <div className="col-span-3 ">{/* <ProductSideBar /> */}</div>
        </div>
        <div className="relatedProducts">
          <TodayDeal title ={'Related Products'}/>
        </div>

        <div className="subscribe">
          <SubscribeAnudaMart />
        </div>
      </div>
    </>
  );
}
