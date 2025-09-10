import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contacts() {
  const [conts, setConts] = useState([]);

  const getAllCdata = async () => {
    const Cdata = await axios.get("https://new-laddu-shop-backend.onrender.com/all-contacts");
    setConts(Cdata.data.allCdata);
  };

  useEffect(() => {
    getAllCdata();
  }, []);

  return (
    <>
      <div>
        <Toaster />
        <AdminHeader />
        <h1 className="text-4xl font-bold text-center mt-8">CONTACTS</h1>
        <div className="flex items-center justify-center border border-gray-400 rounded shadow-lg  bg-white  my-3 p-2 md:mx-3">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>message</th>
                  <th>email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {conts.map((item) => {
                  return (
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-sm opacity-50">
                              {item.number}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.message}</td>
                      <td>{item.email}</td>
                      <th>
                        <button
                          onClick={() => {
                            axios.delete(
                              `https://new-laddu-shop-backend.onrender.com/delete-contacts/${item._id}`
                            );
                            getAllCdata();
                            toast.success("Deleted successfully");
                          }}
                          className="btn btn-ghost btn-xs border-red-400"
                        >
                          delete
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
