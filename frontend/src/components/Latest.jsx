import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Card from "./Card";
import Responsive from "../hooks/useResponsiveSlides";

function Latest() {
  const [latest, setlatest] = useState([]);
  const slideResponsive = Responsive();
  const [loading , setLoading] = useState(true);

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideResponsive,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  useEffect(() => {
    const getLatest = async () => {
      try {
        const res = await axios.get("https://new-laddu-shop-backend.onrender.com/items");
        const data = res.data.items;
        setlatest(data);
      } catch (err) {
        console.log(err);
      } finally{
        setLoading(false);
      }
    };
    getLatest();
  }, []);

  return (
    <>
      <div className="border border-gray-400 rounded shadow-lg  my-10 p-2 mx-auto">
        <h1 className="text-4xl text-center font-black my-3">
          Latest <span className="text-orange-400">Sweets</span> !!
        </h1>
        <div className="my-10  slider-container">
          {
            loading ? (
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
                Processing…
              </button>
              </div>
            ) : (
               <Slider {...settings}>
            {latest.map((item) => (
             <Card item={item} key={item.id} />      
            ))}
          </Slider>
            )
          }
         
        </div>
      </div>
    </>
  );
}

export default Latest;
