import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function Latest() {
  const [latest, setlatest] = useState([]);

  useEffect(() => {
    const getLatest = async () => {
      try {
        const res = await axios.get("http://localhost:8000/items");
        const data = res.data.items;
        setlatest(data);
      } catch (err) {
        console.log(err);
      }
    };
    getLatest();
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="border border-gray-400 rounded shadow-lg   bg-white my-10 p-2 md:mx-3">
        <h1 className="text-4xl text-center font-black my-3">
          Latest <span className="text-orange-400">Sweets</span> !!
        </h1>
        <div className="my-10">
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
