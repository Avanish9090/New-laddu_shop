import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function AdminHeader() {
  const Navigate = useNavigate();
  return (
    <>
      <div>
        <div className="bg-amber-200 flex items-center justify-between h-25 px-2">
          <Dropdown />
          <h1 className="text-4xl font-bold ml-5">
            Welcome <span className="text-orange-400">Admin !!</span>
          </h1>
          <div className="flex justify-center items-center">
            <button
              className="btn btn-neutral btn-outline md:absolute right-0 mx-3"
              onClick={() => {
                localStorage.removeItem("token");
                Navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
