import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import Feedback from "./Feedback";
import axios from "axios";
import ResponsiveSlides from "../hooks/useResponsiveSlides";

function Review() {
  const [Rdata, setRdata] = useState([]);
   const responsive = ResponsiveSlides();

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
          <Slider {...settings}>
            {Rdata.map((item) => (
              <ReviewCard item={item} key={item.id} />
            ))}
          </Slider>
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
