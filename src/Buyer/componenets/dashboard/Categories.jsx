import React, { useEffect, useState } from 'react'

import CustomSlider from '../../../Admin/components/CustomSlider'
import api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../slices/CategorySlice';


 function Categories() {

    const [categories , setCategories] = useState();

    let navigate = useNavigate();
    let dispatch = useDispatch();

    let allCategories = useSelector(state => state?.category.allCategories);
    console.log(allCategories);
    // useEffect(() => {
    //   setCategories(allCategories)
    // }, [])
    // 
    // console.log(categories);
    
  let productCategory = (item) => {
    let name = item.name.split(' ');
    let slug = name.join('-')
    // set current selected product in store 
    dispatch(changeCategory(item))
    navigate(`/shop/${slug}` , {state: {productsByCategory : item}})
  }
  return (
    <>
      <div>
        <h1 className='text-2xl font-semibold'>
            Categories
        </h1>

        <div className='mt-4 '>

    <CustomSlider itemsToShow = {allCategories?.data?.length < 6 ? allCategories?.data?.length : 6} slideItems ={allCategories?.data} >

        {allCategories?.data?.map((item, index) => (
            
          <div key={index} className='mt-2 ' >
             <div className='flex flex-col gap-8 items-center cursor-pointer w-[14.5rem] justify-center mx-2 py-3 rounded-lg bg-[#F4F6FA]' onClick={() => productCategory(item)}>   
            <div className="img flex justify-center items-center h-32">
            <img src={`${allCategories?.mediaUrl}${item.icon}`} alt={`Slide ${index}`} className='w-1/2 object-cover'/>
            </div>
            <div className='label '>
            <p className='text-[#253D4E]'>{item.name}</p>
            </div>
            </div>
          </div>
        ))}
        </CustomSlider>
        </div>
      </div>
    </>
  )
}


export default Categories
