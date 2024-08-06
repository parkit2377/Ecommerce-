import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './Buyer/componenets/signIn/SignIn.jsx'
import SignUp from './Buyer/componenets/signUp/SignUp.jsx'
import Dashboard from './Buyer/componenets/dashboard/Dashboard.jsx'
import SellOnAnuda from './Buyer/componenets/sellOnAnuda/SellOnAnuda.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'
import AdminLayout from './Admin/AdminLayout.jsx'
import AdminDashboard from './Admin/pages/AdminDashboard.jsx'
import GettingStarted from './Admin/pages/gettingStarted/GettingStarted.jsx'
import YourCart from './Buyer/componenets/yourCart/YourCart.jsx'
import Checkout from './Buyer/componenets/checkout/Checkout.jsx'
import Profile from './Buyer/componenets/profile/Profile.jsx'
import ContactUs from './Buyer/componenets/contactUs/ContactUs.jsx'
import Shop from './Buyer/componenets/shop/Shop.jsx'
import ProductDetail from './Buyer/componenets/productDetail/ProductDetail.jsx'
import Vendor from './Buyer/componenets/signUp/vendor/Vendor.jsx'
import ChangePassword from './Buyer/componenets/profile/ChangePassword.jsx'
import VendorAddProduct from './Buyer/componenets/VendorAddProduct/VendorAddProduct.jsx'
import ProductsByCategory from './Buyer/componenets/shop/ProductsByCategory.jsx'




  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path: '',
          element:<Dashboard/>            
        },
        {
          path: 'cart',
          element: <YourCart/>
        },
        {
          path: 'sign-in',
          element:<SignIn/>
        },
        {
          path:'sign-up',
          element:<SignUp/>
        },
        {
          path:'sell-on-anuda',
          element:<SellOnAnuda/>
        },
        {
          path: 'checkout',
          element: <Checkout/>
        },
        {
          path: 'profile',
          element: <Profile/>,
        },
        {
          path: 'contact-us',
          element: <ContactUs/>
        },
        {
          path: 'shop',
          element: <Shop/>,
          // children : [
          //   {
          //     path: 'shop/:category'
          //   }
          // ]
        },
        {
          path: 'shop/:category',
          element: <Shop/>
          // element: <ProductsByCategory/>
        },
        {
          path: 'shop/:parentProd/:child',
          element: <Shop/>
        },
        {
          path: 'product-detail',
          element: <ProductDetail/>
        },
        {
          path: 'product-detail/:name',
          element: <ProductDetail/>
        },
        {
          path: 'vendor-signup',
          element: <Vendor/>
        },
        {
          path: 'vendor-add-product',
          element: <VendorAddProduct/>
        },
        {
          path: 'admin/',
          element:<AdminLayout/>,
          children:[
            {
              path:'dashboard',
              element: <AdminDashboard/>
            },
            {
              path: 'getting-started',
              element: <GettingStarted/>
            }
          ]
        }
      ]
    }

  ])












ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
