import React, { useState } from 'react'
import VendorProductInfo from './VendorProductInfo'
import VendorImagesForm from './VendorImagesForm'
import VendorProductPriceForm from './VendorProductPriceForm'
import VendorProductDescriptionForm from './VendorProductDescriptionForm'
import VendorOtherInfo from './VendorOtherInfo'
import VendorSeoForm from './VendorSeoForm'

export default function VendorAddProduct() {

    const [toggleForm , setToggleForm] = useState('info')



    let FormToggle = (formName) => {
        setToggleForm(formName)
    }
  return ( 
    <>
    {/* {selectedForm === 'personal' &&< div className="absolute top-full left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>} */}
      <div className="vendorAddProduct h-full py-3 bg-[#f7f7f7]">
        <h2 className='font-bold text-lg p-4'>ADD PRODUCT</h2>

        <div className="formsToggle flex items-center mx-4 gap-4 text-sm py-3">
            <div className='relative'>
            <button type="button" className={`${toggleForm === 'info' ? 'bg-[#e40f15] h-10 w-auto px-3 rounded-md text-white' : ''}`} onClick={() => FormToggle('info')}>Product Information</button>

            {toggleForm === 'info' &&< div className="absolute top-full mt-0.5 left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
            </div>

            <div className='relative'>
            <button type="button" className={`${toggleForm === 'images' ? 'bg-[#e40f15] h-10 w-auto px-3 rounded-md text-white' : ''}`} onClick={() => FormToggle('images')}>Images & Videos</button>

            {toggleForm === 'images' &&< div className="absolute top-full mt-0.5 left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
            </div>

            <div className='relative'>
            <button type="button" className={`${toggleForm === 'price' ? 'bg-[#e40f15] h-10 w-auto px-3 rounded-md text-white' : ''}`} onClick={() => FormToggle('price')}>Product Price & Stocks</button>

            {toggleForm === 'price' &&< div className="absolute top-full mt-0.5 left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
            </div>

            <div className='relative'>
            <button type="button" className={`${toggleForm === 'description' ? 'bg-[#e40f15] h-10 w-auto px-3 rounded-md text-white' : ''}`} onClick={() => FormToggle('description')}>Description & Specification</button>

            {toggleForm === 'description' &&< div className="absolute top-full mt-0.5 left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
            </div>

            <div className='relative'>
            <button type="button" className={`${toggleForm === 'others' ? 'bg-[#e40f15] h-10 w-auto px-3 rounded-md text-white' : ''}`} onClick={() => FormToggle('others')}>Others</button>

            {toggleForm === 'others' &&< div className="absolute top-full mt-0.5 left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
            </div>

            <div className='relative'>
            <button type="button" className={`${toggleForm === 'seo' ? 'bg-[#e40f15] h-10 w-auto px-3 rounded-md text-white' : ''}`} onClick={() => FormToggle('seo')}>SEO</button>

            {toggleForm === 'seo' &&< div className="absolute top-full mt-0.5 left-1/2 transform -translate-x-1/2" style={{width :0 ,height : 0,  borderLeft: '8px solid transparent' , borderRight : '8px solid transparent' , borderTop: '8px solid #e40f15'}}> </div>}
            </div>
            
            
        </div>

        <div className='min-h-[80%]  flex items-center justify-center '>
        <div className="forms m-3 bg-white py-3 px-4 w-full rounded-md">
            {toggleForm === 'info' && <VendorProductInfo/>}
            {toggleForm === 'images' && <VendorImagesForm/>}
            {toggleForm === 'price' && <VendorProductPriceForm/>}
            {toggleForm === 'description' && <VendorProductDescriptionForm/>}
            {toggleForm === 'others' && <VendorOtherInfo/>}
            {toggleForm === 'seo' && <VendorSeoForm/>}
        </div>
        </div>
      </div>
    </>
  )
}
