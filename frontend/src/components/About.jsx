import React from "react";

function About() {
  return (
    <>
      <div className="flex items-center justify-center border border-gray-400 rounded shadow-lg  bg-white  my-3 p-2 md:mx-3">
        <div className="text-center">
          <h1 className="text-2xl text-orange-400 font-bold">
            Why Choose Get Laddu ?
          </h1>
          <div className="items-center justify-center border border-gray-100 rounded shadow-lg m-3 bg-white md:w-250 space-y-4 text-left p-4">
            <p className="text-xl">
              At <span className="text-orange-400">Get Laddu</span>, we don’t
              just make sweets — we create memories.
            </p>
            <p className="text-2xl text-black ">
              🧡 घर का बना, दिल से बना : हर लड्डू हमारी होम किचन में पारंपरिक
              रेसिपी से हाथों से बनाया जाता है — पीढ़ियों से चले आ रहे स्वाद के
              साथ।
              <br />
              (Homemade with Heart: Every laddu is handcrafted in our home
              kitchen using traditional recipes passed down through
              generations.)
            </p>
            <p className="text-2xl text-black ">
              🍬 बिना किसी मिलावट के : ना कोई प्रिज़रवेटिव, ना कोई केमिकल —
              सिर्फ शुद्ध और प्राकृतिक सामग्री।
              <br />( Pure & Natural: 100% natural ingredients — no chemicals,
              no shortcuts.)
            </p>
            <p className="text-2xl text-black ">
              📦 ताजगी की गारंटी : हर दिन ताज़े बैच बनते हैं ताकि हर निवाला आपको
              घर जैसा स्वाद दे। <br />
              (Freshness Guaranteed: We prepare fresh batches daily so that
              every bite tastes just like home.)
            </p>
            <p className="text-2xl text-black ">
              🎁 गिफ्टिंग के लिए परफेक्ट : त्योहारों, खास मौकों या अपने किसी
              प्रिय को स्पेशल महसूस कराने के लिए सुंदर पैकिंग में।
              <br />( Perfect for Gifting: Beautifully packed for festivals,
              celebrations, or just to treat someone special.)
            </p>
            <p className="text-2xl text-black ">
              💛 क्योंकि Laddu Saddu में मिठास के साथ मिलती है वो बात, जो दिल तक
              जाती है। Because when it comes to sweets, nothing beats the real
              taste of tradition — and that’s what Laddu Saddu is all about.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
