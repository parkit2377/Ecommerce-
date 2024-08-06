import React, { useCallback, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { BsCurrencyRupee } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../slices/CartItemsSlice";
import api from "../../../services/api";
import { IoSearch } from "react-icons/io5";
import Loader from "../../loader/Loader";
import { show } from "../../slices/NotificationSlice";
import { IoCheckmark } from "react-icons/io5";


export default function Products(prop) {
  const [productList, setProductList] = useState();
  const [product, setProduct] = useState();
  const [unfilteredData , setUnfilteredData] = useState()
  const [filteredProduct , setFilteredProduct] = useState()


  let dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();

  let productsByCategory = location.state?.productsByCategory;
  let searchedProducts = location.state?.searchedProducts;
  let categoryClicked = location.state?.categoryClicked;
  let childProduct = location.state?.childProduct;

  let itemsInCart = useSelector(state => state.cartItems.itemInCart)


  let allProducts = useCallback( async () => {
    // if (prop.filterSelected?.length === 0){
    try {
      let response = await api.post(
        "api/get_all_products",
        {},
        {
          headers: {},
        }
      );
      console.log(response.data);
      
      setProductList(response.data?.data);
      setProduct(response.data);
      setUnfilteredData(response.data.data)
    } catch (error) {
        throw(error);
    }
  // }
  },[]);


  // useEffect(() => {
  //   // to check if user coming by searching a product
  //   if (searchedProducts !== null && searchedProducts !== undefined) {

  //     // to check if any filter has been applied 
  //     if (prop.filterSelected?.length > 0){
  //       console.log(searchedProducts); 
  //       let filtertedProd = searchedProducts.filter((item) => {
  //         return prop.filterSelected.some((filter) => {
  //           if(item.brand_id?._id === filter.id){
  //          console.log(item);
  //          return item
  //           }
  //         })
          
  //       })
  //       console.log(filtertedProd);
  //       setProductList(filtertedProd)
  //     }else{
  //       window.scrollTo({ top: 0 });
  //     setProduct(searchedProducts);
  //     setProductList(searchedProducts.products);}
  //     return;
  //   }

  //   // to check if user coming for products using catergory filter
  //   if (productsByCategory !== null && productsByCategory !== undefined) {
      

  //     // to check if any filter has been applied 
  //     if (prop.filterSelected?.length > 0){
        // let filtertedProd = productsByCategory?.data?.filter((item) => {
        //   return prop.filterSelected.some((filter) => {
        //     if(item.brand_id?._id === filter.id){
        //    console.log(item);
        //    return item
        //     }
        //   })
          
  //       })
  //       console.log(filtertedProd);
  //       setProductList(filtertedProd)
  //     }else{
  //       window.scrollTo({ top: 0 });
  //     setProduct(productsByCategory);
  //     setProductList(productsByCategory.data);}
  //     return;
  //   }

  //   if (categoryClicked !== null && categoryClicked !== undefined) {
     
  //     // to check if any filter has been applied 
  //     if (prop.filterSelected?.length > 0){
  //       let filtertedProd = categoryClicked?.data?.filter((item) => {
  //         return prop.filterSelected.some((filter) => {
  //           if(item.brand_id?._id === filter.id){
  //          console.log(item);
  //          return item
  //           }
  //         })
          
  //       })
  //       console.log(filtertedProd);
  //       setProductList(filtertedProd)
  //     }else{
  //       window.scrollTo({ top: 0 });
  //     setProduct(categoryClicked);
  //     setProductList(categoryClicked.data);
  //     }
  //     return;
  //   }


  //   if (childProduct !== null && childProduct !== undefined){

  //     if (prop.filterSelected?.length > 0){
  //       let filtertedProd = childProduct?.data?.filter((item) => {
  //         return prop.filterSelected.some((filter) => {
  //           if(item.brand_id?._id === filter.id){
  //          console.log(item);
  //          return item
  //           }
  //         })
          
  //       })
  //       console.log(filtertedProd);
  //       setProductList(filtertedProd)
  //     }else{
  //     console.log(childProduct);
  //     window.scrollTo({ top: 0 });
  //     setProduct(childProduct);
  //     setProductList(childProduct.data);
  //   }
  //     return
  //   }


  //   // to get all the products
  //   if (prop.filterSelected?.length === 0){
  //   allProducts();
  // }




  //   if (prop.filterSelected?.length > 0){
  //     console.log(productList); 
  //     let filtertedProd = unfilteredData.filter((item) => {
  //       return prop.filterSelected.some((filter) => {
  //         if(item.brand_id?._id === filter.id){
  //        console.log(item);
  //        return item
  //         }
  //       })
        
  //     })
  //     console.log(filtertedProd);
  //     setProductList(filtertedProd)
  //   }else{
  //     setProductList(unfilteredData)
  //   }
  // }, [categoryClicked , prop]);


  const handleProductFilter = (products) => {
    if (prop.filterSelected?.length > 0) {
      // return products.filter((item) =>
        
      //   prop.filterSelected.some((filter) => item.brand_id?._id === filter.id)
      // );
      let filtertedProd = products?.filter((item) => {
        return prop.filterSelected.some((filter) => {
          if(item.brand_id?._id === filter.id){
         console.log(item);
         return item
          }
        })
      })
      console.log(filtertedProd);
      // setProductList(filtertedProd)
      return filtertedProd;
    }
    
    
    
    
  };


  useEffect(() => {
    console.log(prop.filterSelected);

    if (productList && prop.filterSelected?.length > 0){
      setProductList(handleProductFilter(unfilteredData))
    }else{
    allProducts();
    }
    // if (searchedProducts) {
    //   setProductList(handleProductFilter(searchedProducts.products));
    // } else if (productsByCategory) {
    //   setProductList(handleProductFilter(productsByCategory.data));
    // } else if (categoryClicked) {
    //   setProductList(handleProductFilter(categoryClicked.data));
    // } else if (childProduct) {
    //   setProductList(handleProductFilter(childProduct.data));
    // } else {
      
    // }


  }, [prop.filterSelected]);



  // setting max no. of products to show on 1 page
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  console.log(productList);
  const displayedItems = productList?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );




  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  // add items to cart 
  let handleAddItemEvent = (e, item) => {
    e.stopPropagation();
    console.log(item);
    if (item.variant){
      navigate(`/product-detail/${item.slug}`, { state: { product: item } })
    }else{
    dispatch(addItem({productToAdd : item , productQuantity : 1}));
    dispatch(show({type : 'success' , message : 'Product added successfully...'}))
    }
  };




  let searchFromProducts = (val) => {
      console.log(val);
      console.log(unfilteredData);
    if(val === '' ) setProductList(unfilteredData)
    else{
      let filterBySearch = unfilteredData?.filter((item) => {
        if (item?.product_name?.toLowerCase()
            .includes(val?.toLowerCase())) { return item }
    })

    setProductList(filterBySearch)

   }
  }



     // Function to check if the product is in the cart
     const isProductInCart = (productId) => {
      return itemsInCart.some(cartItem => cartItem?.product?.productToAdd?._id === productId);
    };
  
  return (
    <>


<div className="searchProducts flex justify-between items-center pt-3">
        <div className="search border-1 border-[#e4e7e9] flex justify-between items-center h-10">
          <input
            type="text"
            className="outline-none ml-2 w-full h-full"
            placeholder="Search..."
            onChange={e => searchFromProducts(e.target.value)}
          />
          <IoSearch className="text-2xl mx-2" />
        </div>

        <div className="sortBy flex gap-2 items-center">
          <p className="text-sm">Sort By : </p>
          <div className="selectSortType flex items-center justify-center">
            <select
              name=""
              id=""
              className="outline-none border-1 border-[#e4e7e9] h-10 px-2"
            >
              <option value="">Most Popular</option>
              <option value="">New Arrivals</option>
              <option value="">Top Picks</option>
            </select>
          </div>
        </div>
      </div>

     
      {!displayedItems ? (
        <div className="h-screen flex justify-center items-center">
          {/* <p className="text-xl font-bold">No Product Found</p> */}
          <Loader/>
        </div>
      ) : (
        <>
          <div className="products grid grid-cols-12">
            {displayedItems?.map((item, index) => (
              <div
                key={index}
                className="mt-2 p-3  col-span-12 sm:col-span-4 lg:col-span-3 "
              >
                <div
                  className="elementWrap flex flex-col  border-1 border-[#ECECEC] rounded-xl cursor-pointer"
                  onClick={() =>
                    navigate(`/product-detail/${item.slug}`, { state: { product: item } })
                  }
                >
                  <div className="image flex items-center justify-center relative">
                    <img
                      src={product?.mediaUrl + item?.thumbnail}
                      alt=""
                      className=" object-contain w-full rounded-t-xl h-[16rem]"
                    />
                    {item?.special_discount && (
                      <span
                        className="bg-[#f74b81] absolute top-0 left-0 px-2 rounded-[15px 50px 30px] text-white text-sm"
                        style={{ borderRadius: "50px 15px" }}
                      >
                        {item?.special_discount}{item.special_discount_type === 'flat' ? '/-' : '%'} off
                      </span>
                    )}
                  </div>
                  <hr />
                  <div className="details mx-2">
                    <p className="title text-sm text-[#888888] my-2">
                      {item.brand_id?.name}
                    </p>
                    <span className="description text-md font-semibold">
                      {item?.product_name}
                    </span>
                    <div className="my-3">
                      <Rating
                        name="half-rating"
                        value={item?.rating}
                        precision={0.5}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
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
                        isProductInCart(item._id) ? 'Added' : 'Add'
                        }
                        
                        {/* Add{" "} */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination flex justify-center items-center  py-2 ">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(productList?.length / itemsPerPage)}
                page={page}
                onChange={handleChange}
                shape="rounded"
              />
            </Stack>
          </div>
        </>
      )}
    </>
  );
}
