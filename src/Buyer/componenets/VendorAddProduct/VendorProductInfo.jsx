import React from 'react'

export default function VendorProductInfo() {
  return (
    <>
    <div className="form">
        <div className="vendorProductInfo grid grid-cols-12 gap-4 py-1">
                <div className="vendorName col-span-6">
                    <label htmlFor="vendorName" className='mx-1 my-1 text-sm'>Select Vendor</label>
                    <input type="text"  className='vendorName w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Select Vendor'/>
                </div>
                <div className="vendorCategory col-span-6">
                    <label htmlFor="vendorCat" className='mx-1 my-1 text-sm'>Select Categories</label>
                    <input type="text"  className='vendorCat w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Select Categories'/>
                </div>
        </div>

        <div className=" grid grid-cols-12 gap-4 py-1">
                <div className="productName col-span-6">
                    <label htmlFor="vendorName" className='mx-1 my-1 text-sm'>Product Name</label>
                    <input type="text"  className='vendorName w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Product Name'/>
                </div>
                <div className="brand col-span-6">
                    <label htmlFor="vendorCat" className='mx-1 my-1 text-sm'>Brand</label>
                    <input type="text"  className='vendorCat w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Brand'/>
                </div>
        </div>


        <div className="quantity grid grid-cols-12 gap-4 py-1">
                <div className="Unit col-span-6">
                    <label htmlFor="vendorName" className='mx-1 my-1 text-sm'>Unit</label>
                    <input type="text"  className='vendorName w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Unit'/>
                </div>
                <div className="minOrderQuantity col-span-6">
                    <label htmlFor="vendorCat" className='mx-1 my-1 text-sm'>Min Order Quantity</label>
                    <input type="text"  className='vendorCat w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Minimum Quantity'/>
                </div>
        </div>

        <div className="tagSlug grid grid-cols-12 gap-4 py-1">
                <div className="tag col-span-6">
                    <label htmlFor="vendorName" className='mx-1 my-1 text-sm'>Tags</label>
                    <input type="text"  className='vendorName w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Tags'/>
                </div>
                <div className="slug col-span-6">
                    <label htmlFor="vendorCat" className='mx-1 my-1 text-sm'>Slug</label>
                    <input type="text"  className='vendorCat w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Slug'/>
                </div>
        </div>


        <div className="vendorProductInfo grid grid-cols-12 gap-4 py-1">
                <div className="status col-span-6">
                    <label htmlFor="vendorName" className='mx-1 my-1 text-sm'>Status</label>
                    <input type="text"  className='vendorName w-full outline-none border-1 border-[#dde1ef] pl-2 py-2 rounded-md' placeholder='Status'/>
                </div>

        </div>
    </div>
      
    </>
  )
}
