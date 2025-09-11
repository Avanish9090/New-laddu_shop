import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import Feedback from "./Feedback";
import axios from "axios";

function Review() {
  const [Rdata, setRdata] = useState([]);

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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
