import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import AdminHeader from "./AdminHeader";
import Footer from "../components/Footer";

function Orders() {
  const [allOrders, setallOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/orders");
      const data = res.data.AllOrders;
      setallOrders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <div>
        <AdminHeader />
        <h1 className="text-4xl font-bold text-center mt-8">ORDERS</h1>
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
                  <th>Quantity</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allOrders.length >= 1 ? (
                  allOrders.map((item) => {
                    return (
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar"></div>
                            <div>
                              <div className="font-bold">{item.name}</div>
                              <div className="text-sm opacity-50">
                                {item.number}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.address}</td>
                        <th>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  axios.delete(
                                    `http://localhost:8000/order/delete/${item._id}`
                                  );

                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                  });
                                  getAllOrders();
                                }
                              });
                            }}
                            className="btn btn-ghost btn-xs border-red-400"
                          >
                            delete
                          </button>
                        </th>
                      </tr>
                    );
                  })
                ) : (
                  <h1>No Data found</h1>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Orders;
