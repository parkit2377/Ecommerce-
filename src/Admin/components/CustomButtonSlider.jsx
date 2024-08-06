import React from 'react'

const CustomNextArrow = ({ onClick }) => {
    return (
      <button
      style={{transform: 'translateY(-100%)'}}
        onClick={onClick}
     className='top-0 absolute right-0 rounded-full bg-[#F2F3F4] font- h-10 w-10' >
        &rarr;
      </button>
    );
  };
  
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button style={{transform: 'translateY(-100%)'}}
      className='top-0 absolute right-12  rounded-full bg-[#F2F3F4] font- h-10 w-10' 
        onClick={onClick}
      >
        &larr;
      </button>
    );
  };
  
  export { CustomNextArrow, CustomPrevArrow };