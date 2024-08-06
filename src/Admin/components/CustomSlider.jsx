import React , {Children} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow , CustomPrevArrow } from './CustomButtonSlider';




 export default function CustomSlider({children , itemsToShow , slideItems}  ) {


    const settings = {
        dots: false,
        infinite: slideItems?.length > itemsToShow,
        speed: 500,
        slidesToShow: itemsToShow,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
  return (
    

<Slider {...settings}>

    {children}

</Slider>
      
    
  )
}
