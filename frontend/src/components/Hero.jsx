import React from "react";

function Hero() {
  return (
    <>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-3d-indian-sweets-called-laddoo-in-plate-for-diwali-festival-image_16010785.jpg)",
          }}
        >
       
          <div className="hero-content text-neutral-content text-center mt-30">
            <div>
              {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
              <h1 className="md:text-8xl text-6xl font-extrabold">
                Experience the Authentic
                <br />
                <span className="text-orange-600 text-5xl font-extrabold mb-5">
                  Taste of Tradition!!
                </span>
              </h1>
              <p className="text-3xl mt-4">
                (परंपरा के प्रामाणिक स्वाद का अनुभव करें)
              </p>
              <p className="text-3xl mt-5">
                हमारे लड्डू सिर्फ मिठाई नहीं, बल्कि परंपरा का स्वाद हैं। हर एक
                लड्डू घर पर बनाए जाते हैं, शुद्ध घी और उच्च गुणवत्ता वाले
                सामग्री से — जिससे हर बाइट में घर जैसा स्वाद और प्यार महसूस होता
                है।
              </p>
              <h1 className="text-xl text-orange-500 mt-8">For Urgent Need</h1>
              <button
                className="btn bg-orange-500 text-white border-[#4eaa0c]  rounded-2xl mt-2"
                onClick={() =>
                  window.open(
                    `https://wa.me/7379194409?text=${encodeURIComponent(
                      "Hi there! I want to order some sweets"
                    )}`,
                    "_blank"
                  )
                }
              >
                <svg
                  aria-label="WeChat logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <g fill="white">
                    <path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path>
                    <path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125,.447-.052,.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path>
                  </g>
                </svg>
                Order Now on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
