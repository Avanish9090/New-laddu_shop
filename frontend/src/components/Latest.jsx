import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Card from "./Card";
import Responsive from "../hooks/useResponsiveSlides";

function Latest() {
  const [latest, setlatest] = useState([]);
  const slideResponsive = Responsive();

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
          <Slider {...settings}>
            {latest.map((item) => (
             <Card item={item} key={item.id} />      
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Latest;
