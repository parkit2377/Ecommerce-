import React, { useEffect, useState } from "react";
import CustomSlider from "../../../Admin/components/CustomSlider";
import Rating from "@mui/material/Rating";
import { BsCurrencyRupee } from "react-icons/bs";
import api from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../slices/NotificationSlice";
import { addItem } from "../../slices/CartItemsSlice";
import { useNavigate } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";



const TodayDeal = (prop) => {
  const [deals, setDeals] = useState();
  const [productAdded, setProductAdded] = useState(false);

  let navigate = useNavigate();
  let dispatch = useDispatch();


  let itemsInCart = useSelector(state => state.cartItems.itemInCart)

  let todaysDeal = async () => {
    try {
      let response = await api.get("api/get_todaysDeal_products");
      setDeals(response.data);
      console.log(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    console.log(deals);
    console.log(itemsInCart);
    todaysDeal();
  }, []);



  let handleAddItemEvent = (e, item) => {
    e.stopPropagation();
    if (item.variant) {
      navigate(`/product-detail/${item.slug}`, { state: { product: item } });
    } else {
      dispatch(addItem({productToAdd : item , productQuantity : 1}));

      dispatch(
        show({ type: "success", message: "Product Added SuccessFully....." })
      );
    }
  };



   // Function to check if the product is in the cart
   const isProductInCart = (productId) => {
    return itemsInCart.some(cartItem => cartItem?.product?.productToAdd?._id === productId);
  };


  console.log(deals);
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">{prop.title}</h1>

        <div className="mt-10 md:mt-4">
          <CustomSlider itemsToShow={deals?.data?.length < 5 ? deals?.data?.length : 5} slideItems = {deals?.data}>
            {deals?.data?.map((item, index) => (
              
              
              <div key={index + 1} className="mt-2 p-3 ">
                <div
                  className="elementWrap flex flex-col cursor-pointer border-1 border-[#ECECEC] rounded-xl w-[17rem]"
                  onClick={() =>
                    navigate(`/product-detail/${item.slug}`, { state: { product: item } })
                  }
                >
                  <div className="image flex items-center justify-center relative p-  ">
                    <img
                      src={`${deals?.mediaUrl}${item?.thumbnail}`}
                      alt=""
                      className="w-full  object-contain h-60"
                    />
                    {item?.special_discount && (
                      <span
                        className="bg-[#f74b81] absolute top-0 left-0 px-2 rounded-[15px 50px 30px] text-white text-sm"
                        style={{ borderRadius: "20px 5px" }}
                      >
                        {item?.special_discount}
                        {item.special_discount_type === "flat" ? "/-" : "%"} off
                      </span>
                    )}
                  </div>
                  <hr />
                  <div className="details mx-2">
                    <p className="title text-sm text-[#888888] my-2">
                      {item?.brand_id?.name}
                    </p>
                    <span className="description text-md font-semibold">
                      {item?.product_name}
                    </span>
                    <br/>
                    <Rating
                      name="half-rating"
                      value={item.rating}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div className="price mx-2 flex justify-between items-center mb-3">
                    <div className="flex items-center text-[#ec1e24] font-semibold">
                      <div className="text-xl">
                        <BsCurrencyRupee />
                      </div>
                      {item?.special_discount ?<span>{item?.special_price}</span> : <span>{item?.unit_price}</span>}
                  {item?.special_discount && <div className="originalPrice text-sm flex items-center ml-1 line-through text-[#b6b6b6]">
                    <div >
                    <BsCurrencyRupee />
                    </div>
                    <span className="text-[#b6b6b6] ">{item?.unit_price}</span>
                  </div>}
                    </div>
                    <div className="add ">
                      
                      <button
                        className="flex items-center bg-[#fbd2d3] gap-2 px-2 py-2 rounded-lg text-[#ec1e24]"
                        // {isProductInCart(item.id) ? disabled : ''}
                        onClick={(e) => isProductInCart(item._id) ? '' : handleAddItemEvent(e, item)}
                      >
                        {isProductInCart(item._id) ? <IoCheckmark /> : <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.6428 6.76509C16.4438 5.51973 15.3594 4.61623 14.0646 4.61623H13.3853V4.38515C13.3853 1.96715 11.4181 0 9.00011 0C6.58209 0 4.61496 1.96713 4.61496 4.38515V4.61623H3.9356C2.6409 4.61623 1.55659 5.5206 1.35741 6.76509L0.0307028 15.0732C-0.0835331 15.7916 0.12417 16.5246 0.601018 17.0836C1.09864 17.6669 1.82994 18.001 2.60882 18.001H15.3912C16.1701 18.001 16.9014 17.6669 17.399 17.0836C17.8758 16.5246 18.0835 15.7916 17.9693 15.0732L16.6428 6.76509ZM6.00063 4.3852C6.00063 2.73136 7.34637 1.38474 9.00109 1.38474C10.6549 1.38474 12.0015 2.73048 12.0015 4.3852V4.61627H6.00151V4.3852H6.00063ZM16.3459 16.1845C16.1123 16.4597 15.7644 16.6164 15.3914 16.6164H2.609C2.23599 16.6164 1.88809 16.4597 1.65442 16.1845C1.4372 15.9301 1.34634 15.6134 1.39827 15.2914L2.72498 6.98328C2.81412 6.42335 3.33511 6.00101 3.93571 6.00101H4.61507V8.07805C4.61507 8.46058 4.92489 8.77039 5.30742 8.77039C5.68995 8.77039 5.99976 8.46058 5.99976 8.07805V6.00101H11.9998V8.07805C11.9998 8.46058 12.3096 8.77039 12.6921 8.77039C13.0747 8.77039 13.3845 8.46058 13.3845 8.07805V6.00101H14.0638C14.6645 6.00101 15.1854 6.42421 15.2746 6.98328L16.6013 15.2914C16.6524 15.6134 16.5615 15.931 16.3451 16.1845H16.3459Z"
                            fill="#EC1E24"
                          />
                        </svg>}
                        {
                        // let itemInCart = itemsInCart?.some((i) => (
                        // return i?.product?.productToAdd._id === item._id ? <p>Added</p> : <p>Add</p>
                        // ))

                        isProductInCart(item._id) ? 'Added' : 'Add'
                        
                        }
                        
                        {/* Add{" "} */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CustomSlider>
        </div>
      </div>
    </>
  );
}


export default React.memo(TodayDeal);
