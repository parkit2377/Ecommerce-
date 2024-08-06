import React, { useCallback, useEffect, useState } from "react";
import QuantitySelector from "../../../Admin/components/QuantitySelector";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineRefresh } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoGift } from "react-icons/go";
import SubscribeAnudaMart from "../SubscribeAnudaMart";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, removeItem } from "../../slices/CartItemsSlice";
import { Link, useNavigate } from "react-router-dom";
import { updateBilling } from "../../slices/BillingAmountSlice";
import "./yourCart.css";
import { show } from "../../slices/NotificationSlice";

export default function YourCart() {
  let dispatch = useDispatch();
  let ifUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let itemsInCart = useSelector((state) => state.cartItems.itemInCart);
  const navigate = useNavigate();

  const [rowData, setRowData] = useState([]);
  const [emptyCartNotify, setEmptyCartNotify] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    subTotal: 0,
    discount: 0,
    taxes: 0,
    shippingFee: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    console.log(itemsInCart);
    // setRowData(itemsInCart);
  }, [itemsInCart]);

  useEffect(() => {
    console.log(itemsInCart);
    // Getting Subtotal from all list items
    const total = itemsInCart.reduce((accumulator, row) => {
      const price = Number(row.product.productToAdd?.unit_price);
      const quantity = row.quantity;

      return accumulator + price * quantity;
    }, 0);
    // Calculate discount value
    const discount = (total * 10) / 100;

    // Total amount after all deductions and taxes
    const totalAmount = total - discount;

    setBillingDetails((prev) => ({
      ...prev,
      discount: discount,
      subTotal: total,
      totalAmount: totalAmount,
    }));
  }, [itemsInCart]);



  const columns = [
    {
      field: "product",
      headerName: "Product",
      width: 350,
      align: "left",

      renderCell: (params) => (
        <div className="flex items-center gap-2 justify-start mt-1 h-full">
          <div className="thumbnail">
            <img
              src={`http://192.168.29.130:3000/dist/product/${params.value?.productToAdd?.thumbnail}`}
              alt=""
              className="bg-transparent h-20 w-20 object-cover"
            />
          </div>

          <div className="text-xs flex flex-col gap-1">
            <p className="self-start text-[#253D4E] font-semibold">
              {params.value?.productToAdd?.product_name}
            </p>
            <div className="varients flex flex-col gap-1">
              <div className="size flex items-center gap-1">
                {params.value?.productToAdd?.prodVarient && (
                  <>
                    <p className="text-[#7e7f7f] font-semibold">Size : </p>
                    <p className="font-bold">
                      {params.value?.productToAdd?.prodVarient?.value}
                    </p>
                  </>
                )}
              </div>
              <div className="color flex items-center gap-1">
                <p className="text-[#7e7f7f] font-semibold">Color : </p>
                <p className="font-bold">Black</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
      align: "left",
      editable: false,

      renderCell: (params) => (
        <div className="flex items-center h-full">
          <QuantitySelector
            inputQuantity={params.value}
            onChange={(params, newVal) =>
              console.log("params :", params, "newVal : ", newVal)
            }
            rowData={params.row}
          />
        </div>
      ),
    },
    {
      field: "subTotal",
      headerName: "Sub Total",
      width: 200,
      align: "left",

      editable: false,
      valueGetter: (params, row) =>
        Number(row.product?.productToAdd?.unit_price) * row.quantity,
    },
    {
      field: "remove",
      headerName: "Remove",
      sortable: false,
      width: 160,

      align: "left",
      renderCell: (params) => (
        <button className="text-lg" onClick={() => removeRow(params.row)}>
          <IoTrashBinOutline />
        </button>
      ),
    },
  ];




  let removeRow = useCallback((row) => {
    console.log(row);
    dispatch(removeItem(row));
  },[]);


  let clearCart = () => {
    dispatch(clearCartItems());
  };




  const handleCheckout = useCallback( () => {
    console.log(ifUserLoggedIn);
    if (ifUserLoggedIn) {
      // check if cart is empty
      if (itemsInCart.length === 0) {
        dispatch(show({type : 'info' , message: 'No Item in Cart'}))
      } else {
        dispatch(updateBilling(billingDetails));
        navigate("/checkout");
      }
    } else {
      navigate("/sign-in" , {state : {previousPath: '/cart'}});
    }
  },[]);

  return (
    <>

      {/* <hr /> */}
      <div className="md:mx-5 mx-2">
        <h1 className="text-2xl font-semibold pt-4">Your Cart</h1>

        <div className="cartItems grid grid-cols-1 md:grid-cols-12 h-auto gap-3 items-start">
          <div className="cart col-span-12 md:col-span-8">
            <div className="heading flex justify-between my-3 text-[#7E7E7E] text-sm md:text-normal">
              <p className=" ">
                There are {itemsInCart.length} products in your cart
              </p>
              <span
                className="flex items-center gap-1 cursor-pointer"
                onClick={clearCart}
              >
                <IoTrashBinOutline />
                <p>Clear cart</p>
              </span>
            </div>
            <Box sx={{ height: 410, width: "100%" }}>
              <DataGrid
                className="custom-header"
                rowHeight={80}
                rows={itemsInCart}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 25, 50]}
                disableRowSelectionOnClick
                localeText={{ noRowsLabel: "Your Anuda Cart is empty." }}
              />
            </Box>

            <div className="actionBtns flex flex-col md:flex-row justify-between mt-4 gap-2">
              <Link to={"/shop"}>
                <button className="bg-[#EC1E24] flex items-center text-white gap-2 px-3 py-2 rounded-md justify-center w-full md:w-auto">
                  <FaArrowLeftLong /> <span>Continue Shopping</span>
                </button>
              </Link>
              {/* <button className="bg-[#EC1E24] flex items-center text-white gap-2 px-3 py-2 rounded-md justify-center w-full md:w-auto">
                <MdOutlineRefresh className="text-lg" />{" "}
                <span>Update Cart</span>
              </button> */}
            </div>

            <div className="applyCoupon pb-10">
              <h1 className="text-2xl font-semibold py-5">Apply Coupon</h1>

              <div className="couponBox">
                <div className="searchbar rounded-lg flex px-5 items-center py-10 gap-4 shadow-md border-1 border-[#ECECEC]">
                  <input
                    type="text"
                    className="w-full md:w-[80%] border-[#EC1E24] rounded-lg pl-3 border-1 h-10 outline-none placeholder:text-[#aaaaaa]"
                    placeholder="Enter Your Coupon"
                  />
                  <button className="px-3 py-2 bg-[#EC1E24] text-white flex items-center justify-center gap-2 rounded-md h-10">
                    <GoGift className="text-lg" />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {itemsInCart?.length !== 0 && (
            <div className="cartSummary col-span-12 md:col-span-4 p-4 border-1 border-[#aaaaaa] rounded-lg pb-5">
              <div className="itemsNmbr flex justify-between mb-3">
                <h1 className="text-xl font-bold">Cart Summary</h1>
                <p className="text-md text-[#aaaaaa] font-semibold">
                  {itemsInCart.length}{" "}
                  <span className="text-[#EC1E24]">items</span>
                </p>
              </div>

              <hr />

              <div className="subTotal flex justify-between py-3">
                <h1 className="text-sm font-bold">Sub Total</h1>
                <p className="text-sm text-[#EC1E24] font-bold gap-1 flex items-center">
                  <FaIndianRupeeSign /> {billingDetails.subTotal}
                </p>
              </div>

              <div className="discount flex justify-between py-3">
                <h1 className="text-sm font-bold">Discount</h1>
                <p className="text-sm text-[#EC1E24] font-bold gap-1 flex items-center">
                  <FaIndianRupeeSign /> {billingDetails.discount}
                </p>
              </div>

              <div className="taxes flex justify-between py-3">
                <h1 className="text-sm font-bold">Taxes</h1>
                <p className="text-sm text-[#EC1E24] font-bold gap-1 flex items-center">
                  <FaIndianRupeeSign /> {billingDetails.taxes}
                </p>
              </div>

              <div className="shippingHandeling flex justify-between py-3">
                <h1 className="text-sm font-bold">Shipping & Handling</h1>
                <p className="text-sm text-[#EC1E24] font-bold gap-1 flex items-center">
                  <FaIndianRupeeSign /> {billingDetails.shippingFee}
                </p>
              </div>

              <hr />

              <div className="totalPrice flex justify-between py-3">
                <h1 className="text-md font-bold">Total</h1>
                <p className="text-md text-[#EC1E24] font-bold gap-1 flex items-center">
                  <FaIndianRupeeSign /> {billingDetails.totalAmount}
                </p>
              </div>

              <div className="updateCart mt-10 text-center flex justify-center">
                {/* <Link to={'/checkout'} className="w-full"> */}
                <button
                  className="bg-[#EC1E24] w-full py-2 rounded-xl text-white flex items-center justify-center gap-2"
                  onClick={handleCheckout}
                >
                  <span className="text-lg">
                    <IoLogOutOutline />
                  </span>{" "}
                  Checkout
                </button>
                {/* </Link> */}
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <SubscribeAnudaMart />
        </div>
      </div>
    </>
  );
}
