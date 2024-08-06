import React, { useState } from 'react'
import plumbingSvg from '../../../assets/images/newImages/plumbingSvg.svg'
import steelIronSvg from '../../../assets/images/newImages/steelIronSvg.svg'
import electroSvg from '../../../assets/images/newImages/electroSvg.svg'
import flooringSvg from '../../../assets/images/newImages/flooringSvg.svg'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { BsCurrencyRupee } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";


export default function ProductSideBar() {



    const [value, setValue] = useState([20, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

    let categories = [
        {
            svg : plumbingSvg,
            text : 'Plumbing',
            totalItems : 20
        },
        {
            svg : steelIronSvg,
            text : 'Steel & Iron',
            totalItems : 140
        },
        {
            svg : electroSvg,
            text : 'Electronics',
            totalItems : 98
        },
        {
            svg : flooringSvg,
            text : 'Flooring',
            totalItems : 66
        },
        {
            svg : plumbingSvg,
            text : 'Plumbing',
            totalItems : 12
        },
        {
            svg : electroSvg,
            text : 'Electronics',
            totalItems : 129
        },
    ]

    let fillByPrice = [
        {
            title : 'Color',
            option : [
                {
                    label : 'Blue',
                    item : 21
                },
                {
                    label : 'Red',
                    item : 90
                },
                {
                    label : 'Orange',
                    item : 120
                },

            ]
        },
        {
            title : 'Item Condition',
            option : [
                {
                    label : 'New',
                    item : 210
                },
                {
                    label : 'Refurbished',
                    item : 9
                },
                {
                    label : 'Used',
                    item : 10
                },

            ]
        }

    ]



  return (
    <>


    <div className="categories p-4 border-2 border-[#ECECEC] rounded-lg mt-2">
        <h1 className='text-2xl text-[#253D4E] font-semibold py-2'>Categories</h1>

        <hr />

        <ul className='pt-3'>
            {categories.map((item , index) => {
                return <li key={index} className='flex justify-between items-center py-2 border-1 border-[#ECECEC] rounded-lg px-2 my-3'>
                    <div className='flex gap-3 items-center'>
                        <img src={item.svg}  alt="" />{item.text}
                    </div>
                    <div className='text-[#EC1E24] w-8 h-8 rounded-[50%] flex justify-center items-center bg-[#FBD2D3] '>
                        {item.totalItems}
                    </div>
                </li>
            })}
        </ul>
    </div>


    <div className="fillByPrice p-4 border-2 border-[#ECECEC] rounded-lg mt-2">
        <h1 className='text-2xl text-[#253D4E] font-semibold py-2'>Fill by price</h1>

        <hr />

        <div className="rangeSelector flex justify-center items-center mt-2 flex-col">
                <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    size="small"
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    color="secondary"
                />
                </Box>

                <div className="range self-start flex justify-between w-full">

                    <div className="from flex gap-2 items-center">
                        <p className='text-[#808080]'>From:</p>
                        <p className='flex items-center text-[#EC1E24]'><BsCurrencyRupee />{value[0]}</p>
                    </div>

                    <div className="to flex gap-2 items-center">
                        <p className='text-[#808080]'>To:</p>
                        <p className='flex items-center text-[#EC1E24]'><BsCurrencyRupee />{value[1]}</p>
                    </div>


                </div>
                </div>

        <ul className='pt-3'>
            {fillByPrice.map((item , index) => {
                return <li key={index}>
                    <h4 className='py-2 text-lg font-semibold'>{item.title}</h4>
                    {item.option.map((i , index) =>{
                        return <div key={index} className='flex gap-2 items-center'>
                            <input type="checkbox" name="" id="" className='border-[#ECECEC] border-2'/> 
                            <p className='py-2 text-[#687188]'>{i.label} ({i.item})</p>
                            </div>
                    })}
                </li>
            })}
        </ul>

        <div className="filterBtn pt-3 pb-2">
        <button className='flex items-center text-lg px-4 py-2 bg-[#EC1E24] text-white rounded-lg gap-2'><HiOutlineFilter  className='text-xl font-semibold'/><span>Filter</span></button>
    </div>  
    </div>


    
      
    </>
  )
}
