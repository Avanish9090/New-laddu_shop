import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const Navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    let oldData = { ...data };
    oldData[name] = value;
    setdata(oldData);
  };

  const handleSubmit = () => {
    if (
      data.name === "Avanish" &&
      data.email === "avanish3434@gmail.com" &&
      data.password === "1234"
    ) {
      localStorage.setItem("token", "dummy-token"); // ✅ save token to enable protected route
      toast.success("Welcome back Admin");
      Navigate("/admin");
    } else {
      toast.error("You are not autherized");
    }
  };

  return (
    <>
      <div>
        <Toaster />
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className=" flex flex-col items-center justify-center border border-gray-100 rounded shadow-lg  bg-white  space-y-4 text-left">
              <h1 className="text-2xl font-bold text-orange-400">
                Admin Login
              </h1>
              <h1 className="text-xl my-1">Username:</h1>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
              />

              <h1 className="text-xl my-1">Email:</h1>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Example@123"
                className="input input-neutral"
              />

              <h1 className="text-xl my-1">Password:</h1>
              <input
                type="text"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
              />

              <br />
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-warning mt-3"
              >
                click
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
