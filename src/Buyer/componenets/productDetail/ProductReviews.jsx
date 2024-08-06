import { Rating } from "@mui/material";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import './productReviews.css'


function ProductReviews() {
  return (
    <>
      <div className="reviews bg-[#f5f5f5] px-2 py-5 rounded-lg ">
        <div className="content grid grid-cols-12">
            <div className="ratingSection col-span-4 flex justify-center flex-col items-center gap-2">
            <div className="rating h-32 w-32 rounded-full border-3 border-[#ffd001] flex items-center justify-center flex-col text-black">
                    <h2 className="text-3xl">0</h2>
                    <p>Out of 0</p>
            </div>

            <div className="starRating flex flex-col items-center ">
            <Rating
                  size="small"
                  name="half-rating"
                  value={4}
                  precision={0.5}
                  readOnly
                  className="text-start mt-1"
                //   onChange={handleRatingChange}
                />
                <p className="">(0) Reviews</p>
            </div>
            </div>

            <div className="barRating col-span-8 flex flex-col gap-4">
            <div className="oneStar flex items-center gap-3">
                <p>1 Star</p>
                <div className="w-[90%]">
                <ProgressBar completed="60" customLabel='  ' />
                </div>
            </div>

            <div className="twoStar flex items-center gap-3">
                <p>2 Star</p>
                <div className="w-[90%]">
                <ProgressBar completed="70" customLabel=' '/>
                </div>
            </div>

            <div className="threeStar flex items-center gap-3">
                <p>3 Star</p>
                <div className="w-[90%]">
                <ProgressBar completed="40"/>
                </div>
            </div>

            <div className="fourStar flex items-center gap-3">
                <p>4 Star</p>
                <div className="w-[90%]">
                <ProgressBar completed="20"/>
                </div>
            </div>

            <div className="fiveStar flex items-center gap-3">
                <p>5 Star</p>
                <div className="w-[90%]">
                <ProgressBar completed="100"/>
                </div>
            </div>
        </div>

        </div>


      
      </div>
    </>
  );
}

export default ProductReviews;
