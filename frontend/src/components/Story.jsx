import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Story() {
  const orderRef = useRef(null);

  const handleScrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.cadburydessertscorner.com/hs-fs/hubfs/dc-website-2022/articles/the-best-besan-ladoo-recipe-for-rakhi-tried-tested-totally-loved/feature-the-best-besan-ladoo-recipe.webp?width=1920&height=464&name=feature-the-best-besan-ladoo-recipe.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-8xl text-orange-500 font-bold">
              OUR STORY
            </h1>
            <button className="btn btn-primary " onClick={handleScrollToOrder}>
              Review Journey
            </button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 pt-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/story-1.jpeg"
            className="max-w-sm rounded-lg shadow-2xl md:h-80 md:w-250"
          />

          <div ref={orderRef}>
            <h1 className="text-3xl font-bold">
              From Kitchen Cravings to a Brand Called Love!
            </h1>
            <p className="py-6 text-xl">
              It all started with a simple craving — a soft, warm, homemade
              laddu that reminded us of childhood. What began as a passion
              project in our home kitchen soon became a journey of sharing love,
              tradition, and sweetness with others.
            </p>
            <p className="text-xl">
              <span className="text-orange-400"> Laddu Saddu</span> was born
              from the belief that good sweets don’t need factories — they just
              need real ingredients, real recipes, and a whole lot of heart.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/story2.jpeg"
            className="max-w-sm rounded-lg shadow-2xl md:h-80 md:w-250"
          />
          <div>
            <h1 className="text-3xl font-bold">
              The Sweet Journey of Laddu Saddu
            </h1>
            <p className="py-6 text-xl">
              It all started with a simple craving — a soft, warm, homemade
              laddu that reminded us of childhood. What began as a passion
              project in our home kitchen soon became a journey of sharing love,
              tradition, and sweetness with others.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 pt-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/story-1.jpeg"
            className="max-w-sm rounded-lg shadow-2xl md:h-80 md:w-250"
          />

          <div>
            <h1 className="text-3xl font-bold">
              From Kitchen Cravings to a Brand Called Love!
            </h1>
            <p className="py-6 text-xl">
              It all started with a simple craving — a soft, warm, homemade
              laddu that reminded us of childhood. What began as a passion
              project in our home kitchen soon became a journey of sharing love,
              tradition, and sweetness with others.
            </p>
            <p className="text-xl">
              <span className="text-orange-400"> Laddu Saddu</span> was born
              from the belief that good sweets don’t need factories — they just
              need real ingredients, real recipes, and a whole lot of heart.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Story;
