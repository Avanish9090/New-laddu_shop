import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function OrderNow() {
  const Navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // safely get item from state

  const [orderData, setOrderData] = useState({
    name: "",
    quantity: "",
    number: "",
    address: "",
    itemname: "",
  });

  useEffect(() => {
    if (item) {
      setOrderData((prev) => ({
        ...prev,
        itemname: item.title,
      }));
    }
  }, [item]);

  if (!item)
    return (
      <div className="text-4xl text-center ">Please Selcet Your Order!</div>
    );

  const handleChange = (e) => {
    let { name, value } = e.target;

    let oldData = { ...orderData };
    oldData[name] = value;
    setOrderData(oldData);
  };

  const handleSubmit = () => {
    console.log(orderData);
    const allfeild = Object.values(orderData).every(
      (value) => value.trim() !== ""
    );

    if (!allfeild) {
      toast.error("All feilds are required");
      return;
    }

    // console.log(orderData);

    try {
      axios.post("https://new-laddu-shop-backend.onrender.com/order", orderData);
      Swal.fire({
        title: "Thanks for Order 😊! we will contact You",
        icon: "success",
        draggable: true,
      });

      setOrderData({
        name: "",
        quantity: "",
        number: "",
        address: "",
      });
    } catch (err) {
      toast.error("Something Wrong");
      console.log(err);
    }
  };

  return (
    <div className="md:bg-orange-400 ">
      <Toaster />
      <div className=" flex flex-col items-center justify-center border border-gray-100 rounded shadow-lg  bg-white  space-y-4 text-left m-10 py-5">
        <h1 className="text-4xl font-bold text-orange-400  ">
          ! <span className="text-black">Order</span> Now !
        </h1>

        <img className="h-30 w-30 rounded-full" src={item.path} alt="" />
        <p className="text-2xl">
          {" "}
          <span className="font-bold">Item-name:</span> {item.title}
        </p>
        <p className="text-2xl">
          {" "}
          <span className="font-bold">Item-price:</span>Rs.{item.price}
        </p>
        <form action="">
          <h1 className="text-xl my-1 md:w-100">Name:</h1>
          <input
            type="text"
            name="name"
            value={orderData.name}
            onChange={handleChange}
            placeholder="Enter your text"
            className="input input-neutral"
            required
          />

          <h1 className="text-xl my-1">Quantity in Kg:</h1>
          <input
            type="number"
            name="quantity"
            value={orderData.quantity}
            onChange={handleChange}
            className="input validator"
            required
            placeholder="Type a number between 1 to 10"
            min="1"
            max="10"
            title="Must be between be 1 to 10"
          />
          <p className="validator-hint">Must be between be 1 to 10</p>

          <h1 className="text-xl ">Valid Number:</h1>
          <input
            type="number"
            name="number"
            value={orderData.number}
            onChange={handleChange}
            placeholder="+91 2222222222"
            className="input input-neutral"
            required
          />

          <h1 className="text-xl my-1">Address:</h1>
          <textarea
            type="text"
            name="address"
            value={orderData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="input input-neutral h-15"
            required
          />

          <br />
        </form>
        <h1 className="text-xl text-red-500">
          NOTE:You can cancel the order on call when our will team contact with
          you
        </h1>
        <div>
          <button
            onClick={handleSubmit}
            className="btn btn-outline btn-warning mt-3 mr-5 text-black"
          >
            Confirm
          </button>
          <button
            onClick={() => {
              Navigate("/");
            }}
            className="btn btn-outline btn-warning mt-3 text-black "
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
