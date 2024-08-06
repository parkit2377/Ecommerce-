import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    subTotal: 0,
    discount: 0,
    taxes: 0,
    shippingFee: 0,
    totalAmount: 0,
}

export const billingAmountSlice = createSlice({
  name: "billingAmountDetails",
  initialState,
  reducers : {
    updateBilling: (state, action) => {
      const { subTotal, discount, taxes, shippingFee , totalAmount} = action.payload;
      state.subTotal = subTotal !== undefined ? subTotal : state.subTotal;
      state.discount = discount !== undefined ? discount : state.discount;
      state.taxes = taxes !== undefined ? taxes : state.taxes;
      state.shippingFee = shippingFee !== undefined ? shippingFee : state.shippingFee;
      state.totalAmount = totalAmount !== undefined ? totalAmount : state.totalAmount;
        
    },
  },
    
  
});


export const {updateBilling} = billingAmountSlice.actions

export default billingAmountSlice.reducer