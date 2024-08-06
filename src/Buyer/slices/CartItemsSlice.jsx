import {createSlice , nanoid } from '@reduxjs/toolkit';


    
export const cartItemsSlice = createSlice({
    name : 'cartItems',
    initialState : {itemInCart : []},
    reducers:{


        addItem: (state, action) => {
            console.log(action.payload);
            const newItem = {
                id: nanoid(),
                product: action.payload,
                quantity: action.payload?.productQuantity  // Default quantity for a new item
            };
            console.log(action.payload);
            const existingItemIndex = state.itemInCart.findIndex(
                (i) => i.product?.productToAdd?._id === newItem.product.productToAdd?._id &&
                      i.product?.productToAdd?.prodVarient?._id === newItem?.product?.productToAdd?.prodVarient?._id
            );
        
            if (existingItemIndex === -1) {
                // Item doesn't exist, add it to the cart
                return {
                    ...state,
                    itemInCart: [...state.itemInCart, newItem]
                };
            } else {
                // Item already exists, update its quantity
                const updatedCart = state.itemInCart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: action.payload?.productQuantity } : item
                );
        
                return {
                    ...state,
                    itemInCart: updatedCart
                };
            }
        },
        
        
        removeItem : (state , action) =>{
            state.itemInCart = state.itemInCart.filter((item) => item.id !== action.payload.id)
        },
        clearCartItems : (state , action) => {
            state.itemInCart = []
        },
        increaseProductQuantity : (state , action) => {
            console.log(action.payload);
            console.log(state.itemInCart);
            state.itemInCart.map((i) => {
                if(i.id === action.payload.id){
                    console.log('true')
                    i.quantity += 1;
                }
            })
        },

        decreaseProductQuantity : (state , action) => {
            // console.log(action);
            state.itemInCart.map((i) => {
               
                if (i.id === action.payload.id){
                    if (i.quantity === 1){
                        state.itemInCart = state.itemInCart.filter((i) => i.id !== action.payload.id)
                        return
                    }
                    else{
                    i.quantity -= 1
                    }

                }
                
            })
            
        },

        updateProductQuantity : (state , action) => {
            console.log(action.payload);
            console.log(state.itemInCart);
            state.itemInCart.map((i) => {
                
                if(i?.id === action.payload?.id){
                    i.quantity += 1;
                }
            })
        },
       
    }
})


export const {addItem , removeItem , clearCartItems , increaseProductQuantity , decreaseProductQuantity , updateProductQuantity} = cartItemsSlice.actions

export default cartItemsSlice.reducer
