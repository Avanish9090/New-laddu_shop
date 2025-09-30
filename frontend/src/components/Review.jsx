import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import Feedback from "./Feedback";
import axios from "axios";
import ResponsiveSlides from "../hooks/useResponsiveSlides";

function Review() {
  const [Rdata, setRdata] = useState([]);
   const responsive = ResponsiveSlides();
  const [loading , setLoading] = useState(true)

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: responsive,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get("https://new-laddu-shop-backend.onrender.com/all-reviews");
        setRdata(res.data.allReviews);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    };
    getReviews();
  }, []);  
  return (
    <>
      <div className="border border-gray-400 rounded shadow-lg  bg-white  my-3 p-2 md:mx-3">
        <h1 className="text-4xl text-center font-black my-3">
          Customers <span className="text-orange-400">Review</span> !!
        </h1>
        <div className="py-5">
          {loading ? (
            <div className="flex justify-center items-center">
                <button
                type="button"
                className="flex items-center bg-orange-500 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
                disabled
              >
                <svg
                  className="mr-2 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading…
              </button>
              </div>
          ) :(
             <Slider {...settings}>
            {Rdata.map((item) => (
              <ReviewCard item={item} key={item.id} />
            ))}
          </Slider>
          )}
         
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            className="btn btn-warning "
            onClick={() =>
              document.getElementById("feedback_modal").showModal()
            }
          >
            Add Review +
          </button>
          <Feedback />
        </div>
      </div>
    </>
  );
}

export default Review;
