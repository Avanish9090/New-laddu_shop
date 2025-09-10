import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import toast, { Toaster } from "react-hot-toast";
import AdminHeader from "./AdminHeader";
import Footer from "../components/Footer";

function Home() {
  const Navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    title: "",
    about: "",
    price: "",
  });
  const [file, setfile] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload the file");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("title", formdata.title);
    data.append("about", formdata.about);
    data.append("price", formdata.price);

    try {
      axios.post("https://new-laddu-shop-backend.onrender.com/upload", data);
      toast.success("Successfully uploaded!");
    } catch (err) {
      console.log(err);
      toast.error("Upload faild!");
    }

    setFormdata({
      title: "",
      about: "",
      price: "",
    });
    setfile(null);
  };

  return (
    <>
      <div>
        <div>
          <Toaster />
        </div>
        <AdminHeader />
        <Item />

        <h1 className="text-4xl font-bold text-center mt-8">
          UPLOAD NEW ITEMS
        </h1>
        <div className="flex items-center justify-center border border-gray-400 rounded shadow-lg  bg-white  my-3 p-2 md:mx-3">
          <div className=" flex flex-col items-center justify-center border border-gray-100 rounded shadow-lg m-3 bg-white md:w-250 space-y-4 text-left p-4">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <h1 className="text-xl my-1">Title:</h1>
              <input
                type="text"
                name="title"
                value={formdata.title}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
                required
              />

              <h1 className="text-xl my-1">About:</h1>
              <textarea
                type="text"
                name="about"
                value={formdata.about}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
                required
              />

              <h1 className="text-xl my-1">Price:</h1>
              <input
                type="number"
                name="price"
                value={formdata.price}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
                required
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="file-input file-input-neutral my-2"
              />
              <br />
              <button
                type="submit"
                className="btn btn-outline btn-warning mt-3"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
