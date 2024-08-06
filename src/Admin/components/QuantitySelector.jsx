import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

import { FaPlus , FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseProductQuantity , decreaseProductQuantity } from '../../Buyer/slices/CartItemsSlice';

export default function QuantitySelector({inputQuantity = 0 , onChange , rowData , setProductQuantity}) {
    const [quantity , setQuantity] = useState();


  let cartData = useSelector(state => state.cartItems.itemInCart )

    let dispatch = useDispatch()


    useEffect(()=>{

      if (inputQuantity === 0){
        if (setProductQuantity !== null && setProductQuantity !== undefined){
          setProductQuantity(inputQuantity + 1)
        }
        setQuantity(1)
      }else{
      setQuantity(inputQuantity)
      
      }
    } , [inputQuantity])



  //   useEffect(() => {
  //     if (onChange) {
  //         onChange(quantity);
  //     }
  // }, [quantity, onChange]);
    
    let increment = ()=>{
      
      setQuantity(quantity + 1)
      // setProductQuantity(inputQuantity + 1)
      if (setProductQuantity !== null && setProductQuantity !== undefined){
        setProductQuantity(inputQuantity + 1)
      }
    dispatch(increaseProductQuantity(rowData));

    }

    let decrement = ()=>{
        if(quantity > 0)
        setQuantity(quantity - 1)
      if (setProductQuantity !== null && setProductQuantity !== undefined){
        setProductQuantity(inputQuantity - 1)
      }
        dispatch(decreaseProductQuantity(rowData));
    }

    useCallback(() =>{
      dispatch()
    })


  return (
    <>

    <div className="box w-28 px-2 border-2 border-[#EBEBEB] rounded-lg  flex justify-between items-center h-8 text-xs" onChange={onChange}>

    <div className="decrement ">
        <FaMinus onClick={decrement}/>
        </div>
        <div>
        <p className='font-bold'>{quantity}</p>
        </div>
        <div className="increment text-[#ec1e25]">
        <FaPlus onClick={increment}/>
        </div>
        

    </div>
      
    </>
  )
}


// export default  QuantitySelector