import {configureStore} from '@reduxjs/toolkit';
import toggleNavReducer from '../Buyer/slices/NavBarSlice'
import adminToggleSidenavReducer from '../Admin/slices/AdminSideNavSlice';
import cartItemsReducer from '../Buyer/slices/CartItemsSlice';
import billingAmountReducer from '../Buyer/slices/BillingAmountSlice';
import authReducer from '../Buyer/slices/LoginSlice'
import categoryReducer from '../Buyer/slices/CategorySlice'
import notificationReducer from '../Buyer/slices/NotificationSlice'


export const store = configureStore({
    reducer : {
        toggleNav : toggleNavReducer,
        adminToggleSidenav : adminToggleSidenavReducer,
        cartItems : cartItemsReducer,
        billingAmountDetails : billingAmountReducer,
        auth : authReducer,
        category : categoryReducer,
        notification : notificationReducer,

    }
})